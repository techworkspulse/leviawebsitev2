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
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
              <div className="relative">
                <Image src="/img/features/banner1.png" className="w-full h-[700px] object-cover" alt="Facebook" width="1920" height="1000"/>
                <Image src="/img/star-line-full.svg" className="w-[40%] absolute left-0 right-0 mx-auto bottom-[26.5%]" alt="Facebook" width="1920" height="1000"/>
                <div className="text-center py-8 xl:w-[60%] mx-auto">
                  <h3 className="font-GothamBook uppercase tracking-[5px] text-white text-[30px] md:text-[40px] 3xl:text-[50px] mb-5">Brilliant <span className="font-ButlerBold text-[#7ea5a2] text-[32px] md:text-[42px] 3xl:text-[52px]">Leisure</span><br></br> <span className="font-ButlerBold text-[#bda37f] text-[32px] md:text-[42px] 3xl:text-[52px]">Via</span> Opportunities</h3>
                  <p className="font-GothamBook text-white leading-loose text-[17px] md:text-[18px] lg:text-[18px] 2xl:text-[18px] 3xl:text-[20px]">Celebrate dynamic excellence in life within the dazzling towers of LEVIA, a new vertical residence that integrates
                  creative architecture and lush greenery across 5.2 acres of open space to offer both comfort and beauty.</p>
                </div>
              </div>
              <div className="relative">
                <Image src="/img/features/banner2.png" className="w-full h-[700px] object-cover" alt="Facebook" width="1920" height="1000"/>
                <Image src="/img/star-line-full.svg" className="w-[40%] absolute left-0 right-0 mx-auto bottom-[26.5%]" alt="Facebook" width="1920" height="1000"/>
                <div className="text-center py-8 xl:w-[60%] mx-auto">
                  <h3 className="font-GothamBook uppercase tracking-[5px] text-white text-[30px] md:text-[40px] 3xl:text-[50px] mb-5">Stylish <span className="font-ButlerBold text-[#7ea5a2] text-[32px] md:text-[42px] 3xl:text-[52px]">Leisure</span><br></br> <span className="font-ButlerBold text-[#bda37f] text-[32px] md:text-[42px] 3xl:text-[52px]">Via</span> Sophistication</h3>
                  <p className="font-GothamBook tex-white leading-loose text-[17px] md:text-[18px] lg:text-[18px] 2xl:text-[18px] 3xl:text-[20px]">Enjoy an exclusive, elegant five-star reception in a lobby designed with refined décor and furnishing with accessible, cosy layouts for life, work and play.</p>
                </div>
              </div>
        </Slider>
      </div>
    );
  }
}