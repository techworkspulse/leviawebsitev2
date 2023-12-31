import { useScroll, useTransform, useAnimation, motion, Variants } from "framer-motion";
import GalleryTab from "./GalleryTab";

const GalleryContent = () => {
    return(
        <>
            <section id="gallery">
                <div className="container w-[90%] sm:w-[85%] mx-auto">
                    <GalleryTab/>
                    {/* <GallerySlider/> */}
                </div>
            </section>
        </>
    )
}
export default GalleryContent;