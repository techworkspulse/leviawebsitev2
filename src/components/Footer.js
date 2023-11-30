import Link from "next/link";

const Footer = () => {
    return(
        <section className="bg-black py-0 h-[80px] lg:h-[50px] flex items-center">
            <div className="container w-[85%] mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <div className="flex md:justify-start items-center">
                        <a className="font-GothamBook text-white leading-loose pr-3 text-[10px] 3xl:text-[14px]">Disclaimer</a>
                        <a className="font-GothamBook text-white leading-loose px-3 text-[10px] 3xl:text-[14px]">Terms and Conditions</a>
                        <a href="https://www.mchb.com.my/privacy-notice/" target="_blank" className="font-GothamBook text-white leading-loose px-3 text-[10px] 3xl:text-[14px] cursor-pointer">PDPA</a>
                        <a className="font-GothamBook text-white leading-loose text-[10px] 3xl:text-[14px] pl-3">APDL</a>
                    </div>
                    <div>
                        <p className="font-GothamBook text-white leading-loose text-[10px] 3xl:text-[14px] text-center lg:text-right">&copy; 2023 Matrix Concepts Holdings Berhad 199601042262 (414615-U). All Right Reserved</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Footer;