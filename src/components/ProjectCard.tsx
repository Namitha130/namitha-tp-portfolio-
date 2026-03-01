import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.png";

const projectImages = [project1, project2, project3, project4];

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  platform: string;
  image: string;
  index: number;
}

const ProjectCard = ({ id, title, description, techStack, platform, image, index }: ProjectCardProps) => (
  <motion.div
    whileHover={{ y: -4 }}
    transition={{ duration: 0.2 }}
    className="card-base overflow-hidden group"
  >
    <div className="relative overflow-hidden rounded-xl mb-4 aspect-video bg-secondary">
      <img
        src={projectImages[index] || image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      <div className="absolute top-3 right-3">
        <span className="badge-skill text-xs">{platform}</span>
      </div>
    </div>
    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>
    <div className="flex flex-wrap gap-1.5 mb-4">
      {techStack.map((t) => (
        <span key={t} className="badge-skill text-xs">{t}</span>
      ))}
    </div>
    <Link
      to={`/projects/${id}`}
      className="btn-primary text-sm py-2 px-4"
    >
      View Details <FiArrowRight size={14} />
    </Link>
  </motion.div>
);

export default ProjectCard;
