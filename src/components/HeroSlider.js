import React, { Component } from "react";
import Slider from "react-slick";
import Image from 'next/image';

export default class HeroSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
              <div>
                <Image src="/img/features/banner1.png" className="w-full" alt="Facebook" width="1920" height="1000"/>
              </div>
              <div>
                <Image src="/img/features/banner2.png" className="w-full" alt="Facebook" width="1920" height="1000"/>
              </div>
        </Slider>
      </div>
    );
  }
}