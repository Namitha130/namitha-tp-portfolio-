import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import portfolioData from "@/data/portfolioData.json";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const ProjectsSection = () => {
  const projects = portfolioData.projects;

  return (
    <section id="projects">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeader title="Projects" subtitle="Some of the things I've built" />
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

        <AnimatedSection delay={0.4}>
          <div className="text-center mt-10">
            <Link to="/projects" className="btn-outline">
              View All Projects <FiArrowRight size={16} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProjectsSection;
