import { Mail, Github, Linkedin, MapPin, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactSection() {
  const researchInterests = [
    "Distributed Systems Architecture",
    "Stream Processing Systems", 
    "Database Optimization",
    "Consensus Algorithms",
    "Cloud Computing"
  ];

  return (
    <section id="contact" className="mb-16">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 font-[Crimson_Text]">Let's Collaborate</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="prose prose-slate">

          </div>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-[hsl(var(--bu-blue))] rounded-full flex items-center justify-center">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-slate-900">Email</p>
                <a className="text-[hsl(var(--bu-blue))] hover:underline">
                  phsakshi at bu dot edu
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center">
                <Github className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-slate-900">GitHub</p>
                <a href="https://github.com/phs-sakshi" className="text-[hsl(var(--bu-blue))] hover:underline">
                  github.com/phs-sakshi
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <Linkedin className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-slate-900">LinkedIn</p>
                <a href="https://linkedin.com/in/phs-sakshi" className="text-[hsl(var(--bu-blue))] hover:underline">
                  linkedin.com/in/phs-sakshi
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-[hsl(var(--academic-gray))] rounded-full flex items-center justify-center">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-slate-900">Location</p>
                <p className="text-slate-600">Boston, MA, USA</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-slate-100 p-8 rounded-lg">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Research Interests</h3>
          <div className="space-y-3">
            {researchInterests.map((interest, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <span className="text-slate-700">{interest}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
