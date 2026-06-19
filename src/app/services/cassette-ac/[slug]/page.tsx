import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { faqSchema, serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { CASSETTE_AC_SERVICES } from "@/lib/data/services";
import ServicePageTemplate from "@/components/ServicePageTemplate";

interface Props {
  params: Promise<{ slug: string }>;
}

const SERVICE_CONTENT: Record<string, {
  heroSubtitle: string;
  description: string;
  benefits: string[];
  commonProblems?: string[];
  process?: { step: number; title: string; desc: string }[];
  faqs?: { question: string; answer: string }[];
  relatedSlugs?: string[];
}> = {
  installation: {
    heroSubtitle: "Professional ceiling-mounted cassette AC installation. Accurate leveling, secure anchor mounting, and seamless drain slope adjustment.",
    description: "Ceiling cassette AC units require specialized installation due to their integration with ceiling tiles and gravity-drain piping. RSG Refrigeration's technicians perform complete ceiling-recessed mounting, ducting, copper pipings, and drain testing. We ensure zero vibration noise, correct aesthetic alignment, and optimum refrigeration cycle commissioning. All installations come with a 90-day service warranty.",
    benefits: [
      "Precise center-ceiling alignment and height leveling",
      "Robust threaded-rod suspension system for zero vibration",
      "High-lift built-in drain pump testing",
      "Aesthetic panel alignment with grid ceilings",
      "Premium copper pipe insulation to prevent ceiling sweat",
      "90-day warranty on workmanship",
    ],
    process: [
      { step: 1, title: "Ceiling Layout", desc: "Mark coordinates on the ceiling grid to align with structural supports and airflow needs." },
      { step: 2, title: "Suspension Anchor Installation", desc: "Drill concrete slab, insert anchor bolts, and hang threaded steel rods." },
      { step: 3, title: "Dismounting/Recessing AC", desc: "Lift and secure the cassette main body onto the rods, ensuring precise leveling." },
      { step: 4, title: "Piping & Drain Hookup", desc: "Install copper refrigerant lines, insulation, and test drain slope/built-in pump." },
      { step: 5, title: "Decorative Panel Mounting", desc: "Fix the air inlet/outlet faceplate flush with the false ceiling tiles." },
    ],
    faqs: [
      { question: "How much ceiling height is required for a cassette AC?", answer: "Typically, a false ceiling depth of 10 to 12 inches is required to accommodate the recessed depth of the cassette AC main chassis." },
      { question: "Are cassette ACs suitable for residential dining halls?", answer: "Yes, they are highly popular in large living or dining areas as they distribute air in 4 directions and save wall space." },
    ],
    relatedSlugs: ["service", "repair", "amc"],
  },
  uninstallation: {
    heroSubtitle: "Safe dismounting and recovery of cassette AC systems. Protects ceiling aesthetics and recovers gas safely.",
    description: "Safely uninstalling a ceiling cassette AC requires isolations of power, careful pump-down of refrigerant gas, and structured dismounting of the heavy recessed indoor chassis. RSG Refrigeration ensures zero ceiling damage, clean removal, and proper capping of all copper lines. Ideal for office relocations and shop renovations.",
    benefits: [
      "Complete refrigerant gas pump-down and recovery",
      "Zero impact on existing ceiling grids and tiles",
      "Proper insulation wrapping and pipe capping",
      "Same-day, fast commercial service",
    ],
    process: [
      { step: 1, title: "Gas Pump Down", desc: "Run the compressor and isolate the refrigerant into the outdoor unit." },
      { step: 2, title: "Panel Removal", desc: "Carefully detach the air intake panel and swing louvers." },
      { step: 3, title: "Electrical & Pipe Separation", desc: "Disconnect communication cables, high-voltage power, copper flare joints, and drain lines." },
      { step: 4, title: "Dismounting Chassis", desc: "Slowly lower the heavy central unit from its threaded suspension hangers." },
    ],
    faqs: [
      { question: "Do you cover the ceiling hole after uninstallation?", answer: "We dismount the AC and suspension rods. Capping or patching the ceiling tile is typically handled by interior/gypsum contractors, but we ensure zero damage to surrounding tiles." },
    ],
    relatedSlugs: ["installation", "service"],
  },
  service: {
    heroSubtitle: "Thorough cassette AC servicing. Deep cleaning of the 3D spiral fan, drain pan, and 4-way louvers.",
    description: "Due to their horizontal orientation, cassette ACs collect mold, dust, and biofilm in their deep condensate drain trays. Our service includes lowering the panel, deep chemical/foam spraying of the evaporator coil, cleaning the condensate pump, flushing the drain lines, and high-pressure cleaning of the outdoor condenser. Regular servicing keeps commercial spaces cool and hygienic.",
    benefits: [
      "4-way louvers and grille deep cleaning",
      "Built-in condensate tray disinfection and pump wash",
      "Air filter dust-removal and antibacterial spray",
      "Airflow direction check and swing motor test",
      "Energy consumption drop by 15-20%",
    ],
    process: [
      { step: 1, title: "Lowering Grille & Panel", desc: "Remove the decorative panel to access the internal blower and coil." },
      { step: 2, title: "Coil Masking & Washing", desc: "Cover electronics and apply foam cleaner to the circular evaporator coil, followed by pressurized wash." },
      { step: 3, title: "Drain Pan Scrubbing", desc: "Clean sludge and algae from the condensate tray and inspect the drain pump filter." },
      { step: 4, title: "Outdoor Condenser Clean", desc: "Jet wash the outdoor unit to maximize heat rejection." },
    ],
    faqs: [
      { question: "How often should commercial cassette ACs be serviced?", answer: "For office spaces, we recommend servicing every 3 months. For hotels and restaurants, bi-monthly servicing is ideal due to continuous running and oil vapor exposure." },
    ],
    relatedSlugs: ["repair", "gas-charging", "amc"],
  },
  repair: {
    heroSubtitle: "Expert troubleshooting for all cassette AC problems. Quick fixes for drain pump errors, fan issues, and PCB faults.",
    description: "Is your cassette AC showing error codes, leaking water onto office tables, or failing to blow air? RSG Refrigeration's technicians are specialists in resolving cassette-specific issues like condensate lift pump failures, fan motor bearing sounds, control board communication faults, and inverter compressor failures.",
    benefits: [
      "Specialist diagnostic testing of condensate pump and float switches",
      "Original multi-brand replacement parts (Daikin, Carrier, LG, etc.)",
      "Upfront transparent quote before repairs",
      "90-day service warranty",
    ],
    commonProblems: [
      "Water dripping directly from the ceiling pane (drain pump/float failure)",
      "AC turning off with blinking LED error codes",
      "Loud vibrating noise from the ceiling (unbalanced blower fan)",
      "Louvers stuck in one position or swing motor failure",
    ],
    process: [
      { step: 1, title: "Error Diagnostics", desc: "Read motherboard error codes or perform manual testing of components." },
      { step: 2, title: "Drain Pump Test", desc: "Check voltage input and water lift capacity of the internal pump." },
      { step: 3, title: "Component Fix", desc: "Replace faulty sensors, fan motors, pumps, or repair control board on-site." },
      { step: 4, title: "Leakage & Operational Test", desc: "Fill the drain pan manually to trigger the float switch and verify smooth operations." },
    ],
    faqs: [
      { question: "Why is water dripping from the center of my cassette AC?", answer: "This is usually caused by a blocked drain line, a failed condensate lift pump, or a stuck float switch. We can repair or replace these parts quickly." },
    ],
    relatedSlugs: ["service", "gas-charging", "amc"],
  },
  "gas-charging": {
    heroSubtitle: "Refrigerant recharge (R32, R410A, R22) for cassette ACs. Includes leak detection and full vacuum pull-down.",
    description: "Low gas levels in cassette ACs cause freezing of the ceiling coil, resulting in dripping water and reduced cooling. RSG Refrigeration provides professional gas charging with precise weights using electronic scales. We perform nitrogen pressure testing to locate leakages before charging, ensuring a long-lasting cooling effect.",
    benefits: [
      "Nitrogen leak pressure testing included",
      "High vacuum process to remove humidity",
      "Digital weight scale gas charging for factory precision",
      "Compatible with R32, R410A, and R22 refrigerants",
    ],
    process: [
      { step: 1, title: "Pressure Check", desc: "Measure standing and suction pressures of the refrigerant line." },
      { step: 2, title: "Leak Search", desc: "Locate joint cracks using soap solution or electronic detectors." },
      { step: 3, title: "Evacuation", desc: "Connect vacuum pump to remove moisture and air pockets from lines." },
      { step: 4, title: "Gas Refill", desc: "Refill refrigerant under correct weight metrics and test output temperatures." },
    ],
    faqs: [
      { question: "How long does a cassette AC gas charge last?", answer: "If there are no leaks in the piping, refrigerant lasts for years. We always recommend fixing leaks before adding gas." },
    ],
    relatedSlugs: ["repair", "service"],
  },
  amc: {
    heroSubtitle: "Annual maintenance contracts for residential and commercial cassette AC units. Keep your system running smoothly.",
    description: "Avoid costly sudden breakdowns in your business. RSG Refrigeration's AMC plan for cassette ACs includes scheduled filter cleaning, chemical washes, electrical inspection, and priority response. Maintain a cool environment for your employees and customers all year.",
    benefits: [
      "Scheduled preventive maintenance visits",
      "Discounted rates on spare parts and labor",
      "Priority priority response time under 4 hours",
      "Extended equipment lifespan",
    ],
    process: [
      { step: 1, title: "Assessment", desc: "Audit and register all cassette units in your facility." },
      { step: 2, title: "First Visit", desc: "Perform deep cleaning and log all running currents and pressures." },
      { step: 3, title: "Quarterly Cleanups", desc: "Clean filters, inspect drain pans, and test built-in pumps." },
      { step: 4, title: "Emergency Support", desc: "Call anytime for priority dispatch during unexpected breakdowns." },
    ],
    faqs: [
      { question: "Do you offer AMC for corporate offices?", answer: "Yes, we support commercial establishments, IT parks, retail shops, and villas across Hyderabad with tailored AMC solutions." },
    ],
    relatedSlugs: ["service", "repair", "gas-charging"],
  },
};

export async function generateStaticParams() {
  return CASSETTE_AC_SERVICES.map((svc) => ({ slug: svc.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = CASSETTE_AC_SERVICES.find((s) => s.slug === slug);
  if (!service) return {};

  return generatePageMetadata({
    title: `${service.title} in Hyderabad — RSG Refrigeration`,
    description: `Professional ${service.title.toLowerCase()} in Hyderabad. ${service.description.slice(0, 120)}... Call RSG Refrigeration: 7815901302.`,
    path: `/services/cassette-ac/${slug}`,
    keywords: service.keywords,
  });
}

export default async function CassetteACServicePage({ params }: Props) {
  const { slug } = await params;
  const service = CASSETTE_AC_SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const content = SERVICE_CONTENT[slug];
  if (!content) notFound();

  const breadcrumbs = [
    { name: "Services", href: "/services" },
    { name: "Cassette AC", href: "/services/cassette-ac" },
    { name: service.title, href: `/services/cassette-ac/${slug}` },
  ];

  const relatedServices = content.relatedSlugs?.map((s) => {
    const rel = CASSETTE_AC_SERVICES.find((svc) => svc.slug === s);
    return rel ? { title: rel.title, slug: s } : null;
  }).filter(Boolean) as { title: string; slug: string }[];

  const schemaData = [
    serviceSchema(service.title, service.description, `/services/cassette-ac/${slug}`, service.priceRange),
    breadcrumbSchema([
      { name: "Services", url: "/services" },
      { name: "Cassette AC", url: "/services/cassette-ac" },
      { name: service.title, url: `/services/cassette-ac/${slug}` },
    ]),
    ...(content.faqs ? [faqSchema(content.faqs)] : []),
  ];

  return (
    <>
      {schemaData.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <ServicePageTemplate
        title={service.title}
        breadcrumbs={breadcrumbs}
        description={content.description}
        heroSubtitle={content.heroSubtitle}
        benefits={content.benefits}
        commonProblems={content.commonProblems}
        process={content.process}
        priceRange={service.priceRange}
        duration={service.duration}
        faqs={content.faqs}
        relatedServices={relatedServices}
        category="Cassette AC Services"
        categorySlug="cassette-ac"
      />
    </>
  );
}
