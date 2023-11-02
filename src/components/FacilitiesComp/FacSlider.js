import React, { Component } from "react";
import { useEffect } from "react";
import Slider from "react-slick";
import Image from 'next/image';

const FacSlider = ({ activeSlide, onSlideChange, img1, img2, img3, title1, title2, title3, subtitle1, subtitle2, subtitle3}) => {
    const settings = {
      dots: false,
      infinite: true,
      autoplay:false,
      speed: 500,
      margin: 0,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 500,
          settings: {
            adaptiveHeight:true,
          }
        },
      ],
      initialSlide: activeSlide,
      afterChange: (currentSlide) => {
        onSlideChange(currentSlide);
      },
    };
    return (
        <Slider {...settings} className="">
            <div className="flex items-center justify-center">
                <img src={`${img1}`} className="w-full h-[500px] lg:h-[700px]  object-cover" alt="Image 1" />
                <div className="text-center py-8 w-[85%] xl:w-[60%] mx-auto">
                  <div className="relative w-full lg:w-[60%] mx-auto">
                      <Image src="/img/line-long-right.svg" className="rotate-180 w-[40%] left-[-6%] absolute top-[0%]" alt="Facebook" width="500" height="300"/>
                      <Image src="/img/line-long-right.svg" className="w-[40%] right-[-6%] absolute top-[0%]" alt="Facebook" width="500" height="300"/>
                      <h3 className="font-Avgard capitalize tracking-[2px] w-fit mx-auto text-white mb-5 text-[19px] md:text-[20px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[25px]">{title1}</h3>
                  </div>
                  <p className="font-GothamBook text-white leading-loose text-[15px] sm:text-[17px] md:text-[18px] lg:text-[17px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[20px]">{subtitle1}</p>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <img src={`${img2}`} className="w-full h-[500px] lg:h-[700px]  object-cover" alt="Image 2" />
                <div className="text-center py-8 w-[85%] xl:w-[60%] mx-auto">
                  <div className="relative w-full lg:w-[60%] mx-auto">
                      <Image src="/img/line-long-right.svg" className="hidden rotate-180 w-[40%] left-[-6%] absolute top-[0%]" alt="Facebook" width="500" height="300"/>
                      <Image src="/img/line-long-right.svg" className="hidden w-[40%] right-[-6%] absolute top-[0%]" alt="Facebook" width="500" height="300"/>
                      <h3 className="font-Avgard capitalize tracking-[2px] w-fit mx-auto text-white mb-5 text-[17px] md:text-[18px] lg:text-[20px] 2xl:text-[20px] 3xl:text-[25px]">{title2}</h3>
                  </div>
                  <p className="font-GothamBook text-white leading-loose text-[15px] sm:text-[17px] md:text-[18px] lg:text-[17px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[20px]">{subtitle2}</p>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <img src={`${img3}`} className="w-full h-[500px] lg:h-[700px]  object-cover" alt="Image 3" />
                <div className="text-center py-8 w-[85%] xl:w-[60%] mx-auto">
                  <div className="relative w-full lg:w-[60%] mx-auto">
                      <Image src="/img/line-long-right.svg" className="hidden rotate-180 w-[40%] left-[-6%] absolute top-[0%]" alt="Facebook" width="500" height="300"/>
                      <Image src="/img/line-long-right.svg" className="hidden w-[40%] right-[-6%] absolute top-[0%]" alt="Facebook" width="500" height="300"/>
                      <h3 className="font-Avgard capitalize tracking-[2px] w-fit mx-auto text-white mb-5 text-[17px] md:text-[18px] lg:text-[20px] 2xl:text-[20px] 3xl:text-[25px]">{title3}</h3>
                  </div>
                  <p className="font-GothamBook text-white leading-loose text-[15px] sm:text-[17px] md:text-[18px] lg:text-[17px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[20px]">{subtitle3}</p>
                </div>
            </div>
        </Slider>
    );
}
export default FacSlider;