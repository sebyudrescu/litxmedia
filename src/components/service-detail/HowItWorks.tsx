import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

interface Step {
  title: string;
  description: string;
}

interface HowItWorksProps {
  headline: string;
  steps: Step[];
}

export default function HowItWorks({ headline, steps }: HowItWorksProps) {
  return (
    <section className="py-20 md:py-28 bg-white/[0.02]">
      <Container>
        <SectionHeading title={headline} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">{index + 1}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-full w-full h-[2px] bg-gradient-to-r from-primary/20 to-transparent -translate-x-4" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
