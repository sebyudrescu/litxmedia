import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import Container from '../components/ui/Container';
import ScrollReveal from '../components/ui/ScrollReveal';
import Button from '../components/ui/Button';
import ProjectCard from '../components/ui/ProjectCard';
import { projects, stats, serviceTypes } from '../data/portfolio';

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.serviceType === activeFilter);

  return (
    <>
      <section className="pt-32 pb-12 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px] -translate-y-1/2" />
        </div>
        <Container className="relative">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary mb-4">
                Portfolio
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Progetti che Generano{' '}
                <span className="gradient-text">Risultati Reali</span>
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed">
                Scopri come aiutiamo business in diversi settori a crescere con
                soluzioni digitali e automazioni.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="pb-12">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-8">
        <Container>
          <div className="flex flex-wrap gap-2">
            {serviceTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveFilter(type.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeFilter === type.id
                    ? 'bg-primary text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-20 md:pb-28">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 0.1}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/5" />
        <Container className="relative text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Il Prossimo Caso di Successo Potresti Essere Tu
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Prenota una consulenza gratuita. Discutiamo come possiamo aiutare il
              tuo business a crescere.
            </p>
            <Button variant="primary" size="lg" to="/contatti">
              Prenota Consulenza Gratuita
              <ArrowRight className="w-5 h-5" />
            </Button>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>30 minuti gratis</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>Zero impegno</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>Analisi personalizzata</span>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
