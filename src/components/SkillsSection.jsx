import { useState } from "react"
import { cn } from "@/lib/utils"

const skills = [
    {name: "HTML/CSS", level: 100, category: "frontend"},
    {name: "JavaScript", level: 95, category: "frontend"},
    {name: "React", level: 95, category: "frontend"},
    {name: "TypeScript", level: 80, category: "frontend"},
    {name: "Tailwind CSS", level: 80, category: "frontend"},

    {name: "Python", level: 100, category: "backend"},
    {name: "Django", level: 90, category: "backend"},
    {name: "Node.js", level: 70, category: "backend"},
    {name: "Dart", level: 60, category: "backend"},
    {name: "C", level: 50, category: "backend"},
    {name: "C++", level: 45, category: "backend"},
    {name: "SQL", level: 45, category: "backend"},

    {name: "VS Code", level: 100, category: "tools"},
    {name: "GitHub", level: 90, category: "tools"},
    {name: "Flutter", level: 70, category: "tools"},
]

const categories = ["all", "frontend", "backend", "tools"]

export const SkillsSection = () => {

    // State for filter
    const [activeCategory, setActiveCategory] = useState("all")

    const filteredSkills = skills
        .filter(
            (skill) => activeCategory === "all" || skill.category === activeCategory
        )
        .sort((a, b) => b.level - a.level);


    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>
                

                {/* For filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button 
                            key={key} 
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize button-border-light",
                                activeCategory === category ? "bg-primary text-primary-foreground" :
                                "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                            >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div 
                            key={key} 
                            className="bg-card p-6 rounded-lg shadow-xs card-hover card-border-light">


                            {/* Skills title */}
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg mb-2">{skill.name}</h3>
                                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                    <div 
                                        className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" 
                                        style={{width: skill.level + "%"}}
                                    />
                                </div>


                                {/* Skills level */}
                                <div className="text-right mt-1">
                                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}