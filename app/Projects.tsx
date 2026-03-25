/**
 * @name Projects.tsx
 * @type Page
 */

"use client";

import { ParallaxLayer } from "@react-spring/parallax";
import Project from "./components/Project";
import { useOnScreen } from "./hooks/useOnScreen";
import { cn } from "@/lib/utils";
import { fontJersey15 } from "@/lib/font";

function Projects() {
  const [sectionRef, sectionVisible] = useOnScreen<HTMLDivElement>();

  // Random project details per user request
  const randomProjects = [
    {
      title: "Renewable Energy Advisor",
      description: "An AI-powered chatbot using Python and NLP to guide users in selecting suitable renewable energy options. Includes interactive dashboards to present feasibility results.",
      techStack: ["Python", "NLP", "React", "Data Analysis"],
      link: "https://github.com/Akshats25/Renewable-Natural-Energy-Advisor-Bot"
    },
    {
      title: "Serverless URL Shortener",
      description: "A completely serverless URL shortening system achieving zero infrastructure management. Features sub-15ms read latency and 90%+ cost reduction vs traditional servers.",
      techStack: ["AWS Lambda", "API Gateway", "DynamoDB"],
      link: "#"
    },
    {
      title: "E-Commerce Microservices",
      description: "A secure, scalable e-commerce backend built with microservices architecture. Implemented distributed tracing, a secure payment gateway integration, and real-time inventory.",
      techStack: ["Node.js", "Docker", "Stripe API", "MongoDB"],
      link: "#"
    }
  ];

  return (
    <ParallaxLayer
      id="projects"
      offset={3}
      speed={0}
      className="relative flex min-h-[600px] flex-col items-center justify-center bg-slate-50"
    >
      <div
        ref={sectionRef}
        className={cn(
          "flex w-full max-w-7xl flex-col items-center gap-4 px-6 py-8 transition-all duration-700 ease-in-out",
          sectionVisible ? "" : "translate-y-10 opacity-0",
        )}
      >
        {/* Section Title */}
        <h2 className={cn("text-5xl text-slate-900 lg:text-6xl", fontJersey15.className)}>
          Featured Projects
        </h2>
        
        {/* Divider */}
        <div className="h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-blue-300" />

        {/* Projects Cards */}
        <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:justify-center">
          {randomProjects.map((p, idx) => (
            <Project
              key={idx}
              title={p.title}
              description={p.description}
              techStack={p.techStack}
              link={p.link}
            />
          ))}
        </div>
      </div>
    </ParallaxLayer>
  );
}

export default Projects;
