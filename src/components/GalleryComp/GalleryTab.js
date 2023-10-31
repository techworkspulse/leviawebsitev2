import { Dropdown } from "flowbite-react"
import { useState } from "react";
import Image from "next/image";
import GallerySlider from "./GallerySlider";

const GalleryTab = () => {
    const [openDevTab, setOpenDevTab] = useState(1);
    return(
        <>
            <div className="hidden sm:flex w-full mx-auto justify-center items-center">
                <a 
                onClick={() => setOpenDevTab(2)} 
                className={`${openDevTab === 2 ? "text-[#bda37f] font-ButlerBold 3xl:text-[40px]" : "text-white font-Avgardn 3xl:text-[30px]"} cursor-pointer font-Avgardn tracking-[5px] uppercase leading-none`}>
                    Virtual Tour
                </a>
                <div className="relative text-center w-[40%] mx-auto">
                    <Image src="/img/line-star.svg" className="rotate-180 w-[30%] left-[-6%] absolute top-[-20%]" alt="Facebook" width="500" height="300"/>
                    <Image src="/img/line-star.svg" className="w-[30%] right-[-6%] absolute top-[-20%]" alt="Facebook" width="500" height="300"/>
                    <a 
                    onClick={() => setOpenDevTab(1)} 
                    className={`${openDevTab === 1 ? "text-[#bda37f] font-ButlerBold 3xl:text-[40px]" : "text-white font-Avgardn 3xl:text-[30px]"} cursor-pointer font-Avgardn tracking-[5px] uppercase leading-none`}>
                        Gallery
                    </a>
                </div>
                <a 
                onClick={() => setOpenDevTab(3)} 
                className={`${openDevTab === 3 ? "text-[#bda37f] font-ButlerBold 3xl:text-[40px]" : "text-white font-Avgardn 3xl:text-[30px]"} cursor-pointer font-Avgardn tracking-[5px] uppercase leading-none`}>
                    Site Progress
                </a>
            </div>
            <div className="block sm:hidden w-[90%] mx-auto dropdown-custom">
                <Dropdown
                className="label-btn w-full flex justify-between text-white bg-[#E32426] font-TitilliumSemiBold uppercase rounded-lg text-sm px-4 py-2.5 text-center items-center"
                label="Choose Rewards"
                >
                    <Dropdown.Item 
                        onClick={() => setOpenDevTab(1)}
                        className="w-full text-center inline-block py-3 uppercase font-TitilliumSemiBold hover:cursor-pointer text-[#000]"
                    >
                        Repeat Purchase Reward
                    </Dropdown.Item>
                    <Dropdown.Item
                        onClick={() => setOpenDevTab(2)}
                        className="w-full text-center inline-block py-3 uppercase font-TitilliumSemiBold hover:cursor-pointer text-[#000]"
                    >
                        typec Reward*
                    </Dropdown.Item>
                    <Dropdown.Item
                        onClick={() => setOpenDevTab(3)}
                        className="w-full text-center inline-block py-3 uppercase font-TitilliumSemiBold hover:cursor-pointer text-[#000]"
                    >
                        typed Service
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