"use client";

import { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function ProjectCard({ title, description, imageUrl, link }: any) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="relative w-full h-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1000px",
      }}>
      <motion.div
        className="relative h-full w-full rounded-lg overflow-hidden"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}>
        <Card className="h-full flex flex-col">
          <CardContent className="p-0 flex-1 flex flex-col">
            <div className="relative w-full h-48 overflow-hidden">
              <img
                src={imageUrl || "/placeholder.svg"}
                alt={title}
                className="w-[95%] mx-auto h-full object-fill transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
              <a
                href={link}
                className="mt-4 inline-block text-primary hover:underline text-sm">
                View Project
              </a>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export function ProjectGallery() {
  const allProjects = [
    {
      title: "E-commerce Platform",
      description:
        "A robust online store with secure payment processing and inventory management.",
      imageUrl: "/Portfolio/Portfolio-2.png",
      link: "#",
      category: "Web Development",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task manager with real-time updates and user authentication.",
      imageUrl: "/Portfolio/Portfolio-2.png",
      link: "#",
      category: "Mobile App",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "This very portfolio, showcasing modern web development techniques.",
      imageUrl: "/Portfolio/Portfolio-2.png",
      link: "#",
      category: "Web Development",
    },
    {
      title: "Financial Data Dashboard",
      description:
        "Interactive dashboard for visualizing stock market trends and financial metrics.",
      imageUrl: "/Portfolio/Portfolio-2.png",
      link: "#",
      category: "Data Science",
    },
    {
      title: "Recipe Sharing Platform",
      description:
        "A community-driven platform for sharing and discovering culinary recipes.",
      imageUrl: "/Portfolio/Portfolio-2.png",
      link: "#",
      category: "Web Development",
    },
    {
      title: "Fitness Tracker Mobile App",
      description:
        "Track workouts, set goals, and monitor progress with this intuitive mobile application.",
      imageUrl: "/Portfolio/Portfolio-2.png",
      link: "#",
      category: "Mobile App",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? allProjects
      : allProjects.filter((project) => project.category === selectedCategory);

  const categories = ["All", "Web Development", "Mobile App", "Data Science"];

  return (
    <div className="mb-10">
      <div className="flex flex-wrap gap-2 mb-4">
        {categories.map((category) => (
          <Button
            key={category}
            variant="outline"
            size="sm"
            onClick={() => setSelectedCategory(category)}
            className={
              selectedCategory === category
                ? "outline-2 outline-white outline-offset-2"
                : ""
            }>
            {category}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}>
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
