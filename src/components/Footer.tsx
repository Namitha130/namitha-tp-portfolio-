import portfolioData from "@/data/portfolioData.json";
import {
  FiGithub,
  FiLinkedin,
  FiExternalLink,
  FiArrowUp,
} from "react-icons/fi";

import { FaBehance } from "react-icons/fa";

const socialIcons: Record<string, typeof FiGithub> = {
  GitHub: FiGithub,
  LinkedIn: FiLinkedin,
  Behance: FaBehance,
};

const Footer = () => {
  const { name } = portfolioData.personal;
  const socialMedia = portfolioData.socialMedia;

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {name}. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          {socialMedia.map((social) => {
            const Icon = socialIcons[social.name] || FiExternalLink;
            return (
              <a
                key={social.name}
                href={social.path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                title={social.name}
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>

        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-xl bg-secondary text-secondary-foreground flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
          aria-label="Back to top"
        >
          <FiArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
