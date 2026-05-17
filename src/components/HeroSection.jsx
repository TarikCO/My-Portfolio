import { ArrowDown } from "lucide-react"
import { useEffect, useState } from "react"

const useTypingEffect = (text, speed = 50, delay = 0) => {
    const [displayed, setDisplayed] = useState("")
    const [started, setStarted] = useState(false)
    const [done, setDone] = useState(false)

    useEffect(() => {
        const delayTimer = setTimeout(() => setStarted(true), delay)
        return () => clearTimeout(delayTimer)
    }, [delay])

    useEffect(() => {
        if (!started) return
        if (displayed.length < text.length) {
            const jitter = speed * (0.5 + Math.random() * 0.8)
            const timer = setTimeout(() => {
                setDisplayed(text.slice(0, displayed.length + 1))
            }, jitter)
            return () => clearTimeout(timer)
        } else {
            setDone(true)
        }
    }, [started, displayed, text, speed])

    return { displayed, done }
}

export const HeroSection = () => {
    const [scrollOpacity, setScrollOpacity] = useState(1)

    const line1 = useTypingEffect("Hi, I'm", 65, 400)
    const line2First = useTypingEffect("Tarik", 65, 400 + 7 * 65 + 150)
    const line2Last = useTypingEffect(" Oliveira", 65, 400 + 7 * 65 + 150 + 5 * 65)

    useEffect(() => {
        const handleScroll = () => {
            const fadeStart = 50
            const fadeEnd = 300
            const scrollY = window.scrollY
            const opacity = scrollY <= fadeStart ? 1 : scrollY >= fadeEnd ? 0 : 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart)
            setScrollOpacity(opacity)
        }
        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center overflow-visible"
        >
            {/* Subtle background grid */}
            <div className="absolute inset-0 hero-grid-bg opacity-30 pointer-events-none" />

            {/* Left content */}
            <div className="relative z-10 flex flex-col justify-center text-left px-8 md:px-16 lg:px-24 w-full md:w-1/2 py-32 md:py-0 left-20 bottom-10">
                <div className="mb-6 opacity-0 animate-fade-in">
                    <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary border border-primary/30 px-3 py-1.5 rounded-full bg-primary/5">
                        Portfolio
                    </span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
                    <span className="block text-foreground/90">
                        {line1.displayed}
                        {!line1.done && <span className="animate-blink">|</span>}
                    </span>
                    <span className="block">
                        <span className="text-primary">{line2First.displayed}</span>
                        <span className="text-foreground">{line2Last.displayed}</span>
                        {(line1.done && !line2Last.done) && <span className="animate-blink">|</span>}
                    </span>
                </h1>

                <p className="text-base md:text-lg text-muted-foreground max-w-md leading-relaxed mb-10 opacity-0 animate-fade-in-delay-5">
                    Computer Science student passionate about software
                    and mobile development, as well as AI, UX Design, and Blockchain.
                </p>

                <div className="flex items-center gap-4 opacity-0 animate-fade-in-delay-6">
                    <a href="#projects" className="cosmic-button">
                        View my work
                    </a>
                    <a
                        href="#about"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors underline underline-offset-4"
                    >
                        About me
                    </a>
                </div>

                <div
                    className="absolute -bottom-70 -left-14 flex flex-col items-center gap-2 animate-fade-in-delay-4 z-50 transition-opacity duration-300"
                    style={{ opacity: scrollOpacity }}
                >
                    <span className="text-xs tracking-widest text-muted-foreground uppercase">Scroll</span>
                    <ArrowDown className="h-4 w-4 text-primary animate-bounce" />
                </div>
            </div>

            {/* Right portrait area + SVG lines — single fade-in wrapper to preserve z-order */}
            <div className="absolute inset-0 opacity-0 animate-fade-in-delay-1">
                {/* Full-screen SVG lines */}
                <svg
                    className="absolute inset-0 w-full h-full pointer-events-none z-0"
                    xmlns="http://www.w3.org/2000/svg"
                    overflow="visible"
                >
                    <rect
                        x="57%" y="-19%" width="650" height="620"
                        transform="translate(20, 30) rotate(20, 305, 425)"
                        stroke="hsl(var(--hero-rect-stroke))"
                        strokeOpacity="0.6"
                        strokeWidth="1"
                        fill="none"
                    />
                    {/* Animated streak on rect 1 */}
                    <rect
                        x="57%" y="-19%" width="650" height="620"
                        transform="translate(20, 30) rotate(20, 305, 425)"
                        stroke="hsl(var(--hero-rect-stroke))"
                        strokeOpacity="0.9"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="40 2500"
                        className="animate-trace-rect1"
                    />
                    <rect
                        x="40%" y="-18%" width="350" height="650"
                        transform="translate(20, 30) rotate(45, 305, 425)"
                        stroke="hsl(var(--hero-rect-stroke))"
                        strokeOpacity="0.6"
                        strokeWidth="1"
                        fill="none"
                    />
                    {/* Animated streak on rect 2 */}
                    <rect
                        x="40%" y="-18%" width="350" height="650"
                        transform="translate(20, 30) rotate(45, 305, 425)"
                        stroke="hsl(var(--hero-rect-stroke))"
                        strokeOpacity="0.9"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="40 1960"
                        className="animate-trace-rect2"
                    />
                </svg>

                <div className="hidden md:flex absolute right-0 top-0 h-full w-1/2 items-end justify-center">

                    <div className="relative z-10 w-full h-full flex items-end justify-center">
                        <img
                            src="/Portrait (2).png"
                            alt="Tarik Oliveira"
                            className="portrait-image h-[100%] w-auto object-cover object-top -translate-x-20"
                            onError={(e) => { e.target.style.display = 'none' }}
                        />
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-32 portrait-fade pointer-events-none z-20" />
                </div>
            </div>
        </section>
    )
}
