import Head from 'next/head';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroSlider from '@/src/components/FeaturesComp/HeroSlider';
import FeaturesCard from '@/src/components/FeaturesComp/FeaturesCard';
import FeaturesCardMobile from '@/src/components/FeaturesComp/FeaturesCardMobile';
import Navmenu from '../src/components/Navmenu';
import { useScroll, useTransform, useAnimation, motion, Variants } from "framer-motion";

export default function Features() {
  return (
    <>
      <Head>
        <title>Features</title>
        <meta name="description" content="Features | Levia Residence" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navmenu />
      </motion.div>

      <section className="relative py-0">
        <Image src="/img/big-star.svg" className="w-[20%] absolute right-[-12%] mx-auto bottom-[14.5%] 3xl:bottom-[19.5%] z-[2]" alt="Facebook" width="500" height="500"/>
        <HeroSlider />
      </section>

      <section className="relative pt-0 mt-0 lg:mt-14">
      <Image src="/img/big-star.svg" className="w-[20%] absolute left-[-12%] mx-auto bottom-[14.5%] 3xl:bottom-[19.5%] z-[2]" alt="Facebook" width="500" height="500"/>
        <div className="container w-[90%] sm:w-[85%] mx-auto">
          <div className="w-full lg:w-[80%] xl:w-[70%] md:gap-4 hidden lg:flex flex-wrap justify-center m-auto">
            <FeaturesCard
              img={"/img/features/usp1.png"}
              icon={"/img/features/usp1-icon.svg"}
              title={"Strategically"}
              subtitle={"Located in South KL"}
              img2={"/img/features/usp1-back.png"}
              icon2={"/img/features/usp1-back-icon.svg"}
              title2={"Low-Density"}
              subtitle2={"778 Units On 4.71-Acres Land"}
            />
            <FeaturesCard
              img={"/img/features/usp2.png"}
              icon={"/img/features/usp2-icon.svg"}
              title={"Comprehensive"}
              subtitle={"Lifestyle Facilities"}
              img2={"/img/features/usp2-back.png"}
              icon2={"/img/features/usp2-back-icon.svg"}
              title2={"Green-Re"}
              subtitle2={"Green-Re"}
            />
            <FeaturesCard
              img={"/img/features/usp3.png"}
              icon={"/img/features/usp3-icon.svg"}
              title={"Good Connectivity"}
              subtitle={"& Accessibility to Major Highways"}
              img2={"/img/features/usp3-back.png"}
              icon2={"/img/features/usp3-back-icon.svg"}
              title2={"Residential"}
              subtitle2={"Title"}
            />
            <FeaturesCard
              img={"/img/features/usp4.png"}
              icon={"/img/features/usp4-icon.svg"}
              title={"Up to"}
              subtitle={"4 Car Parks"}
              img2={"/img/features/usp4-back.png"}
              icon2={"/img/features/usp4-back-icon.svg"}
              title2={"North & South"}
              subtitle2={"Orientation"}
            />
          </div>
          <div className="w-full lg:w-[80%] xl:w-[70%] md:gap-4 flex lg:hidden flex-wrap justify-center sm:justify-between m-auto">
            <FeaturesCardMobile
              img={"/img/features/usp1.png"}
              icon={"/img/features/usp1-icon.svg"}
              title={"Strategically"}
              subtitle={"Located in South KL"}
            />
            <FeaturesCardMobile
              img={"/img/features/usp1-back.png"}
              icon={"/img/features/usp1-back-icon.svg"}
              title={"Low-Density"}
              subtitle={"778 Units On 4.71-Acres Land"}
            />
            <FeaturesCardMobile
              img={"/img/features/usp2.png"}
              icon={"/img/features/usp2-icon.svg"}
              title={"Comprehensive"}
              subtitle={"Lifestyle Facilities"}
            />
            <FeaturesCardMobile
              img={"/img/features/usp2-back.png"}
              icon={"/img/features/usp2-back-icon.svg"}
              title={"Green-Re"}
              subtitle={"Green-Re"}
            />
            <FeaturesCardMobile
              img={"/img/features/usp3.png"}
              icon={"/img/features/usp3-icon.svg"}
              title={"Good Connectivity"}
              subtitle={"& Accessibility to Major Highways"}
            />
            <FeaturesCardMobile
              img={"/img/features/usp3-back.png"}
              icon={"/img/features/usp3-back-icon.svg"}
              title={"Residential"}
              subtitle={"Title"}
            />
            <FeaturesCardMobile
              img={"/img/features/usp4.png"}
              icon={"/img/features/usp4-icon.svg"}
              title={"Up to"}
              subtitle={"4 Car Parks"}
            />
            <FeaturesCardMobile
              img={"/img/features/usp4-back.png"}
              icon={"/img/features/usp4-back-icon.svg"}
              title={"North & South"}
              subtitle={"Orientation"}
            />
          </div>
        </div>
      </section>
    </>
  )
}
