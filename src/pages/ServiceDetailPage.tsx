import { useParams, Navigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import Accordion from '../components/ui/Accordion';
import ScrollReveal from '../components/ui/ScrollReveal';
import PricingCard from '../components/ui/PricingCard';
import TestimonialCard from '../components/ui/TestimonialCard';
import { services, pricingPlans } from '../data/services';
import { testimonials } from '../data/testimonials';

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/servizi" replace />;

  const serviceTestimonial = testimonials.find(
    (t) => t.serviceId === service.id
  );
  const showPricing = service.id === 'websites';

  return (
    <>
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary/8 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4" />
        </div>
        <Container className="relative">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary mb-4">
                {service.title}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {service.heroHeadline}
              </h1>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8">
                {service.heroSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg" to="/contatti">
                  Prenota Consulenza Gratuita
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  Delivery in {service.delivery}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-16 border-t border-white/5">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Il Problema
                </h2>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {service.problem}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  La Nostra Soluzione
                </h2>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {service.solution}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading
            label="Come Funziona"
            title="Il Processo, Passo dopo Passo"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.howItWorks.map((step, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="relative p-6 rounded-2xl border border-white/10 bg-white/[0.02] h-full">
                  <span className="text-4xl font-bold text-primary/20">
                    {step.step}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-2 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 border-t border-white/5">
        <Container>
          <SectionHeading
            label="Benefici"
            title="Cosa Ottieni"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {service.benefits.map((benefit, index) => (
              <ScrollReveal key={index} delay={index * 60}>
                <div className="flex items-start gap-3 p-4 rounded-xl hover:bg-white/[0.03] transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 border-t border-white/5">
        <Container>
          <SectionHeading
            label="Risultati"
            title="Numeri Che Parlano"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {service.results.map((result, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="text-center p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {result.metric}
                  </div>
                  <p className="text-gray-400 text-sm">{result.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {showPricing && (
        <section className="py-20 md:py-28 border-t border-white/5">
          <Container>
            <SectionHeading
              label="Prezzi"
              title="Scegli il Pacchetto Giusto per Te"
              subtitle="Prezzi trasparenti, senza costi nascosti. Ogni pacchetto include tutto il necessario."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <PricingCard key={plan.name} {...plan} index={index} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {serviceTestimonial && (
        <section className="py-20 border-t border-white/5">
          <Container>
            <SectionHeading
              label="Testimonianza"
              title="La Parola ai Clienti"
            />
            <div className="max-w-2xl mx-auto">
              <TestimonialCard testimonial={serviceTestimonial} index={0} />
            </div>
          </Container>
        </section>
      )}

      <section className="py-20 border-t border-white/5">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading
                title="Domande Frequenti"
                centered={false}
              />
            </div>
            <Accordion items={service.faq} />
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/5" />
        <Container className="relative text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto a Iniziare?
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
              Prenota una consulenza gratuita e scopri come{' '}
              {service.title.toLowerCase()} puo\u0300 trasformare il tuo business.
            </p>
            <Button variant="primary" size="lg" to="/contatti">
              Prenota Consulenza Gratuita
              <ArrowRight className="w-5 h-5" />
            </Button>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
