
$(document).ready(function() {
    new WOW().init();
    AOS.init();

    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });

    function raf(time){
        lenis.raf(time);
        ScrollTrigger.update();
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf);

});
