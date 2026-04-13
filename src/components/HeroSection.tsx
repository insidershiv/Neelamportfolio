import { Suspense, lazy } from "react";
import { Button } from "@/components/ui/button";

const Globe = lazy(() => import("@/components/Globe"));

const stats = [
  { value: "4+", label: "Publications" },
  { value: "5yr", label: "Research Fellowship" },
  { value: "Ph.D.", label: "Geography" },
];

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">Currently teaching at Delhi International School Edge</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
              Neelam
              <br />
              <span className="gradient-text">Geography</span>
              <br />
              <span className="gradient-text">Researcher</span>
            </h1>

            <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
              Ph.D. scholar exploring urban land use patterns and socio-economic dynamics. UGC NET-JRF awardee with published research in peer-reviewed journals.
            </p>

            <div className="flex items-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#research">View Research</a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>

            <div className="pt-8 border-t border-border/50 flex items-center gap-12">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-highlight">{s.value}</div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/5 blur-3xl scale-110" />
              <Suspense fallback={<div className="w-[500px] h-[500px] rounded-full bg-muted animate-pulse" />}>
                <Globe />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
