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
                        <Image src="/img/gallery/gallery1.png" className="w-full max-h-[800px] object-contain" alt="Entrance" width={1920} height={1000} />
                        <p className="font-GothamBook text-white text-center uppercase leading-normal mt-10 lg:leading-loose text-[15px] sm:text-[17px] md:text-[18px] lg:text-[17px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[20px]">Entrance Statement</p>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className="p-1">
                        <Image src="/img/gallery/gallery2.png" className="w-full max-h-[800px] object-contain" alt="Drop Off Lobby" width={1920} height={1000} />
                        <p className="font-GothamBook text-white text-center uppercase leading-normal mt-10 lg:leading-loose text-[15px] sm:text-[17px] md:text-[18px] lg:text-[17px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[20px]">Lobby Lounge</p>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className="p-1">
                        <Image src="/img/gallery/rsz_drop_off_copy_low_res.jpg" className="w-full max-h-[800px] object-contain" alt="Drop Off Lobby" width={1920} height={1000} />
                        <p className="font-GothamBook text-white text-center uppercase leading-normal mt-10 lg:leading-loose text-[15px] sm:text-[17px] md:text-[18px] lg:text-[17px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[20px]">Drop Off Lobby</p>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className="p-1">
                        <Image src="/img/gallery/rsz_forest_garden_copy_low_res_1.jpg" className="w-full max-h-[800px] object-contain" alt="Forest Garden" width={1920} height={1000} />
                        <p className="font-GothamBook text-white text-center uppercase leading-normal mt-10 lg:leading-loose text-[15px] sm:text-[17px] md:text-[18px] lg:text-[17px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[20px]">Forest Garden</p>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className="p-1">
                        <Image src="/img/gallery/rsz_gym_copy_low_res.jpg" className="w-full max-h-[800px] object-contain" alt="Gym" width={1920} height={1000} />
                        <p className="font-GothamBook text-white text-center uppercase leading-normal mt-10 lg:leading-loose text-[15px] sm:text-[17px] md:text-[18px] lg:text-[17px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[20px]">Gym</p>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className="p-1">
                        <Image src="/img/gallery/rsz_pool_copy_low_res_3.jpg" className="w-full max-h-[800px] object-contain" alt="Pool" width={1920} height={1000} />
                        <p className="font-GothamBook text-white text-center uppercase leading-normal mt-10 lg:leading-loose text-[15px] sm:text-[17px] md:text-[18px] lg:text-[17px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[20px]">Pool</p>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className="p-1">
                        <Image src="/img/gallery/Sky-Lounge_copy-low-res.jpg" className="w-full max-h-[800px] object-contain" alt="Sky Lounge" width={1920} height={1000} />
                        <p className="font-GothamBook text-white text-center uppercase leading-normal mt-10 lg:leading-loose text-[15px] sm:text-[17px] md:text-[18px] lg:text-[17px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[20px]">Sky Lounge</p>
                    </div>
                </swiper-slide>
            </swiper-container>
        </div>
    );
}
export default GallerySlider;
