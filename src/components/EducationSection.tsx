import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Ph.D. (Geography)",
    institution: "Dr. Ram Manohar Lohia Avadh University, Ayodhya",
    period: "2021 – 2025",
    detail: "Research on socio-economic factors' impact on urban land use in Lucknow City. Thesis submitted for Viva.",
  },
  {
    degree: "UGC NET-JRF (Geography)",
    institution: "University Grants Commission",
    period: "December 2018",
    detail: "Junior Research Fellowship (2020-2022) and Senior Research Fellowship (2022-2025).",
  },
  {
    degree: "M.A. (Geography)",
    institution: "University of Lucknow",
    period: "2014 – 2016",
    detail: "Dissertation in Population Geography – Socio-economic study of Malihabad, UP.",
  },
  {
    degree: "B.A. (Geography, Education, English)",
    institution: "National P.G. College, Lucknow",
    period: "2011 – 2014",
    detail: "",
  },
];

const EducationSection = () => (
  <section id="education" className="py-24 bg-section">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        <span className="text-highlight">Education</span> & Qualifications
      </h2>
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2" />
        <div className="space-y-12">
          {education.map((e, i) => (
            <div key={i} className={`relative flex flex-col md:flex-row gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
              <div className="md:w-1/2 flex md:justify-end">
                <div className={`p-6 rounded-xl bg-card border border-border max-w-md w-full ${i % 2 !== 0 ? "md:ml-12" : "md:mr-12"}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <GraduationCap className="text-highlight" size={20} />
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-highlight">{e.period}</span>
                  </div>
                  <h3 className="font-semibold text-lg">{e.degree}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{e.institution}</p>
                  {e.detail && <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{e.detail}</p>}
                </div>
              </div>
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 top-8" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
