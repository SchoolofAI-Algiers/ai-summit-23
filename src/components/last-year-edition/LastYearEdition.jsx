import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './dots.css';

const LastYearEdition = ({ images }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'max-w-screen',
    autoplay:true,
    appendDots: dots => (
      <div style={{ position: 'absolute', bottom: '5%' }}>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  const carouselClassName = 'w-screen bg-black aspect-[16/6.5] overflow-hidden';
  const imageContainerStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  return (
    <div className="overflow-hidden my-10">
      <h2 className=" text-center font-bold text-[40px] sm:text-[60px] lg:text-[80px] text-[#2F4E91] font-kanit">2022 Edition</h2>
      <Slider {...sliderSettings} className="mx-[6%]  rounded-[25px] overflow-hidden">
        {images.map((url, index) => (
          <div key={index} className={carouselClassName}>
            <div style={imageContainerStyle}>
              <img src={url} style={imageStyle} />
              <div className="absolute top-0 left-0 w-full h-1/5 bg-gradient-to-b from-[#2F4E91] to-transparent opacity-50"></div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LastYearEdition;
