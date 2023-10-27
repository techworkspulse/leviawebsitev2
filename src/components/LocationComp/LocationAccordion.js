import { useState } from "react";

const LocationAccordion = ({id,title,locations,setActiveAccordion, active}) => {
    const toggleAccordion = () => {
        setActiveAccordion(id);
    };

    return(
        <div className="mb-5">
            <div className="mb-5">
                <a 
                    id={`${id}-btn`} 
                    onClick={toggleAccordion} 
                    className={`font-ButlerBold uppercase hover:cursor-pointer ${
                        active ? 'text-[#7ea5a2] text-[20px] md:text-[21px] lg:text-[21px] 2xl:text-[23px] 3xl:text-[26px]' : 'text-[#bda37f] text-[17px] md:text-[18px] lg:text-[18px] 2xl:text-[20px] 3xl:text-[23px]'
                      }`}
                    >
                    {title}
                </a>
            </div>
            {active && (
                <div id={`${id}-container`}>
                    {locations.map((location, index) => (
                        <div key={index} className="flex items-center justify-start mb-3">
                            <p className="font-GothamBook text-black leading-none text-[17px] md:text-[18px] lg:text-[18px] 2xl:text-[16px] 3xl:text-[17px] w-[15%]">{location.km} km</p>
                            <p className="font-GothamBook text-black leading-none text-[17px] md:text-[18px] lg:text-[18px] 2xl:text-[16px] 3xl:text-[17px]">{location.location}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
} 
export default LocationAccordion;