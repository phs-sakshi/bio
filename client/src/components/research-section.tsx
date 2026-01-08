import { Network, Database, Zap, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ResearchSection() {
  const researchAreas = [
    {
      icon: Network,
      title: "Distributed Systems",
      description: "Developing scalable, fault-tolerant distributed computing systems with focus on stream processing architectures and consensus algorithms in heterogeneous environments."
    },
    {
      icon: Database,
      title: "Database Systems",
      description: "Optimizing LSM-based databases through dynamic parameter tuning and exploring novel storage architectures for high-performance data management."
    },
    {
      icon: Zap,
      title: "Stream Processing",
      description: "Building disaggregated stream processing systems that enable nonblocking online reconfiguration and adaptive workload management in cloud environments."
    },
    {
      icon: Shield,
      title: "System Reliability",
      description: "Enhancing system reliability through improved consensus algorithms and fault tolerance mechanisms for partial network connectivity scenarios."
    }
  ];

  return (
    <section id="research" className="mb-16">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 font-[Crimson_Text]">Research Interests</h2>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {researchAreas.map((area, index) => (
          <Card key={index} className="bg-white shadow-sm border border-slate-200">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <area.icon className="h-8 w-8 text-[hsl(var(--bu-blue))] mr-4" />
                <h3 className="text-xl font-semibold text-slate-900">{area.title}</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">{area.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
