import Navbar from "../components/Navbar.component"
import { useState, useEffect } from 'react';
import Hero from "../components/Hero.component";
import SvgConvexUp from "../components/SvgConvexUp";
import SvgConvexDown from "../components/SvgConvexDown";
import AboutUs from "../components/AboutUs.component";
import Initiatives from "../components/Initiatives.component";
import Footer from "../components/Footer.component";
import ImageGallery1 from "../components/ImageGallery1.component";
import ImageGallery2 from "../components/ImageGallery2.component";
import Members from "../components/Members.component";
import Fade from 'react-reveal/Fade';

export default function Landing() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>

            <div className="p-5 absolute top-0 left-0 overflow-hidden" style={{ background: "#c1c8e4", width: width, height: height }} id="landing">
                <div className="border rounded-xl bg-white overflow-x-hidden overflow-y-scroll" style={{ width: width - 50, height: height - 50 }}>
                    <Fade top>
                        <Navbar />
                    </Fade>
                    <Hero />
                    <SvgConvexUp />
                    <AboutUs />
                    <SvgConvexDown />
                    <Fade bottom>
                        <Initiatives />
                    </Fade>
                    <Fade bottom>
                        <ImageGallery1 />
                    </Fade>
                    <SvgConvexUp />
                    <Members />
                    <SvgConvexDown />
                    <Fade bottom>

                        <ImageGallery2 />
                    </Fade>
                    <Footer />
                </div>
            </div>

        </>
    );
}