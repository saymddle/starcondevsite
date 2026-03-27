import Container from "./ui/Container";
import Section from "./ui/Section";
import ImageCard from "./ui/ImageCard";

export default function FeaturedWork() {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <ImageCard src="/residential.svg" label="Residential" />
          <ImageCard src="/interior.svg" label="Interior" />
          <ImageCard src="/commercial.svg" label="Commercial" />
        </div>
      </Container>
    </Section>
  );
}
