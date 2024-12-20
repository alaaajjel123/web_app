"use client";

import { useState, useEffect } from "react";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  // Mock data for projects
  const projects = [
    {
      imageSrc: "/3.png",
      projectName: "Intelligent Cameras",
      projectOverview: "High-performance cameras for real-time monitoring.",
      link: "/projects/cameras",
    },
    {
      imageSrc: "/3.png",
      projectName: "Risk Detection Software",
      projectOverview: "AI-powered software for detecting potential risks.",
      link: "/projects/risk-detection",
    },
    {
      imageSrc: "/3.png",
      projectName: "Traffic Analysis",
      projectOverview: "Advanced analysis of large-scale traffic data.",
      link: "/projects/traffic-analysis",
    },
    {
      imageSrc: "/3.png",
      projectName: "Video Stream Processing",
      projectOverview: "Real-time video stream processing for insights.",
      link: "/projects/video-streams",
    },
    {
      imageSrc: "/3.png",
      projectName: "Security Management",
      projectOverview: "Efficient tools for reliable security management.",
      link: "/projects/security-management",
    },
  ];

  const visibleCount = 4; // Number of cards to display
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000); // Transition every 5 seconds

    return () => clearInterval(interval);
  }, [projects.length]);

  const visibleProjects = [
    ...projects.slice(startIndex, startIndex + visibleCount),
    ...projects.slice(0, Math.max(0, startIndex + visibleCount - projects.length)),
  ];

  return (
    <section className="px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Smart Security Solutions</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          We provide high-performance security solutions using cutting-edge technology and real-time monitoring for residential,
          commercial, and large-scale environments. Our solutions, designed for large-scale traffic analysis, enable instant processing
          of video streams, delivering valuable insights for efficient and reliable security management.
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-1000 ease-in-out gap-4"
          style={{
            transform: `translateX(-${startIndex * (100 / visibleCount)}%)`,
            width: `${(projects.length / visibleCount) * 100}%`,
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{
                flex: `0 0 calc(${100 / visibleCount}% - 1rem)`, // Adjust width with gap
              }}
            >
              <ProjectCard
                imageSrc={project.imageSrc}
                projectName={project.projectName}
                projectOverview={project.projectOverview}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}