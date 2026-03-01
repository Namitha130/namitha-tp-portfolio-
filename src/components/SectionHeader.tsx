interface Props {
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ title, subtitle }: Props) => (
  <div className="text-center mb-12">
    <h2 className="section-title">{title}</h2>
    {subtitle && <p className="section-subtitle mt-2">{subtitle}</p>}
  </div>
);

export default SectionHeader;
