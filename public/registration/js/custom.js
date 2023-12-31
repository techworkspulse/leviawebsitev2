
$(document).ready(function() {
    AOS.init();

    const viewMoreButton = document.getElementById('view-more-button');
    const hiddenBoxes = document.querySelectorAll('.hidden-box');

    function showMoreBoxes() {
    for (const box of hiddenBoxes) {
        box.style.display = 'flex';
    }
    viewMoreButton.style.display = 'none';
    }

    viewMoreButton.addEventListener('click', showMoreBoxes);

    $('.gallery-slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    // registration_Form
    var url_string = window.location.href;
    var url = new URL(url_string);
    var sourceType = url.searchParams.get("s");
    $('#source_param').attr('value',sourceType)
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    const filtered = Object.keys(params)
            .filter(key => key.startsWith("utm_"))
            .reduce((obj, key) => {
                obj[key] = params[key];
                return obj;
            }, {});

    $('#registration-form').submit(function (event){
      if ($("#registration-form")[0].checkValidity() === false) {
        event.stopPropagation();
      } else {
        $('.progress-bar').fadeIn('slow');
        $('#register_btn').attr('disabled', true);
      }
    });

    $('#registration-form').submit(function(event){
        event.preventDefault();

        if ($('#registration-form')[0].checkValidity() === false) {
            event.stopPropagation();
        } else {  
            var nexcrmlog;
            var dblog;
            var func = $('#function').val(); 
            var source_param = $('#source_param').val(); 
            var name = $('#name').val();
            var email = $('#email').val();
            var phone = $('#phone').val(); 
            var city = $('#city').val(); 

            let payload = {
                "name" : name,
                "email" : email,
                "phone" : phone, 
                "city" : city,
                "source" : sourceType,
                "utm_sources" : Object.keys(filtered).length ? JSON.stringify(filtered) : null,
            };

            $.ajax({
                type: "POST",
                // url: "https://p6mwft7nz1.execute-api.ap-southeast-1.amazonaws.com/dev/levia-lead-gen/contacts", //staging API
                url: "https://xog73sh1b2.execute-api.ap-southeast-1.amazonaws.com/prod/levia-lead-gen/contacts",
                contentType: 'application/json',
                data: JSON.stringify(payload),
                success: function(res){
                    window.location.href = 'thankyou';
                },
                error: function(jq, text, error){
                console.log(error);
                }
            });
        }
    });
});