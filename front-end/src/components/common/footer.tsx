import { FaEnvelope } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  const BlueDot = <span className="text-blue-400 font-bold text-5xl">.</span>;
  return (
    <div className="flex flex-col items-center overflow-hidden">
      <div className="flex flex-col justify-center space-y-4 items-center h-[50vh]">
        <h1 className="text-6xl white-space-nowrap color-white font-bold">
          Think{BlueDot} Code{BlueDot} Grow{BlueDot}
        </h1>
        <h1 className="text-xl white-space-nowrap color-white">
          Learning as I go, always open to feedback.
        </h1>
        <div className="group flex flex-row items-center h-4 m-2">
          <FaEnvelope className="w-5 h-5 group-hover:text-blue-400 transition-all duration-300" />
          <h1
            className="ml-2 text-l group-hover:text-blue-400 transition-all duration-300 cursor-pointer"
            onClick={() =>
              (window.location.href = "mailto:ishaansharma.is2004@gmail.com")
            }
          >
            ishaansharma.is2004@gmail.com
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center overflow-hidden w-full space-y-3">
        <div className="bar bg-blue-200 h-0.5 w-full"></div>
        <p className="mb-3">
          Built by{" "}
          <a
            href="https://github.com/1sh4an"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-gray-500 hover:text-blue-400 transition-colors transition-300 inline-flex items-center gap-1"
          >
            @1sh4an
            <FaGithub className=" w-4 h-4" />
          </a>
        </p>
      </div>
    </div>
  );
}
