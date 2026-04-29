// Translations object
const translations = {
    es: {
        intro: {
            role: 'Sr. Ingeniero de Software',
            subtitle: 'Estudiante Avanzado de Ingeniería Informática',
            description: '+5 años desarrollando videojuegos, experiencias inmersivas, plataformas backend y productos finales con <strong>IA conversacional</strong>. Especializado en <strong>Unreal Engine 5</strong>, <strong>C++</strong>, <strong>UEFN</strong> con <strong>Verse</strong>, <strong>Python</strong> y <strong>JS</strong>. Construí asistentes virtuales 3D integrando <strong>LLM agents</strong>, <strong>LangChain</strong>, <strong>LangGraph</strong>, <strong>RAG</strong>, <strong>Qdrant</strong>, <strong>Whisper STT</strong>, <strong>Kokoro TTS</strong>, <strong>FastAPI</strong>, <strong>WebSockets</strong>, <strong>vLLM / LM Studio</strong> y <strong>NVIDIA ACE</strong>.'
        },
        buttons: {
            watchVideo: 'Ver Video',
            comingSoon: 'Próximamente',
            article: 'Nota'
        },
        stats: {
            uniquePlayers: 'Jugadores Únicos',
            gamesPlayed: 'Partidas Jugadas'
        },
        projects: {
            avia: {
                description: 'Asistente virtual 3D con IA para cabina, presentado en AIX 2026 por Rosen Aviation en colaboración con KiPcreating. Fui contratado por KiPcreating para desarrollar la experiencia conversacional end-to-end, integrando backend de voz, agentes LLM, RAG, STT/TTS y comunicación en tiempo real con el frontend en Unreal Engine 5 + NVIDIA ACE.',
                context: 'Relación comercial: Rosen Aviation colaboró con KiPcreating; mi participación fue como desarrollador contratado por KiPcreating.'
            },
            expressa: {
                description: 'Participé en el desarrollo de esta plataforma de configuración de aeronaves adoptada por las principales empresas de aviación. Ofrece una solución web robusta para la personalización de exteriores e interiores de flotas.'
            },
            bbj: {
                description: 'Colaboré en el desarrollo de esta herramienta de configuración de alto nivel utilizada por Boeing para sus Business Jets. Permite a clientes VIP personalizar cada aspecto de sus cabinas en tiempo real con fidelidad visual fotorrealista.'
            },
            faniotApp: {
                description: 'Aplicación Smart City orientada al monitoreo y gestión de luminarias urbanas. Integra frontend Flutter, backend Django y servicios IoT para visualizar estado, métricas históricas, fallas, mapa, dimmer y comandos de encendido/apagado en tiempo real.'
            },
            simulador: {
                description: 'Participé en el desarrollo de esta plataforma educativa con laboratorios virtuales para la educación técnica. Permite a docentes dictar clases, crear actividades personalizadas y evaluar a los alumnos en un entorno 3D interactivo y seguro.'
            },
            cataratas: {
                description: 'Colaboré en el desarrollo de esta experiencia inmersiva de Realidad Virtual que transporta a los usuarios al corazón de las Cataratas del Iguazú. Desarrollado con Unreal Engine 5 para lograr un realismo visual impactante en entornos naturales.'
            },
            cityFalls: {
                description: 'Participé en el desarrollo de esta innovadora fusión entre videojuegos y turismo real. Desarrollado en UEFN para el hotel City Falls en Iguazú, esta experiencia permite a los usuarios jugar minijuegos para ganar puntos. Estos puntos se canjean por códigos de descuento reales a través de la app del hotel, conectando el metaverso con la hospitalidad física.'
            },
            survival: {
                description: 'Desarrollé este juego para Dark Wizard Studio. Un intenso juego de supervivencia en Fortnite Creative con temática K-Pop. Los jugadores deben sobrevivir a oleadas de enemigos en un entorno visualmente impactante.'
            },
            dragonBedWars: {
                description: 'Desarrollé este proyecto para Dark Wizard Studio. Una reinvención del clásico modo Bed Wars que incorpora mecánicas de dragones y combate aéreo en Fortnite, ofreciendo una capa estratégica vertical única sobre la jugabilidad tradicional de defensa de bases.'
            },
            solar54: {
                description: 'Participé en el desarrollo de este prototipo de juego de estrategia y supervivencia ambientado en la colonización de Marte. Desarrollado en Unreal Engine 5, explorando mecánicas complejas de gestión de recursos (Proyecto no lanzado comercialmente).'
            }
        }
    },
    en: {
        intro: {
            role: 'Senior Software Engineer',
            subtitle: 'Advanced Computer Engineering Student',
            description: '+5 years building video games, immersive experiences, backend platforms, and shipped <strong>conversational AI</strong> products. Specialized in <strong>Unreal Engine 5</strong>, <strong>C++</strong>, <strong>UEFN</strong> with <strong>Verse</strong>, <strong>Python</strong>, and <strong>JS</strong>. I built 3D virtual assistants integrating <strong>LLM agents</strong>, <strong>LangChain</strong>, <strong>LangGraph</strong>, <strong>RAG</strong>, <strong>Qdrant</strong>, <strong>Whisper STT</strong>, <strong>Kokoro TTS</strong>, <strong>FastAPI</strong>, <strong>WebSockets</strong>, <strong>vLLM / LM Studio</strong>, and <strong>NVIDIA ACE</strong>.'
        },
        buttons: {
            watchVideo: 'Watch Video',
            comingSoon: 'Coming Soon',
            article: 'Article'
        },
        stats: {
            uniquePlayers: 'Unique Players',
            gamesPlayed: 'Games Played'
        },
        projects: {
            avia: {
                description: 'AI-powered 3D virtual cabin assistant presented at AIX 2026 by Rosen Aviation in collaboration with KiPcreating. I was contracted by KiPcreating to develop the end-to-end conversational experience, integrating voice backend, LLM agents, RAG, STT/TTS, and real-time communication with the Unreal Engine 5 + NVIDIA ACE frontend.',
                context: 'Commercial relationship: Rosen Aviation collaborated with KiPcreating; my role was as a developer contracted by KiPcreating.'
            },
            expressa: {
                description: 'I participated in the development of this aircraft configuration platform adopted by major aviation companies. Offers a robust web solution for customizing aircraft exteriors and interiors for fleets.'
            },
            bbj: {
                description: 'I collaborated in the development of this high-level configuration tool used by Boeing for their Business Jets. Allows VIP clients to customize every aspect of their cabins in real-time with photorealistic visual fidelity.'
            },
            faniotApp: {
                description: 'Smart City application for monitoring and managing urban lighting. It integrates a Flutter frontend, Django backend, and IoT services to visualize status, historical metrics, failures, map location, dimmer levels, and real-time on/off commands.'
            },
            simulador: {
                description: 'I participated in the development of this educational platform with virtual laboratories for technical education. Allows teachers to conduct classes, create personalized activities, and evaluate students in an interactive and safe 3D environment.'
            },
            cataratas: {
                description: 'I collaborated in the development of this immersive Virtual Reality experience that transports users to the heart of Iguazu Falls. Developed with Unreal Engine 5 to achieve stunning visual realism in natural environments.'
            },
            cityFalls: {
                description: 'I participated in the development of this innovative fusion between video games and real tourism. Developed in UEFN for the City Falls hotel in Iguazu, this experience allows users to play mini-games to earn points. These points can be redeemed for real discount codes through the hotel app, connecting the metaverse with physical hospitality.'
            },
            survival: {
                description: 'I developed this game for Dark Wizard Studio. An intense survival game in Fortnite Creative with K-Pop theme. Players must survive waves of enemies in a visually stunning environment.'
            },
            dragonBedWars: {
                description: 'I developed this project for Dark Wizard Studio. A reimagination of the classic Bed Wars mode that incorporates dragon mechanics and aerial combat in Fortnite, offering a unique vertical strategic layer on top of traditional base defense gameplay.'
            },
            solar54: {
                description: 'I participated in the development of this strategy and survival game prototype set in Mars colonization. Developed in Unreal Engine 5, exploring complex resource management mechanics (Project not commercially released).'
            }
        }
    }
};

let currentLanguage = 'en';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Language Selector
    initLanguageSelector();

    // Initialize Fortnite Stats
    initFortniteStats();

    // Initialize Scroll Animations
    initScrollAnimations();

    // Load saved language preference
    const savedLang = localStorage.getItem('language') || 'en';
    if (savedLang !== 'en') {
        switchLanguage(savedLang);
    } else {
        switchLanguage('en');
    }
});

/**
 * Fortnite API Integration
 * Fetches stats for islands using a mock service (ready for real API)
 */
async function initFortniteStats() {
    const statCards = document.querySelectorAll('.stats-card');

    statCards.forEach(card => {
        const islandCode = card.dataset.islandCode;
        if (islandCode) {
            fetchIslandStats(islandCode);
        }
    });
}

async function fetchIslandStats(code) {
    try {
        // TODO: Replace with real API call when key is available
        // const response = await fetch(`https://fortniteapi.io/v1/creative/island?code=${code}`, { headers: { 'Authorization': 'YOUR_KEY' } });
        // const data = await response.json();

        // Mock Data Simulation
        const mockData = await getMockStats(code);

        updateStatsUI(code, mockData);
    } catch (error) {
        console.error(`Error fetching stats for ${code}:`, error);
    }
}

function getMockStats(code) {
    return new Promise(resolve => {
        // Fixed stats for each project
        const stats = {
            '0432-2176-4469': { // KPop Survival Game
                uniquePlayers: 4524,
                plays: 6256
            },
            '6123-6237-1163': { // Dragon Bed Wars
                uniquePlayers: 5651,
                plays: 8242
            }
        };

        // Simulate network delay
        setTimeout(() => {
            resolve(stats[code] || {
                uniquePlayers: 0,
                plays: 0
            });
        }, 1000);
    });
}

function updateStatsUI(code, data) {
    const uniqueEl = document.getElementById(`unique-${code}`);
    const playsEl = document.getElementById(`plays-${code}`);

    if (uniqueEl) {
        animateValue(uniqueEl, 0, data.uniquePlayers, 2000);
    }
    if (playsEl) {
        animateValue(playsEl, 0, data.plays, 2000);
    }
}

/**
 * Utility: Animate number counting
 */
function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start).toLocaleString();
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

/**
 * Scroll Animations
 * Adds subtle parallax or fade-in effects on scroll
 */
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

/**
 * Language Selector
 * Handles language switching between ES and EN
 */
function initLanguageSelector() {
    const languageToggle = document.getElementById('languageToggle');
    const currentLangSpan = document.getElementById('currentLang');

    if (languageToggle) {
        languageToggle.addEventListener('click', () => {
            const newLang = currentLanguage === 'es' ? 'en' : 'es';
            switchLanguage(newLang);
        });
    }
}

function switchLanguage(lang) {
    currentLanguage = lang;

    // Update button text
    const currentLangSpan = document.getElementById('currentLang');
    if (currentLangSpan) {
        currentLangSpan.textContent = lang.toUpperCase();
    }

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getTranslation(key, lang);

        if (translation) {
            element.innerHTML = translation;
        }
    });

    // Save language preference
    localStorage.setItem('language', lang);
}

function getTranslation(key, lang) {
    const keys = key.split('.');
    let translation = translations[lang];

    for (const k of keys) {
        if (translation && translation[k]) {
            translation = translation[k];
        } else {
            return null;
        }
    }

    return translation;
}
