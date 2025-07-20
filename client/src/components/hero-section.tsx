import { User, Download, Github, Linkedin, GraduationCap, University, FlaskConical, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HeroSection() {
  return (
    <section id="about" className="mb-16">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold text-slate-900 mb-4 font-[Crimson_Text]">About Me</h1>
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              I am a PhD student at Boston University, working under the supervision of 
              <a href="#" className="text-[hsl(var(--bu-blue))] hover:underline ml-1 mr-1">Dr. Vasiliki (Vasia) Kalavri</a> 
              and <a href="#" className="text-[hsl(var(--bu-blue))] hover:underline ml-1">Dr. John Liagouris</a> 
              in the Complex Analytics and Scalable Processing Systems Lab (CASP).
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              My research focuses on distributed systems and stream processing, with particular emphasis on 
              building efficient, disaggregated architectures for heterogeneous computing environments. 
              Before starting my PhD, I completed my Master's in Computer Science at Boston University 
              with a CGPA of 3.9/4, and my Bachelor's in Computer Science Engineering from IIIT Bhubaneswar, India.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Throughout my academic journey, I've had the opportunity to work on cutting-edge research in 
              streaming systems, advanced databases, and distributed computing, contributing to both 
              academic publications and practical implementations that address real-world challenges.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button className="bg-[hsl(var(--bu-blue))] hover:bg-blue-800 text-white">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com/phs-sakshi" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://linkedin.com/in/phs-sakshi" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
        <div className="space-y-6">
          <div className="w-full h-64 bg-slate-200 rounded-lg flex items-center justify-center text-slate-500">
            <User className="h-24 w-24" />
          </div>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold text-slate-900 mb-4">Quick Info</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <GraduationCap className="h-5 w-5 text-[hsl(var(--academic-gray))] mr-3" />
                  <span>PhD Student (2025-Present)</span>
                </div>
                <div className="flex items-center">
                  <University className="h-5 w-5 text-[hsl(var(--academic-gray))] mr-3" />
                  <span>Boston University</span>
                </div>
                <div className="flex items-center">
                  <FlaskConical className="h-5 w-5 text-[hsl(var(--academic-gray))] mr-3" />
                  <span>CASP Lab</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-[hsl(var(--academic-gray))] mr-3" />
                  <span>phs.sakshi@gmail.com</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
