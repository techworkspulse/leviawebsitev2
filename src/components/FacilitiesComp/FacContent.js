import React, { Component } from "react";
import Image from 'next/image';
import { useState, useRef } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroImageSlider from "../HeroImageSlider";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useScroll, useTransform, useAnimation, motion, Variants } from "framer-motion";

const FacContent = () => {
    const swiperRef = useRef(null)
    const [open, setOpen] = useState(false);

    const handleSlideChange = (slideIndex) => {
      const targetSection = document.getElementById(`facilitiesSlider`);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    
      // After a short delay, trigger the smooth scroll
      setTimeout(() => {
        swiperRef.current.swiper.slideTo(slideIndex);
      }, 500); // Adjust the delay as needed
    };

    const [openModal, setOpenModal] = useState();
    const props = { openModal, setOpenModal };

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
        <>
          <section id="facilities" className="relative py-0">
            <Image src="/img/big-star.svg" className="w-[20%] absolute right-[-12%] mx-auto lg:bottom-[-15.5%] xl:bottom-[-19.7%] cxl:bottom-[-21.7%] 3xl:bottom-[-28.9%] z-[2]" alt="Big star left" width="500" height="500"/>
            <Image src="/img/big-star.svg" className="w-[20%] absolute left-[-12%] mx-auto lg:bottom-[-15.5%] xl:bottom-[-19.7%] cxl:bottom-[-21.7%] 3xl:bottom-[-28.9%] z-[2]" alt="Big star right" width="500" height="500"/>
            <HeroImageSlider
                img1={"/img/facilities/hero1.png"}
                img2={"/img/facilities/hero2.png"}
            />
          </section>

          <section className="relative bg-[url('/img/white-bg.png')] bg-cover bg-no-repeat">
            <div className="container w-[90%] sm:w-[85%] mx-auto">
                <motion.div 
                  className="w-full lg:w-[40%] text-center lg:text-left"
                  variants={variants}
                  initial="hidden"
                  whileInView="show"
                >
                    <motion.h3 
                      className="font-GothamBook uppercase text-[#858b8c] tracking-[3px] sm:tracking-[5px] text-[25px] sm:text-[30px] xl:text[30px] 2xl:text-[35px] 3xl:text-[50px]"
                      variants={paragraf}
                    >
                      Everyday Rejuvenating <span className="font-ButlerBold text-[#7ea5a2] text-[27px] sm:text-[32px] 2xl:text-[37px] 3xl:text-[52px]">Leisure</span><br></br> <span className="font-ButlerBold text-[#bda37f] text-[27px] sm:text-[32px] 2xl:text-[37px] 3xl:text-[52px]">Via</span> Evergreen Opportunities
                    </motion.h3>
                    <motion.p 
                      className="font-GothamBook text-[#858b8c] my-10 leading-normal lg:leading-loose text-[15px] sm:text-[17px] md:text-[18px] lg:text-[17px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[20px]"
                      variants={paragraf}
                    > LEVIA’s facilities are divided across three zones with distinctive environments that allow one to fully enjoy their lavish offerings.
                    </motion.p>
                    <motion.a 
                      onClick={() => setOpen(true)} 
                      className="border-solid border-2 border-[#bda37f] flex justify-center mx-auto lg:mx-0 w-fit py-2 px-7 text-[#bda37f] hover:bg-[#bda37f] hover:text-white mb-3 cursor-pointer"
                      variants={paragraf}
                    >
                        <div className="font-GothamMedium uppercase tracking-[3px] text-[17px] md:text-[18px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[23px]">
                            Facilities Plan
                        </div>
                    </motion.a>
                    <motion.a 
                      onClick={() => setOpen(true)} 
                      className="border-solid border-2 border-[#bda37f] flex justify-center mx-auto lg:mx-0 w-fit py-2 px-7 text-[#bda37f] hover:bg-[#bda37f] hover:text-white cursor-pointer"
                      variants={paragraf}
                    >
                        <div className="font-GothamMedium uppercase tracking-[3px] text-[17px] md:text-[18px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[23px]">
                            VR 360&#176;
                        </div>
                    </motion.a>
                    <Lightbox
                      open={open}
                      close={() => setOpen(false)}
                      slides={[
                        { src: "/img/facilities/fac-plan-zoom-levia-clean.png" },
                      ]}
                    />
                </motion.div>
            </div>
          </section>

          <section className="py-0 relative bg-[url('/img/white-bg.png')] bg-cover bg-no-repeat">
            <Image src="/img/big-star.svg" className="w-[20%] absolute right-[-12%] mx-auto bottom-[-0%] lg:bottom-[-34%] z-[2]" alt="Facebook" width="500" height="500"/>
            <Image src="/img/big-star.svg" className="w-[20%] absolute left-[-12%] mx-auto bottom-[-0%] lg:bottom-[-34%] z-[2]" alt="Facebook" width="500" height="500"/>
            <div className="w-full md:gap-0 flex flex-wrap justify-between items-center">
                <div className="hidden lg:block relative w-full md:w-[60%] xl:w-[60%] fac-image">
                  <Image src="/img/facilities/facilities-img.png" className="w-full rounded-tr-[58px]" alt="Facility" width={1000} height={1000}/>
                </div>
                <div className="hidden lg:block relative w-full md:w-[40%] xl:w-[40%]">
                    <div className="text-center">
                      
                        <div className="relative pb-5 w-full xl:w-[80%] mx-auto">
                          <Image src="/img/line-long-right.svg" className="rotate-180 w-[30%] sm:w-[40%] left-[-6%] absolute top-[0%]" alt="Facebook" width="500" height="300"/>
                          <Image src="/img/line-long-right.svg" className="w-[30%] sm:w-[40%] right-[-6%] absolute top-[0%]" alt="Facebook" width="500" height="300"/>
                          <h5 className="font-GothamBook uppercase tracking-[3px] text-[#bda37f] w-fit mx-auto text-[19px] md:text-[20px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[25px]">Facilities</h5>
                        </div>

                        <a onClick={() => handleSlideChange(0)} className="relative text-[#858b8c] block py-5 leading-none hover:text-[#7ea5a2] hover:cursor-pointer">
                          <Image src="/img/line.svg" className="w-[30%] left-0 right-0 mx-auto absolute bottom-0" alt="Facebook" width="300" height="300"/>
                          <div className="font-Avgard capitalize tracking-[2px] w-fit mx-auto text-[19px] md:text-[20px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[25px]">
                              The Aqua Zone
                          </div>
                        </a>

                        <a onClick={() => handleSlideChange(1)} className="relative text-[#858b8c] block py-5 leading-none hover:text-[#7ea5a2] hover:cursor-pointer">
                          <Image src="/img/line.svg" className="w-[30%] left-0 right-0 mx-auto absolute bottom-0" alt="Facebook" width="300" height="300"/>
                          <div className="font-Avgard capitalize tracking-[2px] w-fit mx-auto text-[19px] md:text-[20px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[25px]">
                              The Eco Zone
                          </div>
                        </a>

                        <a onClick={() => handleSlideChange(2)} className="relative text-[#858b8c] block py-5 leading-none hover:text-[#7ea5a2] hover:cursor-pointer">
                          <Image src="/img/line.svg" className="w-[30%] left-0 right-0 mx-auto absolute bottom-0" alt="Facebook" width="300" height="300"/>
                          <div className="font-Avgard capitalize tracking-[2px] w-fit mx-auto text-[19px] md:text-[20px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[25px]">
                              The Leisure Zone
                          </div>
                        </a>
                    </div>
                </div>
            </div>
          </section>

          <section id="facilitiesSlider" className="relative py-0 fac-slider">
              <swiper-container 
                ref={swiperRef} 
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                slides-per-view="1" 
                speed="500" 
                spaceBetween="0" 
                loop="false" 
                css-mode="true" 
                keyboard="true" 
                navigation="true"
              >
                  <swiper-slide id="slide-1">
                    <div className="flex flex-col items-center justify-center">
                      <Image src="/img/facilities/fac1.png" width="1920" height="700" className="w-full h-[500px] lg:h-[700px]  object-cover" alt="Image 1" />
                      <div className="text-center pt-[30px] sm:py-[100px] w-[85%] xl:w-[60%] mx-auto">
                        <div className="relative w-full lg:w-[60%] mx-auto">
                            <Image src="/img/line-long-right.svg" className="rotate-180 w-[30%] sm:w-[40%] left-[-6%] absolute top-[30%] sm:top-[0%]" alt="Facebook" width="500" height="300"/>
                            <Image src="/img/line-long-right.svg" className="w-[30%] sm:w-[40%] right-[-6%] absolute top-[30%] sm:top-[0%]" alt="Facebook" width="500" height="300"/>
                            <h3 className="font-Avgard capitalize tracking-[2px] w-fit mx-auto text-white mb-5 text-[19px] md:text-[20px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[25px]">The Aqua Zone</h3>
                        </div>
                        <p className="font-GothamBook text-white leading-loose text-[15px] sm:text-[17px] md:text-[18px] lg:text-[17px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[20px]">Dip your toes on a sunny day or submerge yourself in the jacuzzi as your stress floats away with the bubbling waters.</p>
                      </div>
                    </div>
                  </swiper-slide>
                  <swiper-slide id="slide-2">
                    <div className="flex flex-col items-center justify-center">
                      <Image src="/img/facilities/fac2.png" width="1920" height="700" className="w-full h-[500px] lg:h-[700px]  object-cover" alt="Image 1" />
                      <div className="text-center pt-[30px] sm:py-[100px] w-[85%] xl:w-[60%] mx-auto">
                        <div className="relative w-full lg:w-[60%] mx-auto">
                            <Image src="/img/line-long-right.svg" className="rotate-180 w-[30%] sm:w-[40%] left-[-6%] absolute top-[30%] sm:top-[0%]" alt="Facebook" width="500" height="300"/>
                            <Image src="/img/line-long-right.svg" className="w-[30%] sm:w-[40%] right-[-6%] absolute top-[30%] sm:top-[0%]" alt="Facebook" width="500" height="300"/>
                            <h3 className="font-Avgard capitalize tracking-[2px] w-fit mx-auto text-white mb-5 text-[19px] md:text-[20px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[25px]">The Eco Zone</h3>
                        </div>
                        <p className="font-GothamBook text-white leading-loose text-[15px] sm:text-[17px] md:text-[18px] lg:text-[17px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[20px]">Cook up some burgers and steaks at the Grill Deck or make your way to the Open Green Lawn to bond with your loved ones as you savor warm meals and splendid views.</p>
                      </div>
                    </div>
                  </swiper-slide>
                  <swiper-slide id="slide-3">
                    <div className="flex flex-col items-center justify-center">
                      <Image src="/img/facilities/fac3.png" width="1920" height="700" className="w-full h-[500px] lg:h-[700px]  object-cover" alt="Image 1" />
                      <div className="text-center pt-[30px] sm:py-[100px] w-[85%] xl:w-[60%] mx-auto">
                        <div className="relative w-full lg:w-[60%] mx-auto">
                            <Image src="/img/line-long-right.svg" className="rotate-180 w-[30%] sm:w-[40%] left-[-6%] absolute top-[30%] sm:top-[0%]" alt="Facebook" width="500" height="300"/>
                            <Image src="/img/line-long-right.svg" className="w-[30%] sm:w-[40%] right-[-6%] absolute top-[30%] sm:top-[0%]" alt="Facebook" width="500" height="300"/>
                            <h3 className="font-Avgard capitalize tracking-[2px] w-fit mx-auto text-white mb-5 text-[19px] md:text-[20px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[25px]">The Leisure Zone</h3>
                        </div>
                        <p className="font-GothamBook text-white leading-loose text-[15px] sm:text-[17px] md:text-[18px] lg:text-[17px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[20px]">Explore nature in the Forest Garden with garden swings and hammocks that envelop you in delight for a peaceful and tranquil everyday experience.</p>
                      </div>
                    </div>
                  </swiper-slide>
              </swiper-container>
          </section>
        </>
    );
}
export default FacContent;