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

      <div className="bg-slate-100 p-8 rounded-lg">
        <h3 className="text-2xl font-semibold text-slate-900 mb-6 font-[Crimson_Text]">Research Vision</h3>
        <div className="prose prose-slate max-w-none">
          <p className="text-slate-700 leading-relaxed mb-4">
            My research vision centers on democratizing high-performance computing by making distributed systems 
            more accessible, efficient, and reliable. I believe that the future of computing lies in 
            disaggregated architectures that can dynamically adapt to changing workloads while maintaining 
            strong consistency and fault tolerance guarantees.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Through my work, I aim to bridge the gap between theoretical distributed systems research and 
            practical implementations that can scale to meet the demands of modern data-intensive applications. 
            This involves developing novel algorithms, optimizing existing systems, and creating new paradigms 
            for distributed computation that prioritize both performance and reliability.
          </p>
        </div>
      </div>
    </section>
  );
}
