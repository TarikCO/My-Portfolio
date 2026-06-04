import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const skills = [
    { name: "HTML/CSS", level: 85, category: "frontend" },
    { name: "JavaScript", level: 70, category: "frontend" },
    { name: "TypeScript", level: 70, category: "frontend" },
    { name: "Dart", level: 80, category: "frontend" },

    { name: "Python", level: 90, category: "backend" },
    { name: "Node.js", level: 65, category: "backend" },
    { name: "C", level: 55, category: "backend" },
    { name: "C++", level: 50, category: "backend" },
    { name: "SQL", level: 30, category: "backend" },
    
    { name: "Django", level: 50, category: "tools/frameworks" },
    { name: "Tailwind CSS", level: 70, category: "tools/frameworks" },
    { name: "Firebase", level: 90, category: "tools/frameworks" },
    { name: "Flutter", level: 90, category: "tools/frameworks" },
    { name: "React", level: 85, category: "tools/frameworks" },
    { name: "Figma", level: 50, category: "tools/frameworks" },
    { name: "Git", level: 75, category: "tools/frameworks" },
]

const categories = ["all", "frontend", "backend", "tools/frameworks"]

const isLight = document.documentElement.classList.contains("light")

// Radar/Web chart component
const RadarChart = ({ data }) => {
    const size = 380
    const center = size / 2
    const maxRadius = 140
    const rings = [0.25, 0.5, 0.75, 1]

    // Limit to top 8 for readability
    const items = data.slice(0, 8)
    const n = items.length

    const angleStep = (2 * Math.PI) / n

    const polar = (angle, r) => ({
        x: center + r * Math.cos(angle - Math.PI / 2),
        y: center + r * Math.sin(angle - Math.PI / 2),
    })

    const skillPoints = items.map((skill, i) => {
        const angle = i * angleStep
        const r = (skill.level / 100) * maxRadius
        return polar(angle, r)
    })

    const polygonPoints = skillPoints.map(p => `${p.x},${p.y}`).join(" ")

    const [animated, setAnimated] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setAnimated(true) },
            { threshold: 0.3 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return (
        <div ref={ref} className="flex justify-center">
            <svg
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
                className="overflow-visible"
                style={{ maxWidth: "100%" }}
            >
                {/* Ring guides */}
                {rings.map((fraction, ri) =>
                    <polygon
                        key={ri}
                        points={items.map((_, i) => {
                            const p = polar(i * angleStep, fraction * maxRadius)
                            return `${p.x},${p.y}`
                        }).join(" ")}
                        fill="none"
                        stroke="hsl(var(--primary))"
                        strokeOpacity={
                            isLight
                                ? 0.20 + ri * 0.06
                                : 0.08 + ri * 0.03
                        }
                        strokeWidth="1"
                    />
                )}

                {/* Axis lines */}
                {items.map((_, i) => {
                    const outer = polar(i * angleStep, maxRadius)
                    return (
                        <line
                            key={i}
                            x1={center} y1={center}
                            x2={outer.x} y2={outer.y}
                            stroke="hsl(var(--primary))"
                            strokeOpacity={
                                isLight
                                    ? 0.20 + i * 0.06
                                    : 0.08 + i * 0.03
                            }
                            strokeWidth="1"
                        />
                    )
                })}

                {/* Filled skill area */}
                <polygon
                    points={animated ? polygonPoints : items.map(() => `${center},${center}`).join(" ")}
                    fill="hsl(var(--primary))"
                    fillOpacity="0.12"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    strokeOpacity="0.7"
                    style={{ transition: animated ? "points 1s cubic-bezier(.4,0,.2,1)" : "none" }}
                />

                {/* Data points */}
                {skillPoints.map((p, i) => (
                    <circle
                        key={i}
                        cx={p.x} cy={p.y}
                        r="4"
                        fill="hsl(var(--primary))"
                        opacity={animated ? 1 : 0}
                        style={{ transition: `opacity 0.5s ease ${0.8 + i * 0.05}s` }}
                    />
                ))}

                {/* Labels */}
                {items.map((skill, i) => {
                    const angle = i * angleStep
                    const labelR = maxRadius + 28
                    const lp = polar(angle, labelR)
                    const anchor = lp.x < center - 5 ? "end" : lp.x > center + 5 ? "start" : "middle"
                    return (
                        <text
                            key={i}
                            x={lp.x}
                            y={lp.y}
                            textAnchor={anchor}
                            dominantBaseline="middle"
                            fontSize="11"
                            fontWeight="500"
                            fill="currentColor"
                            opacity="0.75"
                        >
                            {skill.name}
                        </text>
                    )
                })}

                {/* Ring % labels */}
                {rings.map((f, ri) => (
                    <text
                        key={ri}
                        x={center + 4}
                        y={center - f * maxRadius + 4}
                        fontSize="9"
                        fill="currentColor"
                        opacity="0.35"
                    >
                        {Math.round(f * 100)}%
                    </text>
                ))}
            </svg>
        </div>
    )
}

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all")

    const filteredSkills = skills
        .filter(s => activeCategory === "all" || s.category === activeCategory)
        .sort((a, b) => b.level - a.level)

    return (
        <section id="skills" className="py-35 px-4 relative bg-background">
            <div className="container mx-auto max-w-5xl">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-4 text-center"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    My <span className="text-primary">Skills</span>
                </motion.h2>
                <motion.p
                    className="text-center text-muted-foreground mb-12 text-sm max-w-md mx-auto"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                >
                    A visual representation of some of my skills in different areas
                </motion.p>

                {/* Category filter */}
                <motion.div
                    className="flex flex-wrap justify-center gap-3 mb-12"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
                >
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
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Radar chart */}
                    <div className="flex justify-center">
                        <RadarChart data={filteredSkills} key={activeCategory} />
                    </div>

                    {/* Skill list with bars */}
                    <div className="space-y-4">
                        {filteredSkills.slice(0, 8).map((skill, i) => (
                            <div key={i} className="group">
                                <div className="flex justify-between items-center mb-1.5">
                                    <span className="text-sm font-medium text-foreground/80 group-hover:text-primary transition-colors">
                                        {skill.name}
                                    </span>
                                    <span className="text-xs text-muted-foreground">{skill.level}%</span>
                                </div>
                                <div className="w-full h-1.5 rounded-full bg-secondary/60 overflow-hidden">
                                    <div
                                        className="h-full rounded-full bg-primary origin-left"
                                        style={{
                                            width: `${skill.level}%`,
                                            animation: "grow 1.2s ease-out forwards",
                                            animationDelay: `${i * 0.05}s`,
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
