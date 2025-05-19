import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaCode } from "react-icons/fa"
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
          href: "https://instagram.com/your-instagram",
          icon: <FaInstagram />,
          label: "Instagram",
        },
        {
          href: "https://linkedin.com/in/your-linkedin",
          icon: <FaLinkedin />,
          label: "LinkedIn",
        },
    ];
    return(
        <nav className="fixed top-0 left-0 right-0 z-50  shadow py-6 h-20 bg-opacity-10 border-b-2 border-blue-500 backdrop-blur-md">
            <div className="flex justify-between w-full items-center">
                <div className="flex items-center">
                    <h2 className="ml-5 text-2xl items-center font-bold text-black text-right ">
                    Ishaan Sharma 
                    </h2>
                    <div className="flex ">
                        {socialLinks.map(({ href, icon, label }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`items-center ml-2 md:ml-4 text-2xl font-bold text-blue-500 hover:text-black transition-colors duration-200`}
                            aria-label={label}
                        >
                            {icon}
                        </a>
                        ))}
                    </div>
                </div>
                <div className="items-center flex space-x-6 ">
                    <h2 className="text-2xl  hover:-translate-y-2 transition-all hover:text-teal-900">
                        Home
                    </h2>
                    <h2 className="text-2xl  hover:-translate-y-2 transition-all hover:text-teal-900">
                        About
                    </h2>
                    <h2 className="text-2xl  hover:-translate-y-2 transition-all hover:text-teal-900 mr-5">
                        Projects
                    </h2>
                </div>
            </div>

        </nav>
    )
}