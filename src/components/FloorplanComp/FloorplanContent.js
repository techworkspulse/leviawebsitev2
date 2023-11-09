import Image from "next/image";
import { motion } from "framer-motion";
import Tab from "./Tab";

const FloorplanContent = () => {
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
        <section id="floorplan">
            <div className="container w-[90%] sm:w-[85%] mx-auto">
                <div className="lg:w-full xl:w-[80%] mx-auto">
                    <Image src="/img/floorplan/tower.png" className="w-full" alt="Facebook" width="1000" height="1000"/>
                </div>
                <motion.div 
                    className="text-center lg:w-[80%] xl:w-[50%] mx-auto"
                    variants={variants}
                    initial="hidden"
                    whileInView="show"
                >
                    <motion.p 
                        className="font-GothamBook text-white mt-10 mb-0 sm:mb-10 leading-normal lg:leading-loose text-[15px] sm:text-[17px] md:text-[18px] lg:text-[17px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[20px]"
                        variants={paragraf}
                    >
                        LEVIA’s residences offer versatile living arrangements that cater to a range of lifestyles.
                        For multi-generational families seeking privacy or residents looking to generate rental income,
                        our homes feature a convenient dual-key ready system.
                    </motion.p>
                    <Image src="/img/star-line-full.svg" className="w-full mx-auto hidden sm:block" alt="Facebook" width="1000" height="500"/>
                </motion.div>
                
            </div>
        </section>

        <section className="py-0">
            <Image src="/img/floorplan/breaker.png" className="w-full h-[500px] sm:h-[700px] object-cover" alt="Facebook" width="1920" height="1000"/>
        </section>

        <section className="bg-[url('/img/white-bg.png')] bg-cover bg-center">
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
                        className="font-Baskerville tracking-[3px] uppercase leading-none text-[#bda37f] sm:tracking-[5px]  text-[25px] sm:text-[30px] xl:text[35px] 2xl:text-[35px] 3xl:text-[50px]"
                        variants={paragraf}
                    >Floor Plans
                    </motion.h3>
                </motion.div>
                <Tab/>
            </div>
        </section>

        <section>
            <div className="container w-[90%] sm:w-[85%] mx-auto">
                <motion.div 
                    className="relative text-center w-full sm:w-[45%] mx-auto"
                    variants={variants}
                    initial="hidden"
                    whileInView="show"
                >
                    <Image src="/img/line-star.svg" className="hidden sm:block rotate-180 w-[30%] left-[-10%] absolute top-[-20%]" alt="Facebook" width="500" height="300"/>
                    <Image src="/img/line-star.svg" className="hidden sm:block w-[30%] right-[-10%] absolute top-[-20%]" alt="Facebook" width="500" height="300"/>
                    <motion.h3 
                        className="font-Baskerville tracking-[3px] uppercase leading-none text-[#bda37f] text-[30px] md:text-[35px] 3xl:text-[40px]"
                        variants={paragraf}
                    >
                            Specifications
                    </motion.h3>
                </motion.div>
                <div className="w-full lg:w-[90%] mx-auto mt-14">
                    <Image src="/img/floorplan/specifications.png" className="hidden sm:block w-full" alt="Specification" width="1920" height="1000"/>
                    <Image src="/img/spec-mobile-02.png" className="sm:hidden w-full" alt="Specification" width="1920" height="1000"/>
                </div>
            </div>
        </section>
        </>
    );
}
export default FloorplanContent;