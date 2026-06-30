import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import PricingCard from '../ui/PricingCard';
import Button from '../ui/Button';

interface PricingPlan {
  name: string;
  price: number;
  description: string;
  features: string[];
  recommended: boolean;
}

interface PricingSectionProps {
  headline: string;
  plans: PricingPlan[];
  note?: string;
}

export default function PricingSection({ headline, plans, note }: PricingSectionProps) {
  return (
    <section className="py-20 md:py-28 bg-white/[0.02]">
      <Container>
        <SectionHeading title={headline} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.name}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              recommended={plan.recommended}
              index={index}
            />
          ))}
        </div>
        {note && (
          <div className="text-center p-6 rounded-2xl bg-white/[0.02] border border-white/10 max-w-3xl mx-auto">
            <p className="text-gray-400 mb-4">{note}</p>
            <Button variant="outline" to="/contatti">
              Prenota Consulenza Gratuita
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}
