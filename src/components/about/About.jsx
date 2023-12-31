const About = () => {
    return (
        <div className="px-7 py-12 my-0 md:my-12 lg:py-0  w-full bg-about lg:h-[900px] flex flex-col items-center justify-center" id="about"> 
              <h1 className="title mt-20 mb-2 md:mt-[96] lg:mt-5 text-2xl font-kanit lg:text-6xl xl:text-7xl font-bold text-ai-blue md:text-white text- font-outline-2x stroke-2 stroke-black uppercase"> 
              Ai Summit </h1>
                <div className="flex flex-col md:flex-row item-center justify-center lg:p-10 space-x-0 lg:space-x-28">
                    <p className="sm:w-[100%] text-lg md:text-base  lg:w-[60%] text-[0.6rem] text-justify lg:text-2xl font-kanit font-bold text-gray-700 md:text-ai-blue">AI Summit is an innovative event showcasing the forefront of AI innovations. This expansive gathering is designed to present a series of insightful talks and engaging poster presentations, serving as a platform to explore the latest advancements in AI technology. It will be divided into two parts: an enriching online session and an in-person summit scheduled for December 16th at ESI Algiers.</p>
                    <div className="lg:w-[40%] hidden md:flex justify-center items-center  ">
                      <img src="/images/ai-summit-white.svg" alt="logo" className="mt-10 mb-10 h-20 md:h-[50%] lg:w-full animate-bounce" />
                    </div>   
                </div>
        </div>
      
    );
}

export default About;