import React, { Component } from "react";
import Slider from "react-slick";
import Image from 'next/image';
import { useScroll, useTransform, useAnimation, motion, Variants } from "framer-motion";

export default class HeroSlider extends Component {

  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay:false,
      accessibility: true,
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

    const variants = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.3,
          },
        },
    };

    const paragraf = {
        hidden: {
            opacity: 0,
            y: 40,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
            duration: 1
            },
        },
    };
    return (
      <div>
        <Slider {...settings} className="heroslider">
              <motion.div 
                className="relative"
                variants={variants}
                initial="hidden"
                whileInView="show"
              >
                <Image src="/img/features/banner1.png" className="w-full h-[500px] lg:h-[700px] object-cover" alt="Facebook" width="1920" height="1000"/>
                <Image src="/img/star-line-full.svg" className="hidden lg:block w-[30%] 2xl:w-[40%] absolute left-0 right-0 mx-auto bottom-[25.5%] 3xl:bottom-[26.5%]" alt="Facebook" width="1920" height="1000"/>
                <motion.div 
                  className="text-center py-8 w-[85%] lg:w-[70%] xl:w-[60%] mx-auto"
                  variants={variants}
                  initial="hidden"
                  whileInView="show"
                >
                  <motion.h3 
                    variants={paragraf}
                    className="font-GothamBook uppercase tracking-[3px] sm:tracking-[5px] text-white text-[25px] sm:text-[30px] xl:text[35px] 2xl:text-[35px] 3xl:text-[50px] mb-5"
                  >
                      Brilliant <span className="font-ButlerBold text-[#7ea5a2] text-[27px] sm:text-[32px] 2xl:text-[37px] 3xl:text-[52px]">Leisure</span><br></br> <span className="font-ButlerBold text-[#bda37f] text-[27px] sm:text-[32px] md:text-[37px] 3xl:text-[52px]">Via</span> Opportunities
                  </motion.h3>
                  <motion.p 
                    variants={paragraf}
                    className="font-GothamBook text-white leading-normal lg:leading-loose text-[15px] sm:text-[17px] md:text-[18px] lg:text-[17px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[20px]"
                  >
                      Celebrate dynamic excellence in life within the dazzling towers of LEVIA, a new vertical residence that integrates creative architecture and lush greenery across 4.7 acres of open space to offer both comfort and beauty.
                  </motion.p>
                </motion.div>
              </motion.div>
              <div className="relative">
                <Image src="/img/features/banner2.png" className="w-full h-[500px] lg:h-[700px] object-cover" alt="Facebook" width="1920" height="1000"/>
                <Image src="/img/star-line-full.svg" className="hidden lg:block w-[30%] 2xl:w-[40%] absolute left-0 right-0 mx-auto bottom-[20%] 3xl:bottom-[26.5%]" alt="Facebook" width="1920" height="1000"/>
                <motion.div 
                  className="text-center py-8 w-[85%] lg:w-[70%] xl:w-[60%] mx-auto"
                  variants={variants}
                  initial="hidden"
                  whileInView="show"
                >
                  <motion.h3 
                    variants={paragraf}
                    className="font-GothamBook uppercase tracking-[3px] sm:tracking-[5px] text-white text-[25px] sm:text-[30px] xl:text[30px] 2xl:text-[35px] 3xl:text-[50px] mb-5"
                  >
                      Stylish <span className="font-ButlerBold text-[#7ea5a2] text-[27px] sm:text-[32px] 2xl:text-[37px] 3xl:text-[52px]">Leisure</span><br></br> <span className="font-ButlerBold text-[#bda37f] text-[27px] sm:text-[32px] md:text-[37px] 3xl:text-[52px]">Via</span> Sophistication</motion.h3>
                  <motion.p 
                    variants={paragraf}
                    className="font-GothamBook text-white leading-normal lg:leading-loose text-[15px] sm:text-[17px] md:text-[18px] lg:text-[17px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[20px]"
                  >
                    Enjoy an exclusive, elegant five-star reception in a lobby designed with refined décor and furnishing with accessible, cosy layouts for life, work and play.
                  </motion.p>
                </motion.div>
              </div>
        </Slider>
      </div>
    );
  }
}