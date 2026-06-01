import { cn } from "@/lib/utils"
import { Menu, Moon, Sun, X } from "lucide-react"
import { useEffect, useState } from "react"

const navItems = [
    { name: "Home",       section: "hero"       },
    { name: "About",      section: "about"      },
    { name: "Skills",     section: "skills"     },
    { name: "Projects",   section: "projects"   },
    { name: "Experience", section: "experience" },
    { name: "Contact",    section: "contact"    },
]

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

export const Navbar = () => {
    const [isScrolled,    setIsScrolled]    = useState(false)
    const [activeSection, setActiveSection] = useState("hero")
    const [isMenuOpen,    setIsMenuOpen]    = useState(false)
    const [isDark,        setIsDark]        = useState(true)

    useEffect(() => {
        setIsDark(!document.documentElement.classList.contains("light"))
    }, [])

    const toggleTheme = () => {
        const nowLight = document.documentElement.classList.toggle("light")
        localStorage.setItem("theme", nowLight ? "light" : "dark")
        setIsDark(!nowLight)
    }

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 60)
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    useEffect(() => {
        const sections = navItems
            .map(i => document.getElementById(i.section))
            .filter(Boolean)
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id)
                })
            },
            { threshold: 0.4 }
        )
        sections.forEach(s => observer.observe(s))
        return () => observer.disconnect()
    }, [])

    const handleNav = (section) => {
        scrollTo(section)
        setIsMenuOpen(false)
    }

    return (
        <>
            {/* ── Desktop navbar ──────────────────────────────────────────── */}
            <header
                className={cn(
                    "fixed top-0 inset-x-0 z-40 transition-all duration-500",
                    isScrolled
                        ? "bg-gradient-to-b from-background/75 to-transparent pt-3 pb-6"
                        : "pt-5 pb-0"
                )}
            >
                <div className="container flex items-center justify-between">

                    {/* Logo — quiet, name-first */}
                    <button
                        onClick={() => handleNav("hero")}
                        className="group flex translate-x-[-200px] items-center gap-2 select-none"
                    >
                        <span className="flex h-7 w-7 items-center justify-center rounded-md bg-foreground/6 text-foreground/35 text-xs font-bold tracking-wide transition-all duration-300 group-hover:bg-primary/12 group-hover:text-primary">
                            TO
                        </span>
                        <span className="text-sm font-medium text-foreground/65 transition-colors duration-300 group-hover:text-foreground/90">
                            Tarik Oliveira
                        </span>
                    </button>

                    {/* Floating pill — desktop, toggle included */}
                    <nav
                        className={cn(
                            "hidden md:flex translate-x-[200px] items-center gap-0.5 rounded-full px-2.5 py-1 transition-all duration-500",
                            isScrolled
                                ? "bg-background/65 backdrop-blur-xl border border-border/50 shadow-md shadow-black/15"
                                : "bg-background/20 backdrop-blur-md border border-white/8"
                        )}
                    >
                        {navItems.map((item) => (
                            <button
                                key={item.section}
                                onClick={() => handleNav(item.section)}
                                style={{ cursor: "pointer" }}
                                className={cn(
                                    "relative px-3.5 py-1.5 rounded-full text-sm transition-all duration-300",
                                    activeSection === item.section
                                        ? "text-primary font-medium"
                                        : "text-foreground/55 font-normal hover:text-foreground/85"
                                )}
                            >
                                {item.name}
                            </button>
                        ))}

                        {/* Divider */}
                        <span className="w-px h-3.5 bg-border/50 mx-1 shrink-0" />

                        {/* Theme toggle — lives inside the pill, no longer orphaned */}
                        <button
                            onClick={toggleTheme}
                            className="flex items-center justify-center h-7 w-7 rounded-full text-foreground/45 hover:text-foreground/80 transition-colors duration-300"
                            style={{ cursor: "pointer" }}
                            aria-label="Toggle theme"
                        >
                            {isDark ? <Sun size={13} className="text-yellow-300" /> : <Moon size={13} className="text-blue-900" />}
                        </button>
                    </nav>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setIsMenuOpen((p) => !p)}
                        className={cn(
                            "md:hidden flex items-center justify-center h-9 w-9 rounded-full border transition-all duration-300",
                            isMenuOpen
                                ? "bg-primary border-primary text-background"
                                : "bg-background/40 backdrop-blur-md border-border/60 text-foreground hover:border-primary/60"
                        )}
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>
            </header>

            {/* ── Mobile full-screen overlay ──────────────────────────────── */}
            <div
                className={cn(
                    "fixed inset-0 z-30 md:hidden flex flex-col items-center justify-center gap-2",
                    "bg-background/96 backdrop-blur-xl transition-all duration-400",
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
            >
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-primary/8 blur-3xl pointer-events-none" />

                <nav className="relative flex flex-col items-center gap-1 w-full px-8">
                    {navItems.map((item, i) => (
                        <button
                            key={item.section}
                            onClick={() => handleNav(item.section)}
                            style={{ transitionDelay: isMenuOpen ? `${i * 60}ms` : "0ms" }}
                            className={cn(
                                "w-full max-w-xs flex items-center justify-between px-5 py-4 rounded-2xl text-lg font-semibold",
                                "border transition-all duration-300",
                                isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                                activeSection === item.section
                                    ? "bg-primary/12 border-primary/35 text-primary"
                                    : "bg-secondary/40 border-border/40 text-foreground/80 hover:border-primary/30 hover:text-foreground"
                            )}
                        >
                            <span>{item.name}</span>
                            {activeSection === item.section && (
                                <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                            )}
                        </button>
                    ))}
                </nav>

                {/* Theme toggle in mobile overlay */}
                <button
                    onClick={toggleTheme}
                    className="mt-4 flex items-center gap-2 text-sm text-foreground/50 hover:text-foreground/80 transition-colors duration-300"
                >
                    {isDark ? <Sun size={15} className="text-yellow-300" /> : <Moon size={15} className="text-blue-900" />}
                    <span>{isDark ? "Light mode" : "Dark mode"}</span>
                </button>
            </div>
        </>
    )
}
