import { useParams, Navigate } from 'react-router-dom';
import { ArrowRight, Briefcase, Calendar, Quote, Target } from 'lucide-react';
import Container from '../components/ui/Container';
import ScrollReveal from '../components/ui/ScrollReveal';
import Button from '../components/ui/Button';
import { projects } from '../data/portfolio';

const testimonialImages: Record<string, string> = {
  'Dr. Marco Bellini': '/images/testimonials/marco-bellini.png',
  'Laura Martini': '/images/testimonials/laura-martini.png',
  'Andrea Conti': '/images/testimonials/andrea-conti.png',
  'Sara Bianchi': '/images/testimonials/sara-bianchi.png',
  'Chef Alessandro R.': '/images/testimonials/chef-alessandro-r.png',
  'Giuseppe Romano': '/images/testimonials/giuseppe-romano.png',
  'Avv. Federica M.': '/images/testimonials/federica-m.png',
  'Maria G.': '/images/testimonials/maria-g.png',
};

export default function CaseStudyDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  const testimonialImage = testimonialImages[project.testimonial.author];

  return (
    <>
      <section className="pt-32 pb-12 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px] -translate-y-1/2" />
        </div>
        <Container className="relative">
          <ScrollReveal>
            <div className="mb-6">
              <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary mb-4">
                Case Study
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  {project.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
                    {project.service}
                  </span>
                  <span className="text-gray-400">{project.sector}</span>
                </div>
                <p className="text-lg text-gray-400 leading-relaxed">
                  {project.shortDescription}
                </p>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-white/[0.04] border border-white/10">
                <img
                  src={project.imageUrl}
                  alt={`${project.client}, ${project.sector}`}
                  className="h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute left-6 right-6 bottom-6">
                  <div className="inline-flex items-center rounded-full border border-white/15 bg-background/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur mb-3">
                    {project.service}
                  </div>
                  <div className="text-white text-xl font-bold">{project.client}</div>
                  <div className="text-gray-300 text-sm">
                    {project.clientRole || project.testimonial.role} @ {project.title}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="pb-12">
        <Container>
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-8 rounded-2xl border border-white/10 bg-white/[0.02]">
              <div className="text-center">
                <Briefcase className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-sm text-gray-500 mb-1">Settore</div>
                <div className="text-white font-semibold">{project.sector}</div>
              </div>
              <div className="text-center">
                <Target className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-sm text-gray-500 mb-1">Servizio</div>
                <div className="text-white font-semibold">{project.service}</div>
              </div>
              <div className="text-center">
                <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-sm text-gray-500 mb-1">Timeline</div>
                <div className="text-white font-semibold">
                  {project.timeline || 'N/A'}
                </div>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-3 font-bold">
                  ✓
                </div>
                <div className="text-sm text-gray-500 mb-1">Risultato</div>
                <div className="text-white font-semibold">{project.keyResult}</div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-12 bg-white/[0.02]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">La Sfida</h2>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {project.challenge}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">La Soluzione</h2>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {project.solution}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Risultati & Impatto
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.results.map((result, index) => (
                <ScrollReveal key={result.description} delay={index * 0.1}>
                  <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] text-center">
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-4">
                      {result.metric}
                    </div>
                    <div className="text-gray-400 leading-relaxed">
                      {result.description}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-20 bg-white/[0.02]">
        <Container>
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <div className="relative p-8 md:p-12 rounded-2xl border border-white/10 bg-white/[0.02]">
                <Quote className="w-12 h-12 text-primary/20 mb-6" />
                <blockquote className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 italic">
                  "{project.testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-primary/10 border border-white/15 flex-shrink-0">
                    {testimonialImage ? (
                      <img
                        src={testimonialImage}
                        alt={`${project.testimonial.author}, ${project.testimonial.role}`}
                        className="h-full w-full object-cover object-top"
                        loading="lazy"
                      />
                    ) : (
                      <span className="h-full w-full flex items-center justify-center text-xl font-bold text-primary">
                        {project.testimonial.author.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">
                      {project.testimonial.author}
                    </div>
                    <div className="text-gray-500">
                      {project.testimonial.role} @ {project.testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/5" />
        <Container className="relative text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Vuoi Risultati Simili?
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Prenota una consulenza gratuita di 30 minuti. Analizziamo insieme come
              possiamo aiutare il tuo business a crescere.
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
