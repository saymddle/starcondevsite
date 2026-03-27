import Container from "./ui/Container";

export default function Hero() {
  return (
    <section className="flex min-h-[calc(78vh-5rem)] items-start pt-12 pb-20">
      <Container>
        <div className="flex items-start gap-6">
          <div className="h-24 w-1 bg-primary" />

          <div>
            <h1 className="font-heading text-5xl font-black uppercase leading-tight md:text-7xl">
              Build with force.
              <br />
              Deliver with discipline.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-accent">
              Full-service construction, civil engineering, and development
              built on precision and experience.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
