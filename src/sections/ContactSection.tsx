import { useState, FormEvent } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import portfolioData from "@/data/portfolioData.json";
import { FiGithub, FiLinkedin, FiMail, FiSend, FiCheck, FiExternalLink, FiLoader } from "react-icons/fi";
import { supabase } from "@/integrations/client";
import { toast } from "sonner";
import { FaBehance } from "react-icons/fa";
const socialIcons: Record<string, typeof FiGithub> = {
  GitHub: FiGithub,
  LinkedIn: FiLinkedin,
    Behance: FaBehance,
};

const ContactSection = () => {
  const socialMedia = portfolioData.socialMedia;
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = (form.get("name") as string).trim();
    const email = (form.get("email") as string).trim();
    const phone = (form.get("phone") as string)?.trim() || "";
    const message = (form.get("message") as string).trim();

    const newErrors: Record<string, string> = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Invalid email";
    if (!message) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: { name, email, phone, message },
      });

      if (error) throw error;

      setSubmitted(true);
      (e.target as HTMLFormElement).reset();
      toast.success("Message sent! I'll get back to you soon.");
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      console.error("Contact form error:", err);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeader title="Get In Touch" subtitle="Have a project in mind? Let's talk!" />
        </AnimatedSection>

        <div className="max-w-2xl mx-auto">
          <AnimatedSection delay={0.1}>
            <form onSubmit={handleSubmit} className="card-base space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Name *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  placeholder="Your name"
                />
                {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  placeholder="+91-XXXXXXXXXX"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
                {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
              </div>

              <button type="submit" disabled={loading} className="btn-primary w-full justify-center disabled:opacity-60">
                {loading ? <><FiLoader size={18} className="animate-spin" /> Sending...</> : submitted ? <><FiCheck size={18} /> Message Sent!</> : <><FiSend size={18} /> Send Message</>}
              </button>

              {submitted && (
                <p className="text-center text-sm text-primary font-medium">
                  Thank you! I'll get back to you soon.
                </p>
              )}
            </form>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex justify-center gap-4 mt-8">
              {socialMedia.map((social) => {
                const Icon = socialIcons[social.name] || FiExternalLink;
                return (
                  <a
                    key={social.name}
                    href={social.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-secondary text-secondary-foreground flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    title={social.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
