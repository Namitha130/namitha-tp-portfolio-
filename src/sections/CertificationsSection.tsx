import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import portfolioData from "@/data/portfolioData.json";
import { FiAward } from "react-icons/fi";

const CertificationsSection = () => {
  const certifications = portfolioData.certifications;

  return (
    <section id="certifications">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeader title="Certifications" />
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <div className="card-base text-center h-full hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <FiAward size={22} />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-1">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                <p className="text-xs text-muted-foreground mt-1">{cert.year}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
