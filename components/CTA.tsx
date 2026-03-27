import Container from "./ui/Container";
import Button from "./ui/Button";

export default function CTA() {
  return (
    <section className="py-24 text-center">
      <Container>
        <h2 className="mb-8 font-heading text-4xl font-black uppercase">
          Start the next build.
          <br />
          Bring a project with weight.
        </h2>

        <Button href="/contact">Contact the Team</Button>
      </Container>
    </section>
  );
}
