import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project } from '../../data/portfolio';

interface ProjectCardProps {
  project: Project;
}

const serviceColors = {
  chatbot: 'bg-primary/10 text-primary border-primary/20',
  website: 'bg-secondary/10 text-secondary border-secondary/20',
  automation: 'bg-accent/10 text-accent border-accent/20',
  reviews: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      to={`/portfolio/${project.slug}`}
      className="group block rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300"
    >
      <div className="relative aspect-video overflow-hidden border-b border-white/10 bg-white/[0.04]">
        <img
          src={project.imageUrl}
          alt={`${project.client}, ${project.sector}`}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
        <div className="absolute left-4 right-4 bottom-4 flex items-end justify-between gap-3">
          <div>
            <div className="text-white font-semibold text-sm">{project.client}</div>
            <div className="text-gray-300 text-xs">{project.sector}</div>
          </div>
          <span className="rounded-lg border border-white/15 bg-background/70 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
            {project.timeline}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full border ${
              serviceColors[project.serviceType]
            }`}
          >
            {project.service}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          {project.shortDescription}
        </p>

        <div className="flex items-center justify-between">
          <div>
            <div className="text-primary font-bold text-lg">
              {project.keyResult}
            </div>
            <div className="text-xs text-gray-500">Risultato chiave</div>
          </div>

          <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
            <span className="text-sm font-semibold">Vedi Case Study</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}
