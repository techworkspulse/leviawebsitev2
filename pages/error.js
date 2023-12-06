import Head from 'next/head';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StickyButton from '@/src/components/StickyButton';
import { useState, useEffect, useRef } from 'react';
import { useScroll, useTransform, useAnimation, motion, Variants } from "framer-motion"; 
import Navmenu from '../src/components/Navmenu';
import { useInView } from "react-intersection-observer";
import Contact from '@/src/components/ContactContent';
import Footer from '@/src/components/Footer';
import { useRouter } from 'next/router';

export default function Error() {
  const [ref, inView] = useInView({
    triggerOnce: false, // Keep triggering as long as it's in view
    threshold: 0, // Adjust this threshold as needed
  });
  const router = useRouter()

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
        <title>Error | Levia Residence</title>
        <meta name="description" content="Error | Levia Residence" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Thank You | Levia Residence" />
        <meta property="og:image" content="/img/share.png" /> 
        <meta property="og:image:width" content="500" /> 
        <meta property="og:image:height" content="500" /> 
        <meta property="og:description" content="In the vibrant suburban area of Cheras, where you are leisurely connected to the best of both worlds" />  
        <meta property="og:url" content="https://leviaresidence.com/" /> 
        <meta property="og:image:url" content="/img/share.png" />

        <meta name="title" content="Error | Levia Residence" />
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

      <motion.section
        className="h-fit sm:h-screen flex items-center sm:py-0"
        variants={variants}
        initial="hidden"
        whileInView="show"
        id="concept"
      >
        <div className="w-[90%] sm:w-[85%] mx-auto flex flex-col sm:flex-row items-center gap-5">
          <div className="w-full">
            <motion.div
              variants={paragraf}
              className="flex justify-center mb-8 sm:mb-14"
            >
              <Image
                src="/img/levia-logo.svg"
                className="w-[50%] sm:w-[35%] ml-0"
                alt="Facebook"
                width={800}
                height={1000}
              />
            </motion.div>
            <motion.h3 
                    variants={paragraf}
                    className="font-ButlerBold text-[#CD9B76] text-[27px] sm:text-[32px] 2xl:text-[37px] 3xl:text-[52px] mb-5 uppercase text-center"
                  >
                      Error
                  </motion.h3>
            <motion.div variants={paragraf}>
              <p className="font-GothamBook text-center text-white leading-normal lg:leading-loose text-[15px] sm:text-[17px] md:text-[18px] lg:text-[17px] w-[50%] mx-auto mb-5">
              Page Not Found
              </p>
            </motion.div>
            <div>
              <button onClick={() => router.back()} className="flex items-center justify-center w-[150px] mx-auto uppercase py-3 px-5 text-white  bg-[#CD9B76] leading-none">
                Back</button>
            </div>
          </div>
        </div>
      </motion.section>

      <Contact />
      
      <StickyButton></StickyButton>
      <Footer></Footer>
    </>
  )
}
