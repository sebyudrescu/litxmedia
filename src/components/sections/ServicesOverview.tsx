import { Bot, PhoneCall, MessageSquare, Workflow, RotateCcw, Globe2 } from 'lucide-react';
import Container from '../ui/Container';
import ScrollReveal from '../ui/ScrollReveal';

const modules = [
  {
    icon: PhoneCall,
    title: 'AI Phone Callers',
    status: 'ACTIVE MODULE',
    copy: 'Voice agents that qualify, answer and route high-intent calls instantly.',
  },
  {
    icon: MessageSquare,
    title: 'AI Chatbots',
    status: 'RESPONSE LAYER',
    copy: 'Website and WhatsApp conversations that capture leads while intent is hot.',
  },
  {
    icon: Workflow,
    title: 'CRM Automations',
    status: 'PIPELINE LOGIC',
    copy: 'Follow-ups, reminders and lead stages moving without manual chasing.',
  },
  {
    icon: Bot,
    title: 'Missed Call Text Back',
    status: 'RECOVERY SIGNAL',
    copy: 'Every unanswered call triggers a fast reply before the opportunity goes cold.',
  },
  {
    icon: RotateCcw,
    title: 'Lead Reactivation',
    status: 'REVENUE LOOP',
    copy: 'Old contacts get sequenced back into conversations, bookings and sales.',
  },
  {
    icon: Globe2,
    title: 'AI Websites',
    status: 'CONVERSION SURFACE',
    copy: 'Premium pages built to convert traffic into conversations and booked calls.',
  },
];

export default function ServicesOverview() {
  return (
    <section className="ai-modules-section relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,209,255,0.08),transparent_32%)]" />
      <Container className="relative">
        <ScrollReveal>
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.32em] text-secondary/75">AI system modules</span>
            <h2 className="text-3xl font-bold leading-tight tracking-[-0.035em] text-white md:text-5xl">
              The neural head introduces the system. <span className="gradient-text">These are the modules that run it.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-gray-400">
              Short, focused automations connected around one goal: remove response delay and turn intent into revenue.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <ScrollReveal key={module.title} delay={index * 90}>
                <div className="ai-module-card system-module-card group h-full rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-[5px] hover:border-secondary/40 hover:bg-white/[0.055]">
                  <div className="mb-7 flex items-start justify-between">
                    <div className="system-icon relative flex h-12 w-12 items-center justify-center rounded-2xl border border-secondary/20 bg-secondary/10 shadow-[0_0_32px_rgba(0,209,255,0.08)] transition-all duration-300 group-hover:border-secondary/45 group-hover:shadow-[0_0_42px_rgba(0,209,255,0.18)]">
                      <span className="status-pulse-dot absolute -right-1 -top-1" />
                      <Icon className="h-5 w-5 text-secondary transition-all duration-300 group-hover:text-white" />
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-gray-500 transition-colors duration-300 group-hover:text-secondary/80">
                      {module.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{module.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-gray-500">{module.copy}</p>
                  <div className="mt-7 h-px w-full bg-gradient-to-r from-secondary/0 via-secondary/25 to-primary/0 opacity-45 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
