/**
 * PORTFOLIO DATA
 * Updated with personal information.
 */

const portfolioData = {
    hero: {
        name: "Sertan Soydabaş",
        title: "Full Stack Software Engineer (Backend-Focused)",
        description: "A backend-focused full stack engineer with a strong sense of ownership, precise system architecture thinking, and a growing specialization in AI-enhanced automation.",
        image: "me.jpeg"
    },
    about: {
        title: "About Me",
        paragraphs: [
            "I'm Sertan. I am a Full Stack Software Engineer based in Turkey, currently working at GoWit. My journey has taken me from studying American Culture and Literature to becoming a passionate developer who loves deep system design and fast problem solving.",
            "I value authenticity, balance, and the philosophy of 'earning' success rather than just 'deserving' it. I thrive in environments that require high versatility and ownership.",
            "Outside of coding, I am a professional dance instructor (Salsa & Latin), an avid reader of authors like Ursula K. Le Guin and Edgar Allan Poe, and I enjoy exploring technology's impact on life."
        ]
    },
    skills: [
        { name: "Go (Golang)", category: "Backend" },
        { name: "Python", category: "Backend" },
        { name: "TypeScript", category: "Frontend" },
        { name: "JavaScript", category: "Frontend" },
        { name: "React.js", category: "Frontend" },
        { name: "Next.js", category: "Frontend" },
        { name: "PostgreSQL", category: "Database" },
        { name: "MongoDB", category: "Database" },
        { name: "Redis", category: "Database" },
        { name: "Docker", category: "DevOps" },
        { name: "Kubernetes", category: "DevOps" },
        { name: "AWS", category: "Cloud" },
        { name: "LangGraph", category: "AI/ML" },
        { name: "OpenTelemetry", category: "Observability" },
        { name: "Communication", category: "Soft Skills" },
        { name: "Leadership", category: "Soft Skills" }
    ],
    projects: [
        {
            title: "GoWit LangGraph Agent System",
            description: "Co-built and orchestrated a production-grade LangGraph agent capable of analytics, reporting, campaign setup, and automated troubleshooting. Integrated with a branded OpenWebUI frontend.",
            tags: ["LangGraph", "Python", "AI", "OpenWebUI"],
            link: "#",
            image: "https://placehold.co/600x400/1e293b/ffffff?text=AI+Agent+System"
        },
        {
            title: "SOC 2 Compliance Infrastructure",
            description: "Designed and implemented encrypted email storage and related security flows to support SOC 2 requirements, ensuring high standards of data protection.",
            tags: ["Security", "Encryption", "Compliance", "Backend"],
            link: "#",
            image: "https://placehold.co/600x400/1e293b/ffffff?text=SOC+2+Infrastructure"
        },
        {
            title: "Cannabox Delivery Marketplace",
            description: "Built and improved a full delivery marketplace system integrating stores, payment flows, order routing, and rider dispatch lifecycle.",
            tags: ["Marketplace", "Full Stack", "Logistics"],
            link: "#",
            image: "https://placehold.co/600x400/1e293b/ffffff?text=Delivery+Marketplace"
        },
        {
            title: "Sponsored Brand Ad Architecture",
            description: "Designed and implemented the 'Sponsored Brand' ad type, extending the platform’s inventory and enabling new revenue opportunities.",
            tags: ["AdTech", "System Design", "Go"],
            link: "#",
            image: "https://placehold.co/600x400/1e293b/ffffff?text=Ad+Architecture"
        }
    ],
    experience: [
        {
            company: "GoWit",
            role: "Full Stack Software Engineer",
            period: "8 months",
            description: "Backend-focused role working on SOC 2 compliance, AI agent systems with LangGraph, and OpenTelemetry instrumentation."
        },
        {
            company: "Cannabox (Thailand)",
            role: "Developer",
            period: "1.5 years",
            description: "Built delivery marketplace systems, managed Docker-based application clusters, and handled full-stack features."
        },
        {
            company: "DT Cloud",
            role: "Full Stack Software Engineer",
            period: "1 year",
            description: "Maintained and extended cloud-based systems with a focus on reliability and performance."
        },
        {
            company: "American Life Language Institutes",
            role: "Head of English Department",
            period: "3 years",
            description: "Led the department, taught complex concepts, and managed team dynamics."
        }
    ],
    interests: {
        title: "Interests & Philosophy",
        items: [
            { title: "Philosophy", description: "Memento te hominem esse. I believe in authenticity, balance, and earning success." },
            { title: "Dance", description: "Professional Latin dance instructor. Teaching and performing keeps me grounded and expressive." },
            { title: "Literature", description: " avid reader of Ursula K. Le Guin, Edgar Allan Poe, and Jose Saramago." },
            { title: "Technology", description: "Exploring AI, automation, and how technology impacts our daily lives." }
        ]
    },
    social: {
        email: "sertansoydabas@gmail.com", // Inferred from name, placeholder if not in json
        github: "https://github.com/ssoydabas",
        linkedin: "https://linkedin.com/in/sertansoydabas", // Assumed pattern
        twitter: "https://twitter.com/ssoydabas"
    }
};
