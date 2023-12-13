import SpeakerCard from "./SpeakerCard.jsx";
import { speakers,next, prev,lines_speakers } from "../../data/data.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect  } from "react";

const Speakers = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);
  // eslint-disable-next-line
  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setSlidesToShow(1);
        setSmallScreen(true);
      } else {
        setSlidesToShow(3);
        setSmallScreen(false);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 px-4 py-2 rounded"
        onClick={onClick}
        style={{ left: -65,  zIndex: 1}}
      >
        <img src={prev} className="h-11 w-11" alt="prev" />
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
        <img src={next} className="h-11 w-11" alt="next" />
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
      className="relative py-14 px-20 sm:px-20 lg:px-[12vw] pt-[30px] md:pt-[84px]  flex flex-col font-libre-franklin"
    >
      <img src={lines_speakers} alt="" className="absolute top-[11%] invisible md:visible right-0 w-[28%]"></img>
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
