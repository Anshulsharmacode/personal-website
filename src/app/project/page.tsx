"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export default function Projects() {
  return (
    <div className="flex flex-col justify-center items-center px-6 py-16 mt-14 space-y-16 w-screen min-h-screen bg-bc md:px-20 lg:px-40">
      {/* Section Title */}
      <h2 className="mb-8 text-6xl font-bold tracking-tight text-center">
        <span className="text-h1">My</span>
        <span className="text-transparent bg-h2">Projects</span>
      </h2>

      {/* Technical Projects Section */}
      <div className="space-y-16 w-full">
        <h3 className="text-4xl font-semibold text-center text-hm">
          Technical Projects
        </h3>

        {/* Medicine Chatbot using RAG and LLM */}
        <Card className="border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-h2/20 bg-cc">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-h2">Medicine Chatbot using RAG and LLM</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center space-y-8">
              <div className="relative w-full h-[450px] overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/chat.jpeg"
                  alt="AI Healthcare Bot Interface"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  priority
                  sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
                />
              </div>
              <p className="max-w-3xl text-xl leading-relaxed text-center text-dm">
                Developed an advanced Medicine Chatbot leveraging Retrieval-Augmented Generation (RAG) and Large Language Models (LLMs) to provide accurate, real-time medical information. The system integrates semantic search and word-to-word search capabilities to answer a wide range of medical queries with high precision.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Mathematical Models Section */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Mathematical Model for Lung Cancer */}
          <Card className="h-full border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-h2/20 bg-cc">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-h2">Mathematical Model for Lung Cancer</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center space-y-6">
                <div className="relative w-full h-[350px] overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src="/lungs.jpeg"
                    alt="Lung Cancer Research Visualization"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    priority
                    sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
                  />
                </div>
                <p className="text-lg leading-relaxed text-center text-dm">
                  Developed a sophisticated mathematical model to simulate cancer cell growth patterns and optimize treatment strategies using differential equations and numerical methods.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Mathematical Model for Brain Tumor */}
          <Card className="h-full border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-h2/20 bg-cc">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-h2">Mathematical Model for Brain Tumor</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center space-y-6">
                <div className="relative w-full h-[350px] overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src="/brain.jpeg"
                    alt="Brain Tumor Analysis Visualization"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    priority
                    sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
                  />
                </div>
                <p className="text-lg leading-relaxed text-center text-dm">
                  Created an advanced mathematical model for simulating tumor development and testing treatment effectiveness using computational biology approaches.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Hardware Projects Section */}
      <div className="space-y-16 w-full">
        <h3 className="text-4xl font-semibold text-center text-hm">
          Hardware Projects
        </h3>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Electronics Stethoscope */}
          <Card className="h-full border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-h2/20 bg-cc">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-h2">Electronics Stethoscope</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center space-y-6">
                <div className="relative w-full h-[250px] overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src="/ste.jpeg"
                    alt="Electronic Medical Device"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    priority
                    sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
                  />
                </div>
                <p className="text-lg leading-relaxed text-center text-dm">
                  Designed an innovative electronic stethoscope with digital signal processing for enhanced medical diagnostics and remote monitoring capabilities.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Speaker Amplifier */}
          <Card className="h-full border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-h2/20 bg-cc">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-h2">Speaker Amplifier</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center space-y-6">
                <div className="relative w-full h-[250px] overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src="/amp.jpeg"
                    alt="Professional Audio Amplifier"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    priority
                    sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
                  />
                </div>
                <p className="text-lg leading-relaxed text-center text-dm">
                  Developed a high-fidelity amplifier with advanced circuitry for superior audio performance and minimal distortion.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Dual Power Supply */}
          <Card className="h-full border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-h2/20 bg-cc">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-h2">Dual Power Supply</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center space-y-6">
                <div className="relative w-full h-[250px] overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src="/dual.jpeg"
                    alt="Power Supply Unit"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    priority
                    sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
                  />
                </div>
                <p className="text-lg leading-relaxed text-center text-dm">
                  Engineered a precision dual power supply using a single transformer, featuring voltage regulation and overload protection for reliable power delivery.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
