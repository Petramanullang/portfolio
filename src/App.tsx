import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "@/pages/home";
import { Projects } from "@/pages/projects";
import { Layout } from "./layout";
import { About } from "./pages/about";
import { BlogRoutes } from "./pages/blog/BlogRoutes";
import { Contact } from "./pages/contact";
import "./index.css";

export function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog/*" element={<BlogRoutes />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}
