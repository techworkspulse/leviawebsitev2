import { Navbar } from "flowbite-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
const Navmenu = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const navbarClass = `hidden md:block md:p-0 fixed h-[100px] w-full border-gray-200 z-[40] shadow-sm transition ease-in-out delay-150 ${
      isScrolled ? 'bg-black bg-opacity-100 ' : 'bg-[#0000006e] to-opacity-50'
    }`;

    return(
        <>
        <nav className={navbarClass}>
            <div className="flex justify-center items-center h-full">
                <Link className="font-GothamBook uppercase tracking-wider text-[20px] md:text-[14px] 3xl:text-[16px] mr-7" href="/">Concept</Link>
                <Link className="font-GothamBook uppercase tracking-wider text-[20px] md:text-[14px] 3xl:text-[16px] mr-7" href="/features">Features</Link>
                <Link className="font-GothamBook uppercase tracking-wider text-[20px] md:text-[14px] 3xl:text-[16px] mr-7" href="/facilities">Facilities</Link>
                <Link className="font-GothamBook uppercase tracking-wider text-[20px] md:text-[14px] 3xl:text-[16px] mr-7" href="">Floor Plans</Link>
                <Link className="mr-7" href="https://flowbite-react.com">
                    <Image src="img/levia-logo-2.svg" className="object-contain max-h-[120px] max-w-[180px] mx-5" alt="Facebook" width="200" height="200"/>
                </Link>
                <Link className="font-GothamBook uppercase tracking-wider text-[20px] md:text-[14px] 3xl:text-[16px] mr-7" href="/">Gallery</Link>
                <Link className="font-GothamBook uppercase tracking-wider text-[20px] md:text-[14px] 3xl:text-[16px] mr-7" href="/location">Location</Link>
                <Link className="font-GothamBook uppercase tracking-wider text-[20px] md:text-[14px] 3xl:text-[16px] mr-7" href="/register">Register</Link>
                <Link className="font-GothamBook uppercase tracking-wider text-[20px] md:text-[14px] 3xl:text-[16px]" href="/contact">Contact</Link>
            </div>
        </nav>
        </>
    )
}
export default Navmenu;