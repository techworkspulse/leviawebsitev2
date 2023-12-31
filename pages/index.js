import Head from 'next/head';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StickyButton from '@/src/components/StickyButton';
import { useState, useEffect, useRef } from 'react';
import { useScroll, useTransform, useAnimation, motion, Variants } from "framer-motion"; 
import Navmenu from '../src/components/Navmenu';
import { useInView } from "react-intersection-observer";
import LocationContent from "@/src/components/LocationComp/LocationContent";
import RegContent from "@/src/components/RegisterComp/RegContent";
import GalleryContent from "@/src/components/GalleryComp/GalleryContent";
import FloorplanContent from "@/src/components/FloorplanComp/FloorplanContent";
import FacContent from "@/src/components/FacilitiesComp/FacContent";
import FeaturesContent from "@/src/components/FeaturesComp/FeaturesContent";
import Contact from '@/src/components/ContactContent';
import Footer from '@/src/components/Footer';

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: false, // Keep triggering as long as it's in view
    threshold: 0, // Adjust this threshold as needed
  });

  const [showMenu, setShowMenu] = useState(false);

  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const paragraf = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1
      },
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      // Adjust the scroll position at which you want to show the menu
      const scrollPositionToShowMenu = 800; // Adjust this value as needed
  
      if (window.scrollY >= scrollPositionToShowMenu) {
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const controls = useAnimation();

  if (inView) {
    controls.start({
      opacity: 1,
      scale: 0.8,
      x: '40%',
      transition: { duration: 2, ease: 'easeIn' },
    });
  }


  return (
    <>
      <Head>
        <title>Levia Residence | Matrix Concepts</title>
        <meta name="description" content="Levia Residence | Matrix Concepts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Levia Residence | Matrix Concepts" />
        <meta property="og:image" content="/img/share.png" /> 
        <meta property="og:image:width" content="500" /> 
        <meta property="og:image:height" content="500" /> 
        <meta property="og:description" content="In the vibrant suburban area of Cheras, where you are leisurely connected to the best of both worlds" />  
        <meta property="og:url" content="https://leviaresidence.com/" /> 
        <meta property="og:image:url" content="/img/share.png" />

        <meta name="title" content="Levia Residence | Matrix Concepts" />
        <meta name="description" content="In the vibrant suburban area of Cheras, where you are leisurely connected to the best of both worlds" />
        <meta name="keywords" content="Kuala Lumpur, Residence, Southern KL, Cheras, MRT, Matrix" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="author" content="Digital Symphony" />
        <link rel="icon" href="/img/favicon.png" />
      </Head>

      {showMenu && 
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navmenu />
      </motion.div>
      }

      <section
        className="flex h-screen items-center py-0 mx-auto justify-center flex-col relative">
          <div className="relative">
            <motion.h1
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 1, delay: 2 }} 
              className="font-GothamBook uppercase text-center tracking-[3px] sm:tracking-[5px] text-[#bda37f] text-[25px] sm:text-[30px] xl:text[35px] 2xl:text-[35px] 3xl:text-[50px]"
            >
              An Inspired Oasis <br></br>at the City&apos;s Heart
            </motion.h1>
            <motion.div
              ref={ref}
              initial={{ scale: 1, x: 0 }} 
              animate={controls}
              className="absolute top-[-100%]"
            >
              <Image
                src="/img/home/star.png"
                className="w-[80%] mx-auto"
                alt="Star"
                width={1920}
                height={1000}
              />
            </motion.div>
          </div>
      </section>

      <motion.section
        className="h-fit sm:h-screen flex items-center sm:py-0"
        variants={variants}
        initial="hidden"
        whileInView="show"
        id="concept"
      >
        <div className="w-[90%] sm:w-[85%] mx-auto flex flex-col sm:flex-row items-center gap-5">
          <div className="w-full sm:w-[60%]">
            <motion.div
              variants={paragraf}
              className="flex justify-center sm:justify-end mb-8 sm:mb-14"
            >
              <Image
                src="/img/levia-logo.svg"
                className="w-[50%] sm:w-[35%] ml-0"
                alt="Facebook"
                width={800}
                height={1000}
              />
            </motion.div>
            <motion.div variants={paragraf}>
              <p className="font-GothamBook text-center sm:text-right text-white leading-normal mb-10 lg:leading-loose text-[15px] sm:text-[17px] md:text-[18px] lg:text-[17px]">
                LEVIA comes from a combination<br></br> of the words Leisure and Via, the latter meaning by way of.
              </p>
            </motion.div>
            <motion.div variants={paragraf}>
              <p className="font-GothamBook text-center sm:text-right text-white leading-normal lg:leading-loose text-[15px] sm:text-[17px] md:text-[18px] lg:text-[17px]">
                This name emphasizes the highly accessible nature of the development, especially with
                surrounding lifestyle amenities and opportunities, inviting people to start a life journey that is easier, enjoyable, and exciting.
              </p>
            </motion.div>
          </div>
          <div className="w-full sm:w-[40%]">
            <motion.div variants={paragraf}>
              <Image
                src="/img/rsz_levia_building_sketch_kurttry.png"
                className="w-full sm:w-[300px] ml-0 mx-auto"
                alt="Building"
                width={1920}
                height={1000}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Video  */}
      <div>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto object-cover object-top"
        >
          <source src="/img/Location-Map-Levia_3.mp4" type="video/mp4" />
        </video>
      </div>

      <motion.section
        className="h-fit sm:h-screen flex items-center sm:py-0"
        variants={variants}
        initial="hidden"
        whileInView="show"
        id="concept"
      >
        <div className="w-[90%] sm:w-[85%] mx-auto flex flex-col sm:flex-row items-center gap-5">
          <div className="w-full sm:w-[80%] mx-auto">
            <video
            loop
            playsInline
            controls
            poster="/img/leviapreview.png"
            className="w-full h-auto object-cover object-top"
          >
            <source src="https://s3.ap-southeast-1.amazonaws.com/leviaresidence.com/assets/Levia-full-video-opt-01-FA.mp4" type="video/mp4" />
          </video>
          </div>
        </div>
      </motion.section>
      
      <FeaturesContent />

      <FacContent />

      <FloorplanContent />

      <GalleryContent />

      <LocationContent />

      <RegContent />

      <Contact />
      
      <StickyButton></StickyButton>
      <Footer></Footer>

      <div id="whatsapp-btn" className="sticky-icons flex flex-row">
        <a href="https://api.whatsapp.com/send?phone=60392123077&text=Hello%20Levia%20Residence!%20I%27m%20browsing%20through%20your%20website%20and%20want%20to%20know%20further%20about%20your%20products" target="_blank">
          <div className="sticky-icon cursor-pointer">
              <Image className="rotate-image" src="./img/whatsapp.svg" width="250" height="250" alt="whatsapp" /> 
          </div>
        </a>
      </div> 

    </>
  )
}
