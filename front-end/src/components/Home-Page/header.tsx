import { BackgroundBeams} from "../ui/background-beams"
import { Button } from "../ui/button"

export default function Header(){
    return(
        <div className="h-[700px] flex w-full mt-20 items-center">
            <div className="flex-row space-y-0 text-left w-[800px]">
                <h1 className="text-7xl text-white font-bold">
                    Hey,
                </h1>
                <h1 className="text-7xl text-white font-bold mt-2">
                    I'm 
                    <span className="text-blue-400 font-bold text-8xl ml-4">Ishaan Sharma</span>
                </h1>
                <h1 className="text-5xl text-white font-bold mt-4">
                    I'm a 
                    <span className="text-blue-400 font-bold text-5xl ml-4">Student</span>

                    {" "}at 
                    <span className="text-blue-400 font-bold text-5xl ml-4">IIT Ropar</span>
                </h1>
                <p className="text-1xl text-white  mt-8 w-[600px]">
                    I am a 4th-year Electrical Engineering undergraduate passionate about 
                    competitive programming, problem-solving, and technology, always eager to learn, 
                    innovate, and tackle new challenges in the field.
                </p>
                <Button className="mt-6 w-[150px] hover:!bg-blue-500 transition-colors duration-200">
                    Contact Me
                </Button>
            </div>
            <BackgroundBeams/>
        </div>
    )
}