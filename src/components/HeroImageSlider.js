import React, { Component } from "react";
import Slider from "react-slick";
import Image from 'next/image';

const HeroImageSlider = ({img1, img2, img3}) => {
    const settings = {
      arrows:false,
      dots: false,
      infinite: true,
      autoplay:true,
      speed: 500,
      margin:0,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
            <div className="relative">
              <Image src={`${img1}`} className="w-full h-[500px] lg:h-[700px] object-cover" alt="Facebook" width="1920" height="1000"/>
            </div>
            {img2 && (
              <div className="relative">
                  <Image src={`${img2}`} className="w-full h-[500px] lg:h-[700px] object-cover" alt="Facebook" width="1920" height="1000"/>
              </div>
            )}
            {img3 && (
              <div className="relative">
                  <Image src={`${img3}`} className="w-full h-[500px] lg:h-[700px] object-cover" alt="Facebook" width="1920" height="1000"/>
              </div>
            )}
      </Slider>
    );
}
export default HeroImageSlider;