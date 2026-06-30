import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface KeyBenefitsProps {
  headline: string;
  benefits: Benefit[];
}

export default function KeyBenefits({ headline, benefits }: KeyBenefitsProps) {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading title={headline} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-primary/30 transition-colors"
            >
              <div className="text-3xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
