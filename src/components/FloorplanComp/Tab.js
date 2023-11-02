import { Dropdown } from "flowbite-react"
import { useState } from "react";
import Image from "next/image";

const Tab = () => {
    const [openDevTab, setOpenDevTab] = useState(1);
    return(
        <div className="mt-14">
            <div className="flex w-full mx-auto justify-center lg:justify-start items-center mb-10 lg:mb-0">
                <a onClick={() => setOpenDevTab(1)} className="cursor-pointer">
                    <div className="flex items-center justify-center" role="presentation">
                        <button className={`${openDevTab === 1 ? "text-[#bda37f]" : "text-[#c8c4c1]"} flex items-start font-ButlerBold tracking-[2px] text-[17px] md:text-[18px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[23px] uppercase hover:text-[#bda37f]`}  
                            id="typeb-tab" 
                            data-tabs-target="#typeb" 
                            type="button" 
                            role="tab" 
                            aria-controls="typeb" 
                            aria-selected="false"
                        >
                            <span className=" underline underline-offset-8">type</span><span className="text-[25px] sm:text-[30px] xl:text[30px] 2xl:text-[35px] 3xl:text-[50px] leading-none ml-2">B</span>
                        </button>
                    </div>
                </a>
                <a onClick={() => setOpenDevTab(2)} className="cursor-pointer mx-8">
                    <div className="flex items-center justify-center" role="presentation">
                        <button className={`${openDevTab === 2 ? "text-[#bda37f]" : "text-[#c8c4c1]"} flex items-start font-ButlerBold tracking-[2px] text-[17px] md:text-[18px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[23px] uppercase hover:text-[#bda37f]`} 
                            id="typec-tab" 
                            data-tabs-target="#typec" 
                            type="button" role="tab" 
                            aria-controls="typec" 
                            aria-selected="false"
                        >
                            <span className=" underline underline-offset-8">type</span><span className="text-[25px] sm:text-[30px] xl:text[30px] 2xl:text-[35px] 3xl:text-[50px] leading-none ml-2">C</span>
                        </button>
                    </div>
                </a>
                <a onClick={() => setOpenDevTab(3)} className="cursor-pointer">
                    <div className="flex items-center justify-center" role="presentation">
                        <button className={`${openDevTab === 3 ? "text-[#bda37f]" : "text-[#c8c4c1]"} flex items-start font-ButlerBold tracking-[2px] text-[17px] md:text-[18px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[23px] uppercase hover:text-[#bda37f]`}  
                            id="typed-tab" 
                            data-tabs-target="#typed" 
                            type="button" 
                            role="tab" 
                            aria-controls="typed" 
                            aria-selected="false"
                        >
                            <span className=" underline underline-offset-8">type</span><span className="text-[25px] sm:text-[30px] xl:text[30px] 2xl:text-[35px] 3xl:text-[50px] leading-none ml-2">D</span>
                        </button>
                    </div>
                </a>
            </div>



            <div className={openDevTab === 1 ? "block" : "hidden"}>
                <div className="w-full md:gap-4 flex flex-col-reverse lg:flex-row items-center flex-wrap justify-between m-auto">
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
                    <div className="justify-between col-span-1 w-full lg:w-[60%] xl:w-[50%]">
                        <div className="flex flex-col sm:flex-row justify-center items-start">
                            <div className="bg-[#bda37f] rounded-l-lg rounded-r-lg sm:rounded-r-none  w-full sm:w-[20%] px-5 py-4">
                                <div className="hidden sm:block text-center text-sm:left">
                                    <p className="font-ButlerBold text-white tracking-[2px] text-[17px] md:text-[18px] lg:text-[18px] 2xl:text-[18px] 3xl:text-[23px] uppercase">Type</p>
                                    <h3 className="font-ButlerBold text-white tracking-[2px] text-[25px] sm:text-[30px] xl:text[30px] 2xl:text-[35px] 3xl:text-[50px] leading-none  uppercase">B</h3>
                                </div>
                                <div className="mt-0 sm:mt-14 mb-5">
                                    <p className="flex items-center justify-center sm:justify-start sm:items-end font-GothamMedium text-white leading-none text-[15px] sm:text-[17px] md:text-[18px] lg:text-[17px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[20px]">
                                        <span className="text-[17px] md:text-[18px] lg:text-[18px] 2xl:text-[23px] 3xl:text-[25px]">938</span> sq.ft</p>
                                </div>
                                <div className="flex flex-row sm:flex-col justify-center sm:justify-end">
                                    <p className="font-GothamMedium text-white text-right leading-none pr-3 sm:pr-0 border border-l-0 border-t-0 border-b-0 sm:border-r-0 text-[15px] sm:text-[17px] md:text-[18px] lg:text-[17px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[20px]">3 Beds</p>
                                    <div className="hidden sm:flex border-b-[1px] border-[#ffffff] w-full my-2"></div>
                                    <p className="font-GothamMedium text-white text-right leading-none pl-3 sm:pl-0 text-[15px] sm:text-[17px] md:text-[18px] lg:text-[17px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[20px]">2 Baths</p>
                                </div>
                            </div>
                            <div className="w-full sm:w-[80%]">
                                <Image src="/img/floorplan/fp-b.png" className="w-full" alt="Facebook" width="1000" height="1000"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={openDevTab === 2 ? "block" : "hidden"}>
                <div className="w-full md:gap-4 flex flex-col-reverse lg:flex-row items-center flex-wrap justify-between m-auto">
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
                    <div className="justify-between col-span-1 w-full lg:w-[60%] xl:w-[50%]">
                        <div className="flex flex-col sm:flex-row justify-center items-start">
                            <div className="bg-[#bda37f] rounded-l-lg rounded-r-lg sm:rounded-r-none  w-full sm:w-[20%] px-5 py-4">
                                <div className="hidden sm:block text-center text-sm:left">
                                    <p className="font-ButlerBold text-white tracking-[2px] text-[17px] md:text-[18px] lg:text-[18px] 2xl:text-[18px] 3xl:text-[23px] uppercase">Type</p>
                                    <h3 className="font-ButlerBold text-white tracking-[2px] text-[25px] sm:text-[30px] xl:text[30px] 2xl:text-[35px] 3xl:text-[50px] leading-none  uppercase">C</h3>
                                </div>
                                <div className="mt-0 sm:mt-14 mb-5">
                                    <p className="flex items-center justify-center sm:justify-start sm:items-end font-GothamMedium text-white leading-none text-[15px] sm:text-[17px] md:text-[18px] lg:text-[17px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[20px]">
                                        <span className="text-[17px] md:text-[18px] lg:text-[18px] 2xl:text-[23px] 3xl:text-[25px]">938</span> sq.ft</p>
                                </div>
                                <div className="flex flex-row sm:flex-col justify-center sm:justify-end">
                                    <p className="font-GothamMedium text-white text-right leading-none pr-3 sm:pr-0 border border-l-0 border-t-0 border-b-0 sm:border-r-0 text-[15px] sm:text-[17px] md:text-[18px] lg:text-[17px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[20px]">3 Beds</p>
                                    <div className="hidden sm:flex border-b-[1px] border-[#ffffff] w-full my-2"></div>
                                    <p className="font-GothamMedium text-white text-right leading-none pl-3 sm:pl-0 text-[15px] sm:text-[17px] md:text-[18px] lg:text-[17px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[20px]">2 Baths</p>
                                </div>
                            </div>
                            <div className="w-full sm:w-[80%]">
                                <Image src="/img/floorplan/fp-b.png" className="w-full" alt="Facebook" width="1000" height="1000"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={openDevTab === 3 ? "block" : "hidden"}>
                <div className="w-full md:gap-4 flex flex-col-reverse lg:flex-row items-center flex-wrap justify-between m-auto">
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
                    <div className="justify-between col-span-1 w-full lg:w-[60%] xl:w-[50%]">
                        <div className="flex flex-col sm:flex-row justify-center items-start">
                            <div className="bg-[#bda37f] rounded-l-lg rounded-r-lg sm:rounded-r-none  w-full sm:w-[20%] px-5 py-4">
                                <div className="hidden sm:block text-center text-sm:left">
                                    <p className="font-ButlerBold text-white tracking-[2px] text-[17px] md:text-[18px] lg:text-[18px] 2xl:text-[18px] 3xl:text-[23px] uppercase">Type</p>
                                    <h3 className="font-ButlerBold text-white tracking-[2px] text-[25px] sm:text-[30px] xl:text[30px] 2xl:text-[35px] 3xl:text-[50px] leading-none  uppercase">D</h3>
                                </div>
                                <div className="mt-0 sm:mt-14 mb-5">
                                    <p className="flex items-center justify-center sm:justify-start sm:items-end font-GothamMedium text-white leading-none text-[15px] sm:text-[17px] md:text-[18px] lg:text-[17px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[20px]">
                                        <span className="text-[17px] md:text-[18px] lg:text-[18px] 2xl:text-[23px] 3xl:text-[25px]">938</span> sq.ft</p>
                                </div>
                                <div className="flex flex-row sm:flex-col justify-center sm:justify-end">
                                    <p className="font-GothamMedium text-white text-right leading-none pr-3 sm:pr-0 border border-l-0 border-t-0 border-b-0 sm:border-r-0 text-[15px] sm:text-[17px] md:text-[18px] lg:text-[17px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[20px]">3 Beds</p>
                                    <div className="hidden sm:flex border-b-[1px] border-[#ffffff] w-full my-2"></div>
                                    <p className="font-GothamMedium text-white text-right leading-none pl-3 sm:pl-0 text-[15px] sm:text-[17px] md:text-[18px] lg:text-[17px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[20px]">2 Baths</p>
                                </div>
                            </div>
                            <div className="w-full sm:w-[80%]">
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