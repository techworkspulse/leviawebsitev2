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
  
    const navbarClass = `fixed h-[80px] xl:h-[100px] w-full border-gray-200 z-[40] shadow-sm transition ease-in-out delay-150 ${
      isScrolled ? 'bg-black bg-opacity-100 ' : 'bg-black lg:bg-[#0000006e] to-opacity-50'
    }`;

    const [isAbsoluteVisible, setAbsoluteVisible] = useState(false);

    const toggleAbsolute = () => {
      setAbsoluteVisible(!isAbsoluteVisible);
    };

    return(
        <>
        <nav className={navbarClass}>
            <div className="hidden lg:flex justify-center items-center h-full w-[85%] mx-auto">
                <Link className="font-GothamBook uppercase tracking-wider text-[14px] lg:text-[13px] xl:text-[16px] mr-6 xl:mr-6 2xl:mr-7" href="/">Concept</Link>
                <Link className="font-GothamBook uppercase tracking-wider text-[14px] lg:text-[13px] xl:text-[16px] mr-6 xl:mr-6 2xl:mr-7" href="/features">Features</Link>
                <Link className="font-GothamBook uppercase tracking-wider text-[14px] lg:text-[13px] xl:text-[16px] mr-6 xl:mr-6 2xl:mr-7" href="/facilities">Facilities</Link>
                <Link className="font-GothamBook uppercase tracking-wider text-[14px] lg:text-[13px] xl:text-[16px] mr-6 xl:mr-6 2xl:mr-7" href="/floorplan">Floor Plans</Link>
                <Link className="mr-6 xl:mr-6 2xl:mr-7" href="/">
                    <Image src="img/levia-logo-2.svg" className="object-contain max-h-[60px] xl:max-h-[70px] 3xl:max-h-[80px] w-full" alt="Facebook" width="200" height="200"/>
                </Link>
                <Link className="font-GothamBook uppercase tracking-wider text-[14px] lg:text-[13px] xl:text-[16px] mr-6 xl:mr-6 2xl:mr-7" href="/gallery">Gallery</Link>
                <Link className="font-GothamBook uppercase tracking-wider text-[14px] lg:text-[13px] xl:text-[16px] mr-6 xl:mr-6 2xl:mr-7" href="/location">Location</Link>
                <Link className="font-GothamBook uppercase tracking-wider text-[14px] lg:text-[13px] xl:text-[16px] mr-6 xl:mr-6 2xl:mr-7" href="/register">Register</Link>
                <Link className="font-GothamBook uppercase tracking-wider text-[14px] lg:text-[13px] xl:text-[16px]" href="/contact">Contact</Link>
            </div>
            <div className="relative flex lg:hidden justify-between items-center h-full">
              <Link className="pl-[5%]" href="/">
                    <Image src="img/levia-logo-2.svg" className="object-contain max-h-[40px] sm:max-h-[60px] xl:max-h-[70px] 3xl:max-h-[80px] w-full" alt="Facebook" width="200" height="200"/>
              </Link>
              <button className="pr-[5%] text-[#bda37f]" onClick={toggleAbsolute}>
                {isAbsoluteVisible ? (
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke-width="1.5" 
                    stroke="currentColor" 
                    class="w-10 h-10"
                  >
                    <path 
                      stroke-linecap="round" 
                      stroke-linejoin="round" 
                      d="M6 18L18 6M6 6l12 12" 
                    />
                  </svg>

                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                    />
                  </svg>
                )}
              </button>
              {isAbsoluteVisible && (
                  <div
                  className={`absolute right-0 top-[80px] w-[80%] sm:w-[50%] ml-0 h-screen bg-black transform transition-transform ${
                    isAbsoluteVisible
                      ? 'translate-x-0 transition-transform duration-700 ease-in-out'
                      : 'translate-x-full'
                  }`}
                >
                <div className="flex flex-col justify-around items-center h-full px-[50px]">
                  <Link className="font-GothamBook uppercase tracking-wider w-full text-[18px] sm:text-[20px] text-right" href="/">Concept</Link>
                  <Link className="font-GothamBook uppercase tracking-wider w-full text-[18px] sm:text-[20px] text-right" href="/features">Features</Link>
                  <Link className="font-GothamBook uppercase tracking-wider w-full text-[18px] sm:text-[20px] text-right" href="/facilities">Facilities</Link>
                  <Link className="font-GothamBook uppercase tracking-wider w-full text-[18px] sm:text-[20px] text-right" href="/floorplan">Floor Plans</Link>
                  <Link className="font-GothamBook uppercase tracking-wider w-full text-[18px] sm:text-[20px] text-right" href="/gallery">Gallery</Link>
                  <Link className="font-GothamBook uppercase tracking-wider w-full text-[18px] sm:text-[20px] text-right" href="/location">Location</Link>
                  <Link className="font-GothamBook uppercase tracking-wider w-full text-[18px] sm:text-[20px] text-right" href="/register">Register</Link>
                  <Link className="font-GothamBook uppercase tracking-wider w-full text-[18px] sm:text-[20px] text-right" href="/contact">Contact</Link>
                </div>
              </div>
              )}

            </div>
        </nav>
        </div>
    )
}
export default Navmenu;