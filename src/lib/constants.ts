export const BUSINESS = {
  name: "RSG Refrigeration",
  fullName: "Royal Refrigeration System Group",
  tagline: "Fast, Reliable & Affordable AC Services in Hyderabad",
  phone: "7815901302",
  phoneDisplay: "+91 78159 01302",
  whatsapp: "917815901302",
  email: "rsgrefrigeration@gmail.com",
  address: {
    street: "Bandlaguda Jagir Rd, Dwarka Nagar, Sai Baba Nagar, Vikas Nagar",
    area: "Bandlaguda Jagir",
    city: "Hyderabad",
    state: "Telangana",
    pincode: "500091",
    country: "India",
    full: "Bandlaguda Jagir Rd, Dwarka Nagar, Sai Baba Nagar, Vikas Nagar, Bandlaguda Jagir, Hyderabad, Telangana 500091",
  },
  coordinates: {
    lat: 17.3433,
    lng: 78.3975,
  },
  domain: "rsgrefrigeration.com",
  siteUrl: "https://rsgrefrigeration.com",
  googleMapsUrl: "https://maps.google.com/?q=Bandlaguda+Jagir+Hyderabad+Telangana",
  whatsappUrl: "https://wa.me/917815901302",
  callUrl: "tel:7815901302",
  workingHours: "Mon–Sun: 8:00 AM – 8:00 PM",
  established: "2018",
  experience: "7+",
  customersServed: "5000+",
  technicianCount: "20+",
  avgRating: 4.9,
  reviewCount: 320,
  socialMedia: {
    facebook: "https://facebook.com/rsgrefrigeration",
    instagram: "https://instagram.com/rsgrefrigeration",
    twitter: "https://twitter.com/rsgrefrigeration",
  },
} as const;

export const COLORS = {
  primary: "#0B1F66",
  secondary: "#F5A623",
  accent: "#22C55E",
  background: "#FFFFFF",
  text: "#111827",
} as const;

export const BRANDS = [
  "Daikin",
  "LG",
  "Samsung",
  "Voltas",
  "Blue Star",
  "Carrier",
  "Hitachi",
  "Panasonic",
  "Mitsubishi",
  "O General",
  "Haier",
  "Lloyd",
] as const;

export const PRIMARY_AREAS = [
  "Bandlaguda Jagir",
  "Rajendranagar",
  "Attapur",
  "Sun City",
  "Hydershakote",
  "Kismatpur",
  "Narsingi",
  "Kokapet",
  "Manikonda",
  "Gachibowli",
  "Financial District",
  "Madhapur",
  "Hitech City",
  "Kondapur",
] as const;

export const ALL_AREAS = {
  north: [
    "Bandlaguda Jagir", "Suncity", "Narsingi", "Kokapet", "Gandipet",
    "Puppalaguda", "Manikonda", "Alkapur Township", "Khajaguda",
    "Nanakramguda", "Financial District", "Raidurg", "Gachibowli",
    "Tellapur", "Kondapur", "Hitech City", "Madhapur",
  ],
  east: [
    "Bandlaguda Jagir", "Suncity", "Attapur", "Upperpally", "Mehdipatnam",
    "Langer Houz", "Tolichowki", "Shaikpet", "Masab Tank", "Lakdikapul",
    "Khairatabad", "Somajiguda", "Banjara Hills", "Jubilee Hills",
    "Film Nagar", "Yousufguda", "Ameerpet", "Begumpet",
  ],
  south: [
    "Bandlaguda Jagir", "Hydershakote", "Sun City", "Kismatpur",
    "Appa Junction", "Budwel", "Rajendranagar", "Aramghar",
    "Shamshabad", "Himayat Sagar", "Moinabad", "Chevella Road Area",
  ],
  west: [
    "Bandlaguda Jagir", "Osman Nagar", "Tellapur", "Lingampally",
    "Serilingampally", "Chandanagar", "Hafeezpet", "Miyapur",
    "Bachupally", "Patancheru", "Kollur", "Velimela",
  ],
} as const;

export const TRUST_BADGES = [
  { icon: "Clock", label: "Same Day Service", desc: "Quick response within hours" },
  { icon: "ShieldCheck", label: "Verified Technicians", desc: "Background-checked experts" },
  { icon: "Wrench", label: "Multi Brand Support", desc: "All major AC brands" },
  { icon: "Package", label: "Genuine Spare Parts", desc: "OEM quality components" },
  { icon: "Phone", label: "Emergency Service", desc: "24/7 emergency support" },
] as const;

export const WHY_CHOOSE = [
  {
    icon: "Star",
    title: "100% Customer Satisfaction",
    desc: "We don't rest until you're completely satisfied with our service quality.",
  },
  {
    icon: "Users",
    title: "Experienced Technicians",
    desc: "7+ years of hands-on experience with all AC brands and models.",
  },
  {
    icon: "IndianRupee",
    title: "Affordable Pricing",
    desc: "Transparent, competitive pricing with no hidden charges.",
  },
  {
    icon: "Zap",
    title: "Quick Response",
    desc: "Same-day service available across all covered areas in Hyderabad.",
  },
  {
    icon: "Award",
    title: "Quality Workmanship",
    desc: "Premium quality repairs using genuine parts with service warranty.",
  },
  {
    icon: "Eye",
    title: "Transparent Charges",
    desc: "Upfront pricing estimates before we start any work.",
  },
  {
    icon: "HeartHandshake",
    title: "Emergency Support",
    desc: "Round-the-clock emergency AC repair support when you need it most.",
  },
  {
    icon: "CalendarCheck",
    title: "AMC Services",
    desc: "Annual Maintenance Contracts to keep your AC running efficiently year-round.",
  },
] as const;
