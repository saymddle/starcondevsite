import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function ContactPage() {
  return (
    <Section>
      <Container>
        <div className="grid gap-16 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">
                Contact
              </p>
              <h1 className="font-heading text-5xl font-black leading-tight md:text-6xl">
                Start a project.
              </h1>
            </div>

            <div className="space-y-6 text-lg leading-relaxed">
              <p className="font-semibold text-text">
                Share the project scope, timeline, and site context. We will
                review it and respond with the right next step.
              </p>
              <div className="space-y-2 text-accent">
                <p>info@starconstructiondevelopment.com</p>
                <p>+1-404-286-3004 | +1-404-552-0964</p>
                <p>
                  4319 Covington Highway, Suite 305
                  <br />
                  Decatur, Georgia 30035
                </p>
              </div>
            </div>
          </div>

          <form className="rounded-[28px] border border-text/10 bg-white p-8 shadow-sm">
            <div className="grid gap-6">
              <div className="grid gap-6 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-text">
                  First Name
                  <input
                    type="text"
                    name="firstName"
                    required
                    className="h-14 border border-stone-300 bg-background px-4 text-base outline-none transition focus:border-text"
                  />
                </label>

                <label className="grid gap-2 text-sm font-semibold text-text">
                  Last Name
                  <input
                    type="text"
                    name="lastName"
                    required
                    className="h-14 border border-stone-300 bg-background px-4 text-base outline-none transition focus:border-text"
                  />
                </label>
              </div>

              <label className="grid gap-2 text-sm font-semibold text-text">
                Email
                <input
                  type="email"
                  name="email"
                  required
                  className="h-14 border border-stone-300 bg-background px-4 text-base outline-none transition focus:border-text"
                />
              </label>

              <label className="grid gap-2 text-sm font-semibold text-text">
                Phone
                <input
                  type="tel"
                  name="phone"
                  className="h-14 border border-stone-300 bg-background px-4 text-base outline-none transition focus:border-text"
                />
              </label>

              <label className="grid gap-2 text-sm font-semibold text-text">
                Project Type
                <input
                  type="text"
                  name="projectType"
                  placeholder="Residential, commercial, civil, interior, etc."
                  className="h-14 border border-stone-300 bg-background px-4 text-base outline-none transition placeholder:text-accent focus:border-text"
                />
              </label>

              <label className="grid gap-2 text-sm font-semibold text-text">
                Project Information
                <textarea
                  name="projectInfo"
                  required
                  rows={7}
                  className="resize-none border border-stone-300 bg-background px-4 py-4 text-base outline-none transition focus:border-text"
                  placeholder="Tell us about the scope, location, timeline, and priorities."
                />
              </label>

              <div>
                <Button type="submit">Submit Project Info</Button>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </Section>
  );
}
