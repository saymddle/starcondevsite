import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import CTA from "@/components/CTA";

const steps = [
  {
    title: "Define",
    text: "Scope, constraints, and responsibilities are set before work starts.",
  },
  {
    title: "Coordinate",
    text: "Design, engineering, and field execution stay aligned through each phase.",
  },
  {
    title: "Deliver",
    text: "Projects move with disciplined oversight, reporting, and finishing standards.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <Section>
        <Container>
          <div className="max-w-3xl space-y-6">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">
              Process
            </p>
            <h1 className="font-heading text-5xl font-black uppercase leading-tight md:text-7xl">
              Work that moves from plan to site without drift.
            </h1>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <Card key={step.title}>
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">
                  {step.title}
                </p>
                <p className="mt-6 text-accent">{step.text}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
      <CTA />
    </>
  );
}
