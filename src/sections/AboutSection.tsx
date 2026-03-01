import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import portfolioData from "@/data/portfolioData.json";
import { FiCalendar, FiLayers, FiZap, FiFolder } from "react-icons/fi";

const AboutSection = () => {
  const { yearsOfExperience, projectsWorkedOn, domains, strengths } = portfolioData.about;

  return (
    <section id="about" className="section-alt">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeader title="About Me" subtitle="A brief overview of my background and what drives me" />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <AnimatedSection delay={0.1}>
            <div className="card-base text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <FiCalendar size={24} />
              </div>
              <h3 className="text-3xl font-bold font-heading text-foreground">{yearsOfExperience}+</h3>
              <p className="text-muted-foreground mt-1">Years of Experience</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="card-base text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <FiFolder size={24} />
              </div>
              <h3 className="text-3xl font-bold font-heading text-foreground">{projectsWorkedOn}</h3>
              <p className="text-muted-foreground mt-1">Projects</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="card-base text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <FiLayers size={24} />
              </div>
              <h3 className="text-3xl font-bold font-heading text-foreground">{domains.length}+</h3>
              <p className="text-muted-foreground mt-1">Domains</p>
              <div className="flex flex-wrap justify-center gap-2 mt-3">
                {domains.map((d) => (
                  <span key={d} className="badge-skill text-xs">{d}</span>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="card-base text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <FiZap size={24} />
              </div>
              <h3 className="text-lg font-bold font-heading text-foreground">Key Strengths</h3>
              <ul className="text-sm text-muted-foreground mt-3 space-y-2 text-left">
                {strengths.map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span> {s}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
