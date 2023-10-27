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
      <div>
        <Slider {...settings} className="h-[80vh] overflow-y-hidden">
              <div>
                <Image src={`${img1}`} className="w-full h-full object-cover" alt="Facebook" width="1920" height="1000"/>
              </div>
              {img2 && (
                <div>
                    <Image src={`${img2}`} className="w-full h-full object-cover" alt="Facebook" width="1920" height="1000"/>
                </div>
              )}
              {img3 && (
                <div>
                    <Image src={`${img3}`} className="w-full h-full object-cover" alt="Facebook" width="1920" height="1000"/>
                </div>
              )}
        </Slider>
      </div>
    );
}
export default HeroImageSlider;