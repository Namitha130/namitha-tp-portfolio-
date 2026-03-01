import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import portfolioData from "@/data/portfolioData.json";

const SkillsSection = () => {
  const skills = portfolioData.skills;

  return (
    <section id="skills">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeader title="Skills" subtitle="Technologies and tools I work with" />
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], idx) => (
            <AnimatedSection key={category} delay={idx * 0.1}>
              <div className="card-base h-full">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill.name} className="badge-skill">
                      {skill.name}
                      {skill.level && <span className="text-xs text-muted-foreground ml-1">• {skill.level}</span>}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
