import { CheckCircle, XCircle, AlertTriangle, ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import ScrollReveal from '../ui/ScrollReveal';
import Button from '../ui/Button';

type CellIconType = 'check' | 'x' | 'warn';

type ComparisonCell = {
  icon: CellIconType;
  text: string;
};

type ComparisonRow = {
  criteria: string;
  agency: ComparisonCell;
  freelancer: ComparisonCell;
  litx: ComparisonCell;
};

type MobileComparisonCell = ComparisonCell & {
  label: string;
  isLitx?: boolean;
};

const rows: ComparisonRow[] = [
  { criteria: 'Tempi di consegna', agency: { icon: 'x', text: '4-8 settimane' }, freelancer: { icon: 'warn', text: '2-4 settimane' }, litx: { icon: 'check', text: '2-3 giorni' } },
  { criteria: 'Costo', agency: { icon: 'x', text: '€3.000-15.000+' }, freelancer: { icon: 'warn', text: '€500-3.000 (variabile)' }, litx: { icon: 'check', text: 'Prezzi fissi trasparenti' } },
  { criteria: 'Sistemi automatici inclusi', agency: { icon: 'x', text: 'Extra a pagamento' }, freelancer: { icon: 'x', text: 'Non specializzato' }, litx: { icon: 'check', text: 'Core del servizio' } },
  { criteria: 'Operatività 24/7', agency: { icon: 'x', text: 'Solo orari ufficio' }, freelancer: { icon: 'x', text: 'Quando è disponibile' }, litx: { icon: 'check', text: 'Sistemi automatici h24' } },
  { criteria: 'Supporto post-consegna', agency: { icon: 'x', text: 'A pagamento' }, freelancer: { icon: 'warn', text: 'Dipende' }, litx: { icon: 'check', text: 'Incluso nel servizio' } },
  { criteria: 'Specializzazione business italiani', agency: { icon: 'warn', text: 'Generalista' }, freelancer: { icon: 'warn', text: 'Varia molto' }, litx: { icon: 'check', text: '100% focus business italiani' } },
  { criteria: 'Risultati misurabili', agency: { icon: 'warn', text: 'Promesse vaghe' }, freelancer: { icon: 'x', text: 'Nessuna garanzia' }, litx: { icon: 'check', text: 'Case study reali' } },
  { criteria: 'Risposta clienti automatica', agency: { icon: 'x', text: 'Raramente inclusa' }, freelancer: { icon: 'x', text: 'Non specializzato' }, litx: { icon: 'check', text: 'Standard in ogni progetto' } },
];

function CellIcon({ type }: { type: CellIconType }) {
  if (type === 'check') return <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />;
  if (type === 'x') return <XCircle className="w-5 h-5 text-gray-600 flex-shrink-0" />;
  return <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0" />;
}

export default function ComparisonSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-white/[0.01]" />
      <Container>
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">Confronto</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Perché i Business Italiani Scelgono Noi —{' '}
              <span className="gradient-text">e Non Si Pentono Mai</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Un confronto onesto. Decidi tu.</p>
          </div>
        </ScrollReveal>

        {/* Desktop table */}
        <ScrollReveal delay={100}>
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-4 px-4 text-gray-500 text-sm font-medium w-[28%]">Criterio</th>
                  <th className="py-4 px-4 w-[24%]">
                    <div className="bg-white/[0.02] border border-white/5 rounded-xl py-3 px-4 text-center">
                      <div className="text-sm font-semibold text-gray-400">Agenzia Tradizionale</div>
                      <div className="text-xs text-gray-600 mt-1">Lenta & costosa</div>
                    </div>
                  </th>
                  <th className="py-4 px-4 w-[24%]">
                    <div className="bg-white/[0.02] border border-white/5 rounded-xl py-3 px-4 text-center">
                      <div className="text-sm font-semibold text-gray-400">Freelancer</div>
                      <div className="text-xs text-gray-600 mt-1">Imprevedibile</div>
                    </div>
                  </th>
                  <th className="py-4 px-4 w-[24%]">
                    <div className="bg-primary/10 border-2 border-primary/40 rounded-xl py-3 px-4 text-center relative">
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                        Scelto da 200+ business italiani
                      </div>
                      <div className="text-sm font-bold text-white">LitX Media</div>
                      <div className="text-xs text-primary mt-1 font-medium">La scelta smart</div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={row.criteria} className={`border-t border-white/5 ${i % 2 === 0 ? 'bg-white/[0.01]' : ''}`}>
                    <td className="py-4 px-4 text-sm text-gray-300 font-medium">{row.criteria}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2 justify-center">
                        <CellIcon type={row.agency.icon} />
                        <span className="text-sm text-gray-500">{row.agency.text}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2 justify-center">
                        <CellIcon type={row.freelancer.icon} />
                        <span className="text-sm text-gray-500">{row.freelancer.text}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 bg-primary/5 border-x border-primary/10">
                      <div className="flex items-center gap-2 justify-center">
                        <CellIcon type={row.litx.icon} />
                        <span className="text-sm text-white font-semibold">{row.litx.text}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>

        {/* Mobile card stack */}
        <div className="md:hidden space-y-4">
          {rows.map((row, i) => (
            <ScrollReveal key={row.criteria} delay={i * 60}>
              <div className="bg-white/[0.02] border border-white/8 rounded-2xl p-5">
                <div className="text-sm font-bold text-white mb-4">{row.criteria}</div>
                <div className="space-y-2">
                  {([
                    { label: 'Agenzia', ...row.agency },
                    { label: 'Freelancer', ...row.freelancer },
                    { label: 'LitX Media', ...row.litx, isLitx: true },
                  ] satisfies MobileComparisonCell[]).map((col) => (
                    <div key={col.label} className={`flex items-center gap-3 p-3 rounded-xl ${col.isLitx ? 'bg-primary/10 border border-primary/20' : 'bg-white/[0.01]'}`}>
                      <CellIcon type={col.icon} />
                      <div>
                        <div className={`text-xs font-semibold ${col.isLitx ? 'text-primary' : 'text-gray-500'}`}>{col.label}</div>
                        <div className={`text-sm ${col.isLitx ? 'text-white font-medium' : 'text-gray-400'}`}>{col.text}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={300}>
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-6 text-sm">
              Oltre <span className="text-white font-semibold">200 business italiani</span> hanno già scelto LitX Media rispetto alle agenzie tradizionali.
            </p>
            <Button variant="primary" size="lg" to="/contatti">
              Scopri Perché 200+ Business Italiani Hanno Scelto LitX Media
              <ArrowRight className="w-5 h-5" />
            </Button>
            <p className="text-xs text-gray-600 mt-3">✓ Consulenza gratuita · ✓ Nessun impegno · ✓ Risposta in 24h</p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
