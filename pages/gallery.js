import Head from "next/head";
import Image from "next/image";
import GalleryTab from "@/src/components/GalleryComp/GalleryTab";
import Navmenu from '../src/components/Navmenu';
import { useScroll, useTransform, useAnimation, motion, Variants } from "framer-motion";
export default function Gallery() {
    return(
        <>
            <Head>
                <title>Gallery</title>
                <meta name="description" content="Gallery | Levia Residence" />
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

            <section className="pt-0"></section>

            <section>
                <div className="container w-[90%] sm:w-[85%] mx-auto">
                    <GalleryTab/>
                </div>
            </section>
        </>
    );
}