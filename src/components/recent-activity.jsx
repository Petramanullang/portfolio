"use client";
import { BellRing, GitCommit, FileText, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export function RecentActivity() {
  const activities = [
    {
      icon: GitCommit,
      text: "Pushed new features to 'QuantumFlow AI' repository",
      time: "2 hours ago",
    },
    {
      icon: FileText,
      text: "Published new blog post: 'Optimizing React Performance with Memoization'",
      time: "1 day ago",
    },
    {
      icon: Briefcase,
      text: "Completed 'E-commerce Platform' project for Client A",
      time: "3 days ago",
    },
    {
      icon: BellRing,
      text: "Responded to a new inquiry via contact form",
      time: "4 days ago",
    },
    {
      icon: GitCommit,
      text: "Refactored authentication module in 'Task Management App'",
      time: "1 week ago",
    },
  ];

  return (
    <div className="space-y-4">
      {activities.map((activity, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="flex items-start gap-3">
          <activity.icon className="h-5 w-5 text-primary mt-1" />
          <div>
            <p className="text-sm font-medium">{activity.text}</p>
            <p className="text-xs text-muted-foreground">{activity.time}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
