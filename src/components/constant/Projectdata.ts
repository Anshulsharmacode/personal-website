import { Project } from "./types";

export const technicalProjects: Project[] = [
  {
    title: "PDF Chatbot using RAG and LLM",
    imageSrc: "/pdf_bot/p2.png",
    imageAlt: "AI Code Interface",
    description:
      "Built a Chat-with-PDF app integrating Gemini with Retrieval-Augmented Generation (RAG). Used the nomic-embed-text:latest model from Ollama locally and an aggregation pipeline for chat history optimization.",
    githubLink: "https://github.com/Anshulsharmacode/Pdf_ChatBoat",
    link: "",
    gallery: [
      "/pdf_bot/p2.png",
      "/pdf_bot/p3.png",
      "/pdf_bot/p4.png",
      "/pdf_bot/p5.png",
      "/pdf_bot/p6.png",
    ],
  },
  {
    title: "Medicine Chatbot using RAG and LLM",
    imageSrc: "/chat_bot/chat1.png",
    imageAlt: "AI Chat Interface",
    description:
      "Developed a medicine chatbot using Retrieval-Augmented Generation (RAG) and LLMs for accurate, real-time medical information with semantic and keyword search.",
    githubLink: "https://github.com/Anshulsharmacodes/Medicine-ai",
    link: "https://medicine-ui.vercel.app",
    gallery: [
      "/chat_bot/chat1.png",
      "/chat_bot/chat2.png",
      "/chat_bot/chat3.png",
    ],
  },
  {
    title: "Mysterious Message App",
    imageSrc: "/chat.png",
    imageAlt: "Chat app",
    description:
      "Anonymous messaging platform with AI suggestions, secure authentication, and email verification — built using a modern full-stack stack.",
    githubLink: "https://github.com/Anshulsharmacode/message_app",
    link: "https://message-app-pied.vercel.app/",
    gallery: [
      "/messageApp/me1.png",
      "/messageApp/me2.png",
      "/messageApp/me3.png",
      "/messageApp/me4.png",
      "/messageApp/me5.png",
      "/messageApp/me6.png",
    ],
  },
  {
    title: "Lung Cancer Classification (Major Project)",
    imageSrc: "/Major.png",
    imageAlt: "Lung Cancer Classification",
    description:
      "Lung cancer classifier using CT scans with Random Forest and Gradient Boosting. Built a Next.js frontend for image input and prediction results.",
    githubLink: "https://github.com/Anshulsharmacode/final-Major",
    link: "https://final-major.vercel.app/",
    gallery: [
      "/Major/m1.png",
      "/Major/m2.png",
      "/Major/m3.png",
      "/Major/m4.png",
      "/Major/m5.png",
      "/Major/m6.png",
    ],
  },
  {
    title: "React Flow Interactive Guide",
    imageSrc: "/React_flow.png",
    imageAlt: "React Flow Project",
    description:
      "Interactive decision-making web app built with React Flow and AI-based suggestions, ending with personalized recommendations.",
    githubLink: "https://github.com/Anshulsharmacode/react-flow",
    link: "https://react-flow-orcin.vercel.app/",
    gallery: ["/React_flow.png"],
  },
];

export const BiomedicalProjects: Project[] = [
  {
    title: "Mathematical Model for Lung Cancer",
    imageSrc: "/lungs2.png",
    imageAlt: "Data Analytics",
    description:
      "Developed a sophisticated mathematical model to simulate cancer cell growth patterns and optimize treatment strategies using differential equations and numerical methods.",
  },
  {
    title: "Mathematical Model for Brain Tumor",
    imageSrc: "https://images.unsplash.com/photo-1559757175-5700dde675bc",
    imageAlt: "chat app",
    description:
      "Built an anonymous messaging platform with AI-powered suggestions, secure auth, and email verification using modern full-stack technologies.",
  },
];

export const hardwareProjects: Project[] = [
  {
    title: "Electronics Stethoscope",
    imageSrc: "https://images.unsplash.com/photo-1584982751601-97dcc096659c",
    imageAlt: "Electronic Medical Device",
    description:
      "Designed an innovative electronic stethoscope with digital signal processing for enhanced medical diagnostics and remote monitoring capabilities.",
  },
  {
    title: "Speaker Amplifier",
    imageSrc: "https://images.unsplash.com/photo-1558089687-f282ffcbc126",
    imageAlt: "Professional Audio Amplifier",
    description:
      "Developed a high-fidelity amplifier with advanced circuitry for superior audio performance and minimal distortion.",
  },
  {
    title: "Dual Power Supply",
    imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    imageAlt: "Power Supply Unit",
    description:
      "Engineered a precision dual power supply using a single transformer, featuring voltage regulation and overload protection for reliable power delivery.",
  },
];
