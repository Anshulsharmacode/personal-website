import { FaMicroscope, FaRobot, FaHeartbeat, FaBrain, FaLightbulb, FaCloud, FaRegLightbulb, FaCode } from "react-icons/fa"; // React Icons
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SiTypescript, SiJupyter, SiGooglecolab, SiKaggle, SiVisualstudio } from 'react-icons/si';
import { FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';

export default function About() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-white">
      <div className="container mx-auto px-6 py-12">
        {/* About Me Section */}
        <section id="about" className="mb-16">
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <p className="text-lg leading-relaxed mb-4">
            Hi! I’m <strong>Anshul Sharma</strong>, a final-year Biomedical Engineering student driven by a passion for
            **innovating healthcare technologies**. I focus on integrating **Artificial Intelligence (AI)** and
            **Machine Learning (ML)** into medical systems to make diagnostics more accurate, efficient, and accessible.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            My academic journey is defined by curiosity and a commitment to solving real-world challenges.
            Beyond healthcare, I delve into **general AI**, **natural language processing (NLP)**, and
            **generative AI** to explore its potential in education, automation, and more.
          </p>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Education</h2>
          <p className="text-lg leading-relaxed mb-4">
            As a Biomedical Engineering student, I’ve developed expertise in **medical devices**,
            **biosignal processing**, and **AI-driven healthcare technologies**. My projects have provided
            hands-on experience with advanced tools like Python, TensorFlow, and MATLAB to solve diagnostic challenges.
          </p>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">My Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* AI in Healthcare */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <FaMicroscope className="inline w-6 h-6 text-blue-500 mr-2" />
                  AI in Healthcare
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Leveraging **AI and ML** for smarter diagnostic tools, including disease detection, predictive analytics,
                  and **personalized medicine**. I have worked on optimizing medical imaging techniques like **MRI** and **CT scans**.
                </p>
              </CardContent>
            </Card>

            {/* Medical Imaging */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <FaHeartbeat className="inline w-6 h-6 text-red-500 mr-2" />
                  Medical Imaging
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Specializing in **medical imaging technologies**, focusing on improving diagnostic accuracy through
                  deep learning models like **U-Net** and **GANs**. My work aims to enhance MRI and CT scan interpretations.
                </p>
              </CardContent>
            </Card>

            {/* General AI & NLP */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <FaBrain className="inline w-6 h-6 text-purple-500 mr-2" />
                  General AI & NLP
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Exploring **Large Language Models (LLMs)** like GPT and **Retrieval-Augmented Generation (RAG)** for
                  document analysis, question answering, and chat-based applications in healthcare and beyond.
                </p>
              </CardContent>
            </Card>

            {/* Deep Learning & Neural Networks */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <FaRobot className="inline w-6 h-6 text-green-500 mr-2" />
                  Deep Learning & Neural Networks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Deep learning is at the core of many AI applications. I work with **CNNs (Convolutional Neural Networks)** for
                  image processing, **RNNs (Recurrent Neural Networks)** for time-series data, and **Autoencoders** for unsupervised learning.
                </p>
              </CardContent>
            </Card>

            {/* Machine Learning Algorithms */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <FaCloud className="inline w-6 h-6 text-orange-500 mr-2" />
                  Machine Learning Algorithms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Proficient in various **ML algorithms** such as **Random Forests**, **SVMs**, **K-Means Clustering**, and **XGBoost**
                  for tasks ranging from regression to classification and clustering. I apply these algorithms to diverse domains,
                  including medical diagnostics and predictive analytics.
                </p>
              </CardContent>
            </Card>

            {/* Reinforcement Learning */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <FaRegLightbulb className="inline w-6 h-6 text-yellow-500 mr-2" />
                  Reinforcement Learning (RL)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Exploring **Reinforcement Learning (RL)** to enable machines to make decisions by interacting with environments
                  and learning from rewards. Applied in robotics, automation, and AI-based recommendation systems.
                </p>
              </CardContent>
            </Card>

            {/* Generative AI */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <FaCode className="inline w-6 h-6 text-teal-500 mr-2" />
                  Generative AI
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Working with **Generative Adversarial Networks (GANs)** and other generative models to create new content,
                  such as generating images from text, music composition, and realistic synthetic data generation for training AI models.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        <div className="min-h-screen bg-gray-100 text-gray-900 py-12">
          <div className="container mx-auto px-6 lg:px-12">

            <h2 className="text-4xl font-bold text-center mb-12">Skills & Tools</h2>


            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <FaPython className="text-6xl text-yellow-500 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold">Python</h3>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <SiTypescript className="text-6xl text-blue-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold">TypeScript</h3>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <FaJs className="text-6xl text-yellow-400 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold">JavaScript</h3>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <FaHtml5 className="text-6xl text-orange-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold">HTML</h3>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <FaCss3Alt className="text-6xl text-blue-500 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold">CSS</h3>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <FaReact className="text-6xl text-blue-400 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold">React.js</h3>
              </div>


              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <SiVisualstudio className="text-6xl text-blue-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold">VS Code</h3>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <SiKaggle className="text-6xl text-blue-500 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold">Kaggle</h3>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <SiJupyter className="text-6xl text-yellow-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold">Jupyter Notebook</h3>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <SiGooglecolab className="text-6xl text-blue-700 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold">Google Colab</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <section id="vision" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Vision</h2>
          <p className="text-lg leading-relaxed mb-4">
            I aspire to reshape healthcare with **AI-powered tools** that enhance patient care, accelerate diagnostics,
            and support personalized treatments. My focus is on **bridging technology and humanity**, ensuring innovation
            leads to equitable and impactful healthcare solutions for all.
          </p>
        </section>
      </div>
    </div>
  );
}
