import Slider from "react-slick";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imageGallery1 = [
    {
        image: "https://ik.imagekit.io/g9jzyzcnt/img13.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671869347335",
    },
    {
        image: "https://ik.imagekit.io/g9jzyzcnt/img15.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671869346890",
    },
    {
        image: "https://ik.imagekit.io/g9jzyzcnt/img14.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671869346543"
    },
    {
        image: "https://ik.imagekit.io/g9jzyzcnt/img12.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671869346075"
    },
    {
        image: "https://ik.imagekit.io/g9jzyzcnt/img6.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671869344996"
    },
    {
        image: "https://ik.imagekit.io/g9jzyzcnt/img11.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671869344934"
    },
]


export default function ImageGallery1() {
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


    return (
        <div>
            <Slider {...settings} className="m-2">
                {imageGallery1.map(image =>
                    <div key={image.image} className="m-2 p-2">
                        <img src={image.image} alt={image.image} className="m-auto rounded-lg object-cover" style={{ height: '400px', width: "400px" }} />
                    </div>
                )}
            </Slider>
        </div>
    )
}