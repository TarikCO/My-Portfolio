export const projects = [
    {
        id: 14,
        title: "Drawing Shop",
        description: [
            "A Flutter app for selling my portrait drawings.", 
            "In this project, I developed a shop application using Flutter, where I implemented a user-friendly interface for browsing and purchasing portrait drawings. The app features a secure payment system, a gallery of available artwork, and a seamless checkout process to provide customers with an enjoyable shopping experience.",
            "I personally connect to this project because drawing has been a passion of mine since I was a kid. I started drawing portraits of famous people and friends, and eventually began selling them for some time. I ended up stopping for a while when I started other hobbies including programming and playing the guitar, but I recently got connected to this passion again and decided to build this app as a way to share my art with others and also learn more while developing applications.",
        ],
        image: "/projects/Project14.png",
        tags: ["Flutter", "Dart"],
        demoUrl: "#",
        githubUrl: "https://github.com/TarikCO/Drawing-App",
        category: ["programming"],
    },
    {
        id: 13,
        title: "NovaBay",
        description: [
            "A platform designed to help people and communities build smarter, safer, and more sustainable housing in the Tampa Bay region.",
            "This project was developed as part of Hack USF's Climate Teach-in Sustainability Challenge. By building NovaBay, my team and I won the challenge and were invited to present it at the civic audition Tampa Bay Resilience Design Challenge, in front of the Tampa Bay Regional Planning Council, the Mayor of Largo, and other industry representatives.",
            "We asked a simple but powerful question: What if anyone - from a first-time homeowner to a city engineer - could proactively design and build homes that are both sustainable and resilient to coastal hazards?",
            "NovaBay combines an interactive GIS map with AI-powered insights to analyze flood risks and land viability, along with a sandbox design studio where users can create homes and evaluate their sustainability (Eco Index) and resilience to hazards.",
            "We built it using a full-stack approach, integrating geospatial APIs, real-time environmental data, and an AI assistant powered by Claude. A big challenge was collecting and handling data from 50K+ Hillsborough County parcels, and in order to implement this data a BaaS platform was needed - we opted for Supabase in this case.",
        ],
        image: "/projects/Project12.png",
        tags: ["JavaScript", "Python", "React.js", "PLpgSQL"],
        demoUrl: "#",
        githubUrl: "https://github.com/TarikCO/NovaBay",
        category: ["programming"],
    },
    {
        id: 12,
        title: "RentEscrow",
        description: [
            "A Blockhain-based Escrow system that allows for international students to make secure rent payments.",
            "This project was developed as part of Code & Croak Hackathon sponsored by the finance startup Crebit. The idea was to create a solution for the common problem of international students needing to make rent payments to landlords in their home country, while facing challenges such as high fees, currency exchange issues, and lack of trust. RentEscrow uses blockchain technology to create a secure and transparent escrow system, where tenants can deposit their rent payments and landlords can only access the funds once the agreed-upon conditions are met. This not only reduces fees and eliminates currency exchange issues but also builds trust between tenants and landlords by providing a verifiable transaction history on the blockchain.",
            "Before any transaction happens, the platform runs a security shield check powered by GoPlus to evaluate wallet risk, detecting phishing exposure, blacklisting, and suspicious activity. Once approved, funds are held in escrow and designed to preserve value through a guaranteed 3% yield mechanism during the holding period. This gives tenants better protection, landlords more confidence, and both parties a safer way to transact.",
            "After the Hackathon timeframe, my team and I continued developing this project and presented it in front of Crebit's team. We received great feedback and are currently exploring ways to further develop and potentially launch this product in the future.",
        ],
        image: "/projects/Project11.png",
        tags: ["Python", "Solidity", "React.js", "JavaScript", "GoPlus API", "Hardhat"],
        demoUrl: "#",
        githubUrl: "https://github.com/TarikCO/RentEscrow",
        category: ["programming"],
    },
    {
        id: 10,
        title: "BRASA Connect Webapp",
        description: [
            "Development of BRASA's Connect web application, a platform designed to connect students during the conference.",
            "This project begun with my journey as Tech Analyst at BRASA Connect, where I was responsible for developing the web app of the organization, made with Flutter. The Connect web application was developed to enhance the experience of attendees during the annual BRASA Connect conference (the largest Brazilian student-led conference in Florida), by providing a platform for networking, event information, and real-time updates.",
            "The app features a user-friendly interface where attendees can edit their profiles, browse the conference schedule, receive notifications about upcoming mentoring sessions, and connect with other attendees through a passport-stamp system with physical NFC cards. Their are multiple other networking features present in the app, all designed to foster connections and engagement not only among the student themselves but with the companies and professionals present at the conference as well.",
            "This project was a great opportunity for me to apply my software development skills in a real-world setting, while also contributing to an organization that has had a significant impact on my personal and professional growth. It was rewarding to see how the app enhanced the conference experience for attendees and facilitated meaningful connections within the BRASA community.",
            "Recently, I stepped up as Head of Technology for BRASA Connect, where I am responsible now for overseeing the entire tech strategy of the organization, including the development of the web app as well as the management of our website and database system. Not to mention that I now will supervise the work of the tech team for the 6th edition of the conference.",
        ],
        image: "/projects/Project10.png",
        tags: ["Flutter", "Dart", "Firebase", "Lottie"],
        demoUrl: "",
        githubUrl: "https://github.com/BRASA-Connect",
        category: ["programming", "other"],
    },
    {
        id: 11,
        title: "BRASA Connect Website",
        description: [
            "Development of BRASA's Connect website, a platform that provides information about the organization and its annual conference.",
            "Along with the web application, I also contributed to the development of BRASA Connect's website made with React.js and Node.js. The website serves as the main online presence for the organization, providing information about our mission, values, and the annual conference. It features a clean and modern design, with a portal menu that allows for attendees to view the conference schedule, speakers, schedule mentorship sessions, edit their profile, buy tickets, and more.",
            "Hidden from regular users, the website also has an admin (board members) dashboard, that allows board members to manage the conference's database, mentorship sessions, our automated notifications system via Whatsapp, and more. This dashboard was a great opportunity for me to apply my backend development skills, as it required integrating the website with our Firebase database and implementing various features to facilitate the management of the conference.",
            "This project was a great opportunity for me to apply my web development skills in a real-world setting, while also contributing to an organization that has had a significant impact on my personal and professional growth. It was rewarding to see how the website enhanced the online presence of BRASA Connect and provided valuable information and resources for our community.",
        ],
        image: "/projects/Project10.png",
        tags: ["React.js", "Node.js", "Firebase"],
        demoUrl: "https://brasaconnect.com/",
        githubUrl: "https://github.com/BRASA-Connect",
        category: ["programming", "other"],
    },
    {
        id: 5,
        title: "Free Food Newsletter",
        description: [
            "A script that scrapes data from the University of South Florida website to find free food events and uses AI to generate a newsletter.",
            "This project was developed as part of my involvement with the Association of Computer Machinery club at USF, where my team and I wanted to create a solution to the common problem of students missing out on free food events happening around campus. We developed a Python script that scrapes data from the USF website to find free food events, and then uses AI to generate a newsletter that is sent out to subscribers on a regular basis. The newsletter includes information about upcoming free food events, as well as tips and recommendations for making the most of these opportunities.",
        ],
        image: "/projects/Project5.png",
        tags: ["Python", "FastAPI", "OpenAI API"],
        demoUrl: "#",
        githubUrl: "https://github.com/TarikCO/Free-Food-Newsletter",
        category: "programming"
    },
    {
        id: 6,
        title: "This Portfolio",
        description: [
            "This personal portfolio was developed using React.js and Tailwind CSS to showcase my projects, skills, and personal information.",
            "I always wanted to have a personal portfolio to share my professional and academic journey to recruiters and other professionals, and I finally have one that I am proud of. I designed and programmed this portfolio from scratch, and I prioritized having a clean and user-friendly interface, while also making sure to include all the relevant information about my background and experience. I also made sure to optimize the portfolio for performance and responsiveness, so that it looks great on any device",
            "Another important thing I wanted to achieve was having a simple but effective page, becoming a portfolio that is easy to navigate but also visually appealing with its animations and modern touch.",
        ],
        image: "/projects/Project6.png",
        tags: ["React.js", "JavaScript", "Tailwind CSS", "Framer Motion"],
        demoUrl: "#",
        githubUrl: "https://github.com/TarikCO/My-Portfolio",
        category: "programming"
    },
    {
        id: 1,
        title: "Blockchain Program",
        description: [
            "A functional blockchain prototype to simulate this technology usage in peer-to-peer energy transactions.",
            "I personally connect a lot with this project. At Positivo International School, I researched a lot about blockchain technology and its potential applications, and I was beyond fascinated by the idea of decentralized systems and how they could take action in many industries. By researching those industries, I got to learn about how blockchain could be applied in the energy sector to create more sustainable and efficient systems, and I decided to build a simple blockchain prototype to simulate how this technology could be used in peer-to-peer energy transactions.",
            "This project was a great opportunity for me to apply not only my programming skills but also the research I developed back when I researched all of this. I still believe in the potential of blockchain technology in this market to create more sustainable and efficient energy systems, and I am excited to continue exploring this area in the future.",
        ],
        image: "/projects/Project1.PNG",
        tags: ["TypeScript"],
        demoUrl: "#",
        githubUrl: "https://github.com/TarikCO/Blockchain-Project",
        category: "programming"
    },
    {
        id: 2,
        title: "Geography Quiz",
        description: [
            "A quiz website designed to engage 150+ children, maximizing their geographical knowledge and critical thinking skills.",
            "This project is especially meaningful to me because it was developed as part of a volunteer initiative I participated at Positivo International School, where I created educational content for the children in my school. The Geography Quiz website was designed to be an interactive and engaging way for children to learn about geography, while also developing their critical thinking skills. The quiz features a variety of questions and challenges that encourage children to think critically about geographical concepts and information.",
            "This was one of my first programming projects that actually had a real-world impact, and it was incredibly rewarding to see how the website helped children to learn and grow. It was also a great opportunity for me to apply my programming skills in a way that made a positive difference in the lives of others, and it inspired me to continue using technology for social good in the future.",
        ],
        image: "/projects/Project2.PNG",
        tags: ["Django", "Python", "HTML/CSS", "JavaScript"],
        demoUrl: "#",
        githubUrl: "https://github.com/TarikCO/Geography-Quiz",
        category: "programming"
    },
    {
        id: 3,
        title: "AI Image Classifier",
        description: [
            "An AI image classifier in Python that categorizes images into predefined classes based on their content.",
            "This project was developed as my initiative to learn more about Python libraries and machine learning. I built an AI image classifier using TensorFlow, and integrated NumPy, OpenCV, and Streamlit for data processing, image handling, and UI deployment. The classifier was trained on a dataset of labeled images, and it uses a convolutional neural network (CNN) architecture to learn and make predictions about new images. The Streamlit integration allows users to upload their own images and receive real-time classifications, making it an interactive and user-friendly application.",
        ],
        image: "/projects/Project3.png",
        tags: ["Python", "TensorFlow", "Streamlit", "OpenCV", "NumPy"],
        demoUrl: "#",
        githubUrl: "https://github.com/TarikCO/AI-Image-Classifier",
        category: "programming"
    },
    {
        id: 9,
        title: "Gym App",
        description: [
            "A mobile application made with Flutter to track my stats and goals in the gym.",
            "This project was developed as a personal initiative to create a tool that would help me track my progress and goals in the gym. The Gym App allows users to log their workouts, track their stats, and set fitness goals. It features a very simple user-friendly interface that makes it easy to input workout data and view progress over time.",
        ],
        image: "/projects/Project9.png",
        tags: ["Flutter", "Dart", "C++"],
        demoUrl: "#",
        githubUrl: "https://github.com/TarikCO/Gym-App",
        category: "programming"
    },
    {
        id: 7,
        title: "Viable Energy Blockchain Research",
        description: [
            "A 20+ page academic paper that explores a decentralized blockchain and peer-to-peer network solution for the energy market.",
            "This academic project was developed as part of my involvement with research at Positivo International School, where I had the opportunity to explore the potential applications of blockchain technology in the energy sector. The paper explores how a decentralized blockchain and peer-to-peer network solution could be implemented in the energy market to create more sustainable and efficient systems. It covers various aspects of this topic, including the technical implementation of such a system, its potential benefits and challenges, and its implications for the future of energy markets.",
        ],
        image: "/projects/Project7.png",
        tags: [],
        demoUrl: "#",
        githubUrl: "#",
        category: "academic"
    },
    {
        id: 4,
        title: "Engineering Club Project",
        description: [
            "Designed, constructed, and launched a 10-inch model rocket.", 
            "This project was part of my involvement with the engineering club at Positivo International School, where I had the opportunity to apply my engineering skills in a hands-on project. The goal was to design, construct, and launch a 10-inch model rocket, which required a combination of theoretical knowledge and practical skills. I was responsible for the entire process, from designing the rocket using CAD software to selecting materials and constructing the rocket by hand. The project culminated in a successful launch, which was a rewarding experience that allowed me to see the results of my hard work and dedication.",
        ],
        image: "/projects/Project4.jpg",
        tags: [],
        demoUrl: "#",
        githubUrl: "#",
        category: "academic"
    },
    {
        id: 8,
        title: "Calculating the Surface Area of The Abbey Church of St. Louis",
        description: [
            "Estimated the surface area of the Abbey Church of St. Louis through mathematical techniques and thinking.", 
            "This project was part of a mathematical research initiative at Positivo International School. I authored a 30+ page document exploring various mathematical techniques and approaches to estimate the surface area of the Abbey Church of St. Louis, a famous architectural landmark. The project involved extensive research and application of mathematical concepts, including geometry, calculus, and numerical methods. I analyzed the architectural design of the church, broke it down into manageable components, and applied appropriate mathematical techniques to estimate its surface area. This project was a great opportunity for me to deepen my understanding of mathematics while also applying it to a real-world problem in an interesting and engaging way.",
        ],
        image: "/projects/Project8.jpg",
        tags: [],
        demoUrl: "#",
        githubUrl: "#",
        category: "academic"
    },
];

export const categories = ["all", "programming", "academic", "other"];