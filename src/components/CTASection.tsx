interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  href: string;
  variant?: 'primary' | 'secondary';
}

const CTASection = ({ 
  title, 
  description, 
  buttonText, 
  href, 
  variant = 'primary' 
}: CTASectionProps) => {
  return (
    <div className={`my-8 p-6 rounded-lg text-center ${
      variant === 'primary' 
        ? 'bg-gradient-to-r from-cta/10 to-primary/10 border border-cta/20' 
        : 'bg-accent border border-primary/20'
    }`}>
      <h3 className="text-2xl font-bold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground mb-4 text-lg">{description}</p>
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={variant === 'primary' ? 'cta-button' : 'cta-button-secondary'}
      >
        {buttonText}
      </a>
    </div>
  );
};

export default CTASection;