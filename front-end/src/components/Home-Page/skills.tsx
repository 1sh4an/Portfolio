import { FaDotCircle } from "react-icons/fa";

const skillsData = [
  { name: "C++", proficiency: 90 },
  { name: "JavaScript", proficiency: 50 },
  { name: "React", proficiency:60 },
  { name: "Python", proficiency: 75 },
  { name: "Tailwind", proficiency: 66 },
];

const SkillItem = ({ name, proficiency }:{name:string,proficiency: number}) => (
  <div className="flex flex-row w-full items-center h-16 space-x-3 group relative cursor-pointer">
    <div className="ml-7 transition-all duration-300 flex items-center">
      <FaDotCircle className="w-2 h-2 text-blue-400 group-hover:w-3 group-hover:h-3 transition-all duration-300" />
    </div>
    <h1 className="font-serif text-2xl w-32 group-hover:text-3xl transition-all duration-300">
      {name}
    </h1>
    <div className="bar w-full h-1 bg-white/30 rounded-full overflow-hidden group-hover:h-3 transition-all duration-300">
      <div
        className="bar h-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 rounded-full"
        style={{ width: `${proficiency}%` }}
      ></div>
    </div>
  </div>
);

export default function Skills() {
  return (
    <div className="flex flex-col items-center w-full py-10">
      <div className="flex flex-row items-center w-full m-10">
        <h1 className="text-5xl font-bold whitespace-nowrap flex items-center">
          Skills<span className="text-blue-400 font-bold text-5xl">.</span>
        </h1>
        <div className="flex-1 h-[2px] bg-white/50 ml-2 w-full"></div>
      </div>
      
      <div className="flex flex-col w-full items-center py-5 space-y-4 h-auto justify-center">
        {skillsData.map((skill, index) => (
          <SkillItem 
            key={index} 
            name={skill.name} 
            proficiency={skill.proficiency} 
          />
        ))}
      </div>
    </div>
  );
}
