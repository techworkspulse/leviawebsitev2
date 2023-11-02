import Image from "next/image";

const FeaturesCardMobile = ({img, icon, title, subtitle}) => {
    return(
        <div className="w-full sm:w-[48%] first:mt-0 mt-8">
            <Image src={img} className="w-full object-cover" alt="Front" width="800" height="800" />
            <div className="w-full mx-auto flex flex-row items-start justify-center py-3 px-2 bg-black h-fit sm:h-[100px]">
                <div className="text-center">
                    <h5 className="font-ButlerBold text-[#7ea5a2] tracking-[3px] text-base sm:text-[17px] md:text-[18px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[23px] uppercase">{title}</h5>
                    <p className="font-Gotham-Medium text-white tracking-[3px] uppercase text-[14px] sm:text-[17px] md:text-[15px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px]">{subtitle}</p>
                </div>
            </div>
        </div>
    );
}
export default FeaturesCardMobile;