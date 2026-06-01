import { forwardRef, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// ─── Experience data ──────────────────────────────────────────────────────────
const experiences = [
    {
        role: "Software Engineer Intern",
        company: "Tech Company",
        date: "May 2025 – Aug 2025",
        location: "San Francisco, CA",
        description:
            "Built and maintained full-stack features for a B2B SaaS platform. Reduced API response time by 35% through query optimisation and caching strategies. Collaborated with product and design on an internal tooling dashboard used by 200+ employees.",
        tags: ["React", "Node.js", "PostgreSQL", "Redis"],
    },
    {
        role: "Undergraduate Research Assistant",
        company: "University of South Florida",
        date: "Jan 2025 – Present",
        location: "Tampa, FL",
        description:
            "Conducting research on machine-learning approaches to automated code review. Implemented a fine-tuned LLM pipeline that classifies code-smell patterns with 91% accuracy on a custom benchmark dataset.",
        tags: ["Python", "PyTorch", "NLP", "Git"],
    },
    {
        role: "Hackathon Winner — BullHacks",
        company: "USF College of Engineering",
        date: "Oct 2024",
        location: "Tampa, FL",
        description:
            "Led a 4-person team to first place out of 32 teams. Built a real-time disaster-response coordination app with live map overlays, WebSocket incident feeds, and an AI triage assistant — all in 24 hours.",
        tags: ["React", "Socket.IO", "OpenAI API", "Leaflet"],
    },
    {
        role: "Freelance Mobile Developer",
        company: "Self-employed",
        date: "Jun 2023 – Dec 2024",
        location: "Remote",
        description:
            "Designed and shipped three cross-platform mobile apps for small-business clients, handling the full cycle from wireframing and UX design to App Store / Play Store deployment.",
        tags: ["React Native", "Expo", "Firebase", "Figma"],
    },
]

// ─── ExperienceSection ────────────────────────────────────────────────────────
export const ExperienceSection = () => {
    const sectionRef = useRef(null)
    const lineRef    = useRef(null)
    const cardsRef   = useRef([])
    const dotsRef    = useRef([])

    useEffect(() => {
        const ctx = gsap.context(() => {

            // Animate the center line growing downward with scroll progress.
            // scaleY goes from 0 to 1 anchored at the top, scrub ties it to scroll.
            gsap.fromTo(
                lineRef.current,
                { scaleY: 0 },
                {
                    scaleY: 1,
                    ease: "none",
                    transformOrigin: "top center",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        scrub: 0.6,
                    },
                }
            )

            // Dot pop-in: each dot scales from 0→1 + fades in, scrubbed so it
            // reverses when the user scrolls back up — same feel as the line.
            dotsRef.current.forEach((dot) => {
                if (!dot) return
                gsap.fromTo(
                    dot,
                    { opacity: 0, scale: 0 },
                    {
                        opacity: 1, scale: 1,
                        ease: "none",
                        transformOrigin: "center center",
                        scrollTrigger: {
                            trigger: dot,
                            start: "top 85%",
                            end: "top 65%",
                            scrub: 0.6,
                        },
                    }
                )
            })

            // Card reveal: left-side cards slide from the left, right-side from the right.
            // On mobile everything fades up from below.
            cardsRef.current.forEach((wrapper, i) => {
                if (!wrapper) return
                const isMobile = window.innerWidth < 768
                const isLeft   = i % 2 === 0
                const x = isMobile ? 0  : isLeft ? -50 : 50
                const y = isMobile ? 32 : 0

                gsap.fromTo(
                    wrapper,
                    { opacity: 0, x, y },
                    {
                        opacity: 1, x: 0, y: 0,
                        duration: 0.75,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: wrapper,
                            start: "top 88%",
                            toggleActions: "play none none none",
                        },
                    }
                )
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            id="experience"
            ref={sectionRef}
            className="py-24 px-4 bg-background"
            aria-label="Professional experience"
        >
            <div className="container mx-auto max-w-5xl">

                <h2 className="text-3xl md:text-4xl font-bold mb-20 text-center">
                    Work <span className="text-primary">Experience</span>
                </h2>

                <div className="relative">

                    {/* Center line (desktop) — scaleY-animated by GSAP */}
                    <div
                        ref={lineRef}
                        aria-hidden="true"
                        className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/25 to-transparent will-change-transform"
                    />

                    {/* Left edge line (mobile) */}
                    <div
                        aria-hidden="true"
                        className="md:hidden absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent"
                    />

                    <ol className="relative flex flex-col gap-14 md:gap-16">
                        {experiences.map((exp, i) => {
                            const isLeft = i % 2 === 0

                            return (
                                <li key={i} className="relative flex items-start">

                                    {/* Spacer — pushes right-side cards across the center */}
                                    {isLeft && (
                                        <div className="hidden md:block md:w-1/2 md:pr-10 shrink-0" />
                                    )}

                                    {/* Timeline dot */}
                                    <span
                                        ref={(el) => (dotsRef.current[i] = el)}
                                        aria-hidden="true"
                                        className="absolute left-2.5 md:left-1/2 top-5 md:-translate-x-1/2 h-3.5 w-3.5 rounded-full bg-primary ring-4 ring-background shrink-0 z-10 will-change-transform"
                                    />

                                    {/* Card — single render, GSAP ref attached here */}
                                    <div
                                        ref={(el) => (cardsRef.current[i] = el)}
                                        className={[
                                            "pl-10 md:pl-0 md:w-1/2 shrink-0 will-change-transform",
                                            isLeft ? "md:pl-10" : "md:pr-10",
                                        ].join(" ")}
                                    >
                                        <ExperienceCard exp={exp} flipped={isLeft} />
                                    </div>

                                    {/* Spacer — fills left side for right-side cards */}
                                    {!isLeft && (
                                        <div className="hidden md:block md:w-1/2 md:pl-10 shrink-0" />
                                    )}
                                </li>
                            )
                        })}
                    </ol>
                </div>
            </div>
        </section>
    )
}

// ─── ExperienceCard ───────────────────────────────────────────────────────────
const ExperienceCard = forwardRef(({ exp, flipped }, ref) => (
    <article
        ref={ref}
        className={[
            "group bg-card border border-card-border rounded-2xl p-6",
            "transition-all duration-300",
            "hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/6 hover:border-primary/25",
            flipped ? "md:text-right" : "",
        ].join(" ")}
    >
        <h3 className="text-base font-semibold text-foreground leading-snug mb-0.5">
            {exp.role}
        </h3>

        <p className="text-primary text-sm font-medium mb-3">
            {exp.company}
        </p>

        <div className={`flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground mb-4 ${flipped ? "md:justify-end" : ""}`}>
            <time>{exp.date}</time>
            <span aria-hidden="true" className="opacity-40">·</span>
            <span>{exp.location}</span>
        </div>

        <p className="text-sm text-foreground/70 leading-relaxed mb-4">
            {exp.description}
        </p>

        <ul
            className={`flex flex-wrap gap-1.5 ${flipped ? "md:justify-end" : ""}`}
            aria-label="Technologies used"
        >
            {exp.tags.map((tag) => (
                <li
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full text-xs bg-primary/8 text-primary/75 border border-primary/15 transition-colors duration-200 group-hover:border-primary/30"
                >
                    {tag}
                </li>
            ))}
        </ul>
    </article>
))

ExperienceCard.displayName = "ExperienceCard"
