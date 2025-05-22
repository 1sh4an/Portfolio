import { BackgroundBeams } from "../ui/background-beams";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <div className="relative h-[95vh] w-full mt-20 flex items-center">
      <BackgroundBeams />
      <div className="z-10 flex flex-col text-left">
        <h1 className="text-7xl text-white ">Hello, I am</h1>
        <h1 className="text-7xl text-white font-bold mt-4">
          <span className="text-blue-400 font-bold text-8xl">
            Ishaan Sharma
          </span>
        </h1>
        <h1 className="text-5xl text-white font-bold mt-4">
          <span className="text-blue-400 font-bold text-5xl">Student</span> at
          <span className="text-blue-400 font-bold text-5xl"> IIT Ropar</span>
        </h1>
        <p className="text-xl text-white mt-8 w-[700px]">
          A final year Electrical Engineering undergraduate passionate about
          competitive programming, problem-solving, and technology, always eager
          to learn, innovate, and tackle new challenges in the field.
        </p>
        <Button
          className="mt-6 w-[150px] hover:!bg-blue-400 transition-colors duration-300 cursor-pointer"
          onClick={() =>
            (window.location.href = "mailto:ishaansharma.is2004@gmail.com")
          }
        >
          Contact Me
        </Button>
      </div>
    </div>
  );
}
