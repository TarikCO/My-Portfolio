import { ArrowDown } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

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
    // Feature 2 – aurora canvas ref
    const auroraRef    = useRef(null)
    // Feature 3 – refs for hero section and diamond SVG
    const heroRef      = useRef(null)
    const svgRef       = useRef(null)
    // GSAP refs
    const svgWrapRef   = useRef(null)   // wrapper for scroll rotation (separate from tilt)
    const rect1Ref     = useRef(null)   // static rect 1 – draw animation
    const rect2Ref     = useRef(null)   // static rect 2 – draw animation
    const contentRef   = useRef(null)   // left content – scroll fade
    const photoRef     = useRef(null)   // portrait img – scroll scale

    const line1 = useTypingEffect("Hi, I'm", 65, 400)
    const line2First = useTypingEffect("Tarik", 65, 400 + 7 * 65 + 150)
    const line2Last = useTypingEffect(" Oliveira", 65, 400 + 7 * 65 + 150 + 5 * 65)

    // ─── Feature 2: Aurora Background ────────────────────────────────────
    // Paints drifting radial-gradient orbs on a canvas behind the particles.
    useEffect(() => {
        const canvas = auroraRef.current
        if (!canvas) return
        const ctx = canvas.getContext("2d")
        let animId

        const resize = () => {
            canvas.width  = canvas.offsetWidth
            canvas.height = canvas.offsetHeight
        }
        const ro = new ResizeObserver(resize)
        ro.observe(canvas)
        resize()

        // Three slowly drifting orbs – colours from spec, max opacity 0.25
        const orbs = [
            { hex: "#003060", bx: 0.25, by: 0.45, r: 420, sx: 0.18, sy: 0.24, px: 0.0, py: 1.2 },
            { hex: "#001a40", bx: 0.72, by: 0.55, r: 340, sx: 0.13, sy: 0.17, px: 2.1, py: 0.4 },
            { hex: "#004060", bx: 0.50, by: 0.25, r: 380, sx: 0.21, sy: 0.15, px: 1.0, py: 2.3 },
        ]

        const draw = (ts) => {
            const t = ts / 1000
            const { width: w, height: h } = canvas
            ctx.clearRect(0, 0, w, h)
            orbs.forEach(({ hex, bx, by, r, sx, sy, px, py }) => {
                const x  = bx * w + Math.sin(t * sx + px) * w * 0.14
                const y  = by * h + Math.cos(t * sy + py) * h * 0.14
                const rv = parseInt(hex.slice(1, 3), 16)
                const gv = parseInt(hex.slice(3, 5), 16)
                const bv = parseInt(hex.slice(5, 7), 16)
                const gr = ctx.createRadialGradient(x, y, 0, x, y, r)
                gr.addColorStop(0, `rgba(${rv},${gv},${bv},0.25)`)
                gr.addColorStop(1, `rgba(${rv},${gv},${bv},0)`)
                ctx.fillStyle = gr
                ctx.fillRect(0, 0, w, h)
            })
            animId = requestAnimationFrame(draw)
        }
        animId = requestAnimationFrame(draw)

        return () => {
            cancelAnimationFrame(animId)
            ro.disconnect()
        }
    }, [])

    // ─── Feature 3: 3D Perspective Tilt on Diamond SVG ───────────────────
    // Mouse position over hero drives a lerped rotateX/Y on the SVG frame.
    useEffect(() => {
        const hero = heroRef.current
        const svg  = svgRef.current
        if (!hero || !svg) return

        const tilt   = { x: 0, y: 0 }
        const target = { x: 0, y: 0 }
        let rafId  = null
        let active = false

        const onMove = (e) => {
            const rect = hero.getBoundingClientRect()
            const nx = (e.clientX - rect.left  - rect.width  / 2) / (rect.width  / 2)
            const ny = (e.clientY - rect.top   - rect.height / 2) / (rect.height / 2)
            target.x = ny *  8   // rotateX = offsetY * 8
            target.y = nx * -8   // rotateY = offsetX * -8
        }

        const tick = () => {
            tilt.x += (target.x - tilt.x) * 0.06
            tilt.y += (target.y - tilt.y) * 0.06
            svg.style.transform = `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
            if (active) rafId = requestAnimationFrame(tick)
        }

        const onEnter = () => {
            active = true
            svg.style.transition = ""
            if (!rafId) rafId = requestAnimationFrame(tick)
        }

        const onLeave = () => {
            active = false
            cancelAnimationFrame(rafId)
            rafId = null
            target.x = 0
            target.y = 0
            svg.style.transition = "transform 0.8s ease"
            svg.style.transform  = "perspective(800px) rotateX(0deg) rotateY(0deg)"
        }

        hero.addEventListener("mousemove",  onMove)
        hero.addEventListener("mouseenter", onEnter)
        hero.addEventListener("mouseleave", onLeave)

        return () => {
            hero.removeEventListener("mousemove",  onMove)
            hero.removeEventListener("mouseenter", onEnter)
            hero.removeEventListener("mouseleave", onLeave)
            cancelAnimationFrame(rafId)
        }
    }, [])

    // ─── GSAP: Draw on load + scroll-zoom ────────────────────────────────────
    useEffect(() => {
        const ctx = gsap.context(() => {

            // ── Draw: both square outlines trace themselves in on page load ──
            // Perimeter = 2 × (w + h)
            const perim1 = 2540  // 2 × (650 + 620)
            const perim2 = 2000  // 2 × (350 + 650)

            gsap.set(rect1Ref.current, {
                attr: { "stroke-dasharray": perim1, "stroke-dashoffset": perim1 },
            })
            gsap.set(rect2Ref.current, {
                attr: { "stroke-dasharray": perim2, "stroke-dashoffset": perim2 },
            })

            gsap.to(rect1Ref.current, {
                attr: { "stroke-dashoffset": 0 },
                duration: 2.5,
                delay: 0.3,
                ease: "power2.inOut",
            })
            gsap.to(rect2Ref.current, {
                attr: { "stroke-dashoffset": 0 },
                duration: 2.5,
                delay: 0.6,
                ease: "power2.inOut",
            })

            // ── Scroll zoom: SVG wrapper rotates slightly ──────────────────
            // Using a wrapper div so it doesn't fight the mousemove tilt on svgRef
            gsap.to(svgWrapRef.current, {
                rotateZ: 4,
                ease: "none",
                scrollTrigger: {
                    trigger: "#hero",
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            })

            // ── Scroll zoom: portrait scales down ─────────────────────────
            gsap.to(photoRef.current, {
                scale: 0.85,
                ease: "none",
                scrollTrigger: {
                    trigger: "#hero",
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            })

            // ── Scroll zoom: left content fades and lifts away ────────────
            gsap.to(contentRef.current, {
                opacity: 0,
                y: -30,
                ease: "none",
                scrollTrigger: {
                    trigger: "#hero",
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            })

        }, heroRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            id="hero"
            ref={heroRef}
            className="relative min-h-screen flex items-center overflow-hidden"
        >
            {/* Feature 2: Aurora canvas */}
            <canvas
                ref={auroraRef}
                aria-hidden="true"
                className="absolute inset-0 w-full h-full"
                style={{ zIndex: 0, pointerEvents: "none" }}
            />

            {/* Left content */}
            <div ref={contentRef} className="relative z-10 flex flex-col justify-center text-left px-8 md:px-16 lg:px-24 w-full md:w-1/2 py-32 md:py-0 left-20 bottom-10">
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

                {/* Feature 4: spring cubic-bezier entrance for CTA buttons */}
                <div className="flex items-center gap-4 opacity-0 animate-spring-cta">
                    <button onClick={() => scrollTo("projects")} style={{ cursor: "pointer" }} className="cosmic-button">
                        View my work
                    </button>
                    <button
                        onClick={() => scrollTo("about")}
                        style={{ cursor: "pointer" }}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors underline underline-offset-4"
                    >
                        About me
                    </button>
                </div>

                <button
                    onClick={() => scrollTo("about")}
                    className="absolute -bottom-70 -left-14 flex flex-col items-center gap-2 animate-fade-in-delay-4 z-50 cursor-pointer"
                >
                    <span className="text-xs translate-y-[30px] tracking-widest text-muted-foreground uppercase">Explore</span>
                    <ArrowDown className="h-4 w-4 translate-y-[30px] text-primary animate-bounce" />
                </button>
            </div>

            {/* Right portrait area + SVG lines — single fade-in wrapper to preserve z-order */}
            <div className="absolute inset-0 opacity-0 animate-fade-in-delay-1">
                {/* SVG wrapper — GSAP scroll rotation targets this div;
                     svgRef keeps the mousemove tilt on the inner <svg> only */}
                <div
                    ref={svgWrapRef}
                    className="absolute inset-0 pointer-events-none z-0"
                    style={{ transformOrigin: "center center" }}
                >
                    <svg
                        ref={svgRef}
                        className="w-full h-full pointer-events-none"
                        xmlns="http://www.w3.org/2000/svg"
                        overflow="hidden"
                    >
                        {/* Static outlines — draw themselves in on load via GSAP strokeDashoffset */}
                        <rect
                            ref={rect1Ref}
                            x="57%" y="-19%" width="650" height="620"
                            transform="translate(20, 30) rotate(20, 305, 425)"
                            stroke="hsl(var(--hero-rect-stroke))"
                            strokeOpacity="0.6"
                            strokeWidth="1"
                            fill="none"
                        />
                        {/* Glowing blue streak running around rect 1 */}
                        <rect
                            x="57%" y="-19%" width="650" height="620"
                            transform="translate(20, 30) rotate(20, 305, 425)"
                            stroke="hsl(var(--primary))"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="40 2500"
                            className="animate-trace-rect1"
                            style={{ filter: "drop-shadow(0 0 6px hsl(var(--primary) / 0.7))" }}
                        />
                        <rect
                            ref={rect2Ref}
                            x="40%" y="-18%" width="350" height="650"
                            transform="translate(20, 30) rotate(45, 305, 425)"
                            stroke="hsl(var(--hero-rect-stroke))"
                            strokeOpacity="0.6"
                            strokeWidth="1"
                            fill="none"
                        />
                        {/* Glowing blue streak running around rect 2 */}
                        <rect
                            x="40%" y="-18%" width="350" height="650"
                            transform="translate(20, 30) rotate(45, 305, 425)"
                            stroke="hsl(var(--primary))"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="40 1960"
                            className="animate-trace-rect2"
                            style={{ filter: "drop-shadow(0 0 6px hsl(var(--primary) / 0.7))" }}
                        />
                    </svg>
                </div>

                <div className="hidden md:flex absolute right-0 top-0 h-full w-1/2 items-end justify-center">

                    <div className="relative z-10 w-full h-full flex items-end justify-center">
                        <img
                            ref={photoRef}
                            src="/Portrait (2).png"
                            alt="Tarik Oliveira"
                            className="portrait-image h-[100%] w-auto object-cover object-top -translate-x-20"
                            style={{ transformOrigin: "center bottom" }}
                            onError={(e) => { e.target.style.display = 'none' }}
                        />
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-32 portrait-fade pointer-events-none z-20" />
                </div>
            </div>
        </section>
    )
}
