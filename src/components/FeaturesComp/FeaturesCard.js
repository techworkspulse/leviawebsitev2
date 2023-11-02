import { useState } from "react";
import Image from "next/image";

const FeaturesCard = ({img, img2, icon, icon2, title, title2, subtitle, subtitle2}) => {
    const [isFlipped, setFlipped] = useState(false);

    const handleMouseEnter = () => {
      setFlipped(true);
    };
  
    const handleMouseLeave = () => {
      setFlipped(false);
    };
    
    return(
        <>
            <div className={`features-card relative w-full md:w-[48%] xl:w-[48%] ${isFlipped ? 'flip' : ''}`}>
                <Image src="/img/line-star.svg" className="absolute bottom-[2%] left-[4%] z-[2] w-[30%]" alt="Facebook" width="800" height="800" />
                {/* Front Card */}
                <div
                    className={`front relative ${isFlipped ? 'hidden' : 'block'}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <Image src={img} className="h-full w-fit object-cover" alt="Front" width="800" height="800" />
                    <div className="w-full h-[40%] absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent"></div>
                    <div className="w-[85%] 3xl:w-[80%] mx-auto flex flex-row items-start justify-start absolute bottom-[10%] left-0 right-0">
                        <Image src={`${icon}`} className="h-[80px] w-fit max-w-[50px] 2xl:max-w-[55px] 3xl:max-w-[80px]" alt="Facebook" width="200" height="200" />
                        <div className="ml-3 mt-3">
                            <h5 className="font-ButlerBold text-[#7ea5a2] tracking-[3px] text-[17px] md:text-[18px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[23px] uppercase">{title}</h5>
                            <p className="font-Gotham-Medium text-white tracking-[3px] uppercase text-[17px] md:text-[15px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px]">{subtitle}</p>
                        </div>
                    </div>
                </div>

                {/* Back Card */}
                <div
                    className={`back relative ${isFlipped ? 'block' : 'hidden'}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <Image src={img2} className="h-full w-fit object-cover" alt="Back" width="800" height="800" />
                    <div className="w-full h-[40%] absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent"></div>
                    <div className="w-[85%] 3xl:w-[80%] mx-auto flex flex-row items-start justify-start absolute bottom-[10%] left-0 right-0">
                        <Image src={`${icon2}`} className="h-[80px] w-fit max-w-[50px] 2xl:max-w-[55px] 3xl:max-w-[80px]" alt="Facebook" width="200" height="200" />
                        <div className="ml-3 mt-3">
                            <h5 className="font-ButlerBold text-[#7ea5a2] tracking-[3px] text-[17px] md:text-[18px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[23px] uppercase">{title2}</h5>
                            <p className="font-Gotham-Medium text-white tracking-[3px] uppercase text-[17px] md:text-[18px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px]">{subtitle2}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default FeaturesCard;