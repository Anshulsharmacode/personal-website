import { FaMicroscope, FaRobot, FaHeartbeat, FaBrain, FaCloud, FaCode } from "react-icons/fa";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SiTypescript, SiJupyter, SiGooglecolab, SiKaggle } from 'react-icons/si';
import { FaPython, FaJs, FaReact } from 'react-icons/fa';

export default function About() {
  return (
    <div className="min-h-screen bg-bc">
      <div className="container px-6 py-16 mx-auto">
        {/* About Me Section */}
        <section id="about" className="mb-20 animate-fade-in">
          <h1 className="mb-8 text-6xl font-bold tracking-tight text-h1">About <span className="text-h2">Me</span></h1>
          <div className="space-y-6 text-lg">
            <p className="leading-relaxed text-hm">
              Hi! I&apos;m <span className="font-semibold text-h2">Anshul Sharma</span>, a final-year Biomedical Engineering student driven by a passion for
              innovating healthcare technologies. I focus on integrating Artificial Intelligence (AI) and
              Machine Learning (ML) into medical systems to make diagnostics more accurate, efficient, and accessible.
            </p>
            <p className="leading-relaxed text-hm">
              My academic journey is defined by curiosity and a commitment to solving real-world challenges.
              Beyond healthcare, I delve into general AI, natural language processing (NLP), and
              generative AI to explore its potential in education, automation, and more.
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-20">
          <h2 className="mb-8 text-4xl font-bold tracking-tight text-h2">Education</h2>
          <Card className="transition-all duration-500 transform bg-cc hover:shadow-2xl hover:-translate-y-1">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-hm">
                As a Biomedical Engineering student, I&apos;ve developed expertise in medical devices,
                biosignal processing, and AI-driven healthcare technologies. My projects have provided
                hands-on experience with advanced tools like Python, TensorFlow, and MATLAB to solve diagnostic challenges.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="mb-20">
          <h2 className="mb-12 text-4xl font-bold tracking-tight text-h2">I Am Working With</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* AI in Healthcare */}
            <Card className="border-t-4 transition-all duration-500 transform bg-cc hover:shadow-2xl hover:-translate-y-2 border-h2">
              <CardHeader className="p-6">
                <CardTitle className="flex items-center text-xl text-h2">
                  <FaMicroscope className="mr-4 w-8 h-8 text-h2" />
                  AI in Healthcare
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <p className="leading-relaxed text-hm">
                  Leveraging AI and ML for smarter diagnostic tools, including disease detection, predictive analytics,
                  and personalized medicine. I have worked on optimizing medical imaging techniques like MRI and CT scans.
                </p>
              </CardContent>
            </Card>

            {/* Medical Imaging */}
            <Card className="border-t-4 transition-all duration-500 transform bg-cc hover:shadow-2xl hover:-translate-y-2 border-h2">
              <CardHeader className="p-6">
                <CardTitle className="flex items-center text-xl text-h2">
                  <FaHeartbeat className="mr-4 w-8 h-8 text-h2" />
                  Medical Imaging
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <p className="leading-relaxed text-hm">
                  Specializing in medical imaging technologies, focusing on improving diagnostic accuracy through
                  deep learning models like U-Net and GANs. My work aims to enhance MRI and CT scan interpretations.
                </p>
              </CardContent>
            </Card>

            {/* General AI & NLP */}
            <Card className="border-t-4 transition-all duration-500 transform bg-cc hover:shadow-2xl hover:-translate-y-2 border-h2">
              <CardHeader className="p-6">
                <CardTitle className="flex items-center text-xl text-h2">
                  <FaBrain className="mr-4 w-8 h-8 text-h2" />
                  General AI & NLP
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <p className="leading-relaxed text-hm">
                  Exploring Large Language Models (LLMs) like GPT and Retrieval-Augmented Generation (RAG) for
                  document analysis, question answering, and chat-based applications in healthcare and beyond.
                </p>
              </CardContent>
            </Card>

            {/* Deep Learning & Neural Networks */}
            <Card className="border-t-4 transition-all duration-500 transform bg-cc hover:shadow-2xl hover:-translate-y-2 border-h2">
              <CardHeader className="p-6">
                <CardTitle className="flex items-center text-xl text-h2">
                  <FaRobot className="mr-4 w-8 h-8 text-h2" />
                  Deep Learning
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <p className="leading-relaxed text-hm">
                  Deep learning is at the core of many AI applications. I work with CNNs for
                  image processing, RNNs for time-series data, and Autoencoders for unsupervised learning.
                </p>
              </CardContent>
            </Card>

            {/* Machine Learning Algorithms */}
            <Card className="border-t-4 transition-all duration-500 transform bg-cc hover:shadow-2xl hover:-translate-y-2 border-h2">
              <CardHeader className="p-6">
                <CardTitle className="flex items-center text-xl text-h2">
                  <FaCloud className="mr-4 w-8 h-8 text-h2" />
                  Machine Learning
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <p className="leading-relaxed text-hm">
                  Proficient in various ML algorithms such as Random Forests, SVMs, K-Means Clustering, and XGBoost
                  for tasks ranging from regression to classification and clustering.
                </p>
              </CardContent>
            </Card>

            {/* Generative AI */}
            <Card className="border-t-4 transition-all duration-500 transform bg-cc hover:shadow-2xl hover:-translate-y-2 border-h2">
              <CardHeader className="p-6">
                <CardTitle className="flex items-center text-xl text-h2">
                  <FaCode className="mr-4 w-8 h-8 text-h2" />
                  Generative AI
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <p className="leading-relaxed text-hm">
                  Working with Generative Adversarial Networks (GANs) and other generative models to create new content,
                  such as generating images from text and synthetic data generation.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills & Tools Section */}
        <section id="skills" className="mb-20">
          <h2 className="mb-12 text-4xl font-bold tracking-tight text-center text-h2">Skills & Tools</h2>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {/* Skills Cards */}
            <Card className="p-8 text-center transition-all duration-500 transform bg-cc hover:shadow-2xl hover:-translate-y-2">
              <FaPython className="mx-auto mb-4 text-6xl transition-transform text-h2 hover:scale-110" />
              <h3 className="font-semibold text-hm">Python</h3>
            </Card>

            <Card className="p-8 text-center transition-all duration-500 transform bg-cc hover:shadow-2xl hover:-translate-y-2">
              <SiTypescript className="mx-auto mb-4 text-6xl transition-transform text-h2 hover:scale-110" />
              <h3 className="font-semibold text-hm">TypeScript</h3>
            </Card>

            <Card className="p-8 text-center transition-all duration-500 transform bg-cc hover:shadow-2xl hover:-translate-y-2">
              <FaJs className="mx-auto mb-4 text-6xl transition-transform text-h2 hover:scale-110" />
              <h3 className="font-semibold text-hm">JavaScript</h3>
            </Card>

            <Card className="p-8 text-center transition-all duration-500 transform bg-cc hover:shadow-2xl hover:-translate-y-2">
              <FaReact className="mx-auto mb-4 text-6xl transition-transform text-h2 hover:scale-110" />
              <h3 className="font-semibold text-hm">React.js</h3>
            </Card>

            <Card className="p-8 text-center transition-all duration-500 transform bg-cc hover:shadow-2xl hover:-translate-y-2">
              <SiKaggle className="mx-auto mb-4 text-6xl transition-transform text-h2 hover:scale-110" />
              <h3 className="font-semibold text-hm">Kaggle</h3>
            </Card>

            <Card className="p-8 text-center transition-all duration-500 transform bg-cc hover:shadow-2xl hover:-translate-y-2">
              <SiJupyter className="mx-auto mb-4 text-6xl transition-transform text-h2 hover:scale-110" />
              <h3 className="font-semibold text-hm">Jupyter</h3>
            </Card>

            <Card className="p-8 text-center transition-all duration-500 transform bg-cc hover:shadow-2xl hover:-translate-y-2">
              <SiGooglecolab className="mx-auto mb-4 text-6xl transition-transform text-h2 hover:scale-110" />
              <h3 className="font-semibold text-hm">Colab</h3>
            </Card>
          </div>
        </section>

        {/* Vision Section */}
        <section id="vision" className="mb-16">
          <h2 className="mb-8 text-4xl font-bold tracking-tight text-h2">Vision</h2>
          <Card className="transition-all duration-500 transform bg-cc hover:shadow-2xl hover:-translate-y-1">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-hm">
                I aspire to reshape healthcare with AI-powered tools that enhance patient care, accelerate diagnostics,
                and support personalized treatments. My focus is on bridging technology and humanity, ensuring innovation
                leads to equitable and impactful healthcare solutions for all.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}