import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import portfolioData from "@/data/portfolioData.json";

const ProjectsPage = () => {
  const projects = portfolioData.projects;

  return (
    <>
      <Navbar />
      <PageTransition>
        <main className="pt-20">
          <section>
            <div className="section-container">
              <AnimatedSection>
                <SectionHeader title="Projects" subtitle="All my personal projects" />
              </AnimatedSection>
              <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project, idx) => (
                  <AnimatedSection key={project.id} delay={idx * 0.1}>
                    <ProjectCard
                      id={project.id}
                      title={project.title}
                      description={project.description}
                      techStack={project.techStack}
                      platform={project.platform}
                      image={project.image}
                      index={idx}
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

export default ProjectsPage;
