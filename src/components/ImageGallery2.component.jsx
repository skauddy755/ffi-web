import Slider from "react-slick";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fade } from "react-reveal";



export default function ImageGallery2() {
    const [width, setWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const fetchSlidesToShow = () => {
        if (width > 1100)
            return 3;
        else if (width > 700)
            return 2;
        else
            return 1;
    }

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: fetchSlidesToShow(),
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        centerMode: true,
    };

    const imageGallery2 = [
        {
            image: "https://ik.imagekit.io/g9jzyzcnt/img10.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671869344064",
        },
        {
            image: "https://ik.imagekit.io/g9jzyzcnt/img1.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671869343935",
        },
        {
            image: "https://ik.imagekit.io/g9jzyzcnt/img8.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671869343672"
        },
        {
            image: "https://ik.imagekit.io/g9jzyzcnt/img5.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671869343247"
        },
        {
            image: "https://ik.imagekit.io/g9jzyzcnt/img4.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671869342747"
        },
        {
            image: "https://ik.imagekit.io/g9jzyzcnt/img3.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671869342345"
        },
        {
            image: "https://ik.imagekit.io/g9jzyzcnt/img2.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671869341903"
        },
        {
            image: "https://ik.imagekit.io/g9jzyzcnt/img9.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671869341885"
        },
    ]

    return (
        <div>
            <Fade bottom>
                <h2 className="text-center xl:text-left xl:mb-0 pt-24 xl:pt-10 pb-10 mx-4 text-5xl md:text-8xl font-bold tracking-tighter" style={{ color: "#374063" }}>Gallery</h2>
            </Fade>
            <Fade bottom>
                <Slider {...settings} className="m-2">
                    {imageGallery2.map(image =>
                        <div key={image.image} className="m-2 p-2">
                            <img src={image.image} alt={image.image} className="m-auto rounded-lg object-cover" style={{ height: '400px', width: "400px" }} />
                        </div>
                    )}
                </Slider>
            </Fade>
        </div>
    )
}