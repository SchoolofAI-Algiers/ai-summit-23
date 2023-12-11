import bg from "./background.png"
import logo from "./ai-summit-white.svg"
const About = () => {
    return (
        <div className="px-7 py-6 lg:py-0 my-12 w-full sm:h-[400px] lg:h-[900px] flex flex-col items-center justify-center" id="about"> 
              <h1 className="title font-kanit lg:text-6xl xl:text-7xl font-bold text-white text- font-outline-2x stroke-2 stroke-black uppercase"> 
              Ai Summit </h1>
            
                <div className="flex lg:flex-row item-center justify-center lg:p-10 space-x-0 lg:space-x-28">
                  
                    <p className="sm:w-[100%] lg:w-[60%] text-[0.6rem] text-justify lg:text-2xl font-kanit font-bold text-ai-blue">AI Summit is an innovative event showcasing the forefront of AI innovations. This expansive gathering is designed to present a series of insightful talks and engaging poster presentations, serving as a platform to explore the latest advancements in AI technology. It will be divided into two parts: an enriching online session and an in-person summit scheduled for December 16th at ESI Algiers.</p>
                    
                    <div className="lg:w-[40%] flex justify-center items-center  ">
                      <img src={logo} alt="" className=" w-[30%] lg:w-full animate-bounce" />
                    </div>   
                </div>

        </div>
      
    );
}

export default About;