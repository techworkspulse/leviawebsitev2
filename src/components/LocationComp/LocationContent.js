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
            "km": 10,
            "location": "City A"
        },
        {
            "km": 25,
            "location": "Town B"
        },
        {
            "km": 40,
            "location": "Village C"
        },
        {
            "km": 60,
            "location": "City D"
        }
    ]
    };
    const commercialData = {
    "id": "commercial",
    "title": "Commercial Centres",
    "locations": [
        {
            "km": 10,
            "location": "City A"
        },
        {
            "km": 25,
            "location": "Town B"
        },
        {
            "km": 40,
            "location": "Village C"
        },
        {
            "km": 60,
            "location": "City D"
        }
    ]
    };
    const mallData = {
    "id": "mall",
    "title": "Shopping Malls & Supermarkets",
    "locations": [
        {
            "km": 10,
            "location": "City A"
        },
        {
            "km": 25,
            "location": "Town B"
        },
        {
            "km": 40,
            "location": "Village C"
        },
        {
            "km": 60,
            "location": "City D"
        }
    ]
    };
    const transportationData = {
    "id": "transportation",
    "title": "Transportation",
    "locations": [
        {
            "km": 10,
            "location": "City A"
        },
        {
            "km": 25,
            "location": "Town B"
        },
        {
            "km": 40,
            "location": "Village C"
        },
        {
            "km": 60,
            "location": "City D"
        }
    ]
    };
    const eduData = {
    "id": "edu",
    "title": "Educational Institutions",
    "locations": [
        {
            "km": 10,
            "location": "City A"
        },
        {
            "km": 25,
            "location": "Town B"
        },
        {
            "km": 40,
            "location": "Village C"
        },
        {
            "km": 60,
            "location": "City D"
        }
    ]
    };
    const healthData = {
    "id": "health",
    "title": "Healthcare",
    "locations": [
        {
            "km": 10,
            "location": "City A"
        },
        {
            "km": 25,
            "location": "Town B"
        },
        {
            "km": 40,
            "location": "Village C"
        },
        {
            "km": 60,
            "location": "City D"
        }
    ]
    };
    const accessData = {
    "id": "access",
    "title": "Access Points",
    "locations": [
        {
            "km": 10,
            "location": "City A"
        },
        {
            "km": 25,
            "location": "Town B"
        },
        {
            "km": 40,
            "location": "Village C"
        },
        {
            "km": 60,
            "location": "City D"
        }
    ]
    };
    
    const [activeAccordion, setActiveAccordion] = useState('mall'); 

    return(
        <>
        <section className="relative pt-0">
            <Image src="/img/big-star.svg" className="w-[20%] absolute right-[-12%] mx-auto top-[48%] z-[2]" alt="Facebook" width="500" height="500"/>
            <Image src="/img/big-star.svg" className="w-[20%] absolute left-[-12%] mx-auto bottom-[-23%] z-[2]" alt="Facebook" width="500" height="500"/>
            <HeroImageSlider
                img1={"/img/location/hero1.png"}
                img2={"/img/location/hero2.png"}
                img3={"/img/location/hero3.png"}
            />
            <Image src="/img/star-line-full.svg" className="hidden lg:block w-[30%] 2xl:w-[40%] absolute left-0 right-0 mx-auto sm:bottom-[33.5%] lg:bottom-[32.5%]" alt="Facebook" width="1920" height="1000"/>
            <div className="text-center py-8 w-[85%] lg:w-[70%] xl:w-[60%] mx-auto">
            <h3 className="font-GothamBook uppercase tracking-[3px] sm:tracking-[5px] text-white text-[25px] sm:text-[30px] xl:text[35px] 2xl:text-[35px] 3xl:text-[50px] mb-5">Convenient <span className="font-ButlerBold text-[#7ea5a2] text-[27px] sm:text-[32px] 2xl:text-[37px] 3xl:text-[52px]">Leisure</span><br></br> <span className="font-ButlerBold text-[#bda37f] text-[27px] sm:text-[32px] md:text-[37px] 3xl:text-[52px]">Via</span> Connections</h3>
            <p className="font-GothamBook text-white leading-normal lg:leading-loose text-[15px] sm:text-[17px] md:text-[18px] lg:text-[17px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[20px]">LEVIA is strategically placed within a mature neighbourhood in Cheras, mere minutes away from Kuala Lumpur City Centre, for residents to enjoy easy access to a wide variety of lifestyle and public amenities.</p>
            </div>
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