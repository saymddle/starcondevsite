import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import CTA from "@/components/CTA";

const clientCategories = [
  {
    title: "Property, Development, And Institutional",
    items: [
      "Miles Property Management Company",
      "First Merit Venture",
      "Alan Ives Construction Co., LLC",
      "Atlanta Public School System",
      "Alliance Property Management Company",
      "Brencor Asset Management",
      "The Victory Group",
      "Lincoln Property Company",
      "Kaplan Property Management",
      "Community Action for Improvement (Head Start Program)",
      "Aramark Food Service",
      "Georgia Department of Family Services",
      "Metro Housing Connection, Inc.",
      "Atlanta Center for Homeownership",
      "Point East Development",
      "Specialist Strategic Management Partners",
    ],
  },
  {
    title: "Community And Specialty Organizations",
    items: [
      "Bottles & Booties Daycare",
      "A Mother's Answer Daycare",
      "New Creation Baptist Church",
      "Synergy Enterprises, LLC",
    ],
  },
  {
    title: "Influential Clientele",
    items: [
      "Evander Holyfield (Pro-Boxer)",
      "The Late Richard Pryor (Entertainer)",
      "Bobby Brown (Entertainer)",
      "Lonnie Smith (Athlete)",
      "Kingsley Gardner (Song Writer)",
      "Brick House Records (Entertainment Company)",
    ],
  },
  {
    title: "Residential And Commercial Projects",
    items: [
      'Turner Field (Cash Room) "Home of the Atlanta Braves" (GA)',
      "Southmoor Hills Apartment Complex (WV)",
      "Ballentyne Resort Subdivision (NC)",
      "Highland Place Apartment Complex (GA)",
      "Bethany Woods Subdivision (GA)",
      "Hidden Villas Apartments (GA)",
      "37 Treeview Apartments (GA)",
      "The Reserve at Windy Hills (GA)",
      "Hunter's Bay Apartment Complex (GA)",
      "Village Estates at Cascade Townhomes (GA)",
      "Victory Landing Townhomes (GA)",
      "Sweetwater Brooks Subdivision (GA)",
      "Highland Run East Apartment Homes (GA)",
      "Quin Ridge Subdivision (GA)",
      "Ansley Forest Apartment (GA)",
      "Colony at Stone Mountain (GA)",
      "Inner City of Atlanta (GA)",
      "Surrounding Cities of Atlanta (GA)",
      "Sugar Hill Overlook (GA)",
      "Longwood Vista (GA)",
      "Atlanta Public Schools (GA)",
      "West Hunter Street Baptist Church (GA)",
    ],
  },
];

export default function ClientsPage() {
  return (
    <>
      <Section>
        <Container>
          <div className="max-w-3xl space-y-6">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">
              Clients
            </p>
            <h1 className="font-heading text-5xl font-black uppercase leading-tight md:text-7xl">
              Clients across property, public, and private sectors.
            </h1>
            <p className="text-lg text-accent">
              Our work spans institutional clients, property and development
              groups, community organizations, influential private clientele,
              and residential and commercial project portfolios across multiple
              states.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {clientCategories.map((category) => (
              <Card key={category.title}>
                <h2 className="font-heading text-2xl font-bold uppercase">
                  {category.title}
                </h2>
                <ul className="mt-6 space-y-3 text-accent">
                  {category.items.map((item) => (
                    <li key={item} className="border-t border-text/10 pt-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
      <CTA />
    </>
  );
}
