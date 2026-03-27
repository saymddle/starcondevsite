import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import CTA from "@/components/CTA";

export default function AboutPage() {
  return (
    <>
      <Section>
        <Container>
          <div className="max-w-4xl space-y-6">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">
              About
            </p>
            <h1 className="font-heading text-5xl font-black uppercase leading-tight md:text-7xl">
              Construction, engineering, and development with range.
            </h1>
            <p className="text-lg text-accent">
              Star Construction & Development, Inc. provides full-service
              general contracting, civil engineering, and infrastructure
              development services. From residential improvements to large-scale
              commercial and municipal projects, the work is built on dependable
              execution backed by decades of experience.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <Card>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">
                Company
              </p>
              <div className="mt-6 space-y-4 text-accent">
                <p>
                  Star Construction & Development, Inc. is a full-service
                  general contracting company licensed to conduct building and
                  development across the many jurisdictions in which we work.
                </p>
                <p>
                  Since 2011, we have helped companies, organizations, and
                  individuals complete construction and development projects of
                  all magnitudes. Our resume ranges from a simple roof leak
                  patch to complete site development and new construction of
                  commercial facilities.
                </p>
                <p>
                  Since the company&apos;s founding, our work has taken us
                  throughout Georgia, Florida, Alabama, South Carolina, North
                  Carolina, New Jersey, Ohio, and West Virginia.
                </p>
              </div>
            </Card>

            <Card>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">
                Leadership
              </p>
              <div className="mt-6 space-y-4 text-accent">
                <p>
                  Chris Tzeg, the Owner and President of Star Construction &
                  Development, Inc., has been in the construction field for
                  over 30 years. With a formal background in civil engineering,
                  Chris brings expertise across all major construction trades.
                </p>
                <p>
                  Under his personal guidance, our team of project managers and
                  tradesmen is capable of handling demanding project scopes.
                </p>
                <p>
                  Ian A. Narine serves as Director of Highway/Road Engineering
                  and business partner to Mr. Tzeg, bringing extensive
                  experience in roadway design, transportation infrastructure,
                  and civil engineering project management.
                </p>
              </div>
            </Card>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
            <Card>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">
                Capability
              </p>
              <p className="mt-6 text-accent">
                Ian&apos;s technical insight and commitment to precision enhance
                our ability to deliver safe, efficient, and compliant roadway
                solutions for municipalities, private developers, and state
                level agencies. His leadership expands our capacity to manage
                complex infrastructure projects while maintaining the standards
                Star Construction & Development, Inc. is known for.
              </p>
            </Card>

            <Card>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">
                Standards
              </p>
              <div className="mt-6 space-y-4 text-accent">
                <p>
                  Star Construction & Development, Inc. is a first-class
                  Minority Business Enterprise (MBE) with the Atlanta Public
                  School System, a member of the Atlanta Apartment Association,
                  and a proud contributor to the local community.
                </p>
                <p>
                  We are also honored to uphold the principles of the Better
                  Business Bureau. We have the staff, tools, and means to meet
                  your standards.
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </Section>
      <CTA />
    </>
  );
}
