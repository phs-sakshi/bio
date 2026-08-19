import { Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ServiceSection() {
  const serviceItems = [
    {
      role: "Artifact Evaluation Committee",
      venue: "EuroSys (Spring)",
      year: "2027",
    },
  ];

  return (
    <section id="service" className="mb-16">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 font-[Crimson_Text]">Service</h2>

      <div className="space-y-4">
        {serviceItems.map((item, index) => (
          <Card key={index} className="bg-white shadow-sm border border-slate-200">
            <CardContent className="p-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[hsl(var(--bu-blue))] rounded-full flex items-center justify-center">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{item.role}</h3>
                      <p className="text-[hsl(var(--bu-blue))] font-medium">{item.venue}</p>
                    </div>
                    <span className="text-sm text-[hsl(var(--academic-gray))] md:mt-1">{item.year}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
