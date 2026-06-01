import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react";
import { useState } from "react"
import { useNavigation } from "../context/NavigationContext"

const navItems = [
    { name: "Home",     section: "hero"     },
    { name: "About",    section: "about"    },
    { name: "Skills",   section: "skills"   },
    { name: "Projects", section: "projects" },
    { name: "Contact",  section: "contact"  },
]

export const Navbar = () => {
    const { current, navigateTo, animating } = useNavigation()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const isScrolled = current !== "hero"

    const handleNav = (section) => {
        navigateTo(section)
        setIsMenuOpen(false)
    }

    return (
        <nav className={cn(
            "fixed w-full z-40 transition-all duration-300",
            isScrolled
                ? "py-3 bg-background/18 backdrop-blur-md shadow-xs"
                : "py-5 bg-transparent"
        )}>

            <div className="container flex items-center justify-between">

                <button
                    onClick={() => handleNav("hero")}
                    disabled={animating}
                    className="text-xl font-bold text-primary flex items-center disabled:opacity-70"
                >
                    <span className="relative z-10">
                        <span className="text-glow text-foreground"> Tarik Oliveira </span>{" "}
                        Portfolio
                    </span>
                </button>

                {/* Desktop Navbar */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => (
                        <button
                            key={key}
                            onClick={() => handleNav(item.section)}
                            disabled={animating}
                            className={cn(
                                "transition-colors duration-300 disabled:opacity-50",
                                current === item.section
                                    ? "text-primary"
                                    : "text-foreground/80 hover:text-primary"
                            )}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden p-2 text-foreground z-50"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <div
                    className={cn(
                        "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                        "transition-all duration-300 md:hidden",
                        isMenuOpen
                            ? "opacity-100 pointer-events-auto"
                            : "opacity-0 pointer-events-none"
                    )}
                >
                    <div className="flex flex-col space-y-8 text-xl">
                        {navItems.map((item, key) => (
                            <button
                                key={key}
                                onClick={() => handleNav(item.section)}
                                disabled={animating}
                                className={cn(
                                    "transition-colors duration-300 disabled:opacity-50",
                                    current === item.section
                                        ? "text-primary"
                                        : "text-foreground/80 hover:text-primary"
                                )}
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}
