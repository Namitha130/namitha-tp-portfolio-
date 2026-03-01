import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import portfolioData from "@/data/portfolioData.json";
import { FiBriefcase, FiMapPin, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const ExperienceSection = () => {
  const experience = portfolioData.experience;

  return (
    <section id="experience" className="section-alt">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeader title="Experience" subtitle="My professional journey so far" />
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-px" />

          {experience.map((exp, idx) => (
            <AnimatedSection key={exp.id} delay={idx * 0.15}>
              <div className={`relative flex flex-col md:flex-row gap-6 mb-12 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background -translate-x-1/2 mt-6 z-10" />

                {/* Spacer */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div className="ml-10 md:ml-0 md:w-1/2 card-base">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <FiBriefcase size={18} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground">{exp.role}</h3>
                      <p className="text-sm text-primary font-medium">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                    <span>{exp.duration}</span>
                    {exp.location && (
                      <span className="flex items-center gap-1"><FiMapPin size={12} /> {exp.location}</span>
                    )}
                  </div>

                  {exp.aboutProject && (
                    <p className="text-sm text-muted-foreground mb-3 italic line-clamp-2">{exp.aboutProject}</p>
                  )}

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {exp.techStack.slice(0, 4).map((t) => (
                      <span key={t} className="badge-skill text-xs">{t}</span>
                    ))}
                    {exp.techStack.length > 4 && (
                      <span className="badge-skill text-xs">+{exp.techStack.length - 4}</span>
                    )}
                  </div>

                  <Link
                    to={`/experience/${exp.id}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    View Details <FiArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="text-center mt-4">
            <Link to="/experience" className="btn-outline">
              View All Experience <FiArrowRight size={16} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ExperienceSection;
