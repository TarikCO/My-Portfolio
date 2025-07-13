import { projects, categories } from "./projectsData"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"


export const ProjectsSection = () => {

    // Make filter
    const [activeCategory, setActiveCategory] = useState("all")

    const filteredProjects = projects.filter((project) => activeCategory === "all" || project.category === activeCategory)

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured
                    <span className="text-primary"> Projects </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my projects. Each one of them was carefully developed and
                    programmed, valuing performance, efficiency, and user experience.
                </p>


                {/* Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize card-border-light",
                                activeCategory === category ? "bg-primary text-primary-foreground" :
                                    "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>



                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, key) => (
                        <div
                            key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover card-border-light"
                        >
                            <div className="h-48 overflow-hidden">
                                <img src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform 
                                               duration-500 group-hover:scale-110" />
                            </div>


                            {/* Title and Description */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-6">
                                    {project.description}
                                </p>


                                {/* Looping through tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-3 py-1 text-s font-medium border border-primary
                                                rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>


                                {/* Links */}
                                <div className="flex justify-center space-x-3">
                                    {project.demoUrl && project.demoUrl !== "#" && (
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                    {project.githubUrl && project.githubUrl !== "#" && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={20} />
                                        </a>
                                    )}
                                </div>


                            </div>
                        </div>
                    ))}
                </div>


                {/* GitHub Button */}
                <div className="text-center mt-12">
                    <a href="https://github.com/TarikCO"
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank">
                        Check my GitHub <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    )
}