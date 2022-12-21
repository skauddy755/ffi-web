import Slider from "react-slick";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageGallery() {
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
        slidesToScroll: 1
    };
    return (
        <Slider {...settings} className="m-2">
            <div>
                <img src="https://i.ibb.co/W0dfj5C/306333390-618439066493988-8705239883440918245-n.jpg" alt="306333390-618439066493988-8705239883440918245-n" className="m-auto rounded-lg" style={{ height: '400px', width: "400px" }} />
            </div>
            <div>
                <img src="https://i.ibb.co/W0dfj5C/306333390-618439066493988-8705239883440918245-n.jpg" alt="306333390-618439066493988-8705239883440918245-n" className="m-auto rounded-lg" style={{ height: '400px', width: "400px" }} />
            </div>
            <div>
                <img src="https://i.ibb.co/W0dfj5C/306333390-618439066493988-8705239883440918245-n.jpg" alt="306333390-618439066493988-8705239883440918245-n" className="m-auto rounded-lg" style={{ height: '400px', width: "400px" }} />
            </div>
            <div>
                <img src="https://i.ibb.co/W0dfj5C/306333390-618439066493988-8705239883440918245-n.jpg" alt="306333390-618439066493988-8705239883440918245-n" className="m-auto rounded-lg" style={{ height: '400px', width: "400px" }} />
            </div>
            <div>
                <img src="https://i.ibb.co/W0dfj5C/306333390-618439066493988-8705239883440918245-n.jpg" alt="306333390-618439066493988-8705239883440918245-n" className="m-auto rounded-lg" style={{ height: '400px', width: "400px" }} />
            </div>
            <div>
                <img src="https://i.ibb.co/W0dfj5C/306333390-618439066493988-8705239883440918245-n.jpg" alt="306333390-618439066493988-8705239883440918245-n" className="m-auto rounded-lg" style={{ height: '400px', width: "400px" }} />
            </div>
        </Slider>
    )
}