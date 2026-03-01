import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import ExperienceCard from "@/components/ExperienceCard";
import portfolioData from "@/data/portfolioData.json";

const ExperiencePage = () => {
  const experience = portfolioData.experience;

  return (
    <>
      <Navbar />
      <PageTransition>
        <main className="pt-20">
          <section>
            <div className="section-container">
              <AnimatedSection>
                <SectionHeader title="Experience" subtitle="My complete professional journey" />
              </AnimatedSection>
              <div className="grid md:grid-cols-2 gap-6">
                {experience.map((exp, idx) => (
                  <AnimatedSection key={exp.id} delay={idx * 0.1}>
                    <ExperienceCard
                      id={exp.id}
                      role={exp.role}
                      company={exp.company}
                      duration={exp.duration}
                      location={exp.location}
                      techStack={exp.techStack}
                      aboutProject={exp.aboutProject}
                    />
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        </main>
      </PageTransition>
      <Footer />
    </>
  );
};

export default ExperiencePage;
