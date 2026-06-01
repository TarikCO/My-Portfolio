import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export const ContactSection = () => {
    return (
        <section id="contact" className="py-24 px-4 relative bg-background">
            <div className="container mx-auto max-w-5xl">
                <div className="text-lg p-10 py-10">
                    {/* Title */}
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-12 text-center"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        Get in <span className="text-primary">Touch</span>
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                        {/* Contact text on left */}
                        <motion.p
                            className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
                            initial={{ opacity: 0, x: -24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                        >
                            I'm eager to connect with recruiters, collaborators, and anyone
                            passionate about technology. If you have an opportunity in mind
                            or you're looking to build something, let's get in touch. I'd
                            love to see how we can make an impact together!
                        </motion.p>
                        <div className="flex justify-center lg:ml-0">
                            {/* Contact info grid on right */}
                            <motion.div
                                className="grid grid-cols-[auto_1fr] grid-rows-[auto_repeat(3,minmax(0,auto))_auto] lg:gap-x-12 gap-x-8 gap-y-6"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.2 }}
                            >

                                {/* Empty left cell, title in right cell */}
                                <div></div>
                                <motion.h3
                                    className="text-2xl font-semibold mb-2 text-center max-w-[325px]"
                                    variants={itemVariants}
                                >
                                    Contact Information
                                </motion.h3>

                                {/* Email */}
                                <motion.div
                                    className="p-4 rounded-full bg-primary/10 card-border-light flex justify-center"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary) / 0.2)" }}
                                >
                                    <Mail className="text-primary w-6 h-6 flex items-center justify-center" />
                                </motion.div>
                                <motion.div className="text-center max-w-[325px]" variants={itemVariants}>
                                    <h4 className="font-medium max-w-[325px]">Email</h4>
                                    <a
                                        href="mailto:tarik.castro.o@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors max-w-[325px]"
                                    >
                                        tarik.castro.o@gmail.com
                                    </a>
                                </motion.div>

                                {/* Phone */}
                                <motion.div
                                    className="p-4 rounded-full bg-primary/10 card-border-light flex justify-center"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary) / 0.2)" }}
                                >
                                    <Phone className="text-primary w-6 h-6 flex items-center justify-center" />
                                </motion.div>
                                <motion.div className="text-center" variants={itemVariants}>
                                    <h4 className="font-medium max-w-[325px]">Phone</h4>
                                    <p className="text-muted-foreground max-w-[325px]">
                                        +1 (813) 606-1101
                                    </p>
                                </motion.div>

                                {/* Location */}
                                <motion.div
                                    className="p-4 rounded-full bg-primary/10 card-border-light flex justify-center"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary) / 0.2)" }}
                                >
                                    <MapPin className="text-primary w-6 h-6 flex items-center justify-center" />
                                </motion.div>
                                <motion.div className="text-center" variants={itemVariants}>
                                    <h4 className="font-medium max-w-[325px]">Location</h4>
                                    <p className="text-muted-foreground max-w-[325px]">
                                        Tampa, Florida,{" "}
                                        <span className="show-united-states">United States</span>
                                        <span className="show-us">US</span>
                                    </p>
                                </motion.div>

                                {/* Empty left cell, connect with me in right cell */}
                                <div></div>
                                <motion.div className="pt-6 text-center" variants={itemVariants}>
                                    <h4 className="font-medium mb-4 card-border-light max-w-[325px]">
                                        Connect with Me
                                    </h4>
                                    <div className="flex justify-center space-x-4 max-w-[325px]">
                                        <motion.a
                                            href="https://www.linkedin.com/in/tarik-oliveira/"
                                            target="_blank"
                                            whileHover={{ scale: 1.2, color: "hsl(var(--primary))" }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Linkedin className="hover:text-primary transition-colors" />
                                        </motion.a>
                                        <motion.a
                                            href="https://github.com/TarikCO"
                                            target="_blank"
                                            whileHover={{ scale: 1.2, color: "hsl(var(--primary))" }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Github className="hover:text-primary transition-colors" />
                                        </motion.a>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
