import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import ServiceCard from '../ui/ServiceCard';
import { services } from '../../data/services';

export default function ServicesOverview() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          label="Servizi"
          title="Soluzioni Digitali per Far Crescere il Tuo Business"
          subtitle="Dalla creazione di siti web professionali alle automazioni intelligenti, aiutiamo le aziende a risparmiare tempo e aumentare clienti."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          {services.slice(3).map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index + 3} />
          ))}
        </div>
      </Container>
    </section>
  );
}
