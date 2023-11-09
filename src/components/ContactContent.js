import Image from "next/image";
import { useScroll, useTransform, useAnimation, motion, Variants } from "framer-motion";

const ContactContent = () => {

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

    return(
        <>
            <section id="contact" className="pt-[60px] sm:pt-[200px]">
                <div className="container w-[90%] sm:w-[85%] mx-auto">
                    <motion.div 
                        className="relative text-center w-[80%] lg:w-[40%] mx-auto"
                        variants={variants}
                        initial="hidden"
                        whileInView="show"
                    >
                        <Image src="/img/line-star.svg" className="hidden sm:block rotate-180 w-[30%] left-[-10%] absolute top-[-20%]" alt="Facebook" width="500" height="300"/>
                        <Image src="/img/line-star.svg" className="hidden sm:block w-[30%] right-[-10%] absolute top-[-20%]" alt="Facebook" width="500" height="300"/>
                        <motion.h3 
                            className="font-Avgardn tracking-[3px] uppercase leading-none text-[#bda37f] sm:tracking-[5px]  text-[25px] sm:text-[30px] xl:text[35px] 2xl:text-[35px] 3xl:text-[50px]"
                            variants={paragraf}
                        >
                            Contact Us
                        </motion.h3>
                    </motion.div>
                    <div className="w-full xl:w-[90%] 2xl:w-[85%] mx-auto flex flex-col sm:flex-row items-center sm:items-end mt-8 lg:mt-14">
                        <Image src="/img/awards/matrix-logo.svg" className="w-fit max-h-[120px] mr-0 sm:mr-8 mb-3 sm:mb-0" alt="Matrix Logo" width="300" height="300"/>
                        <div className="text-center sm:text-left mb-5">
                            <p class="font-Avgardn text-[#bda37f] leading-7 tracking-[1px] text-[15px] sm:text-[17px] md:text-[18px] lg:text-[17px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[20px]">Head Office<br></br>Wisma Matrix, No.57, Jalan Tun Dr. Ismail,<br></br>70200 Seremban, Negeri Sembilan D.K. Malaysia</p>
                            <div className="flex items-center justify-center sm:justify-start">
                                <a href="tel:067642688" class="font-Avgardn text-[#bda37f] leading-7 tracking-[1px] text-[15px] sm:text-[17px] md:text-[18px] lg:text-[17px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[20px] mr-3">T +606 764 2688</a>
                                <a href="tel:0676426288" class="font-Avgardn text-[#bda37f] leading-7 tracking-[1px] text-[15px] sm:text-[17px] md:text-[18px] lg:text-[17px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[20px]">F +606 764 6288</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[90%] 2xl:w-[85%] mx-auto mt-5">
                        <div className="flex flex-col lg:flex-row items-center justify-between">
                            <div className="flex flex-col sm:flex-row items-center sm:items-start flex-1 w-full lg:w-fit border-none lg:border-solid border border-[#bda37f] border-b-0 border-t-0 border-l-0 pr-0 lg:pr-5">
                                <Image src="/img/levia-logo.svg" className="w-fit max-h-[120px] mr-0 sm:mr-8 mb-5 mb-sm-0" alt="Facebook" width="300" height="300"/>
                                <div className="text-center sm:text-left">
                                    <p class="font-Avgardn text-[#bda37f] leading-7 tracking-[1px] text-[15px] sm:text-[17px] md:text-[18px] lg:text-[17px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[20px]">Branch Office<br></br>A-1-5, Block A, Setiawalk, Persiaran Wawasan,<br></br>
                                    Pusat Bandar Puchong, 41760 Puchong,<br></br>Selangor Malaysia.</p>
                                    <div>
                                        <a href="tel:0327877922" class="font-Avgardn text-[#bda37f] leading-7 tracking-[1px] text-[15px] sm:text-[17px] md:text-[18px] lg:text-[17px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[20px] mr-3">T +603 278 7792</a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center flex-1 w-full lg:w-fit justify-start lg:justify-end pl-0 lg:pl-5 mt-8 lg:mt-0">
                                <Image src="/img/levia-logo.svg" className="w-fit max-h-[120px] mr-0 sm:mr-8 mb-5 mb-sm-0" alt="Facebook" width="300" height="300"/>
                                <div className="text-center sm:text-left">
                                    <p class="font-Avgardn text-[#bda37f] leading-7 tracking-[1px] text-[15px] sm:text-[17px] md:text-[18px] lg:text-[17px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[20px]">Levia Sales Gallery<br></br>20, Jalan 5/91a, Taman Shamelin Perkasa, <br></br>
                                    56100 Kuala Lumpur, Wilayah Persekutuan<br></br> Kuala Lumpur.</p>
                                    <div>
                                        <a href="tel:0327877922" class="font-Avgardn text-[#bda37f] leading-7 tracking-[1px] text-[15px] sm:text-[17px] md:text-[18px] lg:text-[17px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[20px] mr-3">T +603 278 7792</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-0">
                <div className="container w-[90%] sm:w-[85%]  mx-auto">
                    <div className="relative text-center w-[70%] mx-auto">
                        <Image src="/img/awards/award-title.svg" className="w-full lg:w-[80%] xl:w-[60%] mx-auto" alt="Facebook" width="1000" height="300"/>
                    </div>
                    <motion.div 
                        className="w-fulll xl:w-[80%] mx-auto flex flex-wrap items-center justify-center pt-8 mt-8"
                        variants={variants}
                        initial="hidden"
                        whileInView="show"
                    >
                        <motion.img 
                            src="/img/awards/award1.svg" 
                            className="max-h-[120px] w-[48%] sm:w-[28%] lg:w-[15%] object-contain mb-8 mb-lg-0" 
                            alt="awards" 
                            width="135" 
                            height="150" 
                            variants={paragraf}
                        />
                        <motion.img 
                            src="/img/awards/award2.svg" 
                            className="max-h-[120px] w-[48%] sm:w-[28%] lg:w-[15%] object-contain mb-8 mb-lg-0" 
                            alt="awards" 
                            width="139" 
                            height="150" 
                            variants={paragraf}
                        />
                        <motion.img 
                            src="/img/awards/award3.svg" 
                            className="max-h-[120px] w-[48%] sm:w-[28%] lg:w-[15%] object-contain mb-8 mb-lg-0" 
                            alt="awards" 
                            width="300" 
                            height="87" 
                            variants={paragraf}
                        />
                        <motion.img 
                            src="/img/awards/award4.svg" 
                            className="max-h-[120px] w-[48%] sm:w-[28%] lg:w-[15%] object-contain mb-8 mb-sm-0" 
                            alt="awards" 
                            width="248" 
                            height="150" 
                            variants={paragraf}
                        />
                        <motion.img 
                            src="/img/awards/award5.svg" 
                            className="max-h-[120px] w-[48%] sm:w-[28%] lg:w-[15%] object-contain mb-8 mb-sm-0" 
                            alt="awards" 
                            width="64" 
                            height="150" 
                            variants={paragraf}
                        />
                        <motion.img 
                            src="/img/awards/award6.svg" 
                            className="max-h-[120px] w-[48%] sm:w-[28%] lg:w-[15%] object-contain mb-8 mb-sm-0" 
                            alt="awards" 
                            width="147" 
                            height="150" 
                            variants={paragraf}
                        />
                    </motion.div>
                </div>
            </section>
        </>
    );
}
export default ContactContent;
