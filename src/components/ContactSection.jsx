import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { ArrowLeft } from "lucide-react";

export const ContactSection = () => {
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <div className="text-lg p-10 py-10">
                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        Get in <span className="text-primary">Touch</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Contact text on left */}
                        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                            I'm eager to connect with recruiters, collaborators, and anyone
                            passionate about technology. If you have an opportunity in mind
                            or you're looking to build something, let's get in touch. I'd
                            love to see how we can make an impact together!
                        </p>

                        {/* Contact info grid on right */}
                        <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_repeat(3,minmax(0,auto))_auto] gap-y-6">

                            {/* Empty left cell, title in right cell */}
                            <div></div>
                            <h3 className="text-2xl font-semibold mb-2 text-center max-w-[325px]">
                                Contact Information
                            </h3>


                            {/* Email */}
                            <div className="p-4 rounded-full bg-primary/10 card-border-light flex justify-center">
                                <Mail className="text-primary w-6 h-6 flex items-center justify-center" />
                            </div>
                            <div className="text-center max-w-[325px]">
                                <h4 className="font-medium max-w-[325px]">Email</h4>
                                <a
                                    href="mailto:tarik.castro.o@gmail.com"
                                    className="text-muted-foreground hover:text-primary transition-colors max-w-[325px]"
                                >
                                    tarik.castro.o@gmail.com
                                </a>
                            </div>

                            {/* Phone */}
                            <div className="p-4 rounded-full bg-primary/10 card-border-light flex justify-center">
                                <Phone className="text-primary w-6 h-6 flex items-center justify-center" />
                            </div>
                            <div className="text-center">
                                <h4 className="font-medium max-w-[325px]">Phone</h4>
                                <p className="text-muted-foreground max-w-[325px]">
                                    +1 (813) 606-1101
                                </p>
                            </div>

                            {/* Location */}
                            <div className="p-4 rounded-full bg-primary/10 card-border-light flex justify-center">
                                <MapPin className="text-primary w-6 h-6 flex items-center justify-center" />
                            </div>
                            <div className="text-center">
                                <h4 className="font-medium max-w-[325px]">Location</h4>
                                <p className="text-muted-foreground max-w-[325px]">
                                    Tampa, Florida, <span className="hidden sm:inline">United States</span>
                                    <span className="inline sm:hidden">US</span>
                                </p>
                            </div>

                            {/* Empty left cell, connect with me in right cell */}
                            <div></div>
                            <div className="pt-6 text-center">
                                <h4 className="font-medium mb-4 card-border-light max-w-[325px]">
                                    Connect with Me
                                </h4>
                                <div className="flex justify-center space-x-4 max-w-[325px]">
                                    <a
                                        href="https://www.linkedin.com/in/tarik-oliveira/"
                                        target="_blank"
                                    >
                                        <Linkedin className="hover:text-primary transition-colors" />
                                    </a>
                                    <a
                                        href="https://github.com/TarikCO"
                                        target="_blank"
                                    >
                                        <Github className="hover:text-primary transition-colors" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
