"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Importing icons

// Project interface
interface Project {
  title: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  isLarge?: boolean;
  link?: string; // Added link property for live demo
  githubLink?: string; // Added githubLink property
}

// Enhanced ProjectCard component
const ProjectCard = ({
  title,
  imageSrc,
  imageAlt,
  description,
  isLarge = false,
  link,
  githubLink, // Added githubLink to props
}: Project) => (
  <Card
    className={`group h-full backdrop-blur-lg bg-cc/5 border-h1/20 
    hover:border-h1/40 transition-all duration-500 
    hover:transform hover:-translate-y-1
    ${isLarge ? "col-span-full" : ""}`}
  >
    <CardHeader className="p-6">
      <CardTitle
        className={`${
          isLarge ? "text-3xl" : "text-2xl"
        } font-semibold tracking-tight text-h1`}
      >
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent className="p-6 pt-0">
      <div className="flex flex-col space-y-6">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover transition duration-700 ease-in-out group-hover:scale-110"
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={90}
          />
        </div>
        <p
          className={`${
            isLarge ? "text-lg" : "text-base"
          } text-dm/80 font-light leading-relaxed`}
        >
          {description}
        </p>
        <div className="flex space-x-4">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center transition-colors text-h1 hover:text-h2"
              aria-label="GitHub Repository"
            >
              <FaGithub className="w-5 h-5" />
            </a>
          )}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center transition-colors text-h1 hover:text-h2"
              aria-label="Live Demo"
            >
              <FaExternalLinkAlt className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </CardContent>
  </Card>
);

// Updated project data with high-quality Unsplash images
const technicalProjects: Project[] = [
  {
    title: "Medicine Chatbot using RAG and LLM",
    imageSrc: "/chat.jpeg",
    imageAlt: "AI Code Interface",
    description:
      "Developed an advanced Medicine Chatbot leveraging Retrieval-Augmented Generation (RAG) and Large Language Models (LLMs) to provide accurate, real-time medical information. The system integrates semantic search and word-to-word search capabilities to answer a wide range of medical queries with high precision.",
    githubLink: "https://github.com/Anshulsharmacodes/Medicine-ai", // Example GitHub link
    link: "https://medicine-ui.vercel.app", // Example live demo link
  },
  {
    title: "Mathematical Model for Lung Cancer",
    imageSrc: "/lungs2.png",
    imageAlt: "Data Analytics",
    description:
      "Developed a sophisticated mathematical model to simulate cancer cell growth patterns and optimize treatment strategies using differential equations and numerical methods.",
    githubLink: "https://github.com/Anshulsharmacodes/Major", // Example GitHub link
    // link: "https://", // Example live demo link
  },
  {
    title: "Mathematical Model for Brain Tumor",
    imageSrc: "https://images.unsplash.com/photo-1559757175-5700dde675bc",
    imageAlt: "Brain Tumor Analysis Visualization",
    description:
      "Created an advanced mathematical model for simulating tumor development and testing treatment effectiveness using computational biology approaches.",
    githubLink: "https://github.com/Anshulsharmacodes/Brain-Mathmetical-Model", // Example GitHub link
    // link: "https://yourliveprojectlink.com", // Example live demo link
  },
];

const hardwareProjects: Project[] = [
  {
    title: "Electronics Stethoscope",
    imageSrc: "https://images.unsplash.com/photo-1584982751601-97dcc096659c",
    imageAlt: "Electronic Medical Device",
    description:
      "Designed an innovative electronic stethoscope with digital signal processing for enhanced medical diagnostics and remote monitoring capabilities.",
    githubLink: "https://github.com/yourusername/electronics-stethoscope", // Example GitHub link
    link: "https://yourliveprojectlink.com", // Example live demo link
  },
  {
    title: "Speaker Amplifier",
    imageSrc: "https://images.unsplash.com/photo-1558089687-f282ffcbc126",
    imageAlt: "Professional Audio Amplifier",
    description:
      "Developed a high-fidelity amplifier with advanced circuitry for superior audio performance and minimal distortion.",
    githubLink: "https://github.com/yourusername/speaker-amplifier", // Example GitHub link
    link: "https://yourliveprojectlink.com", // Example live demo link
  },
  {
    title: "Dual Power Supply",
    imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    imageAlt: "Power Supply Unit",
    description:
      "Engineered a precision dual power supply using a single transformer, featuring voltage regulation and overload protection for reliable power delivery.",
    githubLink: "https://github.com/yourusername/dual-power-supply", // Example GitHub link
    link: "https://yourliveprojectlink.com", // Example live demo link
  },
];

export default function Projects() {
  return (
    <div className="relative pt-32 min-h-screen">
      <div className="fixed inset-0 w-full h-full bg-gradient-to-b opacity-80 from-bc via-bc/90 to-bc" />
      <div className="fixed inset-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.1)_0%,transparent_65%)]" />

      <div className="relative z-1">
        <section className="py-24 bg-none font-montserrat">
          <div className="container px-4 mx-auto">
            <div className="mx-auto max-w-7xl">
              <h1 className="mb-16 text-5xl font-bold tracking-tight text-center">
                <span className="text-h1">Featured</span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-h2 to-h1">
                  Projects
                </span>
              </h1>

              {/* Technical Projects Section */}
              <div className="space-y-20">
                <h2 className="text-3xl font-bold tracking-tight text-h1">
                  Technical Projects
                </h2>

                {/* Large Project */}
                {/* <div className="space-y-10">
                  {technicalProjects
                    .filter((p) => p.isLarge)
                    .map((project) => (
                      <ProjectCard key={project.title} {...project} />
                    ))}
                </div> */}

                {/* Regular Technical Projects Grid */}
                <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2">
                  {technicalProjects
                    // .filter((p) => !p.isLarge)
                    .map((project) => (
                      <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
              </div>

              {/* Hardware Projects Section */}
              <div className="mt-32 space-y-20">
                <h2 className="text-3xl font-bold tracking-tight text-h1">
                  Hardware Projects
                </h2>

                <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
                  {hardwareProjects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
