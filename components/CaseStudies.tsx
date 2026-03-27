import Container from "./ui/Container";
import Section from "./ui/Section";

export default function CaseStudies() {
  const items = [
    "Residential Development",
    "Interior Finish Program",
    "Commercial Development",
  ];

  return (
    <Section>
      <Container>
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((title) => (
            <div
              key={title}
              className="group border border-text p-6 transition hover:-translate-y-1"
            >
              <h3 className="mb-4 font-heading font-bold uppercase">{title}</h3>
              <div className="grid grid-cols-3 gap-2">
                <div className="aspect-square bg-stone-200" />
                <div className="aspect-square bg-stone-200" />
                <div className="aspect-square bg-stone-200" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
