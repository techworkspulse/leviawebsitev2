const Footer = () => {
    return(
        <section className="bg-black py-0 h-[50px] flex items-center">
            <div className="container w-[85%] mx-auto">
                <div className="flex items-center justify-between">
                    <div>
                        <a className="font-GothamBook text-white leading-loose  border border-r border-l-0 border-t-0 border-b-0 border-white pr-3 3xl:text-[14px]">Disclaimer</a>
                        <a className="font-GothamBook text-white leading-loose  border border-r border-l-0 border-t-0 border-b-0 border-white px-3 3xl:text-[14px]">Terms and Coniditions</a>
                        <a className="font-GothamBook text-white leading-loose  border border-r border-l-0 border-t-0 border-b-0 border-white px-3 3xl:text-[14px]">PDPA</a>
                        <a className="font-GothamBook text-white leading-loose 3xl:text-[14px] pl-3">APD</a>
                    </div>
                    <div>
                        <p className="font-GothamBook text-white leading-loose 3xl:text-[14px]">&copy; 2023 Matrix Concepts Holdings Berhad 199601042262 (414615-U). All Right Reserved</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Footer;