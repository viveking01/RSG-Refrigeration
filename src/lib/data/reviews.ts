export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  text: string;
  service: string;
  avatar?: string;
}

export const REVIEWS: Review[] = [
  {
    id: "r1",
    name: "Ramesh Kumar",
    location: "Bandlaguda Jagir",
    rating: 5,
    date: "2024-05-10",
    text: "Excellent service! My 1.5 ton LG split AC was not cooling at all. The RSG technician came within an hour, diagnosed a gas leak, fixed it and recharged the gas. My AC is now cooling perfectly. Very honest and professional team!",
    service: "Gas Leak Repair & Charging",
  },
  {
    id: "r2",
    name: "Priya Sharma",
    location: "Kokapet",
    rating: 5,
    date: "2024-04-22",
    text: "Very happy with the AC installation service. They installed my new Daikin 2 ton split AC perfectly. The mounting is clean, wiring is neat, and they explained the usage tips. Highly recommend RSG Refrigeration!",
    service: "Split AC Installation",
  },
  {
    id: "r3",
    name: "Suresh Reddy",
    location: "Gachibowli",
    rating: 5,
    date: "2024-05-15",
    text: "My Samsung inverter AC compressor failed. RSG Refrigeration replaced it at a reasonable price compared to other quotes I received. The work is under warranty and the AC has been working great since. Professional service!",
    service: "Compressor Replacement",
  },
  {
    id: "r4",
    name: "Aarti Patel",
    location: "Narsingi",
    rating: 5,
    date: "2024-03-18",
    text: "Quick response and transparent pricing. I called them for AC servicing and they came the same day. The technician was very professional, cleaned the AC thoroughly including the outdoor unit. Will definitely use again.",
    service: "AC Deep Cleaning",
  },
  {
    id: "r5",
    name: "Mohammed Irfan",
    location: "Hitech City",
    rating: 5,
    date: "2024-05-02",
    text: "We have an AMC for 3 ACs in our office. RSG Refrigeration has been very reliable. They come for scheduled maintenance on time and whenever we have any issue they respond quickly. Best AC service in Hyderabad!",
    service: "AMC Service",
  },
  {
    id: "r6",
    name: "Kavitha Nair",
    location: "Manikonda",
    rating: 4,
    date: "2024-04-08",
    text: "Good service overall. My Voltas AC was making a rattling noise. The technician identified a loose fan blade and fixed it on the spot. Reasonable charges. Only slight delay in arrival but worth the wait.",
    service: "AC Repair",
  },
  {
    id: "r7",
    name: "Venkateswara Rao",
    location: "Rajendranagar",
    rating: 5,
    date: "2024-06-01",
    text: "Outstanding service! Blue Star AC PCB was damaged due to voltage fluctuation. RSG technician repaired the PCB at a fraction of what the brand service centre quoted for replacement. Saved ₹6000! Very skilled team.",
    service: "PCB Repair",
  },
  {
    id: "r8",
    name: "Sunita Verma",
    location: "Attapur",
    rating: 5,
    date: "2024-05-28",
    text: "Called for AC chemical cleaning. The technician arrived on time with all equipment. Did a thorough job — the AC smells fresh and cools much better now. Very satisfied with RSG Refrigeration's service quality.",
    service: "Chemical Cleaning",
  },
  {
    id: "r9",
    name: "Kiran Babu",
    location: "Financial District",
    rating: 5,
    date: "2024-04-14",
    text: "Very professional team. Had a Carrier cassette AC issue in our office. RSG's technician was knowledgeable, fixed the drainage problem quickly and also serviced the unit. Will definitely recommend to colleagues.",
    service: "Cassette AC Repair",
  },
  {
    id: "r10",
    name: "Anitha Reddy",
    location: "Kondapur",
    rating: 5,
    date: "2024-06-05",
    text: "Best AC service I have experienced in Hyderabad. The team is honest, skilled, and their pricing is transparent. They fixed my O General AC that wasn't cooling properly. Now it's working like new. 10/10!",
    service: "AC Cooling Problem Repair",
  },
  {
    id: "r11",
    name: "Rajesh Tiwari",
    location: "Madhapur",
    rating: 5,
    date: "2024-05-19",
    text: "Excellent, fast service! AC stopped working on a hot summer afternoon. Called RSG and a technician arrived within 45 minutes. Identified a faulty capacitor, replaced it immediately. AC running perfectly now. Great team!",
    service: "Capacitor Replacement",
  },
  {
    id: "r12",
    name: "Deepa Krishnamurthy",
    location: "Hydershakote",
    rating: 5,
    date: "2024-03-30",
    text: "Professional and courteous service. The technicians wear proper uniforms, carry ID cards, and explain the problem clearly before doing any work. Very trustworthy. My Hitachi AC has been running perfectly since their service.",
    service: "AC Service & Repair",
  },
];

export const AGGREGATE_RATING = {
  ratingValue: 4.9,
  ratingCount: 320,
  reviewCount: 320,
};
