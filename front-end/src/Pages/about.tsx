import Navbar from "../components/common/navbar"
import Footer from "../components/common/footer";
import { WobbleCard } from "../components/ui/wobble-card";
import mount from "../assets/mount.jpg"

const BlueDot = <span className="text-blue-400 font-bold text-5xl">.</span>;
const Intro = [
  "I am currently in my final year at IIT Ropar, specializing in Electrical Engineering. My journey at one of India’s premier institutes has been both challenging and rewarding, providing me with a strong technical foundation and a platform to explore my varied interests. One of the areas that has particularly captivated me is competitive programming. I enjoy the thrill of tackling complex problems and the satisfaction that comes from finding efficient solutions under time constraints. This passion has not only honed my analytical thinking but has also taught me resilience and perseverance—qualities that I believe are essential in both academic and professional spheres.",
  "I am a firm believer in the value of exploration and versatility. Throughout my academic journey, I have made a conscious effort to try my hand at different domains, ranging from core electrical engineering projects to software development and even interdisciplinary collaborations. This approach has helped me gain a broader perspective and has allowed me to identify my strengths and areas of interest more clearly. I am always eager to step out of my comfort zone, learn new skills, and take on fresh challenges.",
  "Outside the classroom and coding contests, I am passionate about sports and fitness. Football is my favorite sport, and I relish both the physical intensity and the strategic thinking it demands. Playing football has taught me the importance of teamwork, leadership, and maintaining a competitive spirit. When I’m not on the field, you’ll often find me at the gym, working towards my fitness goals and enjoying the discipline and routine that comes with it.",
  "I strive to maintain a balanced lifestyle, blending academic pursuits with extracurricular activities. I am enthusiastic about continuous learning and personal growth, and I look forward to leveraging my skills and experiences to make a meaningful impact in the future."
];

export default function About(){
    
    return(
        <div>
            <Navbar/>
            <div className="flex-flex-col">
            <div className="flex flex-row h-auto mt-[15vh]">
                    <div className="w-1/2 flex items-center justify-center">
                    <WobbleCard 
                    imageSrc={mount}
                    containerClassName="h-[50vh] bg-transparent w-[50vh]"
                    className="">
                        <h1>

                        </h1>
                    </WobbleCard>
                   
            </div>
            <div className="w-1/2 flex flex-col justify-center items-left">
                <h1 className="text-white font-bold text-5xl ">
                    About me{BlueDot}
                </h1>
                <div className="w-[80%]">
                    {Intro.map((step) => (
                        <h1 className="mr-4 mt-4">
                            {step}
                        </h1>
                    ))}
                </div>
                </div>
                </div>
                <div className="bar h-[0.5px] bg-white/20 w-full mt-[10vh]"></div>
            </div>
            
            <Footer/>
        </div>
    )
}