import Container from "./ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-text py-10">
      <Container>
        <div className="flex flex-col gap-4 text-sm uppercase tracking-[0.2em] md:flex-row md:items-center md:justify-between">
          <p className="font-heading font-bold">STAR Construction</p>
          <p className="text-accent">Construction. Engineering. Development.</p>
        </div>
      </Container>
    </footer>
  );
}
