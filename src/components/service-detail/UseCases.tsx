import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

interface UseCase {
  title: string;
  description: string;
}

interface UseCasesProps {
  headline: string;
  cases: UseCase[];
}

export default function UseCases({ headline, cases }: UseCasesProps) {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading title={headline} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((useCase, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-primary/30 transition-colors"
            >
              <h3 className="text-lg font-bold text-white mb-2">{useCase.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{useCase.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
