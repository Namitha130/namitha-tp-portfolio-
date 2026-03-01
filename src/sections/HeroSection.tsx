import { motion, useMotionValue, useTransform } from "framer-motion";
import { FiArrowDown, FiDownload, FiMapPin, FiEye } from "react-icons/fi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { useEffect, useState, useCallback } from "react";
import portfolioData from "@/data/portfolioData.json";
import profileImg from "@/assets/profile.jpg";
import { FaBehance } from "react-icons/fa";
const ROLES = [
  "Frontend Developer",
  "React.js Engineer",
  "UI Performance Specialist",
];

const HeroSection = () => {
  const { name, title, summary, resumeUrl, location, availability } = portfolioData.personal;
  const socials = portfolioData.socialMedia;

  // Typing effect
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const currentRole = ROLES[roleIndex];
  const displayedText = currentRole.slice(0, charIndex);

  useEffect(() => {
    const speed = isDeleting ? 40 : 80;
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      } else {
        setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentRole, roleIndex]);

  // Mouse parallax for profile image
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const imgX = useTransform(mouseX, [-400, 400], [-12, 12]);
  const imgY = useTransform(mouseY, [-400, 400], [-12, 12]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = e.currentTarget.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left - rect.width / 2);
      mouseY.set(e.clientY - rect.top - rect.height / 2);
    },
    [mouseX, mouseY]
  );

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* ── Background layers ── */}
      <div className="absolute inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 dark:to-primary/10" />

        {/* Blurred shapes */}
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-primary/10 dark:bg-primary/20 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 right-0 w-[450px] h-[450px] rounded-full bg-accent/8 dark:bg-accent/15 blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[350px] h-[350px] rounded-full bg-primary/5 dark:bg-primary/10 blur-[80px]"
        />

        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      {/* ── Vertical social bar (desktop) ── */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-5"
      >
        <div className="w-px h-16 bg-border" />
        {socials
          .filter((s) => ["LinkedIn", "GitHub", "Behance"].includes(s.name))
          .map((social) => (
            <a
              key={social.name}
              href={social.path}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
              aria-label={social.name}
            >
              {social.name === "LinkedIn" && <FaLinkedinIn size={18} />}
              {social.name === "GitHub" && <FaGithub size={18} />}
              {social.name === "Behance" && <FaBehance size={18} />}{" "}
            </a>
          ))}
        <div className="w-px h-16 bg-border" />
      </motion.div>

      {/* ── Main content ── */}
      <div className="section-container w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
          >
            {/* Location badge */}
            {location && (
              <motion.div variants={fadeUp} className="mb-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border border-border">
                  <FiMapPin size={12} className="text-primary" />
                  {location}
                </span>
              </motion.div>
            )}

            {/* Name with gradient */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-4"
            >
              <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
                {name}
              </span>
            </motion.h1>

            {/* Typing role */}
            <motion.div variants={fadeUp} className="mb-3">
              <span className="text-xl md:text-2xl font-medium text-primary">
                {displayedText}
                <span className="inline-block w-0.5 h-6 ml-1 bg-primary animate-pulse align-middle" />
              </span>
            </motion.div>

            {/* Availability */}
            {availability && (
              <motion.p
                variants={fadeUp}
                className="text-sm font-medium text-primary/70 mb-5"
              >
                {availability}
              </motion.p>
            )}

            {/* Summary */}
            <motion.p
              variants={fadeUp}
              className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed text-center lg:text-left"
            >
              {summary}
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={scrollToProjects}
                className="btn-primary shadow-lg hover:shadow-xl"
              >
                <FiArrowDown size={18} /> View Projects
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                href={resumeUrl}
                download
                className="btn-outline"
              >
                <FiDownload size={18} /> Download Resume
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                title="View Resume"
              >
                <FiEye size={20} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Radial glow behind image */}
              <div className="absolute inset-0 scale-125 rounded-full bg-primary/15 dark:bg-primary/25 blur-[60px]" />

              {/* Animated glow ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--primary) / 0.2), hsl(var(--primary)), hsl(var(--primary) / 0.2), hsl(var(--primary)))",
                  WebkitMask:
                    "radial-gradient(farthest-side, transparent calc(100% - 3px), black calc(100% - 3px))",
                  mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), black calc(100% - 3px))",
                }}
              />

              {/* Floating image */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ x: imgX, y: imgY }}
                className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-background shadow-2xl"
              >
                <img
                  src={profileImg}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-muted-foreground/40 flex justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-muted-foreground/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
