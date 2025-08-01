import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const About = () => {
  return (
    <div className="mr-5 ml-6 space-y-4">
      {/* About Me Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}>
        <h1 className="mb-5">About Me</h1>

        <Card>
          <CardHeader>
            <CardTitle>About Me</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              I'm a passionate full-stack developer with a knack for crafting
              intuitive and high-performance web applications. My journey in
              tech is driven by a desire to solve complex problems and build
              engaging user experiences. I thrive in dynamic environments,
              constantly learning and adapting to new technologies to deliver
              impactful solutions.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Experience Timeline Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}>
        <Card>
          <CardHeader>
            <CardTitle>Professional Journey</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="relative border-l border-border ml-2">
              <li className="mb-4 ml-4">
                <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border border-background" />
                <h3 className="text-md font-semibold text-foreground">
                  Computer Lab Assistant SAQ (Part Time)
                </h3>
                <p className="text-sm text-muted-foreground">
                  Institut Teknologi PLN (July 2025 - Present)
                </p>
                <ul className="list-disc list-inside text-xs text-muted-foreground mt-1 ml-4">
                  <p className="text-[14px] my-2">Additional responsibilities include:</p>
                  <li>
                    Supervising lab sessions to ensure smooth and structured
                    learning activities.
                  </li>
                  <li>
                    Teaching students practical applications of software
                    architecture and quality assurance.
                  </li>
                  <li>
                    Assisting in the use and troubleshooting of various
                    development tools and platforms.
                  </li>
                  <li>
                    Collaborating with lecturers to prepare lab materials and
                    exercises.
                  </li>
                  <li>
                    Providing academic and technical support to students during
                    their assignments and projects.
                  </li>
                </ul>
              </li>
              <li className="mb-4 ml-4">
                <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border border-background" />
                <h3 className="text-md font-semibold text-foreground">
                  Frontend Developer
                </h3>
                <p className="text-sm text-muted-foreground">
                  Web Innovations Co. (2019 - 2022)
                </p>
                <ul className="list-disc list-inside text-xs text-muted-foreground mt-1 ml-4">
                  <li>
                    Developed responsive user interfaces for 10+ client
                    projects.
                  </li>
                  <li>
                    Collaborated with design teams to implement pixel-perfect
                    UIs.
                  </li>
                  <li>
                    Integrated various third-party APIs for enhanced
                    functionality.
                  </li>
                </ul>
              </li>
            </ol>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};
