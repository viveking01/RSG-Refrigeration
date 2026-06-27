import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { faqSchema, serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { SPLIT_AC_SERVICES } from "@/lib/data/services";
import ServicePageTemplate from "@/components/ServicePageTemplate";

interface Props {
  params: Promise<{ slug: string }>;
}

// Data for service-specific content
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
    heroSubtitle: "Professional split AC installation by certified technicians. Correct mounting, optimal pipe routing, and thorough commissioning for peak performance.",
    description: "RSG Refrigeration provides expert split AC installation services across Hyderabad. Our trained technicians handle all installation types — standard wall-mounted, high-wall, and multi-split configurations. We ensure proper copper pipe insulation, correct pitch for drainage, secure outdoor unit placement, and full commissioning with gas pressure testing. All installations come with a 90-day service warranty.",
    benefits: [
      "Certified technicians with multi-brand expertise",
      "Optimal indoor & outdoor unit placement",
      "Proper copper pipe sizing and insulation",
      "Correct electrical wiring and earthing",
      "Drainage pipe with proper slope",
      "Full commissioning and cooling test",
      "90-day service warranty included",
      "Post-installation user training",
    ],
    process: [
      { step: 1, title: "Site Inspection", desc: "Assess wall type, cable routing path, and optimal unit placement for airflow and aesthetics." },
      { step: 2, title: "Mounting & Drilling", desc: "Mount indoor unit bracket, route copper pipes, and prepare outdoor unit base or bracket." },
      { step: 3, title: "Copper Pipe & Wiring", desc: "Install insulated copper pipes, condensate drain, power cable, and inter-unit signal cable." },
      { step: 4, title: "Unit Installation", desc: "Fix indoor unit, connect outdoor unit, make all pipe and electrical connections." },
      { step: 5, title: "Commissioning", desc: "Leak test, vacuum the refrigerant lines, and verify correct gas charge. Test cooling performance." },
    ],
    faqs: [
      { question: "What is included in a standard split AC installation?", answer: "Standard installation includes: indoor unit wall mounting (up to 10 feet height), 3 metres copper pipe, drain pipe, signal cable, power cable connection, and commissioning test. Additional pipe length is charged extra." },
      { question: "How long does split AC installation take?", answer: "A standard single split AC installation takes 2–4 hours. Complex installations or longer pipe runs may take 4–6 hours." },
      { question: "Do you install all AC brands?", answer: "Yes, we install all brands — Daikin, LG, Samsung, Voltas, Blue Star, Carrier, Hitachi, Panasonic, O General, Haier, Lloyd, and more." },
    ],
    relatedSlugs: ["service", "repair", "gas-charging", "uninstallation"],
  },
  uninstallation: {
    heroSubtitle: "Safe and damage-free split AC uninstallation with gas recovery. Perfect for relocation, renovation, or unit replacement.",
    description: "Professional split AC uninstallation service ensuring your unit is safely removed without damage to the wall, pipes, or AC components. We recover refrigerant gas safely, cap all pipes, and provide proper packaging guidance for transport. Ideal for home relocation, renovation work, or replacing an old unit.",
    benefits: [
      "Safe refrigerant gas recovery",
      "Damage-free wall and unit removal",
      "Proper capping of refrigerant pipes",
      "Condensate drain disconnection",
      "Indoor and outdoor unit dismounting",
      "Guidance on AC packaging for relocation",
    ],
    process: [
      { step: 1, title: "Power Isolation", desc: "Safely isolate AC power supply and switch off the unit." },
      { step: 2, title: "Gas Recovery", desc: "Recover refrigerant gas into the outdoor unit using pump-down procedure." },
      { step: 3, title: "Pipe Disconnection", desc: "Disconnect copper pipes, electrical connections, and drain pipes." },
      { step: 4, title: "Unit Removal", desc: "Remove indoor unit from wall bracket and outdoor unit from mounting." },
      { step: 5, title: "Site Cleanup", desc: "Cap pipe ends, patch holes if required, and clean the work area." },
    ],
    faqs: [
      { question: "Will gas be lost during uninstallation?", answer: "No. We use pump-down procedure to recover all refrigerant gas into the outdoor unit before disconnecting pipes. This preserves the gas for re-installation." },
      { question: "Do you reinstall the AC at the new location?", answer: "Yes, we offer complete relocation service — uninstallation at current location and reinstallation at new location." },
    ],
    relatedSlugs: ["installation", "service", "gas-charging"],
  },
  service: {
    heroSubtitle: "Comprehensive split AC service including deep cleaning, performance check, and tune-up. Restore your AC's original cooling efficiency.",
    description: "Regular servicing is essential for maintaining your split AC's efficiency and extending its lifespan. Our comprehensive service includes cleaning of air filters, evaporator coil wash, condenser fin cleaning, drain pipe flushing, electrical check, refrigerant pressure verification, and a full performance test. A well-serviced AC uses 15–20% less electricity.",
    benefits: [
      "Filter cleaning for improved airflow",
      "Evaporator coil cleaning for better cooling",
      "Condenser coil fin cleaning",
      "Drain pipe flush and unclogging",
      "Refrigerant pressure check",
      "Electrical connections inspection",
      "Fan blade cleaning",
      "Performance and cooling efficiency test",
    ],
    commonProblems: [
      "AC not cooling properly due to dirty evaporator coils",
      "Mold and bacteria buildup in filter causing bad odour",
      "Clogged drain pipe causing water leakage",
      "Dirty condenser fins reducing heat rejection",
      "Increased electricity consumption from dirty AC",
    ],
    process: [
      { step: 1, title: "Initial Inspection", desc: "Check AC operation, note any issues, and record temperatures." },
      { step: 2, title: "Filter Cleaning", desc: "Remove, wash, and dry air filters thoroughly." },
      { step: 3, title: "Coil Cleaning", desc: "Clean evaporator coil using foam cleaner and water." },
      { step: 4, title: "Drain Flush", desc: "Flush condensate drain pipe to clear blockages." },
      { step: 5, title: "Outdoor Unit", desc: "Clean condenser fins and check compressor area." },
      { step: 6, title: "Performance Test", desc: "Test cooling performance and verify all parameters." },
    ],
    faqs: [
      { question: "How often should I service my split AC?", answer: "We recommend servicing your split AC every 3–4 months or at least twice a year — before summer and before winter. Heavy usage areas may require quarterly service." },
      { question: "What's the difference between regular service and deep cleaning?", answer: "Regular service covers filter cleaning and basic coil wash. Deep cleaning involves thorough coil washing with foam cleaner, chemical treatment, drain pan cleaning, and a more comprehensive outdoor unit service." },
    ],
    relatedSlugs: ["deep-cleaning", "chemical-cleaning", "gas-charging", "repair"],
  },
  repair: {
    heroSubtitle: "Expert split AC repair for all problems — not cooling, water leakage, tripping, noise, and more. All brands, same-day service.",
    description: "RSG Refrigeration provides comprehensive split AC repair services for all types of faults. Our technicians carry a full toolkit and common spare parts for on-site repair, minimizing downtime. We diagnose issues accurately before starting any repair and provide transparent pricing upfront. Service warranty included on all repairs.",
    benefits: [
      "Accurate fault diagnosis before repair",
      "Transparent pricing before starting work",
      "On-site repair with genuine spare parts",
      "All major brands and models covered",
      "90-day warranty on all repairs",
      "Same-day service available",
      "Experienced with inverter AC technology",
      "PCB, compressor, and coil specialists",
    ],
    commonProblems: [
      "AC not cooling or cooling poorly",
      "Water dripping from indoor unit",
      "AC tripping or not starting",
      "Unusual noises from indoor or outdoor unit",
      "Ice forming on pipes or evaporator",
      "Error codes on AC display",
      "Remote control not working",
      "AC running but room not cooling",
    ],
    process: [
      { step: 1, title: "Symptom Assessment", desc: "Listen to the customer's problem description and observe AC behavior." },
      { step: 2, title: "Diagnosis", desc: "Check gas pressure, electrical, coils, and electronic systems to identify root cause." },
      { step: 3, title: "Quote Approval", desc: "Provide transparent repair quote for customer approval before proceeding." },
      { step: 4, title: "Repair", desc: "Carry out the repair using genuine spare parts with proper tools." },
      { step: 5, title: "Testing", desc: "Test AC operation and verify the repair is successful before closing the job." },
    ],
    faqs: [
      { question: "What is your repair warranty?", answer: "All repairs come with a 90-day service warranty. If the same fault recurs within 90 days, we fix it at no additional charge." },
      { question: "Do you carry spare parts?", answer: "Yes, our technicians carry common spare parts including capacitors, sensors, contactors, and minor electronic components. For major parts like compressors, PCBs, we source them quickly." },
    ],
    relatedSlugs: ["gas-charging", "gas-leak-detection", "compressor-repair", "pcb-repair", "electrical-fault-repair"],
  },
  "gas-charging": {
    heroSubtitle: "Professional refrigerant gas charging (R22, R32, R410A) to fully restore your split AC's cooling performance.",
    description: "If your AC is not cooling effectively, low refrigerant gas is often the cause. RSG Refrigeration provides precision gas charging using calibrated manifold gauges to ensure exact gas fill as per manufacturer specifications. We first check for leaks, then vacuum the system before charging to ensure contamination-free refrigerant lines. All refrigerant types handled — R22, R32, R410A.",
    benefits: [
      "Leak detection before charging",
      "Vacuum pump-down before gas fill",
      "Calibrated manifold gauge for accurate charge",
      "All refrigerant types: R22, R32, R410A",
      "Manufacturer-spec gas pressure",
      "Cooling performance verification after charging",
      "Temperature differential test included",
      "Genuine refrigerant from authorized dealers",
    ],
    commonProblems: [
      "AC running but not cooling despite clean filters",
      "Ice forming on the copper suction pipe",
      "Frost formation on indoor unit",
      "AC taking very long to cool the room",
      "Hissing sound from indoor unit",
      "Compressor running constantly without achieving set temperature",
    ],
    process: [
      { step: 1, title: "Problem Diagnosis", desc: "Verify low gas symptoms: poor cooling, low suction pressure, ice formation." },
      { step: 2, title: "Leak Detection", desc: "Check all joints, valves, and flare connections for refrigerant leaks." },
      { step: 3, title: "Leak Repair (if needed)", desc: "Fix any leaks found before charging to prevent future gas loss." },
      { step: 4, title: "Vacuum", desc: "Pull vacuum on the refrigerant circuit to remove moisture and air." },
      { step: 5, title: "Gas Charging", desc: "Charge refrigerant to manufacturer-specified pressure and verify cooling." },
    ],
    faqs: [
      { question: "What type of gas does my AC use?", answer: "AC manufactured before 2015 typically uses R22. Most newer ACs use R32 or R410A. The refrigerant type is labelled on your outdoor unit. Our technician will identify and use the correct type." },
      { question: "Why is my AC losing gas?", answer: "Refrigerant gas doesn't deplete on its own — if your AC needs repeated gas charging, it has a leak. We fix the leak first before recharging to prevent recurring issues." },
    ],
    relatedSlugs: ["gas-leak-detection", "gas-leak-rectification", "gas-top-up", "repair"],
  },
  "gas-top-up": {
    heroSubtitle: "Partial refrigerant top-up service when your AC is slightly low on gas — quick service to boost cooling performance.",
    description: "When your AC's cooling is slightly reduced but not completely failed, a gas top-up may be sufficient. Our technician will check the current refrigerant pressure and top up the difference to reach optimal levels. This is a cost-effective solution for minor gas shortfall, though we always recommend leak detection to find and fix the source of gas loss.",
    benefits: [
      "Quick partial refrigerant top-up",
      "Cost-effective for minor gas shortfall",
      "Pressure check before and after",
      "Cooling performance verification",
      "Leak detection recommended before top-up",
    ],
    faqs: [
      { question: "What's the difference between gas top-up and full gas charging?", answer: "Gas top-up adds a smaller quantity of refrigerant to reach optimal pressure. Full gas charging involves complete evacuation and fresh fill — done when gas levels are very low or after leak repair." },
    ],
    relatedSlugs: ["gas-charging", "gas-leak-detection", "repair"],
  },
  "gas-leak-detection": {
    heroSubtitle: "Precision gas leak detection using electronic detectors. Find the exact location of refrigerant leaks in your split AC.",
    description: "Gas leaks in AC systems lead to poor cooling, increased electricity bills, and damage to the compressor if left unaddressed. RSG Refrigeration uses professional electronic refrigerant leak detectors and nitrogen pressure testing to pinpoint exact leak locations in copper pipes, flare joints, valves, and coils. Early detection prevents expensive compressor damage.",
    benefits: [
      "Electronic leak detector for precise location",
      "Nitrogen pressure test for hidden leaks",
      "Flare joint inspection",
      "Valve packing check",
      "Indoor and outdoor coil leak test",
      "Written report of findings",
      "Free quote for leak rectification",
    ],
    commonProblems: [
      "Frost or ice on suction pipe — sign of leak",
      "Hissing sound near AC — gas escaping",
      "AC loses cooling effectiveness gradually",
      "Oily stains around pipe joints — refrigerant oil",
      "AC needs gas charging frequently",
    ],
    faqs: [
      { question: "How do I know if my AC has a refrigerant leak?", answer: "Signs include: AC not cooling despite clean filters, ice on pipes, hissing sound, or oily stains near pipe joints. Call us for a leak detection inspection." },
    ],
    relatedSlugs: ["gas-leak-rectification", "gas-charging", "repair"],
  },
  "gas-leak-rectification": {
    heroSubtitle: "Permanent gas leak repair — fix leaking pipes, flare joints, and valves for long-lasting refrigerant containment.",
    description: "Once a refrigerant leak is detected, prompt rectification is crucial. RSG Refrigeration's technicians repair leaks by remaking flare connections, brazing copper pipe joints, replacing valve packing, and replacing damaged pipe sections. After repair, we pressure test, vacuum, and recharge the system to ensure zero leaks and optimal performance.",
    benefits: [
      "Permanent leak repair, not temporary fixes",
      "Flare joint remaking with proper tools",
      "Copper pipe brazing for major leaks",
      "Valve packing replacement",
      "Post-repair pressure test and vacuum",
      "Fresh gas charge after rectification",
      "90-day warranty on repaired leaks",
    ],
    faqs: [
      { question: "What causes refrigerant leaks in split ACs?", answer: "Common causes include: improper installation (flare joints not made correctly), vibration loosening connections over time, corrosion of copper pipes in coastal/industrial areas, and physical damage to pipes." },
    ],
    relatedSlugs: ["gas-leak-detection", "gas-charging", "installation"],
  },
  "water-leakage-repair": {
    heroSubtitle: "Fix water dripping from your split AC indoor unit — drain cleaning, coil repair, and insulation fix.",
    description: "Water dripping from the indoor unit is one of the most common AC problems. Causes include clogged drain pipes, dirty evaporator coils, insufficient refrigerant (causing ice melt), damaged drain pan, or poor installation pitch. RSG Refrigeration diagnoses and fixes all water leakage causes to permanently resolve indoor unit dripping.",
    benefits: [
      "Root cause diagnosis — not just symptom fix",
      "Drain pipe cleaning and flushing",
      "Evaporator coil cleaning",
      "Drain pan inspection and repair",
      "Pipe insulation check and repair",
      "Drain slope correction if needed",
    ],
    commonProblems: [
      "Clogged condensate drain pipe",
      "Dirty evaporator coil causing excessive condensation",
      "Low refrigerant causing ice formation and melt",
      "Cracked or damaged drain pan",
      "Improper installation — incorrect drain slope",
    ],
    faqs: [
      { question: "Why is water dripping from my split AC?", answer: "The most common cause is a clogged drain pipe. Other causes include dirty coils, low refrigerant (causing ice to form and melt), or a damaged drain pan. We diagnose the exact cause before fixing." },
    ],
    relatedSlugs: ["service", "repair", "gas-charging", "deep-cleaning"],
  },
  "cooling-problem-repair": {
    heroSubtitle: "Diagnose and fix all AC cooling problems — poor cooling, no cooling, high room temperature despite AC running.",
    description: "AC cooling problems have multiple potential causes. RSG Refrigeration performs a systematic diagnosis to identify the exact root cause — whether it's low refrigerant gas, dirty coils, undersized unit for the room, faulty thermostat, PCB issue, or compressor problem. We fix the actual cause rather than applying temporary solutions.",
    benefits: [
      "Systematic multi-point diagnosis",
      "Gas pressure and temperature differential check",
      "Airflow measurement and filter inspection",
      "Thermostat and PCB testing",
      "Compressor performance check",
      "Room heat load assessment",
      "Transparent findings and repair options",
    ],
    commonProblems: [
      "AC running but room not getting cool",
      "AC cooling slowly even after servicing",
      "AC reaching set temperature but room feels warm",
      "Outdoor unit fan not running",
      "Compressor not starting",
      "AC cycling on and off frequently",
    ],
    faqs: [
      { question: "Why is my AC running but not cooling my room?", answer: "Common reasons include: low refrigerant gas, dirty evaporator coils, clogged air filter, outdoor unit issues, compressor problems, or the AC being undersized for the room. We diagnose all possibilities before repair." },
    ],
    relatedSlugs: ["gas-charging", "repair", "service", "compressor-repair"],
  },
  "compressor-replacement": {
    heroSubtitle: "High-quality AC compressor replacement with OEM-compatible units. Full commissioning and gas charging included.",
    description: "The compressor is the heart of your AC system. When it fails completely, replacement is necessary. RSG Refrigeration sources OEM-compatible compressors for all major brands. Our technicians handle complete compressor replacement including refrigerant recovery, old compressor removal, new compressor installation, oil charge, vacuum, and fresh gas charge.",
    benefits: [
      "OEM-compatible replacement compressors",
      "Old compressor safe disposal",
      "Fresh oil charge for new compressor",
      "System vacuum before gas charge",
      "Full gas charging to spec",
      "Compressor warranty included",
      "Test run and performance verification",
    ],
    faqs: [
      { question: "When should I replace my AC compressor vs. buy a new AC?", answer: "If your AC is under 5 years old and otherwise in good condition, compressor replacement is cost-effective. If the AC is older than 8–10 years, a new AC may be more economical in the long run. We'll provide honest advice based on your specific situation." },
    ],
    relatedSlugs: ["compressor-repair", "repair", "gas-charging"],
  },
  "compressor-repair": {
    heroSubtitle: "Expert compressor diagnostic and repair — fix capacitor, thermal overload, and minor compressor issues before recommending replacement.",
    description: "Not all compressor problems require full replacement. RSG Refrigeration performs thorough compressor diagnostics to identify if the issue can be repaired — such as a faulty start capacitor, stuck compressor with slugging, thermal overload issues, or windings partially open. We repair where possible to save cost.",
    benefits: [
      "Thorough compressor diagnostic",
      "Capacitor replacement for startup failure",
      "Thermal overload check and reset",
      "Compressor winding test",
      "Slugged compressor treatment",
      "Cost-effective repair before replacement",
    ],
    faqs: [
      { question: "What are the signs of a faulty compressor?", answer: "Signs include: AC not cooling at all, compressor not starting, humming without starting, tripping breaker, hot liquid line but no cooling, or very high amp draw." },
    ],
    relatedSlugs: ["compressor-replacement", "repair", "electrical-fault-repair"],
  },
  "indoor-coil-replacement": {
    heroSubtitle: "Replace damaged evaporator coils to restore efficient cooling. For cracked, corroded, or irreparably leaking coils.",
    description: "When the indoor evaporator coil is severely damaged, corroded, or has multiple leak points that can't be individually repaired, replacement is the right solution. RSG Refrigeration sources compatible evaporator coil assemblies and performs complete replacement with system vacuum and recharge.",
    benefits: [
      "Compatible coil sourcing for all brands",
      "Complete old coil removal",
      "New coil installation with proper connections",
      "Brazing and flaring as required",
      "System vacuum and fresh gas charge",
      "Full performance verification",
    ],
    faqs: [
      { question: "How do I know if my evaporator coil needs replacement?", answer: "If the coil has multiple refrigerant leak points, severe corrosion, physical damage, or if repair cost exceeds replacement cost, replacement is recommended. Our technician will advise honestly." },
    ],
    relatedSlugs: ["indoor-coil-repair", "gas-charging", "repair"],
  },
  "indoor-coil-repair": {
    heroSubtitle: "Repair minor leaks and damage in split AC evaporator coils. Brazing and sealing for extended coil life.",
    description: "Minor leaks in the evaporator coil can often be repaired by brazing or using approved leak sealants, saving the cost of full coil replacement. RSG Refrigeration's technicians assess each coil leak individually to determine repairability and perform the appropriate fix.",
    benefits: [
      "Leak assessment before repair",
      "Brazing for copper coil leaks",
      "Cost saving vs. full replacement",
      "Post-repair pressure test",
      "System recharge after repair",
    ],
    faqs: [
      { question: "Can all evaporator coil leaks be repaired?", answer: "Minor single-point leaks can usually be repaired by brazing. Multiple leaks, severe corrosion, or aluminum coils with pinhole leaks may require replacement. We'll assess and advise honestly." },
    ],
    relatedSlugs: ["indoor-coil-replacement", "gas-leak-detection", "gas-charging"],
  },
  "outdoor-condenser-repair": {
    heroSubtitle: "Fix outdoor unit condenser coil problems — bent fins, corrosion, minor leaks, and restricted airflow.",
    description: "The outdoor condenser coil is exposed to dust, grime, and weather. RSG Refrigeration repairs bent condenser fins, removes debris blocking airflow, fixes minor refrigerant leaks in condenser coils, and treats corrosion to extend coil life.",
    benefits: [
      "Fin straightening for improved airflow",
      "Deep cleaning of condenser coil",
      "Minor leak brazing",
      "Corrosion treatment and coating",
      "Performance check after repair",
    ],
    faqs: [
      { question: "Why is my outdoor unit overheating?", answer: "Common causes: blocked condenser fins, dirty coils, low refrigerant, faulty fan motor, or poor outdoor unit placement with insufficient clearance. We diagnose and fix all causes." },
    ],
    relatedSlugs: ["outdoor-condenser-replacement", "jet-wash", "fan-motor-repair"],
  },
  "outdoor-condenser-replacement": {
    heroSubtitle: "Replace severely damaged outdoor condenser coils with compatible OEM units for restored efficiency.",
    description: "When outdoor condenser coils are severely corroded, physically damaged, or have multiple leak points, replacement is necessary. RSG Refrigeration sources compatible condenser coil assemblies and performs complete replacement.",
    benefits: [
      "OEM-compatible condenser sourcing",
      "Complete old coil removal",
      "New coil installation",
      "System recharge and test",
      "Improved heat rejection efficiency",
    ],
    faqs: [
      { question: "How long does condenser coil replacement take?", answer: "Outdoor condenser coil replacement typically takes 3–5 hours including gas recovery, coil replacement, vacuum, and recharge." },
    ],
    relatedSlugs: ["outdoor-condenser-repair", "gas-charging", "repair"],
  },
  "fan-motor-repair": {
    heroSubtitle: "Diagnose and repair indoor blower motor and outdoor fan motor issues — fix bearings, windings, and connections.",
    description: "Fan motor problems cause reduced airflow, poor cooling, and unusual noises. RSG Refrigeration repairs indoor blower motors and outdoor fan motors — fixing bearing issues, winding faults, capacitor failures, and poor electrical connections.",
    benefits: [
      "Motor winding test (short/open check)",
      "Bearing inspection and lubrication",
      "Capacitor check and replacement",
      "Fan blade balance check",
      "Post-repair performance verification",
    ],
    commonProblems: [
      "Indoor unit fan not running — no airflow",
      "Outdoor unit fan running slowly",
      "Loud bearing noise from fan motor",
      "Fan running intermittently",
      "Fan blade hitting something inside",
    ],
    faqs: [
      { question: "How do I know if my AC fan motor is faulty?", answer: "Signs include: no airflow despite AC running, grinding or squealing noise, fan spinning slowly, or fan not starting at all. The compressor may still run but cooling will be very poor." },
    ],
    relatedSlugs: ["fan-motor-replacement", "repair", "electrical-fault-repair"],
  },
  "fan-motor-replacement": {
    heroSubtitle: "Replace failed indoor or outdoor fan motors with compatible units. Full testing and commissioning included.",
    description: "When fan motor repair is not feasible, replacement is the solution. RSG Refrigeration sources compatible fan motors for all AC brands and models, performs correct replacement, and verifies performance before completing the job.",
    benefits: [
      "Compatible motor sourcing for all brands",
      "Correct mounting and wiring",
      "Fan blade fitting and balancing",
      "Post-replacement performance test",
      "Motor warranty included",
    ],
    faqs: [
      { question: "Is it worth replacing the fan motor or should I buy a new AC?", answer: "Fan motor replacement is usually cost-effective if the AC is less than 7–8 years old. We'll provide an honest recommendation based on your AC's condition and age." },
    ],
    relatedSlugs: ["fan-motor-repair", "repair", "electrical-fault-repair"],
  },
  "pcb-repair": {
    heroSubtitle: "Expert PCB repair for split AC — component-level diagnosis and repair of control boards for all brands.",
    description: "AC PCBs (Printed Circuit Boards) are expensive to replace but can often be repaired at component level. RSG Refrigeration's electronics-trained technicians perform component-level PCB repair — replacing failed capacitors, MOSFETs, relays, and other components. This can save ₹3,000–₹6,000 compared to PCB replacement.",
    benefits: [
      "Component-level diagnosis with multimeter",
      "Burnt track repair and patching",
      "Failed component identification and replacement",
      "Capacitor, MOSFET, relay replacement",
      "Full functional test after repair",
      "Cost saving vs. full PCB replacement",
    ],
    commonProblems: [
      "AC not starting — PCB fault",
      "Error codes on display",
      "Voltage fluctuation damage to PCB",
      "Burnt PCB due to lightning or power surge",
      "Intermittent operation or shutdowns",
    ],
    faqs: [
      { question: "Can all PCB faults be repaired?", answer: "Many PCB faults can be repaired at component level. However, if the PCB has extensive burning, physical damage, or if main ICs are failed and unavailable, replacement may be necessary. We diagnose before quoting." },
    ],
    relatedSlugs: ["pcb-replacement", "repair", "electrical-fault-repair"],
  },
  "pcb-replacement": {
    heroSubtitle: "Replace irreparable split AC PCBs with compatible control boards. Full functional test and commissioning after replacement.",
    description: "When PCB repair is not feasible, replacement with a compatible control board is the solution. RSG Refrigeration sources OEM-compatible PCBs for all major AC brands and performs complete replacement with full functional testing.",
    benefits: [
      "OEM-compatible PCB sourcing",
      "Correct installation and wiring",
      "Full functional test after installation",
      "PCB configuration and setup",
      "Warranty on replacement PCB",
    ],
    faqs: [
      { question: "How long does PCB replacement take?", answer: "PCB replacement typically takes 2–3 hours including sourcing (if not in stock), installation, and testing. If the PCB needs to be ordered, it may take 1–2 business days." },
    ],
    relatedSlugs: ["pcb-repair", "repair", "electrical-fault-repair"],
  },
  "capacitor-replacement": {
    heroSubtitle: "Fast capacitor replacement for split AC compressors and fan motors. Quick fix for startup failures.",
    description: "Capacitors are one of the most commonly failed AC components. A failed start or run capacitor causes the compressor or fan motor to not start, resulting in the AC running but not cooling or not starting at all. RSG Refrigeration carries common capacitor ratings in stock for fast on-site replacement.",
    benefits: [
      "Fast diagnosis with capacitor tester",
      "Stock of common capacitor ratings",
      "Same-visit replacement in most cases",
      "Compressor and fan capacitor both covered",
      "Dual capacitor replacement if needed",
      "Post-replacement performance verification",
    ],
    faqs: [
      { question: "What are signs of a failed AC capacitor?", answer: "Signs: AC compressor/fan not starting, humming sound when trying to start, AC trips after a few seconds, outdoor unit not running. A bulging or leaking capacitor is visually identifiable." },
    ],
    relatedSlugs: ["electrical-fault-repair", "repair", "fan-motor-repair"],
  },
  "sensor-replacement": {
    heroSubtitle: "Replace faulty thermistor and temperature sensors causing erratic cooling, error codes, and shutdown issues.",
    description: "AC temperature sensors (thermistors) monitor indoor air and evaporator coil temperatures to control compressor operation. A faulty sensor causes erratic behavior — wrong temperature readings, premature shutdowns, or error codes. RSG Refrigeration replaces faulty sensors quickly using compatible replacements.",
    benefits: [
      "Correct sensor identification",
      "Compatible sensor replacement",
      "Eliminates erratic temperature control",
      "Clears sensor-related error codes",
      "Fast on-site fix in most cases",
    ],
    faqs: [
      { question: "What causes AC sensors to fail?", answer: "Sensors degrade over time, can be damaged by power surges, or fail due to moisture exposure. They typically last 5–8 years before degradation affects performance." },
    ],
    relatedSlugs: ["repair", "pcb-repair", "electrical-fault-repair"],
  },
  "deep-cleaning": {
    heroSubtitle: "Thorough split AC deep cleaning — indoor unit, outdoor unit, filters, coils, fan, and drain pan for peak hygiene and efficiency.",
    description: "Our deep cleaning service goes beyond basic filter cleaning. We thoroughly clean the indoor unit including the evaporator coil, fan blower, drain pan, and all accessible internals. The outdoor unit condenser coil, fan, and cabinet are also cleaned. This service improves cooling efficiency, eliminates bad odours, and reduces health risks from mold and bacteria.",
    benefits: [
      "Complete indoor unit disassembly-style cleaning",
      "Evaporator coil foam cleaning",
      "Fan blower blade-by-blade cleaning",
      "Drain pan scrubbing and disinfection",
      "Air filter washing and drying",
      "Outdoor condenser cleaning",
      "Improved cooling efficiency",
      "Elimination of mold and bacteria",
    ],
    faqs: [
      { question: "How often should I deep clean my AC?", answer: "Deep cleaning is recommended annually or every 6 months in dusty or high-humidity environments. If you notice bad odour from the AC, it's time for a deep clean." },
    ],
    relatedSlugs: ["chemical-cleaning", "jet-wash", "service"],
  },
  "chemical-cleaning": {
    heroSubtitle: "Chemical wash service using food-grade cleaning agents for heavy dirt, mold, and bio-deposits from AC internals.",
    description: "Chemical cleaning uses specially formulated, food-safe cleaning agents to dissolve and remove stubborn deposits, mold, algae, and bio-buildup from the evaporator coil and drain system. This is more effective than water washing alone for ACs that haven't been serviced for long periods or have significant mold growth.",
    benefits: [
      "Dissolves stubborn coil deposits",
      "Kills mold and bacteria",
      "Removes algae from drain pan",
      "Improves airflow and cooling",
      "Food-grade safe chemicals used",
      "Thorough rinse after chemical treatment",
      "Deodorizes the AC system",
    ],
    faqs: [
      { question: "Is chemical cleaning safe for my AC?", answer: "Yes. We use AC-specific, food-grade chemical cleaners that are safe for coil materials and drain components. We thoroughly rinse after chemical treatment." },
    ],
    relatedSlugs: ["deep-cleaning", "jet-wash", "service"],
  },
  "jet-wash": {
    heroSubtitle: "High-pressure jet wash of split AC outdoor condenser coils to clear heavy dust, grime, and debris.",
    description: "Outdoor condenser coils accumulate heavy dust, cottonwood, insects, and debris that severely restrict airflow and heat rejection efficiency. High-pressure jet washing removes this buildup effectively — restoring the condenser's heat exchange capacity and reducing compressor load.",
    benefits: [
      "Removes heavy condenser deposits",
      "Restores heat rejection efficiency",
      "Reduces compressor operating pressure",
      "Lowers electricity consumption",
      "Extends compressor life",
      "Quick 1-hour service",
    ],
    faqs: [
      { question: "How often should outdoor condenser be jet washed?", answer: "Annually, or before the summer season. If you notice the AC not cooling efficiently despite correct gas charge, a dirty condenser could be the cause." },
    ],
    relatedSlugs: ["deep-cleaning", "outdoor-condenser-repair", "service"],
  },
  "electrical-fault-repair": {
    heroSubtitle: "Diagnose and repair electrical faults in split ACs — burnt wiring, loose connections, and power supply issues.",
    description: "Electrical faults in AC systems can range from simple loose connections to burnt wiring, failed contactors, tripped protection devices, or power supply problems. RSG Refrigeration performs safe electrical diagnosis and repair following proper safety standards.",
    benefits: [
      "Safe isolation before diagnosis",
      "Multimeter and clamp meter testing",
      "Burnt wire identification and replacement",
      "Contactor and relay check",
      "Proper electrical grounding verification",
      "Safety tested before power restoration",
    ],
    commonProblems: [
      "AC tripping the MCB/circuit breaker",
      "AC getting earth leakage",
      "AC not starting due to power fault",
      "Burnt smell from AC",
      "Intermittent power loss to outdoor unit",
    ],
    faqs: [
      { question: "Why does my AC keep tripping the circuit breaker?", answer: "Common causes: compressor drawing high current, short circuit in wiring, failed capacitor, grounding fault, or overloaded circuit. We diagnose and fix the root cause safely." },
    ],
    relatedSlugs: ["pcb-repair", "capacitor-replacement", "repair"],
  },
  amc: {
    heroSubtitle: "Annual Maintenance Contracts for split ACs — scheduled service visits, priority support, and repair discounts.",
    description: "RSG Refrigeration's AC Annual Maintenance Contract (AMC) provides peace of mind for homeowners and businesses. Our AMC includes 2 scheduled service visits per year, priority response for breakdowns, discounts on parts and labor, and a dedicated service record. Keep your AC running efficiently year-round with our AMC plan.",
    benefits: [
      "2 scheduled service visits per year",
      "Pre-summer service included",
      "Priority emergency response",
      "20% discount on spare parts",
      "10% discount on repair labor",
      "Dedicated service record maintained",
      "Filter replacements at cost",
      "Annual performance report",
    ],
    process: [
      { step: 1, title: "AMC Registration", desc: "Register your AC details and sign the AMC agreement." },
      { step: 2, title: "First Service Visit", desc: "Pre-summer service — complete cleaning, check-up, and gas verification." },
      { step: 3, title: "Second Service Visit", desc: "Pre-winter check-up and servicing." },
      { step: 4, title: "Priority Support", desc: "Year-round priority service for any breakdowns under AMC." },
    ],
    faqs: [
      { question: "What does the split AC AMC plan include?", answer: "Our AMC includes: 2 service visits (pre-summer and mid-year), priority breakdown response, 20% discount on spare parts, 10% discount on labor charges, and a maintained service record for each AC unit." },
      { question: "Can I buy AMC for multiple ACs?", answer: "Yes, we offer multi-unit AMC plans with additional discounts for 3+ AC units. Contact us for a customized multi-unit AMC quote." },
    ],
    relatedSlugs: ["service", "deep-cleaning", "repair"],
  },
  "copper-pipe-installation": {
    heroSubtitle: "Advance copper pipeline installation services for split ACs. High-quality materials for perfect cooling.",
    description: "Proper copper piping is essential for the efficient functioning of your split AC. RSG Refrigeration provides advance copper pipe installation services using gauge-tested, heavy-duty copper pipes and high-density insulation to prevent sweating and gas leakage. Whether it's a new installation, under-construction concealing, or replacing old corroded pipes, we ensure perfection.",
    benefits: [
      "Premium gauge-tested copper pipes",
      "High-density nitrile rubber insulation",
      "Leak-proof brazing and flaring",
      "Concealed and surface wiring options",
      "Pressure testing with nitrogen",
      "Long-lasting durability",
    ],
    faqs: [
      { question: "Why is good quality copper pipe important?", answer: "Low-quality copper pipes can develop micro-leaks leading to frequent gas charging, or they can corrode quickly. Good quality, proper gauge copper pipes ensure your AC holds gas for years and runs efficiently." },
      { question: "Do you do concealed copper piping?", answer: "Yes, we do concealed copper piping for under-construction houses and renovations before the plastering is done." },
    ],
    relatedSlugs: ["installation", "gas-charging"],
  },
};

export async function generateStaticParams() {
  return SPLIT_AC_SERVICES.map((svc) => ({ slug: svc.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SPLIT_AC_SERVICES.find((s) => s.slug === slug);
  if (!service) return {};

  return generatePageMetadata({
    title: `${service.title} in Hyderabad — RSG Refrigeration`,
    description: `Professional ${service.title.toLowerCase()} in Hyderabad. ${service.description.slice(0, 120)}... Call RSG Refrigeration: 7815901302.`,
    path: `/services/split-ac/${slug}`,
    keywords: service.keywords,
  });
}

export default async function SplitACServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SPLIT_AC_SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const content = SERVICE_CONTENT[slug];
  if (!content) notFound();

  const breadcrumbs = [
    { name: "Services", href: "/services" },
    { name: "Split AC", href: "/services/split-ac" },
    { name: service.title, href: `/services/split-ac/${slug}` },
  ];

  const relatedServices = content.relatedSlugs?.map((s) => {
    const rel = SPLIT_AC_SERVICES.find((svc) => svc.slug === s);
    return rel ? { title: rel.title, slug: s } : null;
  }).filter(Boolean) as { title: string; slug: string }[];

  const schemaData = [
    serviceSchema(service.title, service.description, `/services/split-ac/${slug}`, service.priceRange),
    breadcrumbSchema([
      { name: "Services", url: "/services" },
      { name: "Split AC", url: "/services/split-ac" },
      { name: service.title, url: `/services/split-ac/${slug}` },
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
        category="Split AC Services"
        categorySlug="split-ac"
      />
    </>
  );
}
