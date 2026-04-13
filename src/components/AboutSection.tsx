import { MapPin, Mail, Phone } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="py-24 bg-section">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        About <span className="text-highlight">Me</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            I am a dedicated Geography researcher and educator with a passion for understanding urban landscapes and socio-economic dynamics. My Ph.D. research focuses on the implications of socio-economic factors on land use in urban areas, with Lucknow City as a case study.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            As a UGC NET-JRF awardee, I have received research fellowships spanning over 5 years. My work has been published in multiple peer-reviewed journals covering topics from geographical landforms to climate change analysis.
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
            <MapPin className="text-highlight shrink-0" size={20} />
            <span className="text-muted-foreground">Mayur Vihar Phase-1, Delhi-110091</span>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
            <Mail className="text-highlight shrink-0" size={20} />
            <span className="text-muted-foreground">neelamswaminath3@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
            <Phone className="text-highlight shrink-0" size={20} />
            <span className="text-muted-foreground">8851334084</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
