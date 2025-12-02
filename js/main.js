/**
 * MAIN JAVASCRIPT
 * Handles rendering, theme toggling, and animations.
 */

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderContent();
    initAnimations();
});

/* ==========================================
   THEME TOGGLE
   ========================================== */
function initTheme() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const html = document.documentElement;

    // Check localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }

    themeToggleBtn.addEventListener('click', () => {
        html.classList.toggle('dark');
        const isDark = html.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}

/* ==========================================
   RENDER CONTENT
   ========================================== */
function renderContent() {
    renderProjects();
    renderExperience();
    renderFooter();
}

function renderInterests() {
    const interestsContainer = document.getElementById('interests-content');
    if (!portfolioData.interests) return;

    portfolioData.interests.items.forEach(item => {
        const div = document.createElement('div');
        div.className = "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300";
        div.innerHTML = `
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">${item.title}</h3>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">${item.description}</p>
        `;
        interestsContainer.appendChild(div);
    });
}

function renderHero() {
    const hero = portfolioData.hero;
    document.getElementById('hero-name').textContent = hero.name;
    document.getElementById('hero-title').textContent = hero.title;
    document.getElementById('hero-description').textContent = hero.description;
    document.getElementById('hero-image').src = hero.image;
    document.getElementById('hero-image').alt = hero.name;
}

function renderAbout() {
    const aboutContainer = document.getElementById('about-content');
    portfolioData.about.paragraphs.forEach(para => {
        const p = document.createElement('p');
        p.className = "text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed";
        p.textContent = para;
        aboutContainer.appendChild(p);
    });
}

function renderSkills() {
    const skillsContainer = document.getElementById('skills-grid');
    portfolioData.skills.forEach(skill => {
        const div = document.createElement('div');
        div.className = "bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700 flex items-center justify-center text-center";
        div.innerHTML = `<span class="font-medium text-gray-800 dark:text-gray-200">${skill.name}</span>`;
        skillsContainer.appendChild(div);
    });
}

function renderProjects() {
    const projectsContainer = document.getElementById('projects-grid');
    portfolioData.projects.forEach(project => {
        const article = document.createElement('article');
        article.className = "bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col h-full group";

        const tagsHtml = project.tags.map(tag =>
            `<span class="px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full">${tag}</span>`
        ).join('');

        article.innerHTML = `
            <div class="h-48 overflow-hidden bg-gray-200 dark:bg-gray-700 relative">
                <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500">
            </div>
            <div class="p-6 flex-1 flex flex-col">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">${project.title}</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4 flex-1">${project.description}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${tagsHtml}
                </div>
                <a href="${project.link}" class="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline mt-auto">
                    View Project 
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>
            </div>
        `;
        projectsContainer.appendChild(article);
    });
}

function renderExperience() {
    const expContainer = document.getElementById('experience-list');
    portfolioData.experience.forEach((exp, index) => {
        const div = document.createElement('div');
        // Timeline connector line logic could be added here with CSS, keeping it simple for now
        div.className = "relative pl-8 pb-12 border-l-2 border-gray-200 dark:border-gray-700 last:pb-0 last:border-l-0";

        div.innerHTML = `
            <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900"></div>
            <div class="mb-1 text-sm text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">${exp.period}</div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">${exp.role}</h3>
            <div class="text-lg text-gray-700 dark:text-gray-300 mb-2 font-medium">${exp.company}</div>
            <p class="text-gray-600 dark:text-gray-400">${exp.description}</p>
        `;
        expContainer.appendChild(div);
    });
}

function renderFooter() {
    const year = new Date().getFullYear();
    document.getElementById('footer-year').textContent = year;
    document.getElementById('footer-email').href = `mailto:${portfolioData.social.email}`;
}

/* ==========================================
   ANIMATIONS
   ========================================== */
function initAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select elements to animate
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
        el.classList.add('transition-all', 'duration-700', 'ease-out', 'opacity-0', 'translate-y-10');
        observer.observe(el);
    });
}
