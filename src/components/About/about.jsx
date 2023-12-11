import bg from "./background.png"
import logo from "./ai-summit-white.svg"
const About = () => {
    return (
        <div className="px-7 my-12 w-full h-[900px] flex flex-col items-center justify-center" id="about"> 
              <h1 className="font-kanit lg:text-6xl xl:text-7xl font-bold text-white font-outline-2 outline-black uppercase"> 
              Ai Summit </h1>
            
                <div className="flex flex-row item-center justify-center p-10  space-x-32">
                    <p className="w-[60%] text-2xl font-kanit text-ai-blue">AI Summit is an innovative event showcasing the forefront of AI innovations. This expansive gathering is designed to present a series of insightful talks and engaging poster presentations, serving as a platform to explore the latest advancements in AI technology. It will be divided into two parts: an enriching online session and an in-person summit scheduled for December 16th at ESI Algiers.</p>
                    <img src={logo} alt="" className="w-[30%] animate-bounce" />
                </div>

        </div>
      
    );
}

export default About;