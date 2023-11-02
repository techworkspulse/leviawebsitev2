import React, { Component } from "react";
import Slider from "react-slick";
import Image from 'next/image';

export default class HeroSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay:true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight:false,
      responsive: [
        {
          breakpoint: 500,
          settings: {
            adaptiveHeight:true,
          }
        },
      ]
    };
    return (
      <div>
        <Slider {...settings}>
              <div className="relative">
                <Image src="/img/features/banner1.png" className="w-full h-[500px] lg:h-[700px] object-cover" alt="Facebook" width="1920" height="1000"/>
                <Image src="/img/star-line-full.svg" className="hidden lg:block w-[30%] 2xl:w-[40%] absolute left-0 right-0 mx-auto bottom-[25.5%] 3xl:bottom-[26.5%]" alt="Facebook" width="1920" height="1000"/>
                <div className="text-center py-8 w-[85%] lg:w-[70%] xl:w-[60%] mx-auto">
                  <h3 className="font-GothamBook uppercase tracking-[3px] sm:tracking-[5px] text-white text-[25px] sm:text-[30px] xl:text[35px] 2xl:text-[35px] 3xl:text-[50px] mb-5">Brilliant <span className="font-ButlerBold text-[#7ea5a2] text-[27px] sm:text-[32px] 2xl:text-[37px] 3xl:text-[52px]">Leisure</span><br></br> <span className="font-ButlerBold text-[#bda37f] text-[27px] sm:text-[32px] md:text-[37px] 3xl:text-[52px]">Via</span> Opportunities</h3>
                  <p className="font-GothamBook text-white leading-normal lg:leading-loose text-[15px] sm:text-[17px] md:text-[18px] lg:text-[17px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[20px]">Celebrate dynamic excellence in life within the dazzling towers of LEVIA, a new vertical residence that integrates
                  creative architecture and lush greenery across 5.2 acres of open space to offer both comfort and beauty.</p>
                </div>
              </div>
              <div className="relative">
                <Image src="/img/features/banner2.png" className="w-full h-[500px] lg:h-[700px] object-cover" alt="Facebook" width="1920" height="1000"/>
                <Image src="/img/star-line-full.svg" className="hidden lg:block w-[30%] 2xl:w-[40%] absolute left-0 right-0 mx-auto bottom-[20%] 3xl:bottom-[26.5%]" alt="Facebook" width="1920" height="1000"/>
                <div className="text-center py-8 w-[85%] lg:w-[70%] xl:w-[60%] mx-auto">
                  <h3 className="font-GothamBook uppercase tracking-[3px] sm:tracking-[5px] text-white text-[25px] sm:text-[30px] xl:text[30px] 2xl:text-[35px] 3xl:text-[50px] mb-5">Stylish <span className="font-ButlerBold text-[#7ea5a2] text-[27px] sm:text-[32px] 2xl:text-[37px] 3xl:text-[52px]">Leisure</span><br></br> <span className="font-ButlerBold text-[#bda37f] text-[27px] sm:text-[32px] md:text-[37px] 3xl:text-[52px]">Via</span> Sophistication</h3>
                  <p className="font-GothamBook tex-white leading-normal lg:leading-loose text-[15px] sm:text-[17px] md:text-[18px] lg:text-[17px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[20px]">Enjoy an exclusive, elegant five-star reception in a lobby designed with refined décor and furnishing with accessible, cosy layouts for life, work and play.</p>
                </div>
              </div>
        </Slider>
      </div>
    );
  }
}