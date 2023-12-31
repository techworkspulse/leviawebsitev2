import { useState } from "react";
import { useScroll, useTransform, useAnimation, motion, Variants } from "framer-motion";
import Image from "next/image";
import RegForm from "./RegForm";

const RegContent = () => {
    
    return(
        <>
            <section id="register" className="pt-0 bg-[url('/img/white-bg.png')] bg-cover bg-center"></section>
            <section className="hidden xl:block bg-[url('/img/white-bg.png')] bg-cover bg-center">
                    <div className="w-full md:gap-0 flex flex-wrap justify-between items-center">
                        <div className="relative w-full xl:w-[40%] fac-image">
                            <Image src="/img/contact/contact-img.png" className="w-full" alt="Facility" width={1000} height={1000}/>
                        </div>
                        <div className="relative w-full xl:w-[55%]">
                            <div className="w-[80%]">
                                <h3 className="font-Avgard tracking-[10px] uppercase leading-none text-[#bda37f] sm:tracking-[5px]  text-[25px] sm:text-[30px] xl:text[35px] 2xl:text-[35px] 3xl:text-[50px]">Registration</h3>
                                <RegForm/>
                            </div>
                        </div>
                    </div>
            </section>
            <section className="block xl:hidden bg-[url('/img/white-bg.png')] bg-cover bg-center">
                <div className="container w-[90%] sm:w-[85%] mx-auto">
                    <div className="w-full">
                        <h3 className="font-Avgard tracking-[10px] uppercase leading-none text-center text-[#bda37f] sm:tracking-[5px]  text-[25px] sm:text-[30px] xl:text[35px] 2xl:text-[35px] 3xl:text-[50px]">Registration</h3>
                        <RegForm/>
                    </div>
                </div>
            </section>
        </>
    );
}
export default RegContent;
