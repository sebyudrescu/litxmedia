import Container from '../ui/Container';
import Button from '../ui/Button';

interface ServiceCTAProps {
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaLink: string;
}

export default function ServiceCTA({
  headline,
  subheadline,
  ctaText,
  ctaLink,
}: ServiceCTAProps) {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent via-primary to-secondary opacity-90" />
          <div className="relative z-10 text-center py-16 md:py-20 px-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {headline}
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {subheadline}
            </p>
            <Button variant="white" size="lg" to={ctaLink}>
              {ctaText}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
