import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => (
  <section id="contact" className="py-24 bg-section">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Get in <span className="text-highlight">Touch</span>
      </h2>
      <p className="text-muted-foreground mb-12 max-w-md mx-auto">
        Interested in collaboration or have questions about my research? Feel free to reach out.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <Button variant="hero" size="lg" asChild>
          <a href="mailto:neelamswaminath3@gmail.com">
            <Mail size={18} /> Email Me
          </a>
        </Button>
        <Button variant="heroOutline" size="lg" asChild>
          <a href="tel:8851334084">
            <Phone size={18} /> Call Me
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default ContactSection;
