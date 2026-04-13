import { FileText } from "lucide-react";

const papers = [
  {
    title: "Geographical Landforms Types of Uttar Pradesh",
    journal: "IJFMR, Volume 5, Issue 5",
    date: "October 2023",
    id: "E-ISSN: 2582-2160",
  },
  {
    title: "Demographic Features of Lucknow City: An Overview",
    journal: "IJFMR, Volume 5, Issue 5",
    date: "September-October 2023",
    id: "E-ISSN: 2582-2160",
  },
  {
    title: "Study of Commercial Land Use Patterns in Lucknow City Over the Past 50 Years (1970-2020)",
    journal: "IJIRT, Volume 11, Issue 5",
    date: "October 2024",
    id: "ISSN: 2349-6002",
  },
  {
    title: "Climate Change in Lucknow City: A 50-Year Retrospective",
    journal: "IJIRT, Volume 11, Issue 5",
    date: "October 2024",
    id: "ISSN: 2349-6002",
  },
];

const ResearchSection = () => (
  <section id="research" className="py-24">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Published <span className="text-highlight">Research</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {papers.map((p, i) => (
          <div key={i} className="group p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/5">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-highlight shrink-0">
                <FileText size={24} />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold leading-snug group-hover:text-highlight transition-colors">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.journal} · {p.date}</p>
                <span className="inline-block text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">{p.id}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ResearchSection;
