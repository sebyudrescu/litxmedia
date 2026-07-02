import HeroSection from '../components/sections/HeroSection';
import SocialProofBar from '../components/sections/SocialProofBar';
import PASSection from '../components/sections/PASSection';
import ServicesOverview from '../components/sections/ServicesOverview';
import OutcomesSection from '../components/sections/OutcomesSection';
import HowItWorks from '../components/sections/HowItWorks';
import ComparisonSection from '../components/sections/ComparisonSection';
import WallOfLove from '../components/sections/WallOfLove';
import SectorsSection from '../components/sections/SectorsSection';
import TrustBadges from '../components/sections/TrustBadges';
import CloserSection from '../components/sections/CloserSection';

export default function HomePage() {
  return (
    <>
      {/* 1. HERO — Outcome headline + social proof + visual + FUD removers */}
      <HeroSection />

      {/* 2. SOCIAL PROOF BAR — Stats immediati */}
      <SocialProofBar />

      {/* 3. PAS — Pain-Agitate-Solve: specchio del dolore del cliente */}
      <PASSection />

      {/* 4. SERVICES — Moduli del sistema AI */}
      <ServicesOverview />

      {/* 5. OUTCOMES — 3 macro dream outcomes (non servizi tecnici) */}
      <OutcomesSection />

      {/* 6. HOW IT WORKS — Processo semplice in 5 step */}
      <HowItWorks />

      {/* 7. COMPARISON — LitX Media vs Agenzia vs Freelancer */}
      <ComparisonSection />

      {/* 8. WALL OF LOVE — Tutte le testimonianze con risultati reali */}
      <WallOfLove />

      {/* 9. SECTORS — Settori serviti */}
      <SectorsSection />

      {/* 10. TRUST BADGES — Garanzie finali */}
      <TrustBadges />

      {/* 11. CLOSER — Mini-hero finale per chi è arrivato in fondo */}
      <CloserSection />
    </>
  );
}
