/**
 * PORTFOLIO DATA
 * Update this file to change the content of the website.
 */

const portfolioData = {
    hero: {
        name: "Alex Developer",
        title: "Full Stack Engineer & UI Designer",
        description: "I build accessible, pixel-perfect, and performant web experiences. Passionate about clean code and user-centric design.",
        // Using a placeholder image service
        image: "https://ui-avatars.com/api/?name=Alex+Developer&background=0D8ABC&color=fff&size=256"
    },
    about: {
        title: "About Me",
        paragraphs: [
            "I'm a software engineer with a passion for building digital products that solve real-world problems. With over 5 years of experience in web development, I specialize in creating robust and scalable applications.",
            "My journey started with a curiosity for how things work on the internet, which led me to learn HTML and CSS. Today, I work with modern technologies to build seamless user experiences.",
            "When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting with new cooking recipes."
        ]
    },
    skills: [
        { name: "JavaScript (ES6+)", category: "Frontend" },
        { name: "TypeScript", category: "Frontend" },
        { name: "React", category: "Frontend" },
        { name: "Tailwind CSS", category: "Frontend" },
        { name: "Node.js", category: "Backend" },
        { name: "Python", category: "Backend" },
        { name: "PostgreSQL", category: "Database" },
        { name: "Docker", category: "DevOps" },
        { name: "Git", category: "Tools" },
        { name: "Figma", category: "Design" }
    ],
    projects: [
        {
            title: "E-Commerce Dashboard",
            description: "A comprehensive dashboard for managing online stores, featuring real-time analytics, inventory management, and order processing.",
            tags: ["React", "Tailwind", "Node.js", "Socket.io"],
            link: "#",
            // Placeholder for project image
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23333'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%23555'%3EProject Image%3C/text%3E%3C/svg%3E"
        },
        {
            title: "Task Management App",
            description: "A collaborative task management tool allowing teams to organize, prioritize, and track their work efficiently.",
            tags: ["Vue.js", "Firebase", "CSS Grid"],
            link: "#",
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23333'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%23555'%3EProject Image%3C/text%3E%3C/svg%3E"
        },
        {
            title: "Weather Forecast API",
            description: "A RESTful API that provides accurate weather data and forecasts for any location worldwide.",
            tags: ["Express", "MongoDB", "Redis"],
            link: "#",
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23333'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%23555'%3EProject Image%3C/text%3E%3C/svg%3E"
        }
    ],
    experience: [
        {
            company: "Tech Solutions Inc.",
            role: "Senior Frontend Developer",
            period: "2021 - Present",
            description: "Leading the frontend team in rebuilding the core product using React and TypeScript. Improved performance by 40%."
        },
        {
            company: "Creative Agency",
            role: "Web Developer",
            period: "2019 - 2021",
            description: "Developed responsive websites for various clients. Collaborated closely with designers to implement pixel-perfect UIs."
        },
        {
            company: "StartUp Hub",
            role: "Junior Developer",
            period: "2018 - 2019",
            description: "Assisted in the development of an MVP for a fintech startup. Gained experience in full-stack development."
        }
    ],
    social: {
        email: "alex@example.com",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com"
    }
};
