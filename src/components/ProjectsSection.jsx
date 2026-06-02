import { projects, categories } from "./projectsData"
import { ArrowRight, ExternalLink, Github, X } from "lucide-react"
import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { cn } from "@/lib/utils"

export const ProjectsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all")
    const [selectedProject, setSelectedProject] = useState(null)

    // Lock page scroll while modal is open
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = "hidden"
            window.__lenis?.stop()
        } else {
            document.body.style.overflow = ""
            window.__lenis?.start()
        }
        return () => {
            document.body.style.overflow = ""
            window.__lenis?.start()
        }
    }, [selectedProject])

    const filteredProjects = projects.filter(
        (p) => activeCategory === "all" || p.category.includes(activeCategory)
    )

    return (
        <section id="projects" className="py-35 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto text-sm">
                    Each project was carefully developed with a lot of passion.
                </p>

                {/* Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((cat, k) => (
                        <button
                            key={k}
                            onClick={() => setActiveCategory(cat)}
                            style={{ cursor: "pointer" }}
                            className={cn(
                                "px-5 py-2 rounded-full text-sm transition-all duration-300 capitalize",
                                activeCategory === cat
                                    ? "bg-primary text-primary-foreground shadow-[0_0_12px_rgb(var(--glow-rgb)/0.35)]"
                                    : "border border-border/60 text-muted-foreground hover:border-primary/40 hover:text-primary"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Project grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project) => (
                        <button
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            style={{ cursor: "pointer" }}
                            className="group text-left bg-card rounded-xl overflow-hidden border border-border/40 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(2,164,255,0.1)] hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        >
                            <div className="h-44 overflow-hidden bg-secondary/30 relative flex">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 block"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <span className="text-xs text-primary font-medium tracking-wider uppercase">View details →</span>
                                </div>
                            </div>
                            <div className="p-5">
                                <h3 className="text-base font-semibold mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <div className="text-muted-foreground text-xs leading-relaxed mb-4">
                                    <p className="line-clamp-3">
                                        {project.description[0]}
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-1.5">
                                    {project.tags.slice(0, 3).map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2.5 py-0.5 text-xs rounded-full border border-primary/25 text-primary/80 bg-primary/5"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                    {project.tags.length > 3 && (
                                        <span className="px-2.5 py-0.5 text-xs rounded-full border border-border/40 text-muted-foreground">
                                            +{project.tags.length - 3}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </button>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://github.com/TarikCO"
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                    >
                        Check my GitHub <ArrowRight size={16} />
                    </a>
                </div>
            </div>

            {/* Project Modal — rendered in document.body via portal so position:fixed
                works correctly outside the CSS-transformed canvas ancestor */}
            {selectedProject && createPortal(
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
                    onClick={() => setSelectedProject(null)}
                    onWheel={(e) => e.stopPropagation()}
                >
                    <div
                        className="bg-card border border-border/60 rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto no-scrollbar shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                        onWheel={(e) => e.stopPropagation()}
                    >
                        {/* Modal image */}
                        <div className="h-56 md:h-72 overflow-hidden rounded-t-2xl relative">
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 p-2 rounded-full bg-background/70 text-foreground hover:text-primary transition-colors"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Modal content */}
                        <div className="p-8">
                            <h3 className="text-2xl font-bold mb-3">{selectedProject.title}</h3>
                            <div className="text-muted-foreground leading-relaxed mb-6 flex flex-col gap-3">
                                {selectedProject.description.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>

                            {selectedProject.tags.length > 0 && (
                                <div className="mb-6">
                                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Tech Stack</p>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 text-sm rounded-full border border-primary/30 text-primary/90 bg-primary/8"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="flex gap-3 pt-2">
                                {selectedProject.demoUrl && selectedProject.demoUrl !== "#" && (
                                    <a
                                        href={selectedProject.demoUrl}
                                        target="_blank"
                                        className="flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:shadow-[0_0_12px_rgba(2,164,255,0.4)] transition-all duration-300"
                                    >
                                        <ExternalLink size={15} /> Live Demo
                                    </a>
                                )}
                                {selectedProject.githubUrl && selectedProject.githubUrl !== "#" && (
                                    <a
                                        href={selectedProject.githubUrl}
                                        target="_blank"
                                        className="flex items-center gap-2 px-5 py-2 rounded-full border border-border/60 text-sm font-medium hover:border-primary/40 hover:text-primary transition-all duration-300"
                                    >
                                        <Github size={15} /> View Code
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </section>
    )
}
