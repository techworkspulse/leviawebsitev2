import { Dropdown } from "flowbite-react"
import { useState } from "react";
import Image from "next/image";
import GallerySlider from "./GallerySlider";

const GalleryTab = () => {
    const [openDevTab, setOpenDevTab] = useState(1);
    return(
        <>
            <div className="hidden lg:flex w-full mx-auto justify-center items-center">
                <a 
                onClick={() => setOpenDevTab(2)} 
                className={`${openDevTab === 2 ? "font-ButlerBold text-[#bda37f] tracking-[3px] uppercase leading-none sm:tracking-[5px]  text-[25px] sm:text-[30px] xl:text[35px] 2xl:text-[35px] 3xl:text-[50px]" : "tracking-[3px] text-[17px] md:text-[18px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[23px] text-white"} cursor-pointer uppercase leading-none`}>
                    Virtual Tour
                </a>
                <div className="relative text-center w-[50%] xl:w-[40%] mx-auto">
                    <Image src="/img/line-star.svg" className="rotate-180 w-[30%] left-[-6%] absolute top-[-20%]" alt="Facebook" width="500" height="300"/>
                    <Image src="/img/line-star.svg" className="w-[30%] right-[-6%] absolute top-[-20%]" alt="Facebook" width="500" height="300"/>
                    <a 
                    onClick={() => setOpenDevTab(1)} 
                    className={`${openDevTab === 1 ? "font-ButlerBold text-[#bda37f] tracking-[3px] uppercase leading-none sm:tracking-[5px]  text-[25px] sm:text-[30px] xl:text[35px] 2xl:text-[35px] 3xl:text-[50px]" : "tracking-[3px] text-[17px] md:text-[18px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[23px] text-white"} cursor-pointer uppercase leading-none`}>
                        Gallery
                    </a>
                </div>
                <a 
                onClick={() => setOpenDevTab(3)} 
                className={`${openDevTab === 3 ? "font-ButlerBold text-[#bda37f] tracking-[3px] uppercase leading-none sm:tracking-[5px]  text-[25px] sm:text-[30px] xl:text[35px] 2xl:text-[35px] 3xl:text-[50px]" : "tracking-[3px] text-[17px] md:text-[18px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[23px] text-white"} cursor-pointer uppercase leading-none`}>
                    Site Progress
                </a>
            </div>
            <div className="block lg:hidden w-[90%] mx-auto dropdown-custom">
                <Dropdown
                className="dropdown-custom  label-btn w-full flex justify-between  bg-black px-4 py-2.5 text-center text-sm-left items-center font-ButlerBold text-[#bda37f] text-[27px] sm:text-[32px] 2xl:text-[37px] 3xl:text-[52px]"
                label="Choose Gallery"
                >
                    <Dropdown.Item 
                        onClick={() => setOpenDevTab(1)}
                        className="w-full text-center text-sm-leftinline-block py-3 font-GothamMedium tracking-[3px] text-[17px] md:text-[18px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[23px] text-white uppercase leading-none"
                    >
                        Virtual Tour
                    </Dropdown.Item>
                    <Dropdown.Item
                        onClick={() => setOpenDevTab(2)}
                        className="w-full text-center text-sm-left inline-block py-3 font-GothamMedium tracking-[3px] text-[17px] md:text-[18px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[23px] text-white uppercase leading-none"
                    >
                        Gallery
                    </Dropdown.Item>
                    <Dropdown.Item
                        onClick={() => setOpenDevTab(3)}
                        className="w-full text-center text-sm-left inline-block py-3 font-GothamMedium tracking-[3px] text-[17px] md:text-[18px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[23px] text-white uppercase leading-none"
                    >
                        Site Progress
                    </Dropdown.Item>
                </Dropdown>
            </div>

            <div className={openDevTab === 1 ? "block" : "hidden"}>
                <GallerySlider/>
            </div>
            <div className={openDevTab === 2 ? "block" : "hidden"}></div>
            <div className={openDevTab === 3 ? "block" : "hidden"}></div>
        </>
    )
}
export default GalleryTab;