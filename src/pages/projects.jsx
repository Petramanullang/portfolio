import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectGallery } from "@/components/project-gallery";

export const Projects = () => {
  return (
    <div>
      {/* Project Gallery */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}>
        <h1 className="ml-6 mb-5">Project Gallery</h1>
        <CardContent>
          <ProjectGallery />
        </CardContent>
      </motion.div>
    </div>
  );
};
