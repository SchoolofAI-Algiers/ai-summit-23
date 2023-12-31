import React from "react";

const SpeakerCard = ({ speaker }) => {
  return (
    <div
      key={speaker.id}
      className="rounded-xl border-2 p-3 border-blue space-x-4 my-2 bg-[#F8F8F8] flex flex-col hover:scale-[1.04] transition ease-out duration-200"
      style={{ maxWidth: "300px" }} // Adjust max-width as needed
    >
      <img
        className="rounded-lg w-full h-auto lg:h-[300px] md:h-[200px] "
        src={speaker.img}
        alt={speaker.name}
        // Responsive image
      />
      <div className="py-3 pr-2 h-full">
        <p className="text-lg md:text-xs lg:text-[1.120rem] lg:leading-6 font-kanit text-black mb-4 text-center min-h-[5rem] flex items-center justify-center">
          {speaker.profession}
        </p>
        <div className="rounded-xl bg-orange h-14 flex items-center justify-center">
          <p className="text-lg md:text-sm lg:text-lg font-kanit text-center text-white">{speaker.name}</p>
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;
