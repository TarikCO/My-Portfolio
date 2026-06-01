import { ArrowUp } from "lucide-react"
import { useNavigation } from "../context/NavigationContext"

export const Footer = () => {
    const { navigateTo } = useNavigation()

    return (
        <footer className="py-5 px-3 bg-background relative border-t border-border flex flex-wrap justify-between items-center">
            <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Tarik Oliveira Portfolio, All rights reserved.
            </p>

            <button
                onClick={() => navigateTo("hero")}
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                aria-label="Back to top"
            >
                <ArrowUp size={20} />
            </button>
        </footer>
    )
}