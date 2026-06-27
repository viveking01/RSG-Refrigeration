export interface LocationData {
  slug: string;
  name: string;
  district?: string;
  description: string;
  landmarks?: string[];
  faqs?: { question: string; answer: string }[];
  nearbyAreas?: string[];
  metaTitle?: string;
  metaDescription?: string;
}

export const LOCATION_DATA: LocationData[] = [
  {
    slug: "bandlaguda-jagir",
    name: "Bandlaguda Jagir",
    description: "Our home base and primary service area. RSG Refrigeration is located in Bandlaguda Jagir and provides the fastest AC repair and service response times in this area.",
    landmarks: ["Dwarka Nagar", "Sai Baba Nagar", "Vikas Nagar", "Bandlaguda Jagir Bus Stop"],
    nearbyAreas: ["Hydershakote", "Rajendranagar", "Narsingi", "Suncity"],
    faqs: [
      { question: "What is the response time for AC repair in Bandlaguda Jagir?", answer: "Since our workshop is located in Bandlaguda Jagir, we typically reach you within 30–60 minutes." },
      { question: "Do you provide AC service on Sundays in Bandlaguda Jagir?", answer: "Yes, we operate 7 days a week including Sundays and public holidays." },
    ],
    metaTitle: "AC Repair & Service in Bandlaguda Jagir Hyderabad | RSG Refrigeration",
    metaDescription: "Expert AC repair, service & installation in Bandlaguda Jagir, Hyderabad. Same-day service, verified technicians. Call RSG Refrigeration: 7815901302.",
  },
  {
    slug: "narsingi",
    name: "Narsingi",
    description: "RSG Refrigeration provides premium AC repair and service across Narsingi and surrounding localities. Quick response times with expert technicians.",
    landmarks: ["Narsingi Police Station", "Narsingi ORR Junction", "Aparna Sarovar"],
    nearbyAreas: ["Kokapet", "Gandipet", "Puppalaguda", "Manikonda"],
    faqs: [
      { question: "Do you service all AC brands in Narsingi?", answer: "Yes, we service all major brands including Daikin, LG, Samsung, Voltas, Blue Star, Carrier, Hitachi, and more." },
      { question: "What is the charge for AC gas charging in Narsingi?", answer: "AC gas charging in Narsingi starts from ₹1,500 depending on the refrigerant type and quantity needed." },
    ],
    metaTitle: "AC Repair & Service in Narsingi Hyderabad | RSG Refrigeration",
    metaDescription: "Top-rated AC repair and service in Narsingi, Hyderabad. All brands, same-day service. Call RSG Refrigeration: 7815901302.",
  },
  {
    slug: "kokapet",
    name: "Kokapet",
    description: "Professional AC services in Kokapet — one of Hyderabad's fastest-growing residential and commercial hubs. We cover all of Kokapet including Kokapet SEZ area.",
    landmarks: ["Kokapet ORR Exit", "My Home Bhooja", "Kokapet Lake", "Financial District adjacency"],
    nearbyAreas: ["Nanakramguda", "Financial District", "Narsingi", "Gandipet"],
    faqs: [
      { question: "Do you handle commercial AC repairs in Kokapet?", answer: "Absolutely. We service residential, commercial, and industrial AC units in Kokapet including offices and IT parks." },
      { question: "How quickly can you reach Kokapet for an emergency AC repair?", answer: "We typically reach Kokapet within 45–90 minutes for emergency service." },
    ],
    metaTitle: "AC Repair & Service in Kokapet Hyderabad | RSG Refrigeration",
    metaDescription: "Professional AC repair, installation & gas charging in Kokapet, Hyderabad. Covering Kokapet SEZ, My Home Bhooja & all localities. Call: 7815901302.",
  },
  {
    slug: "gachibowli",
    name: "Gachibowli",
    description: "RSG Refrigeration serves the entire Gachibowli area including IT hub offices, residential apartments, and commercial establishments.",
    landmarks: ["Gachibowli Stadium", "ISB Campus", "University of Hyderabad", "Wipro Circle"],
    nearbyAreas: ["Financial District", "Raidurg", "Kondapur", "Manikonda"],
    faqs: [
      { question: "Do you provide AC AMC services for offices in Gachibowli?", answer: "Yes, we offer customized Annual Maintenance Contracts (AMC) for IT offices and commercial spaces in Gachibowli." },
      { question: "Can you repair inverter ACs in Gachibowli?", answer: "Yes, our technicians are trained to diagnose and repair all types including inverter AC technology from all major brands." },
    ],
    metaTitle: "AC Repair & Service in Gachibowli Hyderabad | RSG Refrigeration",
    metaDescription: "Expert AC repair & service in Gachibowli Hyderabad. All brands, offices & residences. Same-day service available. Call RSG Refrigeration: 7815901302.",
  },
  {
    slug: "madhapur",
    name: "Madhapur",
    description: "Complete AC repair and service in Madhapur — covering HITEC City adjacent areas, residential societies, and commercial complexes.",
    landmarks: ["Madhapur Police Station", "Cyber Towers", "Inorbit Mall", "HITEC City adjacency"],
    nearbyAreas: ["Hitech City", "Kondapur", "Jubilee Hills", "Raidurg"],
    faqs: [
      { question: "Do you service Daikin VRV systems in Madhapur?", answer: "Yes, we have certified technicians for VRF/VRV systems commonly used in commercial offices in Madhapur." },
      { question: "What AC brands do you repair in Madhapur?", answer: "We repair Daikin, LG, Samsung, Voltas, Blue Star, Carrier, Hitachi, Panasonic, Mitsubishi, O General, Haier, Lloyd and all other brands." },
    ],
    metaTitle: "AC Repair & Service in Madhapur Hyderabad | RSG Refrigeration",
    metaDescription: "Premium AC repair & service in Madhapur, Hyderabad. VRF, split, cassette AC experts near Cyber Towers. Call RSG Refrigeration: 7815901302.",
  },
  {
    slug: "hitech-city",
    name: "Hitech City",
    description: "Specialized AC services for Hyderabad's premier IT hub — HITEC City. From individual split ACs to enterprise VRF systems, RSG Refrigeration covers it all.",
    landmarks: ["HITEC City Metro", "Cyber Gateway", "iLabs Centre", "DLF Cyber City"],
    nearbyAreas: ["Madhapur", "Kondapur", "Jubilee Hills", "Gachibowli"],
    faqs: [
      { question: "Do you offer emergency AC repair in Hitech City?", answer: "Yes, we provide emergency AC repair services in Hitech City with technicians available even on weekends." },
      { question: "Can you service central air conditioning systems in HITEC City offices?", answer: "Yes, our team handles ductable and VRF/VRV central AC systems used in IT parks and large offices in HITEC City." },
    ],
    metaTitle: "AC Repair & Service in Hitech City Hyderabad | RSG Refrigeration",
    metaDescription: "Expert AC repair & service in Hitech City, Hyderabad. VRF, ductable & split AC specialists for IT offices & residences. Call: 7815901302.",
  },
  {
    slug: "financial-district",
    name: "Financial District",
    description: "Professional AC maintenance and repair in Hyderabad's Financial District. We handle premium commercial, office, and high-rise residential AC requirements.",
    landmarks: ["Nanakramguda", "Financial District ORR", "Mindspace Hyderabad", "RMZ Millennia"],
    nearbyAreas: ["Gachibowli", "Raidurg", "Kokapet", "Nanakramguda"],
    faqs: [
      { question: "Do you handle AMC contracts for large office buildings in Financial District?", answer: "Yes, we offer customized AMC contracts for IT parks, commercial towers, and large office buildings in Financial District." },
      { question: "What is the typical AC service charge in Financial District?", answer: "AC service charges start from ₹400 for standard service. We provide a free inspection before quoting for repairs." },
    ],
    metaTitle: "AC Repair & Service in Financial District Hyderabad | RSG Refrigeration",
    metaDescription: "Professional AC service & repair in Financial District, Hyderabad. Commercial & residential AC experts. Call RSG Refrigeration: 7815901302.",
  },
  {
    slug: "kondapur",
    name: "Kondapur",
    description: "Reliable AC repair, service, and installation across all of Kondapur — covering all residential colonies, apartments, and commercial areas.",
    landmarks: ["Kondapur Main Road", "Botanical Garden MMTS", "Lanco Hills adjacency", "Kondapur Bus Stop"],
    nearbyAreas: ["Hitech City", "Madhapur", "Gachibowli", "Jubilee Hills"],
    faqs: [
      { question: "How much does split AC installation cost in Kondapur?", answer: "Split AC installation in Kondapur costs between ₹1,200 – ₹2,500 depending on the unit type and installation complexity." },
      { question: "Do you provide AC gas charging in Kondapur?", answer: "Yes, we provide AC gas refilling in Kondapur using genuine R22, R32, and R410A refrigerants." },
    ],
    metaTitle: "AC Repair & Service in Kondapur Hyderabad | RSG Refrigeration",
    metaDescription: "Reliable AC repair, service & installation in Kondapur, Hyderabad. All brands, competitive rates. Call RSG Refrigeration: 7815901302.",
  },
  {
    slug: "rajendranagar",
    name: "Rajendranagar",
    description: "RSG Refrigeration provides comprehensive AC services across Rajendranagar and surrounding areas. Trusted by thousands of homes and businesses.",
    landmarks: ["Rajendranagar Municipality", "Aramghar Junction", "PVNR Highway", "Rajendranagar Colony"],
    nearbyAreas: ["Attapur", "Hydershakote", "Budwel", "Shamshabad"],
    faqs: [
      { question: "Do you provide same-day AC repair in Rajendranagar?", answer: "Yes, we offer same-day AC repair in Rajendranagar for bookings made before 2 PM." },
      { question: "Which AC brands do you repair in Rajendranagar?", answer: "We repair all brands — Voltas, LG, Samsung, Daikin, Blue Star, O General, Carrier, Hitachi, Haier, Lloyd and more." },
    ],
    metaTitle: "AC Repair & Service in Rajendranagar Hyderabad | RSG Refrigeration",
    metaDescription: "Trusted AC repair & service in Rajendranagar, Hyderabad. Same-day service, all brands. Call RSG Refrigeration: 7815901302.",
  },
  {
    slug: "attapur",
    name: "Attapur",
    description: "Fast and affordable AC repair and service in Attapur, Hyderabad. We cover all residential areas and commercial establishments.",
    landmarks: ["Attapur Bus Stop", "Attapur Ring Road", "Rethibowli adjacency", "Upperpally Road"],
    nearbyAreas: ["Rajendranagar", "Upperpally", "Mehdipatnam", "Hydershakote"],
    faqs: [
      { question: "What is the cost of AC service in Attapur?", answer: "Regular split AC service in Attapur starts from ₹400 including filter cleaning, coil wash, and performance check." },
      { question: "Do you repair LG and Samsung ACs in Attapur?", answer: "Yes, we are experts in LG and Samsung AC repair including inverter models in Attapur." },
    ],
    metaTitle: "AC Repair & Service in Attapur Hyderabad | RSG Refrigeration",
    metaDescription: "Fast AC repair & service in Attapur, Hyderabad. All brands, affordable rates. Call RSG Refrigeration: 7815901302.",
  },
  {
    slug: "hydershakote",
    name: "Hydershakote",
    description: "Comprehensive AC repair, service, and gas charging across Hydershakote and nearby areas. Quick response, expert technicians.",
    landmarks: ["Hydershakote Village", "Kismatpur Road", "Shamshabad Highway adjacency"],
    nearbyAreas: ["Bandlaguda Jagir", "Kismatpur", "Rajendranagar", "Shamshabad"],
    faqs: [
      { question: "Do you cover remote areas of Hydershakote?", answer: "Yes, we cover all localities within and around Hydershakote including Kismatpur and surrounding villages." },
      { question: "Is AC gas charging available in Hydershakote?", answer: "Yes, we provide R22, R32, and R410A gas charging in Hydershakote with genuine refrigerants." },
    ],
    metaTitle: "AC Repair & Service in Hydershakote Hyderabad | RSG Refrigeration",
    metaDescription: "Expert AC repair & service in Hydershakote, Hyderabad. Gas charging, installation & maintenance. Call RSG Refrigeration: 7815901302.",
  },
  {
    slug: "shamshabad",
    name: "Shamshabad",
    description: "AC repair and service in Shamshabad — serving both residential colonies and commercial establishments near Rajiv Gandhi International Airport.",
    landmarks: ["Shamshabad Town", "RGIA Airport adjacency", "Shamshabad Bus Stand", "Airport Expressway"],
    nearbyAreas: ["Rajendranagar", "Budwel", "Hydershakote", "Kothur"],
    faqs: [
      { question: "Do you provide AC repair in all areas of Shamshabad?", answer: "Yes, we cover Shamshabad town and surrounding areas including colonies near the airport highway." },
      { question: "What is the emergency AC repair number in Shamshabad?", answer: "Call us at 7815901302 for emergency AC repair in Shamshabad. We're available 7 days a week." },
    ],
    metaTitle: "AC Repair & Service in Shamshabad Hyderabad | RSG Refrigeration",
    metaDescription: "Professional AC repair & service in Shamshabad, Hyderabad. Near airport, all brands. Call RSG Refrigeration: 7815901302.",
  },
  {
    slug: "manikonda",
    name: "Manikonda",
    description: "RSG Refrigeration covers all of Manikonda — from Manikonda IT corridor to residential townships. Expert technicians available for all AC needs.",
    landmarks: ["Manikonda Junction", "Lanco Hills", "Aparna Cyber Life", "Manikonda Village"],
    nearbyAreas: ["Narsingi", "Financial District", "Kokapet", "Puppalaguda"],
    faqs: [
      { question: "Do you service cassette ACs in Manikonda offices?", answer: "Yes, we service all cassette AC brands and models in commercial offices and residential units in Manikonda." },
      { question: "How can I book an AC repair in Manikonda?", answer: "Call us at 7815901302 or WhatsApp at the same number. We'll confirm your appointment within 30 minutes." },
    ],
    metaTitle: "AC Repair & Service in Manikonda Hyderabad | RSG Refrigeration",
    metaDescription: "Expert AC repair & service in Manikonda, Hyderabad. Residential & commercial. Call RSG Refrigeration: 7815901302.",
  },
  {
    slug: "banjara-hills",
    name: "Banjara Hills",
    description: "Premium AC repair and service in Banjara Hills, Hyderabad. We provide expert services for luxury apartments, villas, and commercial spaces.",
    landmarks: ["City Center Mall", "KBR Park", "Taj Krishna", "Banjara Hills Road No. 1 to 14"],
    nearbyAreas: ["Jubilee Hills", "Panjagutta", "Somajiguda", "Masab Tank"],
    faqs: [
      { question: "Do you service central ACs in Banjara Hills?", answer: "Yes, we are specialists in servicing and repairing central ductable and VRV systems in Banjara Hills." },
      { question: "Can you provide emergency AC repair in Banjara Hills?", answer: "Yes, our technicians can reach Banjara Hills quickly for any emergency AC breakdowns." },
    ],
    metaTitle: "AC Repair & Service in Banjara Hills Hyderabad | RSG Refrigeration",
    metaDescription: "Premium AC repair & service in Banjara Hills, Hyderabad. Split, cassette & VRF experts for villas & offices. Call RSG Refrigeration: 7815901302.",
  },
  {
    slug: "jubilee-hills",
    name: "Jubilee Hills",
    description: "Expert AC repair, installation, and AMC services in Jubilee Hills. Specialized in handling premium brands like Daikin, O General, and Mitsubishi.",
    landmarks: ["Jubilee Hills Check Post", "Peddamma Temple", "Apollo Hospital", "KBR Park"],
    nearbyAreas: ["Banjara Hills", "Madhapur", "Film Nagar", "Yousufguda"],
    faqs: [
      { question: "Do you offer AC uninstallation and relocation in Jubilee Hills?", answer: "Yes, we provide safe and damage-free AC uninstallation and installation services." },
      { question: "Are your technicians experienced with inverter ACs?", answer: "Absolutely. All our technicians are well-trained in repairing advanced inverter AC PCBs and sensors." },
    ],
    metaTitle: "AC Repair & Service in Jubilee Hills Hyderabad | RSG Refrigeration",
    metaDescription: "Professional AC repair & service in Jubilee Hills, Hyderabad. Daikin, O General experts. Call RSG Refrigeration: 7815901302.",
  },
  {
    slug: "mehdipatnam",
    name: "Mehdipatnam",
    description: "Fast and reliable AC service in Mehdipatnam. From basic servicing to complex PCB repairs, our expert technicians handle it all.",
    landmarks: ["Mehdipatnam Rythu Bazar", "Sarojini Devi Eye Hospital", "Pillar No 1 to 50"],
    nearbyAreas: ["Tolichowki", "Attapur", "Masab Tank", "Langer Houz"],
    faqs: [
      { question: "What is the cost of AC service in Mehdipatnam?", answer: "Our standard AC service starts at just ₹400 in Mehdipatnam." },
      { question: "Do you repair AC PCBs in Mehdipatnam?", answer: "Yes, we perform component-level PCB repairs to save you money." },
    ],
    metaTitle: "AC Repair & Service in Mehdipatnam Hyderabad | RSG Refrigeration",
    metaDescription: "Fast AC repair & service in Mehdipatnam, Hyderabad. All brands covered, affordable pricing. Call RSG Refrigeration: 7815901302.",
  },
  {
    slug: "tolichowki",
    name: "Tolichowki",
    description: "Top-rated AC repair and service in Tolichowki. We cover all residential colonies and commercial establishments in and around Tolichowki.",
    landmarks: ["Tolichowki X Roads", "Paramount Colony", "Kakatiya Nagar", "Seven Tombs Road"],
    nearbyAreas: ["Mehdipatnam", "Shaikpet", "Manikonda", "Golconda"],
    faqs: [
      { question: "Do you do AC gas filling in Tolichowki?", answer: "Yes, we provide gas charging (R32, R410A, R22) with exact weight and pressure testing." },
      { question: "Do you work on weekends in Tolichowki?", answer: "Yes, we are available 7 days a week including Sundays." },
    ],
    metaTitle: "AC Repair & Service in Tolichowki Hyderabad | RSG Refrigeration",
    metaDescription: "Expert AC repair & service in Tolichowki, Hyderabad. Gas filling, PCB repair & installation. Call RSG Refrigeration: 7815901302.",
  },
  {
    slug: "ameerpet",
    name: "Ameerpet",
    description: "Specialized AC repair and maintenance for hostels, residential buildings, and commercial offices in Ameerpet.",
    landmarks: ["Ameerpet Metro Station", "Maitrivanam", "Aditya Enclave", "Sanjeeva Reddy Nagar"],
    nearbyAreas: ["SR Nagar", "Punjagutta", "Begumpet", "Yousufguda"],
    faqs: [
      { question: "Do you offer AC service for hostels in Ameerpet?", answer: "Yes, we offer bulk AC servicing and AMC plans for hostels and commercial buildings in Ameerpet." },
      { question: "Can you fix a leaking AC?", answer: "Yes, water leakage is a common problem and we can fix it permanently." },
    ],
    metaTitle: "AC Repair & Service in Ameerpet Hyderabad | RSG Refrigeration",
    metaDescription: "Affordable AC repair & service in Ameerpet, Hyderabad. Bulk servicing & AMC available. Call RSG Refrigeration: 7815901302.",
  },
  {
    slug: "kukatpally",
    name: "Kukatpally",
    description: "Comprehensive AC repair and installation services across Kukatpally, KPHB, and surrounding areas. Fast response and genuine spare parts.",
    landmarks: ["KPHB Colony", "Forum Sujana Mall", "JNTU", "Kukatpally Housing Board"],
    nearbyAreas: ["Miyapur", "Moosapet", "Pragathi Nagar", "Nizampet"],
    faqs: [
      { question: "Do you cover KPHB Colony for AC repairs?", answer: "Yes, we cover all phases of KPHB Colony and entire Kukatpally." },
      { question: "Do you provide AC compressor replacement?", answer: "Yes, we replace AC compressors with original spare parts and provide a warranty." },
    ],
    metaTitle: "AC Repair & Service in Kukatpally Hyderabad | RSG Refrigeration",
    metaDescription: "Trusted AC repair & service in Kukatpally & KPHB, Hyderabad. Expert technicians, same-day service. Call RSG Refrigeration: 7815901302.",
  },
  {
    slug: "miyapur",
    name: "Miyapur",
    description: "Professional AC servicing, gas charging, and repair in Miyapur. Serving homes and apartments with affordable and reliable AC solutions.",
    landmarks: ["Miyapur Metro Station", "Miyapur X Roads", "Allwyn Colony", "Madinaguda"],
    nearbyAreas: ["Kukatpally", "Chandanagar", "Hafeezpet", "Bachupally"],
    faqs: [
      { question: "Is same-day service available in Miyapur?", answer: "Yes, we strive to provide same-day AC repair in Miyapur for calls made before 2 PM." },
      { question: "Do you fix ACs that are not cooling?", answer: "Yes, we diagnose the exact reason (gas leak, capacitor issue, etc.) and fix it on the spot." },
    ],
    metaTitle: "AC Repair & Service in Miyapur Hyderabad | RSG Refrigeration",
    metaDescription: "Expert AC repair & service in Miyapur, Hyderabad. Fast, reliable & affordable. Call RSG Refrigeration: 7815901302.",
  },
  {
    slug: "chandanagar",
    name: "Chandanagar",
    description: "Reliable AC repair and maintenance in Chandanagar. Our experienced technicians ensure your AC runs efficiently all summer long.",
    landmarks: ["Chandanagar MMTS", "Gangaram", "BHEL Township adjacency", "Chandanagar Market"],
    nearbyAreas: ["Miyapur", "Lingampally", "Hafeezpet", "BHEL"],
    faqs: [
      { question: "Do you service Window ACs in Chandanagar?", answer: "Our primary expertise is in Split, Cassette, and Central ACs, but we do basic servicing for Window ACs." },
      { question: "Do you use genuine spare parts?", answer: "Yes, we only use OEM-quality genuine spare parts for all repairs." },
    ],
    metaTitle: "AC Repair & Service in Chandanagar Hyderabad | RSG Refrigeration",
    metaDescription: "Professional AC repair & service in Chandanagar, Hyderabad. Call RSG Refrigeration for quick AC solutions: 7815901302.",
  },
  {
    slug: "lingampally",
    name: "Lingampally",
    description: "Top-quality AC repair and service in Lingampally and Serilingampally. From deep cleaning to complex repairs, we do it all.",
    landmarks: ["Lingampally Railway Station", "BHEL", "Serilingampally", "HCU"],
    nearbyAreas: ["Chandanagar", "Gachibowli", "Tellapur", "Nallagandla"],
    faqs: [
      { question: "Do you provide AC deep cleaning in Lingampally?", answer: "Yes, we offer chemical deep cleaning to remove stubborn dirt, mold, and odors from your AC." },
      { question: "How can I book an AC technician in Lingampally?", answer: "You can call or WhatsApp us at 7815901302 to book a technician instantly." },
    ],
    metaTitle: "AC Repair & Service in Lingampally Hyderabad | RSG Refrigeration",
    metaDescription: "Expert AC repair & service in Lingampally & Serilingampally, Hyderabad. All brands covered. Call RSG Refrigeration: 7815901302.",
  },
  {
    slug: "begumpet",
    name: "Begumpet",
    description: "Expert commercial and residential AC services in Begumpet. We provide AMC, installations, and repairs for all types of AC systems.",
    landmarks: ["Begumpet Airport", "Prakash Nagar", "Greenlands", "Kundabagh"],
    nearbyAreas: ["Ameerpet", "Secunderabad", "Somajiguda", "Sanjeevaiah Park"],
    faqs: [
      { question: "Do you offer AMC for commercial offices in Begumpet?", answer: "Yes, we specialize in providing AC AMC services for corporate offices and commercial spaces." },
      { question: "Do you fix outdoor unit problems?", answer: "Yes, we repair outdoor condenser coils, fan motors, and compressors." },
    ],
    metaTitle: "AC Repair & Service in Begumpet Hyderabad | RSG Refrigeration",
    metaDescription: "Professional AC repair & service in Begumpet, Hyderabad. Commercial & residential AC specialists. Call RSG Refrigeration: 7815901302.",
  },
  {
    slug: "secunderabad",
    name: "Secunderabad",
    description: "Trusted AC repair and service covering all of Secunderabad. We bring expert technicians to your doorstep for fast AC solutions.",
    landmarks: ["Secunderabad Station", "Paradise", "Tarnaka", "Trimulgherry"],
    nearbyAreas: ["Begumpet", "Karkhana", "Alwal", "Malkajgiri"],
    faqs: [
      { question: "Do you cover all of Secunderabad?", answer: "Yes, our technicians cover major parts of Secunderabad including Tarnaka, Bowenpally, and Alwal." },
      { question: "Is there a visiting charge?", answer: "We charge a nominal visiting fee which is adjusted if you proceed with the repair." },
    ],
    metaTitle: "AC Repair & Service in Secunderabad | RSG Refrigeration",
    metaDescription: "Reliable AC repair & service in Secunderabad. Expert technicians, affordable pricing. Call RSG Refrigeration: 7815901302.",
  }
];

export function getLocationBySlug(slug: string): LocationData | undefined {
  return LOCATION_DATA.find((loc) => loc.slug === slug);
}

export const ALL_LOCATION_SLUGS = LOCATION_DATA.map((l) => l.slug);
