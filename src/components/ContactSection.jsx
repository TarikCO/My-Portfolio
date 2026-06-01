import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.55, ease: "easeOut", delay },
})

const contactDetails = [
    {
        icon: Mail,
        label: "Email",
        value: "tarik.castro.o@gmail.com",
        href: "mailto:tarik.castro.o@gmail.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+1 (813) 606-1101",
        href: "tel:+18136061101",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Tampa, Florida, US",
        href: null,
    },
]

const socials = [
    {
        icon: Linkedin,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/tarik-oliveira/",
    },
    {
        icon: Github,
        label: "GitHub",
        href: "https://github.com/TarikCO",
    },
]

export const ContactSection = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" })
    const [sent, setSent] = useState(false)

    const handleChange = (e) =>
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

    const handleSubmit = (e) => {
        e.preventDefault()
        const subject = encodeURIComponent(`Portfolio contact from ${form.name}`)
        const body = encodeURIComponent(
            `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
        )
        window.location.href = `mailto:tarik.castro.o@gmail.com?subject=${subject}&body=${body}`
        setSent(true)
        setForm({ name: "", email: "", message: "" })
    }

    return (
        <section id="contact" className="py-24 pb-45 px-4 bg-background">
            <div className="container mx-auto max-w-5xl">

                {/* Heading */}
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-16 text-center"
                    {...fadeUp()}
                >
                    Get in <span className="text-primary">Touch</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                    {/* ── Left column: info ── */}
                    <motion.div className="flex flex-col gap-8" {...fadeUp(0.1)}>

                        {/* Availability badge
                        <div className="flex items-center gap-2.5">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                            </span>
                            <span className="text-sm font-medium text-green-500">
                                Available for work
                            </span>
                        </div> */}

                        <p className="text-muted-foreground leading-relaxed">
                            I'm eager to connect with recruiters, collaborators, and anyone
                            passionate about technology. If you have an opportunity in mind
                            or want to build something together, reach out — I'd love to
                            talk.
                        </p>

                        {/* Contact detail rows */}
                        <ul className="flex flex-col gap-3">
                            {contactDetails.map(({ icon: Icon, label, value, href }) => (
                                <li key={label}>
                                    <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card border border-card-border">
                                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                            <Icon className="h-4 w-4 text-primary" />
                                        </span>
                                        <span className="text-xs text-muted-foreground w-14 shrink-0">
                                            {label}
                                        </span>
                                        {href ? (
                                            <a
                                                href={href}
                                                className="text-sm font-medium text-foreground hover:text-primary transition-colors truncate"
                                            >
                                                {value}
                                            </a>
                                        ) : (
                                            <span className="text-sm font-medium text-foreground truncate">
                                                {value}
                                            </span>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>

                        {/* Social links as labeled buttons */}
                        <div className="flex justify-center gap-3">
                            {socials.map(({ icon: Icon, label, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-card-border bg-card text-sm font-medium text-foreground/70 hover:text-primary hover:border-primary/40 transition-all duration-200"
                                >
                                    <Icon className="h-4 w-4" />
                                    {label}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* ── Right column: form ── */}
                    <motion.div {...fadeUp(0.2)}>
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-4 bg-card border border-card-border rounded-2xl p-6"
                        >
                            <h3 className="text-lg font-semibold mb-1">Send a message</h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="name" className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Your name"
                                        className="rounded-lg border border-card-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="email" className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        className="rounded-lg border border-card-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="message" className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about the opportunity or project…"
                                    className="rounded-lg border border-card-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 transition resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                style={{ cursor: "pointer" }}
                                className="cosmic-button flex items-center justify-center gap-2 mt-1"
                            >
                                <Send className="h-4 w-4" />
                                {sent ? "Opening email client…" : "Send Message"}
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
