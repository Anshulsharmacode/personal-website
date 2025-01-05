import Hero from "@/components/Hero";
import AboutMe from "@/components/HomeAbout";
import Experience from "@/components/Exp";
import Education from "@/components/Education";
export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 w-full h-full bg-gradient-to-b from-bc via-bc/90 to-bc opacity-80" />
      <div className="fixed inset-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.1)_0%,transparent_65%)]" />

      <div className="relative z-1">
        <div className="border border-b border-whit mt-20 mx-8 md:mx-48"></div>
        <Hero />
        <div className="border border-b border-whit mx-8 md:mx-48"></div>
        <AboutMe />
        <div className="border border-b border-whit mx-8 md:mx-48"></div>
        <Experience />
        <div className="border border-b border-whit mx-8 md:mx-48"></div>
        <Education />
        <div className="border border-b border-whit mx-8 md:mx-48"></div>
      </div>
    </div>
  );
}
