export const AboutSection = () => {
    return (
        <section id="about" className="py-45 px-4 relative">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                {/* Clean two-column stat + text layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-14">
                    {/* Left: quick facts */}
                    <div className="space-y-8">
                        <div className="about-stat-card">
                            <span className="text-3xl font-bold text-primary">2nd</span>
                            <p className="text-sm text-muted-foreground mt-1">Year CS student at USF</p>
                        </div>
                        <div className="about-stat-card">
                            <span className="text-3xl font-bold text-primary">6+</span>
                            <p className="text-sm text-muted-foreground mt-1">Languages in deployed applications</p>
                        </div>
                        <div className="about-stat-card">
                            <span className="text-3xl font-bold text-primary">1</span>
                            <p className="text-sm text-muted-foreground mt-1">Hackathon Win</p>
                        </div>
                    </div>

                    {/* Right: narrative, broken into short digestible chunks */}
                    <div className="md:col-span-2 space-y-6">
                        <p className="text-foreground/90 text-lg leading-relaxed font-medium">
                            Passionate Computer Science student that loves building things that actually matter
                        </p>

                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            <p>
                                I focus on <span className="text-foreground font-medium">software engineering</span> and care deeply about web & mobile development as well as UX Design - the craft of making software feel effortless
                            </p>
                            <p>
                                This summer, I will be joining <span className="text-foreground font-medium">BTG Pactual</span> as a Summer Intern, where I will be developing my software development skills through the company's Mobile Development team
                            </p>
                            <p>
                                My journey has been defined by learning through building. From Python and React to Flutter, I push my skills through real projects and organizations such as <span className="text-foreground font-medium">BRASA Connect</span>
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-3 pt-4">
                            <a href="#contact" className="cosmic-button">
                                Contact me
                            </a>
                            <a
                                href="/TarikResume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2 rounded-full border border-primary/40 text-primary hover:bg-primary/10 transition-colors duration-300 text-sm font-medium"
                            >
                                View Resume
                            </a>
                        </div>
                    </div>
                </div>

                {/* Interest tags row */}
                <div className="border-t border-border/40 pt-10">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 text-center">Interests</p>
                    <div className="flex flex-wrap justify-center gap-2">
                        {["Software Engineering", "Web Dev", "Mobile Dev", "AI", "UX Design", "Blockchain", "Data Science"].map((tag) => (
                            <span
                                key={tag}
                                className="px-4 py-1.5 rounded-full text-sm border border-border/60 text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors duration-200"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
