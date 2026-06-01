import { motion } from "framer-motion"

const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.13 } },
}

const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
}

const stats = [
    { value: "2nd", label: "Year CS student at USF" },
    { value: "6+", label: "Languages in deployed applications" },
    { value: "1", label: "Hackathon Win" },
]

const tags = ["Software Engineering", "Web Dev", "Mobile Dev", "AI", "UX Design", "Blockchain", "Data Science"]

export const AboutSection = () => {
    return (
        <section id="about" className="py-35 px-4 relative">
            <div className="container mx-auto max-w-4xl">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-16 text-center"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    About <span className="text-primary">Me</span>
                </motion.h2>

                {/* Clean two-column stat + text layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-14">
                    {/* Left: quick facts */}
                    <motion.div
                        className="space-y-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {stats.map(({ value, label }) => (
                            <motion.div key={value} className="about-stat-card" variants={itemVariants}>
                                <span className="text-3xl font-bold text-primary">{value}</span>
                                <p className="text-sm text-muted-foreground mt-1">{label}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Right: narrative, broken into short digestible chunks */}
                    <motion.div
                        className="md:col-span-2 space-y-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.15 }}
                    >
                        <motion.p className="text-foreground/90 text-lg leading-relaxed font-medium" variants={itemVariants}>
                            Passionate Computer Science student that loves building things that actually matter
                        </motion.p>

                        <motion.div className="space-y-4 text-muted-foreground leading-relaxed" variants={itemVariants}>
                            <p>
                                I focus on <span className="text-foreground font-medium">software engineering</span> and care deeply about web & mobile development as well as UX Design - the craft of making software feel effortless
                            </p>
                            <p>
                                This summer, I will be joining <span className="text-foreground font-medium">BTG Pactual</span> as a Summer Intern, where I will be developing my software development skills through the company's Mobile Development team
                            </p>
                            <p>
                                My journey has been defined by learning through building. From Python and React to Flutter, I push my skills through real projects and organizations such as <span className="text-foreground font-medium">BRASA Connect</span>
                            </p>
                        </motion.div>

                        <motion.div className="flex flex-wrap justify-center gap-3 pt-4" variants={itemVariants}>
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
                        </motion.div>
                    </motion.div>
                </div>

                {/* Interest tags row */}
                <motion.div
                    className="border-t border-border/40 pt-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.p
                        className="text-xs uppercase tracking-widest text-muted-foreground mb-4 text-center"
                        variants={itemVariants}
                    >
                        Interests
                    </motion.p>
                    <motion.div className="flex flex-wrap justify-center gap-2" variants={containerVariants}>
                        {tags.map((tag) => (
                            <motion.span
                                key={tag}
                                variants={itemVariants}
                                whileHover={{ scale: 1.06, borderColor: "hsl(var(--primary) / 0.5)" }}
                                className="px-4 py-1.5 rounded-full text-sm border border-border/60 text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors duration-200 cursor-default"
                            >
                                {tag}
                            </motion.span>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
