import React from "react";
import Slider from "react-slick";
import Image from 'next/image';
const GallerySlider = () => {
    const galleryData = {
        "data": [
            {
                "id":1,
                "imagesrc": "/img/gallery/gallery1.png",
                "caption": "Entrance Statement"
            },
            {
                "id":2,
                "imagesrc": "/img/gallery/gallery2.png",
                "caption": "Lobby Launge"
            },
        ]
    };
    const settings = {
        arrows:true,
        dots: false,
        infinite: true,
        autoplay:true,
        speed: 500,
        margin:30,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return(
        <div className="w-[85%] mx-auto mt-14">
            <Slider {...settings}>
                {galleryData.data.map((img, id) => (
                    <div key={id}>
                    <Image src={img.imagesrc} className="w-full max-h-[800px] object-contain" alt={img.caption} width={1920} height={1000} />
                    <p className="font-GothamBook text-white text-center uppercase leading-loose text-[17px] md:text-[18px] lg:text-[18px] 2xl:text-[18px] 3xl:text-[20px] mt-10">{img.caption}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
export default GallerySlider;