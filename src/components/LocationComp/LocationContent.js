import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import HeroImageSlider from "../HeroImageSlider";
import LocationAccordion from "./LocationAccordion";
import { useScroll, useTransform, useAnimation, motion, Variants } from "framer-motion";

const LocationContent = () => {
    const leisureData = {
    "id": "leisure",
    "title": "Leisure & Recreations",
    "locations": [
        {
            "km": 3.6,
            "location": "Taman Pudu Ulu"
        },
        {
            "km": 5.6,
            "location": "Taman Tasik Permaisuri"
        },
    ]
    };
    const commercialData = {
    "id": "commercial",
    "title": "Commercial Centres",
    "locations": [
        {
            "km": 2.4,
            "location": "Cheras Business Centre"
        },
        {
            "km": 5.3,
            "location": "Pandan Jaya"
        },
        {
            "km": 5.5,
            "location": "Taman Komersial Pandan Indah"
        },
        {
            "km": 8.2,
            "location": "Bukit Bintang"
        },
        {
            "km": 9.8,
            "location": "Tun Razak Exchange (TRX)"
        },
        {
            "km": 9.8,
            "location": "Merdeka 118"
        }
    ]
    };
    const mallData = {
    "id": "mall",
    "title": "Shopping Malls & Supermarkets",
    "locations": [
        {
            "km": 2.7,
            "location": "Cheras LeisureMall"
        },
        {
            "km": 2.9,
            "location": "Lotus Cheras"
        },
        {
            "km": 5.3,
            "location": "EkoCheras Mall"
        },
        {
            "km": 5.3,
            "location": "IKEA Cheras"
        },
        {
            "km": 5.5,
            "location": "Sunway Velocity Mall"
        },
        {
            "km": 6.2,
            "location": "MyTown Shopping Centre"
        },
        {
            "km": 8.5,
            "location": "BBCC"
        },
        {
            "km": 10.2,
            "location": "Pavilion Kuala Lumpur"
        },
        {
            "km": 10.4,
            "location": "Suria KLCC"
        }
    ]
    };
    const transportationData = {
    "id": "transportation",
    "title": "Transportation",
    "locations": [
        {
            "km": 0.7,
            "location": "Future MRT 3 Cheras"
        },
        {
            "km": 1.0,
            "location": "Future MRT 3 Taman Kencana"
        },
        {
            "km": 2.3,
            "location": "Taman Pertama MRT"
        },
        {
            "km": 2.8,
            "location": "Taman Midah MRT"
        },
        {
            "km": 3.1,
            "location": "Taman Mutiara MRT"
        },
        {
            "km": 3.9,
            "location": "Maluri MRT"
        },
        {
            "km": 4.4,
            "location": "Cochrane mRt"
        },
        {
            "km": 4.7,
            "location": "Taman Connaught MRT"
        }
    ]
    };
    const eduData = {
    "id": "edu",
    "title": "Educational Institutions",
    "locations": [
        {
            "km": 2.5,
            "location": "Sri Sempurna International School"
        },
        {
            "km": 6.1,
            "location": "UCSI University"
        },
        {
            "km": 6.2,
            "location": "Sunway College @ Velocity"
        },
        {
            "km": 6.3,
            "location": "Taylor's International School"
        },
        {
            "km": 6.6,
            "location": " Cempaka National Schools"
        },
        {
            "km": 8.3,
            "location": "Tsun Jin High School"
        },
        {
            "km": 9.4,
            "location": "Kuen Cheng High School"
        },
        {
            "km": 10.0,
            "location": "INTI International College"
        }
    ]
    };
    const healthData = {
    "id": "health",
    "title": "Healthcare",
    "locations": [
        {
            "km": 2.1,
            "location": "Pantai Hospital Cheras "
        },
        {
            "km": 3.6,
            "location": "Pantai Hospital Ampang"
        },
        {
            "km": 3.8,
            "location": "Hospital Canselor Tuanku Muhriz UKM"
        },
        {
            "km": 5.0,
            "location": "Ampang Hospital"
        },
        {
            "km": 5.9,
            "location": "Sunway Medical Centre Velocity"
        },
        {
            "km": 7.2,
            "location": "Gleneagles KL Medical Centre"
        },
        {
            "km": 9.0,
            "location": "Prince Court Medical Centre"
        },
        {
            "km": 10.2,
            "location": "Tung Shin Hospital"
        }
    ]
    };
    const accessData = {
    "id": "access",
    "title": "Access Points",
    "locations": [
        {
            "km": "",
            "location": "Kuala Lumpur Middle Ring Road 2 (MRR2)"
        },
        {
            "km": "",
            "location": "East-West Link Expressway"
        },
        {
            "km": "",
            "location": "Kajang-Seremban Highway"
        },
        {
            "km": "",
            "location": "Sungai Besi Expressway"
        }
    ]
    };
    
    const [activeAccordion, setActiveAccordion] = useState('leisure'); 

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
        <section id="location" className="relative pt-0">
            <Image src="/img/big-star.svg" className="w-[20%] absolute right-[-12%] mx-auto top-[48%] z-[2]" alt="Facebook" width="500" height="500"/>
            <Image src="/img/big-star.svg" className="w-[20%] absolute left-[-12%] mx-auto bottom-[-23%] z-[2]" alt="Facebook" width="500" height="500"/>
            <HeroImageSlider
                img1={"/img/location/hero1.png"}
                img2={"/img/location/hero2.png"}
                img3={"/img/location/hero3.png"}
            />
            <Image src="/img/star-line-full.svg" className="hidden lg:block w-[30%] 2xl:w-[40%] absolute left-0 right-0 mx-auto sm:bottom-[33.5%] lg:bottom-[32.5%]" alt="Facebook" width="1920" height="1000"/>
            <motion.div 
                className="text-center py-8 w-[85%] lg:w-[70%] xl:w-[60%] mx-auto"
                variants={variants}
                initial="hidden"
                whileInView="show"
            >
                <motion.h3 
                    className="font-GothamBook uppercase tracking-[3px] sm:tracking-[5px] text-white text-[25px] sm:text-[30px] xl:text[35px] 2xl:text-[35px] 3xl:text-[50px] mb-5"
                    variants={paragraf}
                >
                    Convenient <span className="font-ButlerBold text-[#7ea5a2] text-[27px] sm:text-[32px] 2xl:text-[37px] 3xl:text-[52px]">Leisure</span><br></br> <span className="font-ButlerBold text-[#bda37f] text-[27px] sm:text-[32px] md:text-[37px] 3xl:text-[52px]">Via</span> Connections
                </motion.h3>
                <motion.p 
                    className="font-GothamBook text-white leading-normal lg:leading-loose text-[15px] sm:text-[17px] md:text-[18px] lg:text-[17px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[20px]"
                    variants={paragraf}
                >
                    LEVIA is strategically placed within a mature neighbourhood in Cheras, mere minutes away from Kuala Lumpur City Centre, for residents to enjoy easy access to a wide variety of lifestyle and public amenities.
                </motion.p>
            </motion.div>
        </section>

        <section className="relative pt-0">
            <Image src="/img/white-bg.png" className="w-[48%] hidden lg:block h-full absolute top-0 right-0 z-0" alt="Facebook" width="1000" height="1000"/>
            <div className="container w-[90%] sm:w-[85%] mx-auto">
            <div className="w-full md:gap-4 flex flex-wrap items-center justify-center m-auto">
                <div className="relative w-full md:w-[48%] xl:w-[48%]">
                <Image src="/img/location/location-map.png" className="w-full" alt="Facebook" width="1000" height="1000"/>
                </div>
                <div className="relative w-full md:w-[48%] xl:w-[48%] hidden lg:block">
                <div className="w-[80%] 3xl:w-[70%] mx-auto">
                    <h5 className="font-GothamBook uppercase text-[#858b8c] text-[17px] md:text-[18px] lg:text-[18px] 2xl:text-[20px] 3xl:text-[25px]">The</h5>
                    <h3 className="font-ButlerBold uppercase leading-none text-[#bda37f] tracking-[3px] sm:tracking-[5px] text-[25px] sm:text-[30px] xl:text[35px] 2xl:text-[35px] 3xl:text-[50px]">Geography</h3>
                    <div className="pt-10 w-[90%] ml-auto">
                    <LocationAccordion 
                        id={leisureData.id}
                        title={leisureData.title}
                        locations={leisureData.locations} 
                        setActiveAccordion={setActiveAccordion} 
                        active={activeAccordion === leisureData.id} 
                    />
                    <LocationAccordion 
                        id={mallData.id}
                        title={mallData.title}
                        locations={mallData.locations} 
                        setActiveAccordion={setActiveAccordion} 
                        active={activeAccordion === mallData.id} 
                    />
                    <LocationAccordion 
                        id={commercialData.id}
                        title={commercialData.title}
                        locations={commercialData.locations} 
                        setActiveAccordion={setActiveAccordion} 
                        active={activeAccordion === commercialData.id} 
                    />
                    <LocationAccordion 
                        id={transportationData.id} 
                        title={transportationData.title} 
                        locations={transportationData.locations} 
                        setActiveAccordion={setActiveAccordion} 
                        active={activeAccordion === transportationData.id} 
                    />
                    <LocationAccordion 
                        id={eduData.id}
                        title={eduData.title} 
                        locations={eduData.locations} 
                        setActiveAccordion={setActiveAccordion} 
                        active={activeAccordion === eduData.id} 
                    />
                    <LocationAccordion 
                        id={healthData.id}
                        title={healthData.title} 
                        locations={healthData.locations} 
                        setActiveAccordion={setActiveAccordion} 
                        active={activeAccordion === healthData.id} 
                    />
                    <LocationAccordion
                        id={accessData.id}
                        title={accessData.title}
                        locations={accessData.locations}
                        setActiveAccordion={setActiveAccordion}
                        active={activeAccordion === accessData.id}
                    />
                    </div>
                </div>
                
                </div>
            </div>
            </div>
        </section>

        <section className="block lg:hidden relative bg-[url('/img/white-bg.png')] bg-cover bg-no-repeat">
            <div className="container w-[90%] sm:w-[85%] mx-auto">
            <div className="w-full">
                    <h5 className="font-GothamBook uppercase text-[#858b8c] text-[17px] md:text-[18px] lg:text-[18px] 2xl:text-[20px] 3xl:text-[25px]">The</h5>
                    <h3 className="font-ButlerBold uppercase leading-none text-[#bda37f] tracking-[3px] sm:tracking-[5px] text-[25px] sm:text-[30px] xl:text[35px] 2xl:text-[35px] 3xl:text-[50px]">Geography</h3>
                    <div className="pt-10 w-full ml-auto">
                    <LocationAccordion 
                        id={leisureData.id}
                        title={leisureData.title}
                        locations={leisureData.locations} 
                        setActiveAccordion={setActiveAccordion} 
                        active={activeAccordion === leisureData.id} 
                    />
                    <LocationAccordion 
                        id={mallData.id}
                        title={mallData.title}
                        locations={mallData.locations} 
                        setActiveAccordion={setActiveAccordion} 
                        active={activeAccordion === mallData.id} 
                    />
                    <LocationAccordion 
                        id={commercialData.id}
                        title={commercialData.title}
                        locations={commercialData.locations} 
                        setActiveAccordion={setActiveAccordion} 
                        active={activeAccordion === commercialData.id} 
                    />
                    <LocationAccordion 
                        id={transportationData.id} 
                        title={transportationData.title} 
                        locations={transportationData.locations} 
                        setActiveAccordion={setActiveAccordion} 
                        active={activeAccordion === transportationData.id} 
                    />
                    <LocationAccordion 
                        id={eduData.id}
                        title={eduData.title} 
                        locations={eduData.locations} 
                        setActiveAccordion={setActiveAccordion} 
                        active={activeAccordion === eduData.id} 
                    />
                    <LocationAccordion 
                        id={healthData.id}
                        title={healthData.title} 
                        locations={healthData.locations} 
                        setActiveAccordion={setActiveAccordion} 
                        active={activeAccordion === healthData.id} 
                    />
                    <LocationAccordion
                        id={accessData.id}
                        title={accessData.title}
                        locations={accessData.locations}
                        setActiveAccordion={setActiveAccordion}
                        active={activeAccordion === accessData.id}
                    />
                    </div>
            </div>
            </div>
        </section>
      </>
    );
} 
export default LocationContent;