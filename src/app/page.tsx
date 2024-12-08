
import Hero from "@/components/Hero"
import AboutMe from "@/components/HomeAbout";
import Experience from "@/components/Exp"
import Navbar from "@/components/Navbar"
import Education from "@/components/Education"
export default function Home() {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <AboutMe/>
    <Experience/>
    <Education/>
   
    </div>
  );
}
