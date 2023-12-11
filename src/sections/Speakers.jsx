import SpeakerCard from "../components/speakers/SpeakerCard.jsx";
import { speakers,next, prev } from "../data/data.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect  } from "react";
import React from "react";





const Speakers = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setSlidesToShow(1);
        setSmallScreen(true);
      } else {
        setSlidesToShow(3);
        setSmallScreen(false); // Default number of slides
      }
    };

    // Initial check on component mount
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const getPaddingClass = () => {
    return smallScreen ? "sm:px-32" : "sm:px-20";
  };
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 px-4 py-2 rounded"
        onClick={onClick}
        style={{ left: -65,  zIndex: 1}}
      >
        <img src={prev} className="h-11 w-11"></img>
      </button>
    );
  };
  
  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 rounded"
        onClick={onClick}
        style={{ right: -65, zIndex: 1 }}
      >
        <img src={next} className="h-11 w-11"></img>
      </button>
    );
  };
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  };
  return (
    
    <section
      id="speakers"
      className="py-14 sm:px-20 lg:px-[12vw] pt-[84px]  flex flex-col font-libre-franklin"
    >
      <h1 className="text-6xl font-bold text-center font-kanit text-stroke text-white mb-8" style={{
        WebkitTextStroke: "2px black", // For Safari/Chrome
        textStroke: "2px black" // For other browsers
      }}>Speakers</h1>
      
      
      <Slider {...settings}>
    {/* Added flex container */}
        {speakers.map((speaker) => (
          <div key={speaker.id} className="h-full px-2">
            <SpeakerCard speaker={speaker} />
          </div>
        
        ))}
       
      </Slider>
      
        
      
    </section>
    
  );
};

export default Speakers;
