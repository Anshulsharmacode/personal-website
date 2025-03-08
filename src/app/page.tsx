import Hero from "@/components/Hero";
import AboutMe from "@/components/HomeAbout";
import Education from "@/components/Education";
import Experience from "@/components/Exp";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 w-full h-full bg-gradient-to-b opacity-80 from-bc via-bc/90 to-bc" />
      <div className="fixed inset-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.1)_0%,transparent_65%)]" />

      <div className="relative z-1">
        <div className="mx-8 mt-20 border border-b border-whit md:mx-48"></div>
        <Hero />
        <div className="mx-8 border border-b border-whit md:mx-48"></div>
        <AboutMe />
        <div className="mx-8 border border-b border-whit md:mx-48"></div>
        <Experience /> 
        <div className="mx-8 border border-b border-whit md:mx-48"></div>
        <Education />
        <div className="mx-8 border border-b border-whit md:mx-48"></div>
      </div>
    </div>
  );
}
