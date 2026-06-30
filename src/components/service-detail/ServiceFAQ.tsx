import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Accordion from '../ui/Accordion';

interface FAQ {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  headline: string;
  faqs: FAQ[];
}

export default function ServiceFAQ({ headline, faqs }: ServiceFAQProps) {
  return (
    <section className="py-20 md:py-28 bg-white/[0.02]">
      <Container>
        <SectionHeading title={headline} />
        <div className="max-w-3xl mx-auto">
          <Accordion
            items={faqs.map((faq) => ({
              title: faq.question,
              content: faq.answer,
            }))}
          />
        </div>
      </Container>
    </section>
  );
}
