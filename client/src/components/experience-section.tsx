import { Briefcase, Code, FlaskConical } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Software Development Engineer Intern",
      company: "Institute for Global Sustainability",
      location: "Boston, MA",
      period: "May 2023 - May 2024",
      description: "Designed a scalable MongoDB database for the Corporate Carbon Risk project and deployed FlaskConical APIs on Amazon EC2 to automate real-time data collection, enhancing scalability.",
      icon: Briefcase,
      color: "bg-[hsl(var(--bu-blue))]"
    },
    {
      title: "Software Development Engineer",
      company: "BNY Mellon",
      location: "Pune, India",
      period: "Feb 2021 - Aug 2022",
      description: "Detected and fixed a load balancing bug for 10 microservices, reducing API latency from 400ms to 10ms, and played a key role in migrating 6 Spring Boot microservices to a Uniform Product URL, ensuring seamless functionality.",
      icon: Code,
      color: "bg-slate-600"
    },
    {
      title: "Research Intern",
      company: "IIIT Delhi",
      location: "Delhi, India",
      period: "May 2019 - Aug 2019",
      description: "Developed an NLP model and a test mining tool, revealing 67 inter-language defects across 12 GitHub libraries by detecting functionally similar code in Java and Python.",
      icon: FlaskConical,
      color: "bg-green-600"
    }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 font-[Crimson_Text]">Experience</h2>
      
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <div key={index} className="flex gap-6">
            <div className={`flex-shrink-0 w-16 h-16 ${experience.color} rounded-full flex items-center justify-center`}>
              <experience.icon className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <Card className="bg-white shadow-sm border border-slate-200">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{experience.title}</h3>
                      <p className="text-[hsl(var(--bu-blue))] font-medium">{experience.company}</p>
                      <p className="text-sm text-[hsl(var(--academic-gray))]">{experience.location}</p>
                    </div>
                    <span className="text-sm text-[hsl(var(--academic-gray))] mt-1 md:mt-0">{experience.period}</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed">{experience.description}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
