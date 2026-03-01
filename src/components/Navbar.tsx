import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import portfolioData from "@/data/portfolioData.json";

const navLinks = ["Home", "About", "Skills", "Experience", "Projects", "Education", "Contact"];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id.toLowerCase() } });
      return;
    }
    const el = document.getElementById(id.toLowerCase());
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const firstName = portfolioData.personal.name.split(" ")[0];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-glass border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <button onClick={() => scrollTo("home")} className="font-heading font-bold text-xl text-foreground">
          {firstName}
          <span className="text-primary">.</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary"
            >
              {link}
            </button>
          ))}
          <button
            onClick={toggleTheme}
            className="ml-2 p-2.5 rounded-xl bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <FiMoon size={16} /> : <FiSun size={16} />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-secondary text-secondary-foreground"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <FiMoon size={16} /> : <FiSun size={16} />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2.5 rounded-xl bg-secondary text-secondary-foreground"
          >
            {mobileOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden nav-glass border-t border-border px-4 pb-4">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="block w-full text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
