import Container from "./ui/Container";
import Section from "./ui/Section";
import Card from "./ui/Card";

export default function AboutPreview() {
  return (
    <Section>
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">
              About
            </p>
            <h1 className="font-heading text-5xl font-black uppercase leading-tight md:text-7xl">
              Full-service contracting with engineering depth.
            </h1>
            <p className="max-w-2xl text-lg text-accent">
              Star Construction & Development, Inc. provides full-service
              general contracting, civil engineering, and infrastructure
              development services across residential, commercial, and
              municipal work.
            </p>
          </div>
          <Card>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">
              Why Star
            </p>
            <p className="mt-6 text-accent">
              Since 2011, we have delivered projects of every scale, from small
              repairs to complete site development and new commercial
              construction, with experience that spans multiple states and
              jurisdictions.
            </p>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
