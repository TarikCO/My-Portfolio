import { Blocks, Briefcase, Code, } from "lucide-react"

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Photo */}
                    <img src="public/Portrait.png" alt="My Portrait" />

                    {/* Skills List
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/19">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground">
                                        I create responsive Web applications using React and Django.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/19">
                                    <Blocks className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Blockchain</h4>
                                    <p className="text-muted-foreground">
                                        I'm inspired and made research on Blockchain technology.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/19">
                                    <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Projects</h4>
                                    <p className="text-muted-foreground">
                                        I love creating programming projects to develop my technical skills
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div> */}


                    {/* About me Text */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Computer Science student</h3>
                        <p className="text-muted-foreground">I have experience in software and web development, 
                            data science, and computer organization. In particular, 
                            I am interested in Blockchain technology and Geographic 
                            Information Systems, as well as the implementation of 
                            technological methods into sustainable energy solutions. 
                        </p>
                        <p className="text-muted-foreground">
                            My journey so far has been defined by learning through building. 
                            I have taken every opportunity to deepen my practical skills and 
                            developing challenging programming projects. From Python, Javascript, 
                            Typescript, and Django to React, I am eager to keep expanding my 
                            technical abilities.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Contact me
                            </a>
                            <a href="public/TarikResume.pdf" 
                            className="px-6 py-2 rounded-full border border-primary
                                       text-primary hover:bg-primary/10 transition-colors duration-300"
                            download>
                                Download my Resume
                            </a>
                        </div>
                    </div>

                    
                </div>
            </div>
        </section>
    )
}