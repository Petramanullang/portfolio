import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Menu } from "lucide-react";

export const Contact = () => {
  return (
    <div className="mr-5 ml-6 space-y-4">
      {/* Quick Links Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.0 }}
      >
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Essential Links</CardTitle>
          </CardHeader>
          <CardContent className="w-full">
            <div className="grid grid-cols-1 gap-2 w-full">
              <Button variant="ghost" className="w-full justify-start">
                <a
                  href="https://drive.google.com/uc?export=download&id=1usuOKx7BFhGGhAxG9rJAWaA-5OchQMkk"
                  className="flex w-full items-center justify-between text-primary hover:underline"
                >
                  <span>Download My Resume</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>

              <Button variant="ghost" className="w-full justify-start">
                <a
                  href="https://github.com/Petramanullang"
                  className="flex w-full items-center justify-between text-primary hover:underline"
                >
                  <span>Visit GitHub Profile</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>

              <Button variant="ghost" className="w-full justify-start">
                <a
                  href="https://www.linkedin.com/in/petra-juliansen/"
                  className="flex w-full items-center justify-between text-primary hover:underline"
                >
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Contact Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Get In Touch</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Have a project in mind or just want to chat? I'm always open to
              new opportunities and collaborations. Reach out via email or
              connect with me on social media.
            </p>
            <div className="mt-4 flex gap-2">
              <a
                href="mailto:petrajuliansen31@gmail.com"
                className="text-primary hover:underline"
              >
                Send an Email
              </a>
              <span className="text-muted-foreground">|</span>
              <a
                href="https://www.linkedin.com/in/petra-juliansen/"
                className="text-primary hover:underline"
              >
                Message on LinkedIn
              </a>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};
