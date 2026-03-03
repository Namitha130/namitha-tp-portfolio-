import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";
import portfolioData from "@/data/portfolioData.json";
import { FiArrowLeft, FiGithub, FiExternalLink } from "react-icons/fi";


const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const projectIdx = portfolioData.projects.findIndex((p) => p.id === id);
  const project = portfolioData.projects[projectIdx];

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="pt-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Project not found</h2>
            <Link to="/projects" className="btn-primary">Back to Projects</Link>
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
                to="/projects"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <FiArrowLeft size={16} /> Back to Projects
              </Link>
            </AnimatedSection>

            {/* Hero image */}
            <AnimatedSection delay={0.1}>
              <div className="rounded-2xl overflow-hidden mb-8 aspect-video bg-secondary">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>

            {/* Title & meta */}
            <AnimatedSection delay={0.15}>
              <div className="mb-8">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="badge-skill text-xs">{project.type}</span>
                  <span className="badge-skill text-xs">{project.platform}</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">{project.title}</h1>
                <p className="text-lg text-muted-foreground max-w-3xl">{project.description}</p>
              </div>
            </AnimatedSection>

            {/* Tech stack */}
            <AnimatedSection delay={0.2}>
              <div className="mb-8">
                <h3 className="font-heading font-semibold text-foreground mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((t) => (
                    <span key={t} className="badge-skill">{t}</span>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Content grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Features */}
              {project.features && project.features.length > 0 && (
                <AnimatedSection delay={0.25}>
                  <div className="card-base h-full">
                    <h3 className="font-heading font-semibold text-foreground mb-3">Features</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {project.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-0.5">✦</span> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              )}

              {/* Challenges */}
              {project.challenges && project.challenges.length > 0 && (
                <AnimatedSection delay={0.3}>
                  <div className="card-base h-full">
                    <h3 className="font-heading font-semibold text-foreground mb-3">Challenges</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {project.challenges.map((c, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-0.5">⚡</span> {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              )}

              {/* Learnings */}
              {project.learnings && project.learnings.length > 0 && (
                <AnimatedSection delay={0.35}>
                  <div className="card-base h-full md:col-span-2">
                    <h3 className="font-heading font-semibold text-foreground mb-3">What I Learned</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {project.learnings.map((l, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-0.5">📚</span> {l}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              )}
            </div>

            {/* Action buttons */}
            <AnimatedSection delay={0.4}>
              <div className="flex flex-wrap gap-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-outline">
                  <FiGithub size={18} /> View on GitHub
                </a>
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <FiExternalLink size={18} /> Live Demo
                </a>
              </div>
            </AnimatedSection>
          </div>
        </main>
      </PageTransition>
      <Footer />
    </>
  );
};

export default ProjectDetailPage;
