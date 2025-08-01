"use client"
import { motion } from "framer-motion"

export function MarqueeBanner() {
  const highlights = [
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Framer Motion",
    "JavaScript ES6+",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Supabase",
    "Full-Stack Development",
    "UI/UX Design",
    "Responsive Design",
    "API Integration",
    "Performance Optimization",
    "Agile Methodologies",
    "Problem Solving",
    "Clean Code",
  ]

  const marqueeVariants = {
    animate: {
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    },
  }

  return (
    <div className="relative w-full overflow-hidden py-4 border-y border-border">
      <motion.div className="flex whitespace-nowrap" variants={marqueeVariants} animate="animate">
        {[...highlights, ...highlights].map((text, index) => (
          <span key={index} className="text-lg font-medium mx-8 text-foreground/80">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
