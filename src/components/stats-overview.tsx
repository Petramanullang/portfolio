"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Code, Star, Award } from "lucide-react"
import { motion } from "framer-motion"

function StatCard({ title, value, icon: Icon, delay } : any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
    >
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          <Icon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{value}</div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function StatsOverview() {
  return (
    <>
      <StatCard title="Projects Completed" value="25+" icon={Code} delay={0.2} />
      <StatCard title="Years Experience" value="5+" icon={Award} delay={0.3} />
      <StatCard title="Happy Clients" value="10+" icon={Users} delay={0.4} />
      <StatCard title="GitHub Stars" value="500+" icon={Star} delay={0.5} />
    </>
  )
}
