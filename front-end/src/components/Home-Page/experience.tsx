export default function Experience() {
    const experiences = [
        {
            institution: "IIT Ropar",
            period: "May 2024- July 2024",
            role: "Research Intern",
            location: "Ropar, Punjab",
            responsibilities: [
                "Applied ML algorithms such as RF and ANN to predict stock prices",
                "Combined traditional trading strategies like MACD and TEMA to create profitable hybrid trading strategy for BSESENSEX stocks.",
                "Developed a hybrid pair trading strategy using ML clustering algorithms like K-Means and Affinity Propagation."
            ]
        },
        {
            institution: "IIT Ropar",
            period: "May 2024- July 2024",
            role: "Research Intern",
            location: "Ropar, Punjab",
            responsibilities: [
                "Applied ML algorithms such as RF and ANN to predict stock prices",
                "Combined traditional trading strategies like MACD and TEMA to create profitable hybrid trading strategy for BSESENSEX stocks.",
                "Developed a hybrid pair trading strategy using ML clustering algorithms like K-Means and Affinity Propagation."
            ]
        }
    ];

    return (
        <div className="flex flex-col">
            <div className="flex flex-row items-center mb-5">
                <h1 className="text-5xl font-bold color-white">
                    Experience<span className="text-blue-400 font-bold text-5xl">.</span>
                </h1>
                <div className="flex-1 h-[2px] bg-white/50 w-full"></div>
            </div>
            
            {experiences.map((exp, index) => (
                <div key={index} className="flex flex-col space-y-2 mt-4">
                    <div className="flex flex-row items-center ml-7 justify-between">
                        <h1 className="text-3xl font-bold color-white">
                            {exp.institution}
                        </h1>
                        <h1 className="text-xl">
                            {exp.period}
                        </h1>
                    </div>

                    <div className="flex flex-row items-center ml-7 justify-between">
                        <h1 className="text-2xl font-bold text-blue-400">
                            {exp.role}
                        </h1>
                        <h1 className="text-xl color-white">
                            {exp.location}
                        </h1>
                    </div>

                    <div className="ml-3">
                        <ul className="list-disc list-inside mb-2 ml-4 text-l">
                            {exp.responsibilities.map((responsibility, respIndex) => (
                                <li key={respIndex}>
                                    {responsibility}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bar h-[0.5px] bg-white/20 w-full"></div>
                </div>
            ))}
        </div>
    );
}
