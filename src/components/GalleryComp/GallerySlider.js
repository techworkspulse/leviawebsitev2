import React from "react";
import Slider from "react-slick";
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Image from 'next/image';
import styles from 'styles/customStyles.module.css';

const GallerySlider = () => {
    return(
        <div className="w-[85%] mx-auto mt-8 sm:mt-14 gallery-slider">
            <swiper-container slides-per-view="1" speed="500" spaceBetween="30" loop="true" css-mode="true" keyboard="true" navigation="true" >
                <swiper-slide>
                    <div className="p-1">
                        <Image src="/img/gallery/gallery1.png" className="w-full max-h-[800px] object-contain" alt="Entrance Statement" width={1920} height={1000} />
                        <p className="font-GothamBook text-white text-center uppercase leading-normal mt-10 lg:leading-loose text-[15px] sm:text-[17px] md:text-[18px] lg:text-[17px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[20px]">Entrance Statement</p>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className="p-1">
                        <Image src="/img/gallery/gallery2.png" className="w-full max-h-[800px] object-contain" alt="Lobby Lounge" width={1920} height={1000} />
                        <p className="font-GothamBook text-white text-center uppercase leading-normal mt-10 lg:leading-loose text-[15px] sm:text-[17px] md:text-[18px] lg:text-[17px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[20px]">Lobby Lounge</p>
                    </div>
                </swiper-slide>
            </swiper-container>
        </div>
    );
}
export default GallerySlider;
