import { useState } from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroSlider from '@/src/components/FeaturesComp/HeroSlider';
import FeaturesCardMobile from '@/src/components/FeaturesComp/FeaturesCardMobile';
import { useScroll, useTransform, useAnimation, motion, Variants } from "framer-motion";

const FeaturesContent = () => {

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
            <section id="features" className="relative py-0">
                <Image src="/img/big-star.svg" className="w-[20%] absolute right-[-12%] mx-auto lg:bottom-[19.1%] xl:bottom-[16%] cxl:bottom-[14.7%] 3xl:bottom-[19.5%] z-[2]" alt="Feature star" width="500" height="500"/>
                <HeroSlider />
            </section>

            <section className="relative pt-0 mt-0 lg:mt-14">
            <Image src="/img/big-star.svg" className="w-[20%] absolute left-[-12%] mx-auto bottom-[14.5%] 3xl:bottom-[19.5%] z-[2]" alt="Facebook" width="500" height="500"/>
                <div className="container w-[90%] sm:w-[85%] mx-auto">
                <motion.div 
                    className="w-full md:gap-1 hidden lg:flex flex-wrap justify-center m-auto relative"
                    variants={variants}
                    initial="hidden"
                    whileInView="show"
                >
                    <motion.div 
                        className="group h-[400px] w-[400px] sm:w-[350px] sm:h-[350px] xl:w-[550px] xl:h-[550px] [perspective:1000px]"
                        variants={paragraf}
                    >
                    <div className="relative h-full w-full rounded-xs shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                        {/* Back  */}
                        <div className="absolute inset-0 [transform:rotateY(180deg)]">
                        <Image src="/img/features/usp1-back.png" width="800" height="800" alt="USP 1" className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"/>  
                        <div className="absolute flex w-full bottom-[10%] left-[5%] right-0 items-center justify-start">
                            <Image src="/img/features/usp1-back-icon.svg" className="h-[50px] w-[50px]" alt="Facebook" width="200" height="200" />
                            <div className="ml-5">
                                <h5 className="font-ButlerBold text-[#7ea5a2] tracking-[2px] text-[17px] md:text-[18px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[23px] uppercase">Low-Density</h5>
                                <p className="font-Gotham-Medium text-white tracking-[2px] uppercase text-[17px] md:text-[15px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px]">778 Units On 4.71-Acres Land</p>
                            </div>
                            <Image src="/img/features/star-cards-01.png" width="463" height="120" alt="star bottom" className="absolute left-[-7%] sm:bottom-[-70%] xl:bottom-[-100%] bottom-[-115%] w-1/2" />
                        </div>
                        </div>
                        {/* Front  */}
                        <div className="absolute inset-0 [backface-visibility:hidden]">
                        <Image src="/img/features/usp1.png" width="800" height="800" alt="USP 1" className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"/>
                        <div className="absolute flex w-full bottom-[10%] left-[5%] right-0 items-center justify-start">
                            <Image src="/img/features/usp1-icon.svg" className="h-[50px] w-[50px]" alt="Facebook" width="200" height="200" />
                            <div className="ml-5">
                                <h5 className="font-ButlerBold text-[#7ea5a2] tracking-[2px] text-[17px] md:text-[18px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[23px] uppercase">Strategically</h5>
                                <p className="font-Gotham-Medium text-white tracking-[2px] uppercase text-[17px] md:text-[15px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px]">Located in south KL</p>
                            </div>
                            <Image src="/img/features/star-cards-01.png" width="463" height="120" alt="star bottom" className="absolute left-[-7%] sm:bottom-[-70%] xl:bottom-[-100%] bottom-[-115%] w-1/2" />
                        </div>
                        </div>
                        
                    </div>
                    </motion.div>
                    <motion.div 
                        className="group h-[400px] w-[400px]  sm:w-[350px] sm:h-[350px] xl:w-[550px] xl:h-[550px] [perspective:1000px]"
                        variants={paragraf}
                    >
                    <div className="relative h-full w-full rounded-xs shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                        {/* Back  */}
                        <div className="absolute inset-0 [transform:rotateY(180deg)]">
                        <Image src="/img/features/usp2-back.png" width="800" height="800" alt="USP 1" className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"/>  
                        <div className="absolute flex w-full bottom-[10%] left-[5%] right-0 items-center justify-start">
                            <Image src="/img/features/usp2-back-icon.svg" className="h-[50px] w-[50px]" alt="Facebook" width="200" height="200" />
                            <div className="ml-5">
                                <h5 className="font-ButlerBold text-[#7ea5a2] tracking-[2px] text-[17px] md:text-[18px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[23px] uppercase">Green-Re</h5>
                                <p className="font-Gotham-Medium text-white tracking-[2px] uppercase text-[17px] md:text-[15px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px]">Green-Re</p>
                            </div>
                            <Image src="/img/features/star-cards-01.png" width="463" height="120" alt="star bottom" className="absolute left-[-7%] sm:bottom-[-70%] xl:bottom-[-100%] bottom-[-115%] w-1/2" />
                        </div>
                        </div>
                        {/* Front  */}
                        <div className="absolute inset-0 [backface-visibility:hidden]">
                        <Image src="/img/features/usp2.png" width="800" height="800" alt="USP 2" className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"/>
                        <div className="absolute flex w-full bottom-[10%] left-[5%] right-0 items-center justify-start">
                            <Image src="/img/features/usp2-icon.svg" className="h-[50px] w-[50px]" alt="Facebook" width="200" height="200" />
                            <div className="ml-5">
                                <h5 className="font-ButlerBold text-[#7ea5a2] tracking-[2px] text-[17px] md:text-[18px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[23px] uppercase">Comprehensive</h5>
                                <p className="font-Gotham-Medium text-white tracking-[2px] uppercase text-[17px] md:text-[15px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px]">Lifestyle Facilities</p>
                            </div>
                            <Image src="/img/features/star-cards-01.png" width="463" height="120" alt="star bottom" className="absolute left-[-7%] sm:bottom-[-70%] xl:bottom-[-100%] bottom-[-115%] w-1/2" />
                        </div>
                        </div>
                    </div>
                    </motion.div>
                    <motion.div 
                        className="group h-[400px] w-[400px]  sm:w-[350px] sm:h-[350px] xl:w-[550px] xl:h-[550px] [perspective:1000px]"
                        variants={paragraf}
                    >
                    <div className="relative h-full w-full rounded-xs shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                        {/* Back  */}
                        <div className="absolute inset-0 [transform:rotateY(180deg)]">
                        <Image src="/img/features/usp3-back.png" width="800" height="800" alt="USP 1" className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"/>  
                        <div className="absolute flex w-full bottom-[10%] left-[5%] right-0 items-center justify-start">
                            <Image src="/img/features/usp3-back-icon.svg" className="h-[50px] w-[50px]" alt="Facebook" width="200" height="200" />
                            <div className="ml-5">
                                <h5 className="font-ButlerBold text-[#7ea5a2] tracking-[2px] text-[17px] md:text-[18px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[23px] uppercase">Residential</h5>
                                <p className="font-Gotham-Medium text-white tracking-[2px] uppercase text-[17px] md:text-[15px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px]">Title</p>
                            </div>
                            <Image src="/img/features/star-cards-01.png" width="463" height="120" alt="star bottom" className="absolute left-[-7%] sm:bottom-[-70%] xl:bottom-[-100%] bottom-[-115%] w-1/2" />
                        </div>
                        </div>
                        {/* Front  */}
                        <div className="absolute inset-0 [backface-visibility:hidden]">
                        <Image src="/img/features/usp3.png" width="800" height="800" alt="USP 1" className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"/>
                        <div className="absolute flex w-full bottom-[10%] left-[5%] right-0 items-center justify-start">
                            <Image src="/img/features/usp3-icon.svg" className="h-[50px] w-[50px]" alt="Facebook" width="200" height="200" />
                            <div className="ml-5">
                                <h5 className="font-ButlerBold text-[#7ea5a2] tracking-[2px] text-[17px] md:text-[18px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[23px] uppercase">Good Connectivity</h5>
                                <p className="font-Gotham-Medium text-white tracking-[2px] uppercase text-[17px] md:text-[15px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px]">& Accessibility to Major Highways</p>
                            </div>
                            <Image src="/img/features/star-cards-01.png" width="463" height="120" alt="star bottom" className="absolute left-[-7%] sm:bottom-[-70%] xl:bottom-[-100%] bottom-[-115%] w-1/2" />
                        </div>
                        </div>
                    </div>
                    </motion.div>
                    <motion.div 
                        className="group h-[400px] w-[400px]  sm:w-[350px] sm:h-[350px] xl:w-[550px] xl:h-[550px] [perspective:1000px]"
                        variants={paragraf}
                    >
                    <div className="relative h-full w-full rounded-xs shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                        {/* Back  */}
                        <div className="absolute inset-0 [transform:rotateY(180deg)]">
                        <Image src="/img/features/usp4-back.png" width="800" height="800" alt="USP 1" className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"/>  
                        <div className="absolute flex w-full bottom-[10%] left-[5%] right-0 items-center justify-start">
                            <Image src="/img/features/usp4-back-icon.svg" className="h-[50px] w-[50px]" alt="Facebook" width="200" height="200" />
                            <div className="ml-5">
                                <h5 className="font-ButlerBold text-[#7ea5a2] tracking-[2px] text-[17px] md:text-[18px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[23px] uppercase">North & South</h5>
                                <p className="font-Gotham-Medium text-white tracking-[2px] uppercase text-[17px] md:text-[15px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px]">Orientation</p>
                            </div>
                            <Image src="/img/features/star-cards-01.png" width="463" height="120" alt="star bottom" className="absolute left-[-7%] sm:bottom-[-70%] xl:bottom-[-100%] bottom-[-115%] w-1/2" />
                        </div>
                        </div>
                        {/* Front  */}
                        <div className="absolute inset-0 [backface-visibility:hidden]">
                        <Image src="/img/features/usp4.png" width="800" height="800" alt="USP 1" className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"/>
                        <div className="absolute flex w-full bottom-[10%] left-[5%] right-0 items-center justify-start">
                            <Image src="/img/features/usp4-icon.svg" className="h-[50px] w-[50px]" alt="Facebook" width="200" height="200" />
                            <div className="ml-5">
                                <h5 className="font-ButlerBold text-[#7ea5a2] tracking-[2px] text-[17px] md:text-[18px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[23px] uppercase">Up to</h5>
                                <p className="font-Gotham-Medium text-white tracking-[2px] uppercase text-[17px] md:text-[15px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px]">4 Car Parks</p>
                            </div>
                            <Image src="/img/features/star-cards-01.png" width="463" height="120" alt="star bottom" className="absolute left-[-7%] sm:bottom-[-70%] xl:bottom-[-100%] bottom-[-115%] w-1/2" />
                        </div>
                        </div>
                    </div>
                    </motion.div>
                    <Image src="/img/features/star-middle-01.png" width="1229" height="464" alt="Star middle" className="absolute top-[41.1%] left-[27.1%] sm:top-[35.9%] sm:left-[17.8%] xl:top-[41%] xl:left-[25%] cxl:left-[27.1%] 3xl:top-[41%] 3xl:left-[32.8%] w-[545px] h-auto" />
                </motion.div>
                <div className="w-full lg:w-[80%] xl:w-[70%] md:gap-4 flex lg:hidden flex-wrap justify-center sm:justify-between m-auto">
                    <FeaturesCardMobile
                    img={"/img/features/usp1.png"}
                    icon={"/img/features/usp1-icon.svg"}
                    title={"Strategically"}
                    subtitle={"Located in South KL"}
                    />
                    <FeaturesCardMobile
                    img={"/img/features/usp1-back.png"}
                    icon={"/img/features/usp1-back-icon.svg"}
                    title={"Low-Density"}
                    subtitle={"778 Units On 4.71-Acres Land"}
                    />
                    <FeaturesCardMobile
                    img={"/img/features/usp2.png"}
                    icon={"/img/features/usp2-icon.svg"}
                    title={"Comprehensive"}
                    subtitle={"Lifestyle Facilities"}
                    />
                    <FeaturesCardMobile
                    img={"/img/features/usp2-back.png"}
                    icon={"/img/features/usp2-back-icon.svg"}
                    title={"Green-Re"}
                    subtitle={"Green-Re"}
                    />
                    <FeaturesCardMobile
                    img={"/img/features/usp3.png"}
                    icon={"/img/features/usp3-icon.svg"}
                    title={"Good Connectivity"}
                    subtitle={"& Accessibility to Major Highways"}
                    />
                    <FeaturesCardMobile
                    img={"/img/features/usp3-back.png"}
                    icon={"/img/features/usp3-back-icon.svg"}
                    title={"Residential"}
                    subtitle={"Title"}
                    />
                    <FeaturesCardMobile
                    img={"/img/features/usp4.png"}
                    icon={"/img/features/usp4-icon.svg"}
                    title={"Up to"}
                    subtitle={"4 Car Parks"}
                    />
                    <FeaturesCardMobile
                    img={"/img/features/usp4-back.png"}
                    icon={"/img/features/usp4-back-icon.svg"}
                    title={"North & South"}
                    subtitle={"Orientation"}
                    />
                </div>
                </div>
            </section>
        </>
    );
}
export default FeaturesContent;