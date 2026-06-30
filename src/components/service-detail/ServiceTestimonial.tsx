import { Star } from 'lucide-react';
import Container from '../ui/Container';

interface ServiceTestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  imageUrl?: string;
}

export default function ServiceTestimonial({
  quote,
  author,
  role,
  company,
  imageUrl,
}: ServiceTestimonialProps) {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-primary/5 via-white/[0.02] to-secondary/5 border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr]">
              {imageUrl && (
                <div className="relative min-h-[280px] md:min-h-full bg-white/[0.04]">
                  <img
                    src={imageUrl}
                    alt={`${author}, ${role}`}
                    className="absolute inset-0 h-full w-full object-cover object-top"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-background/25" />
                </div>
              )}

              <div className="p-8 md:p-12">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-8">
                  "{quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  {imageUrl && (
                    <div className="w-14 h-14 rounded-full overflow-hidden border border-white/15 bg-white/[0.04] flex-shrink-0 md:hidden">
                      <img src={imageUrl} alt="" className="h-full w-full object-cover object-top" loading="lazy" />
                    </div>
                  )}
                  <div>
                    <div className="font-bold text-white text-lg">{author}</div>
                    <div className="text-gray-400">
                      {role} @ {company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
