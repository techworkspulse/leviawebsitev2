import Link from "next/link";

const Footer = () => {
    return(
        <section className="bg-black py-5 flex items-center">
            <div className="container w-[85%] mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between mb-3">
                    <div className="flex md:justify-start items-center">
                        <a className="font-GothamBook text-white leading-loose pr-3 text-[10px] 3xl:text-[14px]">Disclaimer</a>
                        <a className="font-GothamBook text-white leading-loose px-3 text-[10px] 3xl:text-[14px]">Terms and Conditions</a>
                        <a href="https://www.mchb.com.my/privacy-notice/" target="_blank" className="font-GothamBook text-white leading-loose px-3 text-[10px] 3xl:text-[14px] cursor-pointer">PDPA</a>
                    </div>
                    <div>
                        <p className="font-GothamBook text-white leading-loose text-[10px] 3xl:text-[14px] text-center lg:text-right">&copy; 2023 Matrix Concepts Holdings Berhad 199601042262 (414615-U). All Right Reserved</p>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start">
                    <p className="font-GothamBook text-white text-[10px] text-left mb-3">Developer: Matrix Concepts (Cheras) Sdn Bhd (1230052-H) | Address: Wisma Matrix, No. 57, Jalan Tun Dr Ismail, 70200 Seremban, Negeri Sembilan | Tel. No.: 06-7642688 | Property Type: Condominium | Developer License No.: 30392/03-2028/0069(N) | Validity Period: 08/03/2023-07/03/2028 | Sales & Advertising Permit No.: 30392-1/07-2026/0810(N)-(S) | Validity Period: 14/07/2023 - 13/07/2026 | Approval: DBKL | Building Plan Ref. No.: DBKL.JKB.BP S2 OSC 2022 1411 (20) | Leasehold: 99 Years (Expires on 30 January 2122) | Estimated Completion Date: July 2027 | Land Encumbrances: NIL | Total Units: 778 | Tower A: 389 units Price from: RM 300,000 (min) - RM 1,132,000 (max) | Tower B: 389 units RM 300,000 (min) - RM 1,177,000 (max) | Bumiputera Discount: 5%</p>
                    <p className="font-GothamBook text-white text-[10px] text-left mb-3">All renderings contained in this advertisement are artist&#39;s impressions only. The information contained herein is subject to change without notification as may be required by the relevant authorities or developer&#39;s project consultant. Whilst every care is taken in providing this information, the owner, developer and manager cannot be held responsible for any variations. For avoidance of doubt on the specifications and development status, please always refer to the Sale and Purchase Agreement.</p>
                    <p className="font-GothamBook text-white text-[10px] text-left">THIS ADVERTISEMENT HAS BEEN APPROVED BY THE NATIONAL HOUSING DEPARTMENT.</p>
                </div>
            </div>
        </section>
    )
}
export default Footer;