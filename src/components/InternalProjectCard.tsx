import { motion } from "framer-motion";

interface InternalProject {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  status: string;
}

const InternalProjectCard = ({ project }: { project: InternalProject }) => (
  <motion.div
    whileHover={{ scale: 1.03, y: -4 }}
    transition={{ duration: 0.2 }}
    className="card-base"
  >
    <div className="flex items-center justify-between mb-3">
      <h4 className="font-heading font-semibold text-foreground">{project.name}</h4>
      <span
        className={`text-xs font-medium px-2.5 py-1 rounded-full ${
          project.status === "Ongoing"
            ? "bg-primary/10 text-primary"
            : "bg-secondary text-secondary-foreground"
        }`}
      >
        {project.status}
      </span>
    </div>
    <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
    <div className="flex flex-wrap gap-1.5">
      {project.techStack.map((t) => (
        <span key={t} className="badge-skill text-xs">{t}</span>
      ))}
    </div>
  </motion.div>
);

export default InternalProjectCard;
