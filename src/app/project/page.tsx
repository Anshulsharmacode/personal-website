import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip } from '@/components/ui/tooltip';
import Image from 'next/image';

function Projects() {
  return (
    <div className="flex flex-col justify-center items-center px-6 py-16 mt-14 space-y-16 w-screen min-h-screen text-gray-900 bg-gradient-to-b from-gray-100 to-gray-200 md:px-20 lg:px-40">
      {/* Section Title */}
      <h2 className="mb-8 text-5xl font-bold text-gray-800 animate-fade-in">My Projects</h2>

      {/* Technical Projects Section */}
      <div className="space-y-16 w-full">
        <h3 className="text-4xl font-semibold text-center text-gray-700">Technical Projects</h3>

        {/* Medicine Chatbot using RAG and LLM */}
        <Card className="transition-shadow duration-300 hover:shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-700">Medicine Chatbot using RAG and LLM</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center space-y-6">
              <Image 
                src="/UI.png" 
                alt="AI Healthcare Bot" 
                width={600} 
                height={400} 
                className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              />
              <p className="max-w-2xl text-xl text-center text-gray-600">
                Developed an advanced Medicine Chatbot leveraging <span className="font-semibold text-blue-600">Retrieval-Augmented Generation (RAG)</span> and <span className="font-semibold text-blue-600">Large Language Models (LLMs)</span> to provide accurate, real-time medical information. The system integrates semantic search and word-to-word search capabilities to answer a wide range of medical queries.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Lung Cancer Classification */}
        {/* <Card className="transition-shadow duration-300 hover:shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-700">Lung Cancer Classification using Machine Learning</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center space-y-6">
              <Image 
                
                alt="Lung Cancer Classification" 
                width={600} 
                height={400} 
                className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              />
              <p className="max-w-2xl text-xl text-center text-gray-600">
                Applied <span className="font-semibold text-blue-600">unsupervised machine learning</span> to classify lung cancer using unlabelled data. The project utilized clustering and anomaly detection techniques to identify potential cancerous areas in CT and MRI scans.
              </p>
            </div>
          </CardContent>
        </Card> */}

        {/* Brain Tumor Classification */}
        {/* <Card className="transition-shadow duration-300 hover:shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-700">Brain Tumor Classification using Machine Learning</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center space-y-6">
              <Image 
                
                alt="Brain Tumor Classification" 
                width={600} 
                height={400} 
                className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              />
              <p className="max-w-2xl text-xl text-center text-gray-600">
                Developed a <span className="font-semibold text-blue-600">supervised machine learning</span> model to classify brain tumors in MRI scans using convolutional neural networks (CNN) for improved diagnostic accuracy.
              </p>
            </div>
          </CardContent>
        </Card> */}

        {/* Mathematical Models Section */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Mathematical Model for Lung Cancer */}
          <Card className="transition-shadow duration-300 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-700">Mathematical Model for Lung Cancer</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center space-y-6">
                <Image 
                 src="/Lung.jpeg"  
                  alt="Mathematical Model for Lung Cancer" 
                  width={400} 
                  height={300} 
                  className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                />
                <p className="text-lg text-center text-gray-600">
                  Developed a <span className="font-semibold text-blue-600">mathematical model</span> to simulate cancer cell growth and optimize treatment strategies.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Mathematical Model for Brain Tumor */}
          <Card className="transition-shadow duration-300 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-700">Mathematical Model for Brain Tumor</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center space-y-6">
                <Image 
                 src="/Brain.jpeg"  
                  alt="Mathematical Model for Brain Tumor" 
                  width={400} 
                  height={300} 
                  className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                />
                <p className="text-lg text-center text-gray-600">
                  Created a <span className="font-semibold text-blue-600">mathematical model</span> for simulating tumor development and testing treatment effectiveness.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Hardware Projects Section */}
      <div className="space-y-16 w-full">
        <h3 className="text-4xl font-semibold text-center text-gray-700">Hardware Projects</h3>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Electronics Stethoscope */}
          <Card className="transition-shadow duration-300 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-700">Electronics Stethoscope</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center space-y-6">
                <Image 
                  src="/Ste.jpeg" 
                  alt="Electronics Stethoscope" 
                  width={300} 
                  height={200} 
                  className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                />
                <p className="text-lg text-center text-gray-600">
                  Designed an <span className="font-semibold text-blue-600">electronic stethoscope</span> for enhanced medical diagnostics.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Speaker Amplifier */}
          <Card className="transition-shadow duration-300 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-700">Speaker Amplifier</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center space-y-6">
                <Image 
                  src="/Amp.jpeg" 
                  alt="Speaker Amplifier" 
                  width={300} 
                  height={200} 
                  className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                />
                <p className="text-lg text-center text-gray-600">
                  Developed a <span className="font-semibold text-blue-600">high-quality amplifier</span> for superior audio performance.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Dual Power Supply */}
          <Card className="transition-shadow duration-300 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-700">Dual Power Supply</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center space-y-6">
                <Image 
                  src="/Dual.jpeg" 
                  alt="Dual Power Supply" 
                  width={300} 
                  height={200} 
                  className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                />
                <p className="text-lg text-center text-gray-600">
                  Designed a <span className="font-semibold text-blue-600">dual power supply</span> using a single transformer for efficient power delivery.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Projects;
