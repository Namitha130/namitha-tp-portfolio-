import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import portfolioData from "@/data/portfolioData.json";
import { FiStar } from "react-icons/fi";

const AchievementsSection = () => {
  const achievements = portfolioData.achievements;

  return (
    <section id="achievements" className="section-alt">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeader title="Achievements" />
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((ach, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <div className="card-base h-full hover:-translate-y-1 transition-transform duration-300">
                <div className="w-10 h-10 mb-4 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <FiStar size={20} />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{ach.title}</h3>
                <p className="text-sm text-muted-foreground">{ach.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
