import { ExternalLink, Calendar, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PublicationsSection() {
  return (
    <section id="publications" className="mb-16">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 font-[Crimson_Text]">Publications</h2>
      
      <div className="space-y-6">
        <Card className="bg-white shadow-sm border border-slate-200">
          <CardContent className="p-8">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Mining Similar Methods for Test Adaptation
                </h3>
                <p className="text-slate-600 text-sm mb-3">
                  <span className="font-medium">IEEE Transactions on Software Engineering</span> • 
                  DOI: 10.1109/TSE.2021.3057163
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  <span className="font-medium">Authors:</span> D. Sondhi, M. Jobanputra, D. Rani, S. Purandare, 
                  <span className="font-semibold text-slate-900"> S. Sharma</span>, R. Purandare
                </p>
                <p className="text-slate-700 leading-relaxed">
                  This work presents a novel approach to mining functionally similar methods across different 
                  programming languages for automated test adaptation, enabling better software testing practices 
                  in multi-language environments.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a 
                href="https://ieeexplore.ieee.org/document/9347715" 
                className="inline-flex items-center text-[hsl(var(--bu-blue))] hover:text-blue-800 text-sm font-medium"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View Publication
              </a>
              <span className="inline-flex items-center text-slate-500 text-sm">
                <Calendar className="mr-2 h-4 w-4" />
                2021
              </span>
              <Badge variant="secondary">Software Engineering</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
