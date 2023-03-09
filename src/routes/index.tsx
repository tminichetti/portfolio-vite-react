import About from "@/components/About";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Index() {

  return (
    <div className="relative bg-slate-700">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
