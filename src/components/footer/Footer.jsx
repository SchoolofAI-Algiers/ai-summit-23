import {socials ,logos, lines, lines2} from "../../data/data";
import React, { useState, useEffect } from "react";

const Footer = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <footer id="footer" className="bg-orange relative">
      {windowWidth > 768 ? (
        <>
          <img
            src={lines}
            alt="Bottom Left Image"
            className="absolute bottom-0 left-0 w-40 h-64"
          />

          <img
            src={lines}
            alt="Top Right Image"
            className="absolute top-0 right-0 w-40 h-64"
          />
        </>
      ) : null}

        <div className="bottom-0 z-10 mt-8 w-full px-10 pt-16 flex flex-col items-center justify-center">
          <div className="flex gap-x-20 justify-center items-center">
            {/* Your logos */}
            {logos.map((logo, i) => (
              <div key={i} className="flex items-center justify-center">
                <img src={logo} alt="Logo" />
              </div>
            ))}
          </div>

          <hr className="w-1/3 my-4 border-blue" />

          <div className="pb-7 text-4xl text-blue font-kanit font-bold mt-8">Follow us</div>

          <div className="flex flex-wrap items-center justify-center gap-6">  
              {socials.map((social, i) => (
                <div key={i} className="flex items-center justify-center">
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className="p-[10px] rounded-full border-blue text-white bg-blue transition-all border-[2px] hover:bg-transparent hover:text-blue"
                  >
                    {social.icon}
                  </a>
                </div>
              ))}
            </div>
          </div>
        
      <h5 className="bottom-0 px-2 pb-5 mt-6 text-center font-kanit text-[14px] md:text-[20px] font-semibold ">
        © School of AI - Algiers | 2023.
      </h5>
    </footer>
  );
};

export default Footer;
