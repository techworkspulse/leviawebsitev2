import Image from "next/image";
const StickyButton = () => {
    return(
        <div className="fixed w-[7%] right-0 bottom-[20%] z-10">
            <div className="py-3 border border-solid border-[#c2ad94] border-b border-t-0 border-l-0 border-r-0">
                <a href="" className="hover:cursor-pointer hover:opacity-50">
                    <Image src="img/fb-icon.svg" className="object-contain max-h-[35px] w-fit" alt="Facebook" width="200" height="200"/>
                </a>
            </div>
            <div className="py-3 border border-solid border-[#c2ad94] border-b border-t-0 border-l-0 border-r-0">
                <a href="" className="hover:cursor-pointer hover:opacity-50">
                    <Image src="img/phone-icon.svg" className="object-contain max-h-[35px] w-fit" alt="Facebook" width="200" height="200"/>
                </a>
            </div>
            <div className="py-3 border border-solid border-[#c2ad94] border-b border-t-0 border-l-0 border-r-0">
                <a href="" className="hover:cursor-pointer hover:opacity-50">
                    <Image src="img/reg-icon.svg" className="object-contain max-h-[35px] w-fit" alt="Facebook" width="200" height="200"/>
                </a>
            </div>
            <div className="py-3 border border-solid border-[#c2ad94] border-b border-t-0 border-l-0 border-r-0">
                <a href="" className="hover:cursor-pointer hover:opacity-50">
                    <Image src="img/file-icon.svg" className="object-contain max-h-[35px] w-fit" alt="Facebook" width="200" height="200"/>
                </a>
            </div>
        </div>
    );
}
export default StickyButton;