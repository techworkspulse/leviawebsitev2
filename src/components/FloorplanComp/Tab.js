import { Dropdown } from "flowbite-react"
import { useState } from "react";
import Image from "next/image";

const Tab = () => {
    const [openDevTab, setOpenDevTab] = useState(1);
    return(
        <div className="w-[85%] mx-auto mt-8">
            <div className="hidden sm:flex w-full mx-auto justify-start items-center">
                <a onClick={() => setOpenDevTab(1)} className="cursor-pointer">
                    <div className="flex items-center justify-center" role="presentation">
                        <button className={`${openDevTab === 1 ? "text-[#bda37f]" : "text-[#c8c4c1]"} flex items-start font-ButlerBold tracking-[2px] text-[17px] md:text-[18px] lg:text-[18px] 2xl:text-[18px] 3xl:text-[23px] uppercase hover:text-[#bda37f]`}  
                            id="typeb-tab" 
                            data-tabs-target="#typeb" 
                            type="button" 
                            role="tab" 
                            aria-controls="typeb" 
                            aria-selected="false"
                        >
                            <span className=" underline underline-offset-8">type</span><span className="text-[30px] md:text-[40px] 3xl:text-[50px] leading-none ml-2">B</span>
                        </button>
                    </div>
                </a>
                <a onClick={() => setOpenDevTab(2)} className="cursor-pointer mx-8">
                    <div className="flex items-center justify-center" role="presentation">
                        <button className={`${openDevTab === 2 ? "text-[#bda37f]" : "text-[#c8c4c1]"} flex items-start font-ButlerBold tracking-[2px] text-[17px] md:text-[18px] lg:text-[18px] 2xl:text-[18px] 3xl:text-[23px] uppercase hover:text-[#bda37f]`} 
                            id="typec-tab" 
                            data-tabs-target="#typec" 
                            type="button" role="tab" 
                            aria-controls="typec" 
                            aria-selected="false"
                        >
                            <span className=" underline underline-offset-8">type</span><span className="text-[30px] md:text-[40px] 3xl:text-[50px] leading-none ml-2">C</span>
                        </button>
                    </div>
                </a>
                <a onClick={() => setOpenDevTab(3)} className="cursor-pointer">
                    <div className="flex items-center justify-center" role="presentation">
                        <button className={`${openDevTab === 3 ? "text-[#bda37f]" : "text-[#c8c4c1]"} flex items-start font-ButlerBold tracking-[2px] text-[17px] md:text-[18px] lg:text-[18px] 2xl:text-[18px] 3xl:text-[23px] uppercase hover:text-[#bda37f]`}  
                            id="typed-tab" 
                            data-tabs-target="#typed" 
                            type="button" 
                            role="tab" 
                            aria-controls="typed" 
                            aria-selected="false"
                        >
                            <span className=" underline underline-offset-8">type</span><span className="text-[30px] md:text-[40px] 3xl:text-[50px] leading-none ml-2">D</span>
                        </button>
                    </div>
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
                <div className="w-full md:gap-4 flex items-center flex-wrap justify-between m-auto">
                    <div className="justify-between col-span-1 w-full md:w-[38%]">
                        <Image src="/img/floorplan/fp-b-tower.png" className="w-full" alt="Facebook" width="1000" height="1000"/>
                        <div>
                        <a className="border-solid border-2 border-[#bda37f] flex justify-center w-fit py-2 px-7 mx-auto text-[#bda37f] hover:bg-[#bda37f] hover:text-white mt-10">
                            <div className="font-GothamMedium uppercase tracking-[3px] text-[17px] md:text-[18px] lg:text-[18px] 2xl:text-[20px] 3xl:text-[23px] hover:cursor-pointer">
                                VR 360°
                            </div>
                        </a>
                        </div>
                    </div>
                    <div className="justify-between col-span-1 w-full md:w-[50%]">
                        <div className="flex justify-center items-start">
                            <div className="bg-[#bda37f] rounded-l-lg w-[20%] px-5 py-4">
                                <div className="">
                                    <p className="font-ButlerBold text-white tracking-[2px] text-[17px] md:text-[18px] lg:text-[18px] 2xl:text-[18px] 3xl:text-[23px] uppercase">Type</p>
                                    <h3 className="font-ButlerBold text-white tracking-[2px] text-[30px] md:text-[40px] 3xl:text-[50px] leading-none  uppercase">B</h3>
                                </div>
                                <div className="mt-14 mb-5">
                                    <p className="flex items-end font-GothamMedium text-white leading-none text-[17px] md:text-[18px] lg:text-[18px] 2xl:text-[18px] 3xl:text-[20px]">
                                        <span className="text-[17px] md:text-[18px] lg:text-[18px] 2xl:text-[23px] 3xl:text-[25px] mr-1">938</span> sq.ft</p>
                                </div>
                                <div className="flex flex-col justify-end">
                                    <p className="font-GothamMedium text-white text-right leading-none text-[17px] md:text-[18px] lg:text-[18px] 2xl:text-[18px] 3xl:text-[20px]">3 Beds</p>
                                    <div className="border-b-[1px] border-[#ffffff] w-full my-2"></div>
                                    <p className="font-GothamMedium text-white text-right leading-none text-[17px] md:text-[18px] lg:text-[18px] 2xl:text-[18px] 3xl:text-[20px]">2 Baths</p>
                                </div>
                            </div>
                            <div className="w-[80%]">
                                <Image src="/img/floorplan/fp-b.png" className="w-full" alt="Facebook" width="1000" height="1000"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={openDevTab === 2 ? "block" : "hidden"}>
                <div className="w-full md:gap-4 flex items-center flex-wrap justify-between m-auto">
                    <div className="justify-between col-span-1 w-full md:w-[38%]">
                        <Image src="/img/floorplan/fp-b-tower.png" className="w-full" alt="Facebook" width="1000" height="1000"/>
                        <div>
                        <a className="border-solid border-2 border-[#bda37f] flex justify-center w-fit py-2 px-7 mx-auto text-[#bda37f] hover:bg-[#bda37f] hover:text-white mt-10">
                            <div className="font-GothamMedium uppercase tracking-[3px] text-[17px] md:text-[18px] lg:text-[18px] 2xl:text-[20px] 3xl:text-[23px] hover:cursor-pointer">
                                VR 360°
                            </div>
                        </a>
                        </div>
                    </div>
                    <div className="justify-between col-span-1 w-full md:w-[50%]">
                        <div className="flex justify-center items-start">
                            <div className="bg-[#bda37f] rounded-l-lg w-[20%] px-5 py-4">
                                <div className="">
                                    <p className="font-ButlerBold text-white tracking-[2px] text-[17px] md:text-[18px] lg:text-[18px] 2xl:text-[18px] 3xl:text-[23px] uppercase">Type</p>
                                    <h3 className="font-ButlerBold text-white tracking-[2px] text-[30px] md:text-[40px] 3xl:text-[50px] leading-none  uppercase">C</h3>
                                </div>
                                <div className="mt-14 mb-5">
                                    <p className="flex items-end font-GothamMedium text-white leading-none text-[17px] md:text-[18px] lg:text-[18px] 2xl:text-[18px] 3xl:text-[20px]">
                                        <span className="text-[17px] md:text-[18px] lg:text-[18px] 2xl:text-[23px] 3xl:text-[25px] mr-1">938</span> sq.ft</p>
                                </div>
                                <div className="flex flex-col justify-end">
                                    <p className="font-GothamMedium text-white text-right leading-none text-[17px] md:text-[18px] lg:text-[18px] 2xl:text-[18px] 3xl:text-[20px]">3 Beds</p>
                                    <div className="border-b-[1px] border-[#ffffff] w-full my-2"></div>
                                    <p className="font-GothamMedium text-white text-right leading-none text-[17px] md:text-[18px] lg:text-[18px] 2xl:text-[18px] 3xl:text-[20px]">2 Baths</p>
                                </div>
                            </div>
                            <div className="w-[80%]">
                                <Image src="/img/floorplan/fp-b.png" className="w-full" alt="Facebook" width="1000" height="1000"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={openDevTab === 3 ? "block" : "hidden"}>
                <div className="w-full md:gap-4 flex items-center flex-wrap justify-between m-auto">
                    <div className="justify-between col-span-1 w-full md:w-[38%]">
                        <Image src="/img/floorplan/fp-b-tower.png" className="w-full" alt="Facebook" width="1000" height="1000"/>
                        <div>
                        <a className="border-solid border-2 border-[#bda37f] flex justify-center w-fit py-2 px-7 mx-auto text-[#bda37f] hover:bg-[#bda37f] hover:text-white mt-10">
                            <div className="font-GothamMedium uppercase tracking-[3px] text-[17px] md:text-[18px] lg:text-[18px] 2xl:text-[20px] 3xl:text-[23px] hover:cursor-pointer">
                                VR 360°
                            </div>
                        </a>
                        </div>
                    </div>
                    <div className="justify-between col-span-1 w-full md:w-[50%]">
                        <div className="flex justify-center items-start">
                            <div className="bg-[#bda37f] rounded-l-lg w-[20%] px-5 py-4">
                                <div className="">
                                    <p className="font-ButlerBold text-white tracking-[2px] text-[17px] md:text-[18px] lg:text-[18px] 2xl:text-[18px] 3xl:text-[23px] uppercase">Type</p>
                                    <h3 className="font-ButlerBold text-white tracking-[2px] text-[30px] md:text-[40px] 3xl:text-[50px] leading-none  uppercase">D</h3>
                                </div>
                                <div className="mt-14 mb-5">
                                    <p className="flex items-end font-GothamMedium text-white leading-none text-[17px] md:text-[18px] lg:text-[18px] 2xl:text-[18px] 3xl:text-[20px]">
                                        <span className="text-[17px] md:text-[18px] lg:text-[18px] 2xl:text-[23px] 3xl:text-[25px] mr-1">938</span> sq.ft</p>
                                </div>
                                <div className="flex flex-col justify-end">
                                    <p className="font-GothamMedium text-white text-right leading-none text-[17px] md:text-[18px] lg:text-[18px] 2xl:text-[18px] 3xl:text-[20px]">3 Beds</p>
                                    <div className="border-b-[1px] border-[#ffffff] w-full my-2"></div>
                                    <p className="font-GothamMedium text-white text-right leading-none text-[17px] md:text-[18px] lg:text-[18px] 2xl:text-[18px] 3xl:text-[20px]">2 Baths</p>
                                </div>
                            </div>
                            <div className="w-[80%]">
                                <Image src="/img/floorplan/fp-b.png" className="w-full" alt="Facebook" width="1000" height="1000"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Tab;