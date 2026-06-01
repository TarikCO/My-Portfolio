import { NavigationProvider, useNavigation } from "./context/NavigationContext"
import { Navbar } from "./components/Navbar"
import { ThemeToggle } from "./components/ThemeToggle"
import { HeroSection } from "./components/HeroSection"
import { AboutSection } from "./components/AboutSection"
import { SkillsSection } from "./components/SkillsSection"
import { ContactSection } from "./components/ContactSection"
import { ProjectsSection } from "./components/ProjectsSection"
import { Footer } from "./components/Footer"

// ─── Canvas layout ────────────────────────────────────────────────────────────
// All sections live simultaneously on an infinite 2-D canvas.
// The canvas is transformed (scale + translate) by NavigationContext to
// perform the zoom-out → snap → zoom-in camera transition.
//
// Section grid positions (matching SECTIONS in NavigationContext):
//   About  (-1,0) | Hero (0,0) | Projects (1,0)
//   Skills (-1,1) |            | Contact  (0,1)
// ─────────────────────────────────────────────────────────────────────────────
function CanvasLayout() {
    const { canvasRef } = useNavigation()

    return (
        <div
            className="bg-background text-foreground"
            style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative" }}
        >
            {/* Fixed UI — outside the canvas, never affected by the zoom transform */}
            <ThemeToggle />
            <Navbar />

            {/* Infinite canvas */}
            <div
                ref={canvasRef}
                style={{ position: "absolute", width: "100vw", height: "100vh", transformOrigin: "center center" }}
            >
                {/* ── Hero — (0, 0) ─────────────────────────────────────────── */}
                <div style={{ position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh", overflow: "hidden" }}>
                    <HeroSection />
                </div>

                {/* ── About — (-1.5, 0.3) ───────────────────────────────── */}
                <div className="no-scrollbar" style={{ position: "absolute", top: "30vh", left: "-150vw", width: "100vw", height: "100vh", overflowY: "auto" }}>
                    <AboutSection />
                </div>

                {/* ── Projects — (1.4, -0.2) ─────────────────────────────── */}
                <div className="no-scrollbar" style={{ position: "absolute", top: "-20vh", left: "140vw", width: "100vw", height: "100vh", overflowY: "auto" }}>
                    <div className="relative pt-24 md:pt-28">
                        {/* Decorative animated background (ported from Projects page) */}
                        <div className="absolute inset-0 pointer-events-none opacity-60">
                            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" overflow="visible">
                                <rect x="-2%" y="2%" width="240" height="240" transform="translate(4, -2) rotate(12, 120, 120)" stroke="hsl(var(--hero-rect-stroke))" strokeOpacity="0.28" strokeWidth="1" fill="none" />
                                <rect x="-2%" y="2%" width="240" height="240" transform="translate(4, -2) rotate(12, 120, 120)" stroke="hsl(var(--hero-rect-stroke))" strokeOpacity="0.72" strokeWidth="2" fill="none" strokeDasharray="34 960" className="animate-trace-rect1" />
                                <rect x="80%" y="1%" width="250" height="250" transform="translate(-6, 0) rotate(-16, 125, 125)" stroke="hsl(var(--hero-rect-stroke))" strokeOpacity="0.3" strokeWidth="1" fill="none" />
                                <rect x="80%" y="1%" width="250" height="250" transform="translate(-6, 0) rotate(-16, 125, 125)" stroke="hsl(var(--hero-rect-stroke))" strokeOpacity="0.74" strokeWidth="2" fill="none" strokeDasharray="36 1000" className="animate-trace-rect2" />
                                <rect x="-3%" y="26%" width="300" height="500" transform="translate(10, 8) rotate(28, 150, 250)" stroke="hsl(var(--hero-rect-stroke))" strokeOpacity="0.28" strokeWidth="1" fill="none" />
                                <rect x="-3%" y="26%" width="300" height="500" transform="translate(10, 8) rotate(28, 150, 250)" stroke="hsl(var(--hero-rect-stroke))" strokeOpacity="0.72" strokeWidth="2" fill="none" strokeDasharray="40 1600" className="animate-trace-rect2" />
                                <rect x="82%" y="24%" width="280" height="520" transform="translate(-12, 8) rotate(-22, 140, 260)" stroke="hsl(var(--hero-rect-stroke))" strokeOpacity="0.28" strokeWidth="1" fill="none" />
                                <rect x="82%" y="24%" width="280" height="520" transform="translate(-12, 8) rotate(-22, 140, 260)" stroke="hsl(var(--hero-rect-stroke))" strokeOpacity="0.72" strokeWidth="2" fill="none" strokeDasharray="40 1600" className="animate-trace-rect1" />
                                <rect x="2%" y="84%" width="360" height="180" transform="translate(10, -12) rotate(-12, 180, 90)" stroke="hsl(var(--hero-rect-stroke))" strokeOpacity="0.28" strokeWidth="1" fill="none" />
                                <rect x="2%" y="84%" width="360" height="180" transform="translate(10, -12) rotate(-12, 180, 90)" stroke="hsl(var(--hero-rect-stroke))" strokeOpacity="0.68" strokeWidth="2" fill="none" strokeDasharray="40 1080" className="animate-trace-rect1" />
                                <rect x="76%" y="82%" width="300" height="220" transform="translate(-8, -16) rotate(18, 150, 110)" stroke="hsl(var(--hero-rect-stroke))" strokeOpacity="0.28" strokeWidth="1" fill="none" />
                                <rect x="76%" y="82%" width="300" height="220" transform="translate(-8, -16) rotate(18, 150, 110)" stroke="hsl(var(--hero-rect-stroke))" strokeOpacity="0.7" strokeWidth="2" fill="none" strokeDasharray="36 1040" className="animate-trace-rect2" />
                            </svg>
                        </div>
                        <div className="relative z-10">
                            <ProjectsSection />
                        </div>
                    </div>
                    <Footer />
                </div>

                {/* ── Skills — (-1.0, 1.5) ──────────────────────────────── */}
                <div className="no-scrollbar" style={{ position: "absolute", top: "150vh", left: "-100vw", width: "100vw", height: "100vh", overflowY: "auto" }}>
                    <SkillsSection />
                </div>

                {/* ── Contact — (0.5, 1.3) ──────────────────────────────── */}
                <div className="no-scrollbar" style={{ position: "absolute", top: "130vh", left: "50vw", width: "100vw", height: "100vh", overflowY: "auto" }}>
                    <ContactSection />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

function App() {
    return (
        <NavigationProvider>
            <CanvasLayout />
        </NavigationProvider>
    )
}

export default App;
