import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";
import InternalProjectCard from "@/components/InternalProjectCard";
import portfolioData from "@/data/portfolioData.json";
import { FiBriefcase, FiMapPin, FiArrowLeft } from "react-icons/fi";

const ExperienceDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const exp = portfolioData.experience.find((e) => e.id === id);

  if (!exp) {
    return (
      <>
        <Navbar />
        <main className="pt-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Experience not found</h2>
            <Link to="/experience" className="btn-primary">Back to Experience</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <PageTransition>
        <main className="pt-20">
          <div className="section-container">
            {/* Back button */}
            <AnimatedSection>
              <Link
                to="/experience"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <FiArrowLeft size={16} /> Back to Experience
              </Link>
            </AnimatedSection>

            {/* Header */}
            <AnimatedSection delay={0.1}>
              <div className="card-base mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <FiBriefcase size={24} />
                  </div>
                  <div>
                    <h1 className="text-2xl md:text-3xl font-heading font-bold text-foreground">{exp.role}</h1>
                    <p className="text-lg text-primary font-medium">{exp.company}</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span>{exp.duration}</span>
                  {exp.location && (
                    <span className="flex items-center gap-1"><FiMapPin size={14} /> {exp.location}</span>
                  )}
                </div>
                {exp.aboutProject && (
                  <p className="text-muted-foreground mb-6">{exp.aboutProject}</p>
                )}
                <div className="flex flex-wrap gap-2 mb-6">
                  {exp.techStack.map((t) => (
                    <span key={t} className="badge-skill">{t}</span>
                  ))}
                </div>

                {/* Responsibilities */}
                <div className="mb-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">Responsibilities</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">▸</span> {r}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact */}
                {exp.impact && exp.impact.length > 0 && (
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-3">Key Impact</h3>
                    <div className="bg-primary/5 rounded-xl px-4 py-3 space-y-2">
                      {exp.impact.map((item, i) => (
                        <p key={i} className="text-sm font-medium text-primary">💡 {item}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </AnimatedSection>

            {/* Projects Worked On */}
            {exp.projects && exp.projects.length > 0 && (
              <AnimatedSection delay={0.2}>
                <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-6">Projects Worked On</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {exp.projects.map((project, idx) => (
                    <AnimatedSection key={project.id} delay={0.3 + idx * 0.1}>
                      <InternalProjectCard project={project} />
                    </AnimatedSection>
                  ))}
                </div>
              </AnimatedSection>
            )}
          </div>
        </main>
      </PageTransition>
      <Footer />
    </>
  );
};

export default ExperienceDetailPage;
