import { motion } from "framer-motion";
import { FiBriefcase, FiMapPin, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

interface ExperienceCardProps {
  id: string;
  role: string;
  company: string;
  duration: string;
  location: string;
  techStack: string[];
  aboutProject: string;
}

const ExperienceCard = ({ id, role, company, duration, location, techStack, aboutProject }: ExperienceCardProps) => (
  <motion.div
    whileHover={{ y: -4 }}
    transition={{ duration: 0.2 }}
    className="card-base"
  >
    <div className="flex items-center gap-3 mb-3">
      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
        <FiBriefcase size={18} />
      </div>
      <div>
        <h3 className="font-heading font-semibold text-foreground">{role}</h3>
        <p className="text-sm text-primary font-medium">{company}</p>
      </div>
    </div>
    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
      <span>{duration}</span>
      {location && (
        <span className="flex items-center gap-1"><FiMapPin size={12} /> {location}</span>
      )}
    </div>
    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{aboutProject}</p>
    <div className="flex flex-wrap gap-1.5 mb-4">
      {techStack.slice(0, 4).map((t) => (
        <span key={t} className="badge-skill text-xs">{t}</span>
      ))}
      {techStack.length > 4 && (
        <span className="badge-skill text-xs">+{techStack.length - 4}</span>
      )}
    </div>
    <Link
      to={`/experience/${id}`}
      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
    >
      View Details <FiArrowRight size={14} />
    </Link>
  </motion.div>
);

export default ExperienceCard;
