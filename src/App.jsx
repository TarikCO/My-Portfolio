import { Navbar } from "./components/Navbar"
import { ThemeToggle } from "./components/ThemeToggle"
import { HeroSection } from "./components/HeroSection"
import { AboutSection } from "./components/AboutSection"
import { SkillsSection } from "./components/SkillsSection"
import { ProjectsSection } from "./components/ProjectsSection"
import { ExperienceSection } from "./components/ExperienceSection"
import { ContactSection } from "./components/ContactSection"
import { Footer } from "./components/Footer"

function App() {
    return (
        <div className="bg-background text-foreground">
            <ThemeToggle />
            <Navbar />
            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <ExperienceSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    )
}

export default App
