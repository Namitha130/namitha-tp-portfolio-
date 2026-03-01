import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import portfolioData from "@/data/portfolioData.json";
import { FiBookOpen } from "react-icons/fi";

const EducationSection = () => {
  const education = portfolioData.education;

  return (
    <section id="education" className="section-alt">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeader title="Education" />
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((edu, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <div className="card-base text-center h-full">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <FiBookOpen size={22} />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-1">{edu.degree}</h3>
                <p className="text-sm text-primary font-medium mb-1">{edu.institution}</p>
                <p className="text-xs text-muted-foreground mb-2">{edu.year}</p>
                <span className="badge-skill text-xs">{edu.grade}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
