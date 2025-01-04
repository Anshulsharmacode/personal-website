
import {
  FaRobot,
  FaHeartbeat,
  FaBrain,
  FaCloud,
  FaCode,
  FaLayerGroup,
  FaTools,
} from "react-icons/fa";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  SiTypescript,
  SiJupyter,
  SiGooglecolab,
  SiKaggle,
  SiGit,
  SiXcode,
  SiNextdotjs,
  SiNestjs,
  SiPython,
  SiNodedotjs,
  SiAmazon,
  SiTurso,
  SiMongodb,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";

export default function About() {
  return (
    <div className="relative pt-32 min-h-screen">
      <div className="fixed inset-0 w-full h-full bg-gradient-to-b opacity-80 from-bc via-bc/90 to-bc" />
      <div className="fixed inset-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.1)_0%,transparent_65%)]" />

      <div className="relative z-1">
        <section className="py-24 bg-none font-montserrat">
          <div className="container px-4 mx-auto">
            <div className="mx-auto max-w-4xl">
              {/* About Section */}
              <h1 className="mb-16 text-5xl font-bold tracking-tight text-center">
                <span className="text-h1">About</span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-h2 to-h1">
                  Me
                </span>
              </h1>

              <Card className="mb-20 backdrop-blur-lg transition-all duration-300 bg-cc/5 border-h1/20 hover:border-h1/30">
                <CardContent className="p-8">
                  <p className="leading-relaxed text-hm">
                    Hi! I&apos;m{" "}
                    <span className="font-semibold text-h2">Anshul Sharma</span>
                    , a Software Developer with a unique background in Biomedical Engineering. 
                    I combine my technical knowledge in full-stack development with my understanding of healthcare systems 
                    to create innovative digital solutions.
                  </p>
                  <p className="mt-4 leading-relaxed text-hm">
                    My diverse skill set spans modern web technologies and API development. 
                    I&apos;m passionate about building scalable applications that make an impact.
                  </p>
                </CardContent>
              </Card>

              {/* Expertise Section */}
              <div className="space-y-20">
                <h2 className="text-3xl font-bold tracking-tight text-h1">Technical Expertise</h2>
                <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
                  {/* Web Development */}
                  <Card className="backdrop-blur-lg transition-all duration-300 bg-cc/5 border-h1/20 hover:border-h1/30">
                    <CardHeader>
                      <div className="flex gap-4 items-center">
                        <div className="p-3 rounded-full bg-h1/10 text-h1">
                          <FaCode className="w-8 h-8" />
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-2xl font-semibold text-h1">Web Development</h3>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="text-dm/90">
                      Proficient in React, Next.js, and TypeScript. Building responsive and 
                      accessible web applications with clean code.
                    </CardContent>
                  </Card>

                  {/* API Development */}
                  <Card className="backdrop-blur-lg transition-all duration-300 bg-cc/5 border-h1/20 hover:border-h1/30">
                    <CardHeader>
                      <div className="flex gap-4 items-center">
                        <div className="p-3 rounded-full bg-h1/10 text-h1">
                          <FaCloud className="w-8 h-8" />
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-2xl font-semibold text-h1">API Development</h3>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="text-dm/90">
                      Building RESTful APIs and managing databases. Experience with Node.js, 
                      Express, and database systems.
                    </CardContent>
                  </Card>

                  {/* Healthcare Tech */}
                  <Card className="backdrop-blur-lg transition-all duration-300 bg-cc/5 border-h1/20 hover:border-h1/30">
                    <CardHeader>
                      <div className="flex gap-4 items-center">
                        <div className="p-3 rounded-full bg-h1/10 text-h1">
                          <FaHeartbeat className="w-8 h-8" />
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-2xl font-semibold text-h1">Healthcare Tech</h3>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="text-dm/90">
                      Building healthcare applications and medical imaging systems. 
                      Experience with medical data standards and processing.
                    </CardContent>
                  </Card>

                  {/* AI/ML Integration */}
                  <Card className="backdrop-blur-lg transition-all duration-300 bg-cc/5 border-h1/20 hover:border-h1/30">
                    <CardHeader>
                      <div className="flex gap-4 items-center">
                        <div className="p-3 rounded-full bg-h1/10 text-h1">
                          <FaBrain className="w-8 h-8" />
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-2xl font-semibold text-h1">AI/ML Integration</h3>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="text-dm/90">
                      Basic integration of ML models into web apps using TensorFlow.js. 
                      Building AI-powered features for better user experiences.
                    </CardContent>
                  </Card>

                  {/* Full Stack Development */}
                  <Card className="backdrop-blur-lg transition-all duration-300 bg-cc/5 border-h1/20 hover:border-h1/30">
                    <CardHeader>
                      <div className="flex gap-4 items-center">
                        <div className="p-3 rounded-full bg-h1/10 text-h1">
                          <FaLayerGroup className="w-8 h-8" />
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-2xl font-semibold text-h1">Full Stack</h3>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="text-dm/90">
                      End-to-end development with frontend and backend expertise. 
                      Database design and deployment experience.
                    </CardContent>
                  </Card>

                  {/* DevOps & Tools */}
                  <Card className="backdrop-blur-lg transition-all duration-300 bg-cc/5 border-h1/20 hover:border-h1/30">
                    <CardHeader>
                      <div className="flex gap-4 items-center">
                        <div className="p-3 rounded-full bg-h1/10 text-h1">
                          <FaTools className="w-8 h-8" />
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-2xl font-semibold text-h1">DevOps & Tools</h3>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="text-dm/90">
                      Working with Git, CI/CD, Docker, and cloud platforms. 
                      Managing modern development workflows.
                    </CardContent>
                  </Card>

                  {/* Generative AI */}
                  <Card className="backdrop-blur-lg transition-all duration-300 bg-cc/5 border-h1/20 hover:border-h1/30">
                    <CardHeader>
                      <div className="flex gap-4 items-center">
                        <div className="p-3 rounded-full bg-h1/10 text-h1">
                          <FaRobot className="w-8 h-8" />
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-2xl font-semibold text-h1">Generative AI</h3>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="text-dm/90">
                      Building intelligent models for content generation, healthcare applications, and automated workflows powered by AI.
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Vision Section */}
              <div className="mt-32 space-y-8">
                <h2 className="text-3xl font-bold tracking-tight text-h1">Vision</h2>
                <Card className="backdrop-blur-lg transition-all duration-300 bg-cc/5 border-h1/20 hover:border-h1/30">
                  <CardContent className="p-8 text-dm/90">
                    As a Software Developer with a Biomedical Engineering background, I aim to 
                    bridge healthcare and technology through innovative web solutions. I focus on 
                    building efficient applications that impact both healthcare and web development.
                  </CardContent>
                </Card>
              </div>

              {/* Skills & Tools Section */}
              <div className="mt-32 space-y-8">
                <h2 className="text-3xl font-bold tracking-tight text-h1">Skills & Tools</h2>
                <Card className="backdrop-blur-lg transition-all duration-300 bg-cc/5 border-h1/20 hover:border-h1/30">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-3 gap-8 md:grid-cols-4 lg:grid-cols-6">
                      <div className="flex flex-col gap-2 items-center">
                        <SiKaggle className="w-12 h-12 text-h1" />
                        <span className="text-sm text-dm/90">Kaggle</span>
                      </div>
                      <div className="flex flex-col gap-2 items-center">
                        <SiGit className="w-12 h-12 text-h1" />
                        <span className="text-sm text-dm/90">Git</span>
                      </div>
                      <div className="flex flex-col gap-2 items-center">
                        <SiXcode className="w-12 h-12 text-h1" />
                        <span className="text-sm text-dm/90">VS Code</span>
                      </div>
                      <div className="flex flex-col gap-2 items-center">
                        <FaReact className="w-12 h-12 text-h1" />
                        <span className="text-sm text-dm/90">React</span>
                      </div>
                      <div className="flex flex-col gap-2 items-center">
                        <SiNextdotjs className="w-12 h-12 text-h1" />
                        <span className="text-sm text-dm/90">Next.js</span>
                      </div>
                      <div className="flex flex-col gap-2 items-center">
                        <SiNestjs className="w-12 h-12 text-h1" />
                        <span className="text-sm text-dm/90">Nest.js</span>
                      </div>
                      <div className="flex flex-col gap-2 items-center">
                        <SiPython className="w-12 h-12 text-h1" />
                        <span className="text-sm text-dm/90">Python</span>
                      </div>
                      <div className="flex flex-col gap-2 items-center">
                        <SiNodedotjs className="w-12 h-12 text-h1" />
                        <span className="text-sm text-dm/90">Node.js</span>
                      </div>
                      <div className="flex flex-col gap-2 items-center">
                        <SiTypescript className="w-12 h-12 text-h1" />
                        <span className="text-sm text-dm/90">Typescript</span>
                      </div>
                      <div className="flex flex-col gap-2 items-center">
                        <SiAmazon className="w-12 h-12 text-h1" />
                        <span className="text-sm text-dm/90">AWS</span>
                      </div>
                      <div className="flex flex-col gap-2 items-center">
                        <SiTurso className="w-12 h-12 text-h1" />
                        <span className="text-sm text-dm/90">Cursor</span>
                      </div>
                      <div className="flex flex-col gap-2 items-center">
                        <SiMongodb className="w-12 h-12 text-h1" />
                        <span className="text-sm text-dm/90">MongoDB</span>
                      </div>
                      <div className="flex flex-col gap-2 items-center">
                        <SiJupyter className="w-12 h-12 text-h1" />
                        <span className="text-sm text-dm/90">Jupyter</span>
                      </div>
                      <div className="flex flex-col gap-2 items-center">
                        <SiGooglecolab className="w-12 h-12 text-h1" />
                        <span className="text-sm text-dm/90">Colab</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
