import { React, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RotatingCube } from "@/components/rotating-cube";
import { MarqueeBanner } from "@/components/marquee-banner";
import { StatsOverview } from "@/components/stats-overview";
import { RecentActivity } from "@/components/recent-activity";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Menu } from "lucide-react";

export const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`flex flex-1 flex-col transition-all duration-300 ${
        isSidebarOpen ? "lg:ml-0" : "lg:ml-0"
      }`}>
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        {/* <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={toggleSidebar}
          aria-label="Toggle sidebar">
          <Menu className="h-5 w-5" />
        </Button> */}
        <h1 className=" md:text-2xl">Home</h1>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <motion.div></motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 md:gap-8">
          {/* Welcome Header and Stats Overview */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1 md:gap-8">
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}>
              <Card className="p-6 w-full h-full flex flex-col justify-center">
                <h2 className="text-3xl font-bold">Hi, My Name is Petra 👋</h2>
                <p className="text-muted-foreground mt-2">
                  I’m a freelance web developer specializing in React, Vue.js,
                  and API integration, helping clients build efficient and
                  scalable web applications. Currently pursuing a degree at
                  ITPLN, I’m expanding my skills in Python, English, and
                  problem-solving, while also developing soft skills like public
                  speaking and teamwork. Passionate about learning and
                  innovation, I’m always open to new challenges and
                  collaborations!
                </p>
              </Card>
            </motion.div>
            {/* <StatsOverview /> */}
          </div>

          {/* Main Content Grid - Simplified Two Columns */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:gap-8">
            {/* Left Column - Wider for main content */}
            <div className="lg:col-span-2 flex flex-col gap-4 md:gap-8">
              {/* Featured Project */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}>
                <Card>
                  <CardHeader>
                    <CardTitle>Featured Project: QuantumFlow AI</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col md:flex-row gap-4">
                    <div className="relative w-full md:w-1/2 h-48 md:h-auto min-h-[150px] rounded-md overflow-hidden">
                      <img
                        src="../../public/Portfolio/Blog-1.png"
                        alt="Featured Project"
                        className="w-full h-full object-fill"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">
                        AI-Powered Content Generator
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Developed a cutting-edge AI tool that generates engaging
                        content based on user prompts, leveraging advanced NLP
                        models and a scalable cloud infrastructure. Features
                        real-time generation, multi-language support, and a
                        user-friendly dashboard for content management.
                      </p>
                      <Button
                        className="bg-[#171717] border-2 hover:bg-white! hover:text-black!"
                        asChild>
                        <a
                          href="https://petramanullang.github.io/BLOG-NEWS/"
                          className="inline-flex items-center">
                          View Case Study{" "}
                          <ArrowUpRight className="ml-1 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Skills Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}>
                <Card>
                  <CardHeader>
                    <CardTitle>🚀 Core Skills & Expertise</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">
                      I build full-stack web solutions with a strong foundation
                      in both modern JavaScript frameworks and classic backend
                      technologies combining performance, scalability, and solid
                      database design.
                    </p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                      <li>
                        Frontend Development
                        <br />
                        <span className="ml-5">
                          React.js, Next.js, JavaScript, Framer Motion.
                        </span>
                      </li>
                      <li>
                        Styling & UI Design <br />
                        <span className="ml-5">Tailwind CSS, CSS Vanilla.</span>
                      </li>
                      <li>
                        Backend Development
                        <br />
                        <span className="ml-5">Node.js, Express.js, PHP</span>
                      </li>
                      <li>
                        Databases
                        <br />
                        <span className="ml-5">
                          MySQL, MongoDB, PostgreSQL, Supabase
                        </span>
                      </li>
                      <li>
                        Dev Tools & Workflow
                        <br />
                        <span className="ml-5">
                          Git, GitHub, Vercel, Docker
                        </span>
                      </li>
                      <li>
                        Design & Prototyping Tools
                        <br />
                        <span className="ml-5">Figma</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Marquee Banner - now integrated into the main grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}>
                <Card>
                  <CardHeader>
                    <CardTitle>Key Highlights & Technologies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <MarqueeBanner />
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Right Column - Narrower for supplementary content */}
            <div className="flex flex-col gap-4 md:gap-8">
              {/* Tech Showcase (3D Cube) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}>
                <Card>
                  {/* <CardHeader>
                    <CardTitle>Tech Showcase</CardTitle>
                  </CardHeader> */}
                  <CardContent className="flex items-center justify-center h-64">
                    <RotatingCube />
                  </CardContent>
                </Card>
              </motion.div>

              {/* Latest Updates Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}>
                <Card>
                  <CardHeader>
                    <CardTitle>Latest News & Updates</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-md font-semibold text-foreground">
                          New Article: "Mastering React Hooks for State
                          Management"
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Published on August 1, 2025
                        </p>
                        <a
                          href="#"
                          className="text-primary hover:underline text-sm mt-1 inline-block">
                          Read Article
                        </a>
                      </div>
                      <div>
                        <h3 className="text-md font-semibold text-foreground">
                          Launched "DevConnect" Social Platform Beta
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Released on July 28, 2025
                        </p>
                        <a
                          href="#"
                          className="text-primary hover:underline text-sm mt-1 inline-block">
                          Explore Beta
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Recent Activity */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}>
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity Feed</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RecentActivity />
                  </CardContent>
                </Card>
              </motion.div> */}
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};
