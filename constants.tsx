import { 
  Target, Rocket, Handshake, Shield, 
  Brain, Heart, Compass, Scale, BookOpen,
  Users, CheckCircle, Clock, Award
} from 'lucide-react';
import { Webinar, Tool, FaqItem, TimelineEvent, MentorDimension } from './types';

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/biohubventure",
  github: "https://github.com/scientificbroker/Mentoring2026",
  email: "biohubventure@gmail.com",
  form: "https://forms.gle/3hN2AuXYbzsVYHcp8"
};

export const WEBINARS: Webinar[] = [
  {
    id: 1,
    title: "El Mentor Estratega",
    date: "16 Feb 2026",
    description: "Fundamentos de gestión y rol del mentor en biotecnología.",
    topics: ["12 principios PMBOK 7", "Gestión de 7 restricciones", "Rol consultor vs. guía"],
    caseStudy: "La Startup Prometedora pero Desordenada",
    icon: Target
  },
  {
    id: 2,
    title: "Acelerando la Innovación",
    date: "23 Feb 2026",
    description: "Metodologías ágiles aplicadas a la ciencia.",
    topics: ["Design Thinking (5 etapas)", "Lean Startup científico", "MVP vs. Prototipo", "Scrum en lab"],
    caseStudy: "El Pivote Doloroso",
    icon: Rocket
  },
  {
    id: 3,
    title: "Liderazgo y Equipos",
    date: "02 Mar 2026",
    description: "Construcción de equipos de alto rendimiento y gestión humana.",
    topics: ["Teoría U", "Gestión de conflictos", "Feedback sándwich", "Prevención burnout"],
    caseStudy: "Gana Quien Construye",
    icon: Users
  },
  {
    id: 4,
    title: "Gestión del Cambio y Cierre",
    date: "09 Mar 2026",
    description: "Resiliencia, métricas y finalización de procesos.",
    topics: ["Modelo Kotter (8 pasos)", "Teoría U invertida", "KPIs vs. Métricas vanidosas", "Protocolo de cierre"],
    caseStudy: "El Valle de la Muerte",
    icon: Shield
  }
];

export const TOOLS: Tool[] = [
  { name: "Project Charter Simplificado", category: "Gestión" },
  { name: "Matriz de Stakeholders", category: "Gestión" },
  { name: "Análisis de 7 Restricciones", category: "Gestión" },
  { name: "Matriz de Roles", category: "Gestión" },
  { name: "Mapa de Empatía", category: "Innovación" },
  { name: "Lienzo Problema-Solución", category: "Innovación" },
  { name: "Framework Lean", category: "Innovación" },
  { name: "Tablero Kanban/Scrum", category: "Agilidad" },
  { name: "Guía de Feedback", category: "Liderazgo" },
  { name: "Semáforo de Burnout", category: "Liderazgo" },
  { name: "Plan Kotter 8 Pasos", category: "Cambio" },
  { name: "Análisis Pre-mortem", category: "Riesgos" },
  { name: "Dashboard de KPIs", category: "Métricas" },
  { name: "Checklist de Cierre", category: "Cierre" }
];

export const MENTOR_DIMENSIONS: MentorDimension[] = [
  { title: "Estratégica", description: "Visión de negocio aplicada a la ciencia.", icon: Compass },
  { title: "Metodológica", description: "Dominio de PMBOK, Agile y Lean.", icon: BookOpen },
  { title: "Humana", description: "Empatía y gestión de equipos.", icon: Heart },
  { title: "Resiliencia", description: "Capacidad de superar el valle de la muerte.", icon: Shield },
  { title: "Ética", description: "Integridad en la investigación y negocios.", icon: Scale },
];

export const TIMELINE: TimelineEvent[] = [
  { date: "13 Feb 2026", title: "Cierre de Postulaciones", description: "Último día para enviar tu solicitud." },
  { date: "15 Feb 2026", title: "Resultados", description: "Anuncio de mentores seleccionados." },
  { date: "16 Feb 2026", title: "Inicio del Programa", description: "Webinar 1: El Mentor Estratega." },
  { date: "23 Mar 2026", title: "Certificación", description: "Entrega de credenciales digitales." }
];

export const FAQS: FaqItem[] = [
  {
    question: "¿Cuánto tiempo debo comprometer?",
    answer: "El programa requiere asistencia a los 4 webinars (2 horas c/u) más aproximadamente 1-2 horas semanales de lectura o revisión de materiales. Total estimado: 15-20 horas durante el mes."
  },
  {
    question: "¿Hay compensación económica?",
    answer: "Este es un programa de formación pro-bono. El beneficio principal es la certificación, el networking de alto nivel y el acceso a herramientas exclusivas."
  },
  {
    question: "¿Qué pasa si no puedo asistir a una sesión?",
    answer: "Todas las sesiones son grabadas y subidas a Google Classroom. Sin embargo, para obtener el certificado se requiere un 75% de asistencia síncrona o justificación válida."
  },
  {
    question: "¿Cómo es el matching con startups?",
    answer: "Tras la certificación, los mentores serán presentados a los bioemprendedores del Bootcamp 'Salvando la Amazonía' basándose en afinidad técnica y necesidades estratégicas."
  },
  {
    question: "¿Puedo mentorar más de una startup?",
    answer: "Recomendamos iniciar con una sola startup para garantizar calidad en el acompañamiento, pero mentores experimentados pueden solicitar más asignaciones."
  }
];