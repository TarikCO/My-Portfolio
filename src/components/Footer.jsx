import { ArrowUp } from "lucide-react"

export const Footer = () => (
    <footer className="py-5 px-3 bg-background relative border-t border-border flex flex-wrap justify-between items-center">
        <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Tarik Oliveira. All rights reserved.
        </p>

        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ cursor: "pointer" }}
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
            aria-label="Back to top"
        >
            <ArrowUp size={20} />
        </button>
    </footer>
)