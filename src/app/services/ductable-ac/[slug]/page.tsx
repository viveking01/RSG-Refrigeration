import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { faqSchema, serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { DUCTABLE_AC_SERVICES } from "@/lib/data/services";
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
    heroSubtitle: "Expert central ductable AC system installation. Custom sheet-metal ductwork, insulation, dampers, and air grilles placement.",
    description: "Installing central ductable AC units requires rigorous duct design, static pressure calculation, air balancing, and robust structural supports. RSG Refrigeration's HVAC engineers plan duct layouts to ensure uniform airflow without dead zones. We install acoustic liners, thermal insulation, motorized/manual volume control dampers, and linear/supply grilles. All installations are backed by our engineering quality standard and warranty.",
    benefits: [
      "Precise CFM calculations for uniform air distribution",
      "High-grade galvanized iron (GI) or pre-insulated duct fabrication",
      "Acoustic insulation to minimize indoor unit blower hum",
      "Correct static pressure and refrigerant charge balance",
      "90-day service warranty",
    ],
    process: [
      { step: 1, title: "Heat Load Analysis", desc: "Calculate room tonnage, CFM requirements, and design the duct layout blueprint." },
      { step: 2, title: "Duct Fabrication & Haging", desc: "Fabricate sheet metal ducts, wrap with thermal insulation, and suspend from slab." },
      { step: 3, title: "Indoor Fan Coil Unit (FCU) Mounting", desc: "Mount the heavy FCU in the designated utility area or false ceiling slot." },
      { step: 4, title: "Dampers & Diffusers Alignment", desc: "Install dampers, connect ducts to plenum, and set up air grilles/diffusers." },
      { step: 5, title: "Outdoor Connection & Commissioning", desc: "Route copper piping, vacuum, leak test, charge gas, and perform air balancing." },
    ],
    faqs: [
      { question: "What is the average installation time for a central ductable AC?", answer: "Depending on the tonnage and length of ductwork, central ductable installations can take between 2 to 5 days." },
      { question: "Do you design ducts from scratch?", answer: "Yes, our HVAC specialists perform custom sheet metal or pre-insulated duct designs based on your floor layout." },
    ],
    relatedSlugs: ["service", "repair", "amc"],
  },
  service: {
    heroSubtitle: "Comprehensive ductable AC servicing. Evaporator coil wash, plenum filter cleanup, and air velocity tuning.",
    description: "Central ductable systems distribute air over a large area, making dust filtration critical. Our servicing covers cleaning the large return-air plenum filters, deep washing the wide cooling coil, checking return-air static pressure, cleaning blower fans, and clearing large condensation lines. Ensure healthy, allergen-free air in your workspace with regular maintenance.",
    benefits: [
      "Plenum filter deep extraction and cleaning",
      "Cooling coil flushing and sanitization",
      "Blower belt tension check and alignment",
      "Drain pan disinfection to prevent overflow leakages",
      "Improves indoor air quality and removes odors",
    ],
    process: [
      { step: 1, title: "System Audit", desc: "Measure static pressure and temperature differentials at supply grills." },
      { step: 2, title: "Filter & Coil Service", desc: "Access the ceiling trap door, remove large filters, and apply chemical foam to the main coil." },
      { step: 3, title: "Blower Motor Tuneup", desc: "Check blower fan alignment, lubricate bearings, and inspect belt wear." },
      { step: 4, title: "Condensate Flush", desc: "Clean the drain pan and flush long drainage lines with pressurized water." },
    ],
    faqs: [
      { question: "How often do ductable AC return filters need cleaning?", answer: "In high-traffic commercial zones, filters should be washed monthly. A full system service is recommended quarterly." },
    ],
    relatedSlugs: ["repair", "gas-charging", "amc"],
  },
  repair: {
    heroSubtitle: "Quick and reliable central ductable AC repairs. Fixing thermostat failures, air volume drops, and motor bugs.",
    description: "When a ductable AC fails, it can disrupt entire office floors. RSG Refrigeration responds rapidly to central AC breakdowns. We fix digital thermostat communication errors, bad contactors, burnt blower motors, refrigerant blockages, and iced coils, restoring central cooling quickly.",
    benefits: [
      "Fast dispatch of commercial HVAC technicians",
      "Component-level troubleshooting (motor rewinding, board repairs)",
      "Genuine manufacturer spare parts",
      "90-day service warranty",
    ],
    commonProblems: [
      "AC running but no airflow from the ceiling vents (failed blower motor/belt)",
      "Uneven cooling in different rooms (damper blockages/poor air balancing)",
      "Water leaking through false ceiling plasterboards (clogged central drain)",
      "Thermostat display showing error codes or not communicating",
    ],
    process: [
      { step: 1, title: "Symptom Diagnosis", desc: "Verify airflow patterns and isolate whether the issue is mechanical, electrical, or structural." },
      { step: 2, title: "Electrical Check", desc: "Inspect contactors, relays, capacitor banks, and 3-phase power stability." },
      { step: 3, title: "Replacement & Repair", desc: "Fix duct blockages, replace capacitors, motors, or recharge refrigerant." },
      { step: 4, title: "Operational Audit", desc: "Verify uniform airflow distribution and check current draws on all 3 phases." },
    ],
    faqs: [
      { question: "Why is water dripping from the ceiling near the AC vents?", answer: "This is usually caused by a blocked central drain tray or condensed sweat on uninsulated ducts. We can isolate the leak and repair it quickly." },
    ],
    relatedSlugs: ["service", "gas-charging", "amc"],
  },
  "gas-charging": {
    heroSubtitle: "Weighted refrigerant gas refilling for ductable AC systems. Full pressure balancing and subcooling tests.",
    description: "Central ductable systems run on longer copper lines, meaning correct refrigerant quantity is critical. RSG Refrigeration carries out precision gas refilling (R410A, R32, R22) by pulling a full vacuum on the circuit, locating piping leaks under nitrogen pressure, and charging according to precise factory specifications for maximum performance.",
    benefits: [
      "Nitrogen holding tests for long copper runs",
      "Superheat and subcooling verification for precise refrigerant cycle",
      "Complete vacuum pull-down before refilling",
      "Authentic refrigerants for high-operating-pressure units",
    ],
    process: [
      { step: 1, title: "Pressure Diagnostics", desc: "Assess operating pressures and verify low gas symptoms." },
      { step: 2, title: "Nitrogen Leak Search", desc: "Pressurize copper lines with nitrogen to locate hidden leaks." },
      { step: 3, title: "Brazing & Vacuuming", desc: "Braze leak spots, replace flare valves, and pull a 500-micron vacuum." },
      { step: 4, title: "Factory Scale Charging", desc: "Refill refrigerant according to factory weights and measure supply air delta-T." },
    ],
    faqs: [
      { question: "What is the cost of gas charging for a 5.0 Ton ductable AC?", answer: "Costs vary depending on the exact tonnage, refrigerant type, and pipe length. We will provide an upfront inspection quote." },
    ],
    relatedSlugs: ["repair", "service"],
  },
  amc: {
    heroSubtitle: "Commercial Annual Maintenance Contracts for central ductable ACs. Priority dispatch and preventive care.",
    description: "Protect your commercial infrastructure with RSG Refrigeration's structured AMC. Our preventive care minimizes unexpected cooling failure, keeps energy bills low, and provides priority emergency service for server rooms, showrooms, and commercial offices.",
    benefits: [
      "Custom scheduled preventive visits",
      "Priority response within 4 hours",
      "Discounted commercial rates for parts",
      "Detailed health logging reports",
    ],
    process: [
      { step: 1, title: "Site Assessment", desc: "Audit tonnage, age, duct runs, and electrical panels." },
      { step: 2, title: "Scaffold Service", desc: "Perform initial deep servicing and record reference parameters." },
      { step: 3, title: "Routine Checks", desc: "Wash filters, lubricate motors, check contactors, and clean coils." },
      { step: 4, title: "Emergency Support", desc: "Access 24/7 priority booking for commercial system failures." },
    ],
    faqs: [
      { question: "Do you cover multiple business locations in Hyderabad?", answer: "Yes, we support businesses across Gachibowli, Hitech City, Madhapur, Manikonda, and nearby areas with unified AMC management." },
    ],
    relatedSlugs: ["service", "repair", "gas-charging"],
  },
  "copper-pipe-installation": {
    heroSubtitle: "Heavy-duty copper piping installation for ductable AC systems. Engineered for long structural runs and central cooling.",
    description: "Ductable ACs require robust, high-gauge copper piping designed to handle the higher operational pressures and long distance runs across commercial ceilings. RSG Refrigeration guarantees professional laying of properly sized, gauge-tested VRV/Ductable grade copper pipes, insulated thoroughly and structurally supported on GI trays or hangers.",
    benefits: [
      "Heavy gauge commercial grade copper tubes",
      "Structural GI tray or threaded rod support systems",
      "Super-thick nitrile rubber insulation for low temperatures",
      "High-pressure nitrogen leak testing up to 600 PSI",
      "Vacuum holding tests before commissioning",
    ],
    faqs: [
      { question: "Do you lay pipes on cable trays?", answer: "Yes, for commercial spaces, we lay all copper refrigerant lines on GI cable trays or clamp them securely to the concrete slab to prevent sagging and stress on joints." },
    ],
    relatedSlugs: ["installation", "gas-charging"],
  },
};

export async function generateStaticParams() {
  return DUCTABLE_AC_SERVICES.map((svc) => ({ slug: svc.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = DUCTABLE_AC_SERVICES.find((s) => s.slug === slug);
  if (!service) return {};

  return generatePageMetadata({
    title: `${service.title} in Hyderabad — RSG Refrigeration`,
    description: `Professional ${service.title.toLowerCase()} in Hyderabad. ${service.description.slice(0, 120)}... Call RSG Refrigeration: 7815901302.`,
    path: `/services/ductable-ac/${slug}`,
    keywords: service.keywords,
  });
}

export default async function DuctableACServicePage({ params }: Props) {
  const { slug } = await params;
  const service = DUCTABLE_AC_SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const content = SERVICE_CONTENT[slug];
  if (!content) notFound();

  const breadcrumbs = [
    { name: "Services", href: "/services" },
    { name: "Ductable AC", href: "/services/ductable-ac" },
    { name: service.title, href: `/services/ductable-ac/${slug}` },
  ];

  const relatedServices = content.relatedSlugs?.map((s) => {
    const rel = DUCTABLE_AC_SERVICES.find((svc) => svc.slug === s);
    return rel ? { title: rel.title, slug: s } : null;
  }).filter(Boolean) as { title: string; slug: string }[];

  const schemaData = [
    serviceSchema(service.title, service.description, `/services/ductable-ac/${slug}`, service.priceRange),
    breadcrumbSchema([
      { name: "Services", url: "/services" },
      { name: "Ductable AC", url: "/services/ductable-ac" },
      { name: service.title, url: `/services/ductable-ac/${slug}` },
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
        category="Ductable AC Services"
        categorySlug="ductable-ac"
      />
    </>
  );
}
