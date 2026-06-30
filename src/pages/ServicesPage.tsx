import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import ScrollReveal from '../components/ui/ScrollReveal';
import { services } from '../data/services';

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px] -translate-y-1/2" />
        </div>
        <Container className="relative">
          <ScrollReveal>
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary mb-4">
              I Nostri Servizi
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl">
              Soluzioni Digitali Che{' '}
              <span className="gradient-text">Fanno la Differenza</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
              Ogni servizio e\u0300 progettato per risolvere un problema concreto del
              tuo business. Risultati misurabili, delivery veloce.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      <section className="pb-20 md:pb-28">
        <Container>
          <div className="space-y-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <ScrollReveal key={service.id} delay={index * 80}>
                  <Link to={`/servizi/${service.slug}`} className="group block">
                    <div className="relative p-6 md:p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-primary/40 hover:bg-white/[0.04] transition-all duration-500">
                      <div className="flex flex-col md:flex-row md:items-center gap-6">
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h2 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                            {service.title}
                          </h2>
                          <p className="text-gray-400 leading-relaxed mb-3">
                            {service.shortDescription}
                          </p>
                          <div className="flex flex-wrap items-center gap-4 text-sm">
                            <span className="text-gray-500">
                              Delivery: {service.delivery}
                            </span>
                            {service.id === 'websites' && (
                              <span className="text-accent font-medium">
                                A partire da 400\u20AC
                              </span>
                            )}
                          </div>
                        </div>
                        <ArrowRight className="w-6 h-6 text-gray-600 group-hover:text-primary group-hover:translate-x-2 transition-all duration-300 flex-shrink-0 hidden md:block" />
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-20 border-t border-white/5">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <SectionHeading
              title="Non Sai Quale Servizio Fa per Te?"
              subtitle="Prenota una consulenza gratuita e ti aiuteremo a trovare la soluzione perfetta per il tuo business."
            />
            <Button variant="primary" size="lg" to="/contatti">
              Prenota Consulenza Gratuita
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
