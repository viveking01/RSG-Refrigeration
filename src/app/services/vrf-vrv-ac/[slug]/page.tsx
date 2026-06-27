import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { faqSchema, serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { VRF_AC_SERVICES } from "@/lib/data/services";
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
    heroSubtitle: "High-end multi-zone VRF & VRV system installation. Copper refnet pipe brazing, pressure testing, and multi-evaporator communication wiring.",
    description: "Variable Refrigerant Flow (VRF/VRV) systems offer independent temperature control across multiple zones from a single outdoor condenser array. RSG Refrigeration's commercial team designs copper refnet joints, manages nitrogen pressure holding at 40 bar (550 PSI), runs communication daisy chains, and commissions systems with manufacturer-certified service tools. Ideal for premium villas, corporate offices, hotels, and luxury apartments.",
    benefits: [
      "Expert layout designing for multi-split VRF systems",
      "Leak-proof copper refnet joint brazing under nitrogen purge",
      "550 PSI nitrogen pressure holding test for 24 hours",
      "Daisy-chain communication cabling and automatic addressing setup",
      "Manufacturer-backed installation standards",
    ],
    process: [
      { step: 1, title: "Engineering Design", desc: "Calculate pipe sizing, refrigerant volume correction, and indoor FCU positions." },
      { step: 2, title: "Copper Pipe & Refnet Routing", desc: "Laying copper pipes, brazing refnets with nitrogen purge to avoid inner soot." },
      { step: 3, title: "FCU & Outdoor Mounting", desc: "Install wall-mounts, cassettes, or ceiling duct units and hook up the main outdoor condensing modules." },
      { step: 4, title: "Pressure & Vacuum Pull-down", desc: "Conduct 24-hr high-pressure nitrogen test, then pull a triple vacuum below 500 microns." },
      { step: 5, title: "Weighted Gas Charge & Run", desc: "Refill corrected refrigerant weight and run test modes to register individual unit codes." },
    ],
    faqs: [
      { question: "What is the difference between VRF and VRV?", answer: "VRV (Variable Refrigerant Volume) is a trademark of Daikin. VRF (Variable Refrigerant Flow) is the generic term used by other manufacturers like Mitsubishi, LG, and Toshiba. They operate on the same fundamental technology." },
      { question: "How many indoor units can be connected to a single VRF outdoor unit?", answer: "Depending on the outdoor unit horse-power (HP), up to 64 indoor units can be connected to a single outdoor system." },
    ],
    relatedSlugs: ["service", "repair", "amc"],
  },
  service: {
    heroSubtitle: "Professional VRF/VRV system maintenance. Smart tool diagnostic reading, coil sanitization, and communication audit.",
    description: "VRF/VRV systems are highly sophisticated. Servicing them requires specialized software tools to read electronic expansion valve (EEV) openings, compressor frequencies, sensor levels, and error histories. RSG Refrigeration provides deep coil cleanups for indoor cassettes, wall units, and high-static outdoor condenser jet washes, preventing system-wide degradation.",
    benefits: [
      "Diagnostic reading of compressor frequency, EEV, and sensor parameters",
      "Deep pressure wash for multiple indoor units (cassettes, ducts, wall-mounts)",
      "High-flow chemical wash of heavy outdoor condenser fins",
      "Electrical contactor panel cleaning and terminal tightening",
      "Maintains premium efficiency and reduces commercial electricity bills",
    ],
    process: [
      { step: 1, title: "Diagnostic Hookup", desc: "Plug in the manufacturer service tool to log operational parameters." },
      { step: 2, title: "Indoor Units Clean", desc: "Mask surround areas and deep-wash indoor filters, coils, and drain pumps." },
      { step: 3, title: "Outdoor Fin Wash", desc: "Jet-wash the large multi-compressor outdoor condenser assembly." },
      { step: 4, title: "Calibration & Test", desc: "Check EEV operations, verify refrigerant balance, and generate a performance sheet." },
    ],
    faqs: [
      { question: "Is special servicing required for inverter VRF systems?", answer: "Yes. Due to variable speed scroll compressors and sophisticated electronic valves, VRF systems require computerized diagnostics and experienced technicians." },
    ],
    relatedSlugs: ["repair", "gas-charging", "amc"],
  },
  repair: {
    heroSubtitle: "Rapid VRF & VRV system repairs. Inverter board repairs, EEV replacements, and communication loop debugging.",
    description: "A communication loop break or inverter board failure in a VRF system can disable the entire facility. RSG Refrigeration's engineers diagnose communication error codes (e.g., U4, E0, etc.), trace cable loop breaks, repair inverter compressor drive boards (IPM), replace faulty thermistors, and replace failed electronic expansion valves on-site.",
    benefits: [
      "Commercial HVAC engineers with specialized diagnostic skills",
      "Inverter motherboard component-level repair (saving high replacement costs)",
      "Genuine EEVs, sensors, and compressor contactors in stock",
      "90-day service warranty",
    ],
    commonProblems: [
      "All indoor units showing communication error codes and refusing to run",
      "One zone cooling perfectly while another zone remains warm (EEV stuck)",
      "Loud grinding sound from outdoor scroll compressor",
      "Refrigerant leak in hidden copper joints (requiring nitrogen isolation)",
    ],
    process: [
      { step: 1, title: "Diagnostic Code Reading", desc: "Identify active alarm codes from the central controller or outdoor board." },
      { step: 2, title: "Signal & Voltage Test", desc: "Measure DC communication signal voltage and AC phase-to-phase stability." },
      { step: 3, title: "Component Replacement", desc: "Recover gas, cut and weld a new EEV/filter drier, or swap control modules." },
      { step: 4, title: "Vacuum & Re-commissioning", desc: "Perform vacuum pull, top-up gas, clear error codes, and verify each indoor zone." },
    ],
    faqs: [
      { question: "Can a faulty indoor unit board stop the whole VRF system?", answer: "Yes, a short circuit or communication failure on one indoor unit PCB can disrupt the daisy chain. We can isolate the faulty unit and keep the rest running while repairing it." },
    ],
    relatedSlugs: ["service", "gas-charging", "amc"],
  },
  "gas-charging": {
    heroSubtitle: "Precision weighted R410A / R32 refrigerant refilling for VRF systems. Fully calculated pipe volume compensation.",
    description: "Gas charging in a VRF system cannot be done by suction pressure alone. It requires calculation of the exact factory charge plus additional refrigerant based on the length and diameters of liquid copper lines. RSG Refrigeration performs nitrogen pressure drop testing to locate leaks, pulls deep vacuums, and charges refrigerant using high-accuracy digital weight scales.",
    benefits: [
      "Liquid line length calculation for precise refrigerant volume correction",
      "High-pressure nitrogen leak detection at 550 PSI",
      "Deep vacuum pull-down below 500 microns to remove humidity",
      "Weighted liquid-side charging for factory commissioning standards",
    ],
    process: [
      { step: 1, title: "Silo Isolation", desc: "Isolate indoor and outdoor sectors to find leak location." },
      { step: 2, title: "Nitrogen Pressure Test", desc: "Pressurize lines with dry nitrogen and check for pressure drops over 24 hours." },
      { step: 3, title: "Leak Brazing & Evacuation", desc: "Braze the leak point, vacuum the entire system to remove non-condensables." },
      { step: 4, title: "Calculated Charging", desc: "Charge calculated R410A/R32 weight into the liquid line using digital scales." },
    ],
    faqs: [
      { question: "Why is VRF gas charging expensive?", answer: "VRF systems hold large volumes of gas (often 10kg to 50kg+) due to extensive piping. Precision scales and nitrogen leak testing are mandatory, which adds to the process details." },
    ],
    relatedSlugs: ["repair", "service"],
  },
  amc: {
    heroSubtitle: "Strategic Annual Maintenance Contracts for VRF/VRV central AC systems. Minimizes breakdowns and keeps energy costs low.",
    description: "VRF systems represent a major capital investment. Our customized AMC packages for office blocks, hotels, villas, and hospitals provide monthly inspections, priority breakdown support under 3 hours, free diagnostic readings, and chemical coil washing. Maintain optimal comfort and prevent expensive compressor burnouts.",
    benefits: [
      "Monthly/quarterly preventive maintenance checks",
      "Software log audits to catch compressor wear early",
      "Priority dispatch in under 3 hours",
      "Reduced commercial operational costs",
    ],
    process: [
      { step: 1, title: "System Audit", desc: "Log all model numbers, piping schematic, and current system health." },
      { step: 2, title: "Preventive Care", desc: "Run periodic diagnostics, wash coils, clear drain pumps, and verify electrical contacts." },
      { step: 3, title: "Operational Log", desc: "Provide periodic reports detailing system load distribution and efficiency." },
      { step: 4, title: "Breakdown Response", desc: "Dispatched dedicated VRF technicians within hours for priority resolution." },
    ],
    faqs: [
      { question: "What is covered in a VRF AMC package?", answer: "It includes 4 preventive maintenance services per year, unlimited breakdown calls, priority response, diagnostic report generation, and optional spare parts coverage." },
    ],
    relatedSlugs: ["service", "repair", "gas-charging"],
  },
  "copper-pipe-installation": {
    heroSubtitle: "Advanced VRF/VRV copper piping networks. Y-joint brazing and multi-zone liquid line routing.",
    description: "VRF and VRV systems require complex copper piping networks utilizing specialized refnet (Y-joint) branches to distribute refrigerant perfectly across dozens of indoor units. RSG Refrigeration guarantees factory-grade brazing under continuous nitrogen purge, preventing internal oxidation and compressor failure.",
    benefits: [
      "Refnet and header branching calculation and installation",
      "Brazing under continuous dry nitrogen flow",
      "550 PSI pressure holding test for 24 hours",
      "Heavy-duty insulation to prevent thermal loss",
      "Exact factory specifications for liquid and gas line sizing",
    ],
    faqs: [
      { question: "Why is nitrogen purge necessary during VRF brazing?", answer: "Brazing copper creates internal soot (oxidation) which can flake off and clog the delicate electronic expansion valves (EEVs) in VRF systems. A continuous nitrogen flow prevents this soot from forming." },
    ],
    relatedSlugs: ["installation", "gas-charging"],
  },
};

export async function generateStaticParams() {
  return VRF_AC_SERVICES.map((svc) => ({ slug: svc.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = VRF_AC_SERVICES.find((s) => s.slug === slug);
  if (!service) return {};

  return generatePageMetadata({
    title: `${service.title} in Hyderabad — RSG Refrigeration`,
    description: `Professional ${service.title.toLowerCase()} in Hyderabad. ${service.description.slice(0, 120)}... Call RSG Refrigeration: 7815901302.`,
    path: `/services/vrf-vrv-ac/${slug}`,
    keywords: service.keywords,
  });
}

export default async function VRFACServicePage({ params }: Props) {
  const { slug } = await params;
  const service = VRF_AC_SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const content = SERVICE_CONTENT[slug];
  if (!content) notFound();

  const breadcrumbs = [
    { name: "Services", href: "/services" },
    { name: "VRF / VRV AC", href: "/services/vrf-vrv-ac" },
    { name: service.title, href: `/services/vrf-vrv-ac/${slug}` },
  ];

  const relatedServices = content.relatedSlugs?.map((s) => {
    const rel = VRF_AC_SERVICES.find((svc) => svc.slug === s);
    return rel ? { title: rel.title, slug: s } : null;
  }).filter(Boolean) as { title: string; slug: string }[];

  const schemaData = [
    serviceSchema(service.title, service.description, `/services/vrf-vrv-ac/${slug}`, service.priceRange),
    breadcrumbSchema([
      { name: "Services", url: "/services" },
      { name: "VRF / VRV AC", url: "/services/vrf-vrv-ac" },
      { name: service.title, url: `/services/vrf-vrv-ac/${slug}` },
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
        category="VRF / VRV AC Services"
        categorySlug="vrf-vrv-ac"
      />
    </>
  );
}
