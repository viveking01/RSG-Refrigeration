export interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

export const HOME_FAQS: FAQ[] = [
  {
    question: "How quickly can RSG Refrigeration respond to an AC repair request in Hyderabad?",
    answer: "We offer same-day service across most areas in Hyderabad. For bookings made before 2 PM, we typically reach within 2–4 hours. In our primary service area of Bandlaguda Jagir, response times can be as quick as 30–60 minutes. For emergencies, call us directly at 7815901302.",
    category: "Response Time",
  },
  {
    question: "Which AC brands does RSG Refrigeration service?",
    answer: "We service all major AC brands including Daikin, LG, Samsung, Voltas, Blue Star, Carrier, Hitachi, Panasonic, Mitsubishi, O General, Haier, Lloyd, and all other brands available in India. Our technicians are trained on multi-brand AC systems.",
    category: "Brands",
  },
  {
    question: "What types of AC units does RSG Refrigeration repair?",
    answer: "We repair and service all types of air conditioning systems — Split AC, Cassette AC, Ductable AC, VRF/VRV systems, and Window AC units. We do NOT service automobile or car air conditioning systems.",
    category: "Services",
  },
  {
    question: "How much does AC repair cost in Hyderabad?",
    answer: "AC repair costs depend on the issue. Basic servicing starts from ₹400. Gas charging ranges from ₹1,500–₹3,500. Major repairs like compressor replacement can cost ₹8,000–₹18,000. We provide a free inspection and transparent quote before starting any work.",
    category: "Pricing",
  },
  {
    question: "Do you offer Annual Maintenance Contracts (AMC) for ACs?",
    answer: "Yes, we offer comprehensive AMC plans starting from ₹1,200/year per AC unit. AMC includes 2 scheduled service visits per year, priority response for breakdowns, discounts on spare parts and repairs, and a dedicated service manager.",
    category: "AMC",
  },
  {
    question: "What areas in Hyderabad does RSG Refrigeration cover?",
    answer: "We cover a wide area in South and West Hyderabad including Bandlaguda Jagir, Narsingi, Kokapet, Gachibowli, Financial District, Madhapur, Hitech City, Kondapur, Rajendranagar, Attapur, Hydershakote, Manikonda, Shamshabad, and 40+ other areas.",
    category: "Service Areas",
  },
  {
    question: "Do you use genuine spare parts for AC repairs?",
    answer: "Yes, we use only genuine OEM-compatible spare parts for all AC repairs. We maintain stock of common parts like capacitors, sensors, PCBs, fan motors, and contactors. All replaced parts come with warranty.",
    category: "Quality",
  },
  {
    question: "Is there a warranty on AC repair services?",
    answer: "Yes, we provide warranty on our repairs. Parts replaced come with manufacturer warranty (30 days to 1 year depending on the part). Our labour is warranted for 90 days. If the same issue recurs within the warranty period, we fix it at no extra cost.",
    category: "Warranty",
  },
  {
    question: "Why is my AC not cooling even after gas charging?",
    answer: "If your AC is not cooling after gas charging, there could be other issues — blocked air filters, dirty evaporator coils, faulty thermostat, low airflow, or a PCB problem. Call us for a comprehensive diagnostic check to identify the exact cause.",
    category: "Troubleshooting",
  },
  {
    question: "How often should I get my AC serviced?",
    answer: "We recommend servicing your AC at least twice a year — once before summer (March-April) and once before winter (October-November). Regular servicing improves efficiency, extends lifespan, and reduces electricity consumption by 15–20%.",
    category: "Maintenance",
  },
];

export const SERVICE_FAQS: Record<string, FAQ[]> = {
  "gas-charging": [
    {
      question: "How do I know if my AC needs gas charging?",
      answer: "Signs include: AC not cooling despite running, ice forming on the copper pipes, hissing sound from the AC, increased electricity bills, or AC taking very long to cool the room.",
    },
    {
      question: "What type of refrigerant gas does my AC use?",
      answer: "Older ACs (before 2015) typically use R22 gas. Newer ACs use R32 or R410A. The refrigerant type is mentioned on the label on your outdoor unit. Our technician will check and use the correct gas.",
    },
    {
      question: "How long does AC gas charging take?",
      answer: "AC gas charging typically takes 1–2 hours including leak detection, nitrogen flush, vacuum, and gas charging. We test cooling performance before leaving.",
    },
  ],
  installation: [
    {
      question: "What is included in split AC installation service?",
      answer: "Our installation includes: wall bracket mounting, indoor unit fixing, copper pipe routing (up to 3 metres included), outdoor unit placement, electrical connection, gas pressure test, and trial run.",
    },
    {
      question: "How long does AC installation take?",
      answer: "A standard split AC installation takes 2–4 hours depending on the copper pipe length and wall type.",
    },
  ],
};
