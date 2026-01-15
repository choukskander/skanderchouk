import { Experience, Project, Skill } from './types';

export const CV_DATA = {
  name: "Skander CHOUK",
  role: "Ingénieur Informatique Full-Stack (MERN)",
  subtitle: "Expertise en intégration IA et environnement DevOps",
  location: "Béni Khalled, Nabeul, Tunis",
  email: "skander.chouk@esprit.tn",
  phone: "(+216) 28644261",
  linkedin: "https://www.linkedin.com/in/skander-chouk/",
  bio: "Passionné par la création d'applications web performantes et sécurisées avec une forte valeur ajoutée technique.",
};

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    title: "Stage de Fin d'Études",
    company: "ZIMYS (Zillion Intelligences & Mystic Solutions)",
    period: "Février 2025 - Août 2025",
    description: [
      "Projet : RDV-MED – Plateforme Médicale Intelligente (MERN + IA + DevOps)",
      "Conception et développement d'une application de prise de rendez-vous médicaux en ligne",
      "Intégration d'un module d'IA (Random Forest) pour le diagnostic préliminaire des symptômes",
      "Mise en place d'une infrastructure DevOps complète : Docker, Jenkins, SonarQube, Nexus",
      "Monitoring et Observabilité avec Prometheus et Grafana pour assurer la haute disponibilité"
    ],
    techs: ["MongoDB", "Express.js", "React.js", "Node.js", "Python", "Docker", "Jenkins", "Nexus", "SonarQube", "Prometheus", "Grafana"],
    result: "Application stable avec pipeline CI/CD automatisé et monitoring temps réel"
  },
  {
    id: '2',
    title: "Stage Ingénieur",
    company: "ZIMYS (Zillion Intelligences & Mystic Solutions)",
    period: "Juillet 2023 - Août 2023",
    description: [
      "Projet : Application de Gestion des Interventions Techniques (MERN stack)",
      "Développement d'un tableau de bord interactif pour le suivi des interventions et des techniciens"
    ],
    techs: ["MERN Stack", "Dashboarding", "UX/UI"],
    result: "Amélioration de la productivité interne grâce à une interface ergonomique et performante"
  },
  {
    id: '3',
    title: "Stage PFE",
    company: "XTENSUS (ESN), Ennkhilet",
    period: "Février 2022 - Juin 2022",
    description: [
      "Conception et développement d'une application web pour la gestion budgétaire",
      "Architecture Backend robuste avec Spring Boot et Hibernate"
    ],
    techs: ["Spring Boot", "Hibernate", "PrimeFaces"],
  },
  {
    id: '4',
    title: "Stage de perfectionnement",
    company: "Direction Générale des Matériels Roulants",
    period: "Juillet 2021 - Septembre 2021",
    description: [
      "Développement d'une application web de gestion de bibliothèque",
      "Suivi des prêts et automatisation des retours"
    ],
    techs: ["Symfony", "PHP", "MySQL"],
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'RDV-MED AI Platform',
    category: 'MERN + AI + DevOps',
    description: 'Plateforme médicale intelligente incluant un module de diagnostic IA, des espaces dédiés pour médecins et patients, et des tableaux de bord statistiques avancés.',
    image: 'https://res.cloudinary.com/dftgawfdc/image/upload/v1767003673/screencapture-rdv-med-netlify-app-2025-12-29-11_20_23_ov59yu.png',
    tags: ['React', 'Node.js', 'Python', 'Docker', 'Prometheus', 'Grafana'],
    link: 'https://rdv-med.netlify.app/'
  },
  {
    id: 'p4',
    title: 'Professional Opportunities',
    category: 'MERN',
    description: 'Application web dédiée à la gestion des opportunités professionnelles, permettant aux chercheurs d\'emploi de gérer leur profil et postuler en ligne.',
    image: 'https://res.cloudinary.com/dftgawfdc/image/upload/v1768488883/Job-Interview_itrexl.png',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Surge'],
    link: 'https://professional-opportunities.surge.sh'
  },
  {
    id: 'p2',
    title: 'Dashboard d\'Interventions',
    category: 'MERN',
    description: 'Interface de suivi en temps réel des techniciens de maintenance avec gestion des tickets et reporting analytique.',
    image: 'https://res.cloudinary.com/dftgawfdc/image/upload/v1768488509/Intervention_athrbj.png',
    tags: ['Express', 'MongoDB', 'React', 'Recharts']
  },
  {
    id: 'p5',
    title: 'Voyage Durable',
    category: 'PHP',
    description: 'Plateforme Laravel pour la gestion de voyages responsables avec intégration de pipelines DevOps pour un déploiement sécurisé.',
    image: 'https://res.cloudinary.com/dftgawfdc/image/upload/v1768488891/voyage-durable_bupcph.png',
    tags: ['Laravel', 'PHP', 'MySQL', 'Docker', 'DevOps']
  },
  {
    id: 'p3',
    title: 'ERP de Gestion Budgétaire',
    category: 'Java / Spring',
    description: 'Logiciel de gestion financière pour XTENSUS permettant le pilotage des budgets et la comptabilité analytique.',
    image: 'https://res.cloudinary.com/dftgawfdc/image/upload/v1768488926/Capture_d_%C3%A9cran_2026-01-15_155417_vn8mzf.png',
    tags: ['Spring Boot', 'Hibernate', 'PrimeFaces', 'SQL']
  },
  {
    id: 'p6',
    title: 'Hopitallo',
    category: 'PHP / Java',
    description: 'Application multi-support (Web, Desktop, Mobile) pour la gestion des urgences hospitalières utilisant Symfony et Java.',
    image: 'https://res.cloudinary.com/dftgawfdc/image/upload/v1767003148/hopitallo_xcicns.jpg',
    tags: ['Symfony', 'Java', 'Codename One', 'PHP']
  },
  {
    id: 'p7',
    title: 'Réservation de Dortoirs',
    category: 'Microservices',
    description: 'Système de microservices pour la gestion des chambres et des réservations avec MySQL, H2 et MongoDB.',
    image: 'https://res.cloudinary.com/dftgawfdc/image/upload/v1767003164/reservation_wq0x5c.jpg',
    tags: ['Microservices', 'Spring Boot', 'MongoDB', 'MySQL']
  }
];

export const SKILLS: Skill[] = [
  { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB', category: 'Language' },
  { name: 'Javascript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E', category: 'Language' },
  { name: 'React.js', icon: 'https://cdn.simpleicons.org/react/61DAFB', category: 'Framework' },
  { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933', category: 'Framework' },
  { name: 'Express.js', icon: 'https://cdn.simpleicons.org/express/white', category: 'Framework' },
  { name: 'Symfony', icon: 'https://cdn.simpleicons.org/symfony/white', category: 'Framework' },
  { name: 'SpringBoot', icon: 'https://cdn.simpleicons.org/springboot/6DB33F', category: 'Framework' },
  { name: 'Laravel', icon: 'https://cdn.simpleicons.org/laravel/FF2D20', category: 'Framework' },
  { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED', category: 'DevOps' },
  { name: 'Jenkins', icon: 'https://cdn.simpleicons.org/jenkins/D24939', category: 'DevOps' },
  { name: 'Nexus', icon: 'https://cdn.simpleicons.org/sonatype/white', category: 'DevOps' },
  { name: 'SonarQube', icon: 'https://cdn.simpleicons.org/sonarqube/4E9BCD', category: 'DevOps' },
  { name: 'Prometheus', icon: 'https://cdn.simpleicons.org/prometheus/E6522C', category: 'DevOps' },
  { name: 'Grafana', icon: 'https://cdn.simpleicons.org/grafana/F46800', category: 'DevOps' },
  { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032', category: 'Tool' },
  { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/47A248', category: 'Tool' },
];