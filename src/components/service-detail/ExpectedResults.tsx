import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

interface Result {
  value: string;
  label: string;
}

interface ExpectedResultsProps {
  headline: string;
  results: Result[];
}

export default function ExpectedResults({ headline, results }: ExpectedResultsProps) {
  return (
    <section className="py-20 md:py-28 bg-white/[0.02]">
      <Container>
        <SectionHeading title={headline} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {results.map((result, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-primary/5 via-white/[0.02] to-secondary/5 border border-white/10"
            >
              <div className="text-5xl font-bold gradient-text mb-3">
                {result.value}
              </div>
              <p className="text-gray-400">{result.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
