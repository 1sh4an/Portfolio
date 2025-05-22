import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaCode } from "react-icons/fa"
import { SiLeetcode } from 'react-icons/si';
import { Link } from "react-router-dom";
export default function Navbar(){
    const socialLinks = [
        {
          href: "https://codeforces.com/profile/ish4an",
          icon: <FaCode />,
          label: "Codeforces",
        },
        {
          href: "https://github.com/1sh4an",
          icon: <FaGithub />,
          label: "GitHub",
        },
        {
          href: "https://leetcode.com/u/1sh4an/",
          icon: <SiLeetcode />,
          label: "Leetcode",
        },
        {
          href: "https://linkedin.com/in/your-linkedin",
          icon: <FaLinkedin />,
          label: "LinkedIn",
        },
    ];
    return(
        <nav className="fixed top-0 left-0 right-0 z-50  shadow py-6 h-20 bg-opacity-0 border-b-2 border-blue-300 backdrop-blur-md">
            <div className="flex justify-between w-full items-center">
                <div className="flex items-center">
                    <h2 className="ml-5 text-2xl items-center font-bold text-white text-right ">
                    Ishaan Sharma 
                    </h2>
                    <div className="flex ">
                        {socialLinks.map(({ href, icon, label }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`items-center ml-2 md:ml-4 text-2xl font-bold text-gray-500 hover:text-blue-500 transition-colors duration-200`}
                            aria-label={label}
                        >
                            {icon}
                        </a>
                        ))}
                    </div>
                </div>
                <div className="items-center flex space-x-6 ">
                    <Link to={"/"}>
                    <h2 className="cursor-pointer text-2xl  hover:-translate-y-0.5 transition-all hover:text-blue-400">
                        Home
                        </h2>
                    </Link>
                        
                    <Link to={"/About"}>
                    <h2 className="cursor-pointer text-2xl  hover:-translate-y-0.5 transition-all hover:text-blue-400">
                    About
                    </h2>
                    </Link>
                    
                    <Link to={"/Projects"}>
                        <h2 className="cursor-pointer text-2xl  hover:-translate-y-0.5 transition-all hover:text-blue-400 mr-5">
                        Projects
                        </h2>
                    </Link>
                    
                </div>
            </div>

        </nav>
    )
}