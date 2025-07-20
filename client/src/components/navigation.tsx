import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
      <nav className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <h1 className="text-xl font-semibold text-[hsl(var(--bu-blue))]">Sakshi Sharma</h1>
            <span className="text-sm text-[hsl(var(--academic-gray))]">PhD Student</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-slate-600 hover:text-[hsl(var(--bu-blue))] transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('research')}
              className="text-slate-600 hover:text-[hsl(var(--bu-blue))] transition-colors"
            >
              Research
            </button>
            <button 
              onClick={() => scrollToSection('publications')}
              className="text-slate-600 hover:text-[hsl(var(--bu-blue))] transition-colors"
            >
              Publications
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-slate-600 hover:text-[hsl(var(--bu-blue))] transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-slate-600 hover:text-[hsl(var(--bu-blue))] transition-colors"
            >
              Contact
            </button>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
        
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-2 text-slate-600 hover:text-[hsl(var(--bu-blue))]"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('research')}
              className="block w-full text-left py-2 text-slate-600 hover:text-[hsl(var(--bu-blue))]"
            >
              Research
            </button>
            <button 
              onClick={() => scrollToSection('publications')}
              className="block w-full text-left py-2 text-slate-600 hover:text-[hsl(var(--bu-blue))]"
            >
              Publications
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left py-2 text-slate-600 hover:text-[hsl(var(--bu-blue))]"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-2 text-slate-600 hover:text-[hsl(var(--bu-blue))]"
            >
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
