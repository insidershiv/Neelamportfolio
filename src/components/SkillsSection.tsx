import { BookOpen, BarChart3, PenTool, Lightbulb, FlaskConical, Users } from "lucide-react";

const skills = [
  { icon: Users, label: "Teaching & Mentoring" },
  { icon: FlaskConical, label: "Research Methodology" },
  { icon: BarChart3, label: "Statistical Analysis" },
  { icon: PenTool, label: "Academic Writing" },
  { icon: BookOpen, label: "Data Visualization" },
  { icon: Lightbulb, label: "Critical Thinking" },
];

const SkillsSection = () => (
  <section id="skills" className="py-24">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Core <span className="text-highlight">Skills</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((s, i) => (
          <div key={i} className="group p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-all text-center hover:shadow-lg hover:shadow-primary/5">
            <s.icon className="mx-auto mb-4 text-highlight" size={32} />
            <span className="font-medium text-sm">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
