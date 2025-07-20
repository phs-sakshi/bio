import { Users, Code, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Disaggregated Stream Processing System",
      subtitle: "PhD Research • Boston University • 2025-Present",
      description: "Developing a fully-disaggregated design for data stream processing systems that decouples core data-plane and control-plane services, enabling nonblocking online reconfiguration without pausing computation. This research addresses fundamental challenges in modern stream processing architectures.",
      tags: ["Distributed Systems", "Stream Processing", "System Architecture"],
      advisors: "Dr. Vasiliki Kalavri, Dr. John Liagouris",
      gradient: "from-[hsl(var(--bu-blue))] to-slate-600",
      current: true
    },
    {
      title: "Dynamic Parameter Optimization for LSM Databases",
      subtitle: "Masters Thesis • Boston University • 2024",
      description: "Developed a dynamic parameter optimization framework for LSM-based databases in C++, focusing on identifying essential parameters and dynamically tuning them based on workload variations to achieve significant performance improvements.",
      tags: ["Database Systems", "Performance Optimization", "C++"],
      link: "#",
      gradient: "from-slate-600 to-slate-800"
    },
    {
      title: "Cloud Bursting in Apache Flink",
      subtitle: "Course Project • Boston University",
      description: "Developed an adaptive Flink application in Java to leverage cloud bursting techniques as an alternative to back-pressure, addressing transient workload spikes in distributed stream processing environments.",
      tags: ["Apache Flink", "Cloud Computing", "Java"],
      link: "#",
      gradient: "from-green-600 to-blue-600"
    },
    {
      title: "Enhanced Raft Consensus Algorithm",
      subtitle: "Course Project • Boston University",
      description: "Enhanced the Raft consensus algorithm to tolerate partial network failures by incorporating ballot leader election and quorum connectivity features, implemented in Go for improved fault tolerance in distributed systems.",
      tags: ["Consensus Algorithms", "Fault Tolerance", "Go"],
      link: "#",
      gradient: "from-purple-600 to-indigo-600"
    }
  ];

  return (
    <section id="projects" className="mb-16">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 font-[Crimson_Text]">Research Projects</h2>
      
      <div className="grid gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
            <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="absolute bottom-4 left-6 text-white">
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-slate-200 text-sm">{project.subtitle}</p>
              </div>
            </div>
            <CardContent className="p-6">
              <p className="text-slate-700 leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <Badge 
                    key={tagIndex} 
                    variant={tagIndex === 0 ? "default" : "secondary"}
                    className={tagIndex === 0 ? "bg-[hsl(var(--bu-blue))] hover:bg-blue-800" : ""}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center justify-between">
                {project.advisors && (
                  <div className="flex items-center text-sm text-[hsl(var(--academic-gray))]">
                    <Users className="mr-2 h-4 w-4" />
                    <span>Advisors: {project.advisors}</span>
                  </div>
                )}
                {project.link && (
                  <div className="flex gap-4">
                    <a 
                      href={project.link} 
                      className="text-[hsl(var(--bu-blue))] hover:text-blue-800 text-sm font-medium flex items-center"
                    >
                      <Code className="mr-1 h-4 w-4" />
                      View Code
                    </a>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
