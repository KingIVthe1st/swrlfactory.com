// Navigation
export const NAV_LINKS = [
  { label: "Menu", href: "/menu" },
  { label: "Our Story", href: "/our-story" },
  { label: "Locations", href: "/locations" },
  { label: "Franchise", href: "/franchise" },
  { label: "Contact", href: "/contact" },
];

// Menu
export type MenuCategory =
  | "All"
  | "Signature Stuffed"
  | "Classic"
  | "Seasonal"
  | "Drinks";

export interface MenuItem {
  name: string;
  category: MenuCategory;
  price: number;
  tagline: string;
  description: string;
  ingredients: string[];
  image: string;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    name: "Oreo Stuff'd",
    category: "Signature Stuffed",
    price: 7.99,
    tagline: "Cookie chaos, perfected.",
    description:
      "Our most iconic creation — a warm, pillowy cinnamon roll loaded with crushed Oreo cookies, whipped cream filling, and finished with a glossy cookies-and-cream drizzle.",
    ingredients: ["Cinnamon dough", "Crushed Oreos", "Whipped cream filling", "Cookies & cream glaze"],
    image: "/images/oreo-roll.png",
  },
  {
    name: "Cherry Cobbler Stuff'd",
    category: "Signature Stuffed",
    price: 7.99,
    tagline: "Bold cherry. Zero restraint.",
    description:
      "Recklessly generous cherry compote tucked inside a buttery cinnamon roll, topped with streusel crumble and a warm vanilla glaze. This one hits different.",
    ingredients: ["Cinnamon dough", "Cherry compote", "Streusel crumble", "Vanilla glaze"],
    image: "/images/cherry-cobbler.png",
  },
  {
    name: "Strawberry Cheesecake Stuff'd",
    category: "Signature Stuffed",
    price: 8.49,
    tagline: "Dessert royalty. Bow down.",
    description:
      "Dessert royalty. A soft cinnamon roll bursting with real cream cheese filling and fresh strawberry jam, crowned with a tangy cheesecake drizzle.",
    ingredients: ["Cinnamon dough", "Cream cheese filling", "Strawberry jam", "Cheesecake glaze"],
    image: "/images/strawberry-roll.jpg",
  },
  {
    name: "Cookies & Cream Dream",
    category: "Signature Stuffed",
    price: 7.99,
    tagline: "Double stacked. Unreal.",
    description:
      "Double the cookies, double the dream. Layers of Oreo cream and chocolate cookie crumbs swirled through our signature dough, finished with dark chocolate ganache.",
    ingredients: ["Cinnamon dough", "Oreo cream", "Chocolate cookie crumbs", "Dark chocolate ganache"],
    image: "/images/oreo-roll.png",
  },
  {
    name: "Cinnamon Sugar Classic",
    category: "Classic",
    price: 5.99,
    tagline: "Where it all started.",
    description:
      "The original. The standard. Hand-laminated dough, brown sugar, real cinnamon, cream cheese icing. No gimmicks — just a flawless roll that earned its name.",
    ingredients: ["Hand-laminated dough", "Brown sugar", "Ground cinnamon", "Cream cheese icing"],
    image: "/images/classic-roll.jpg",
  },
  {
    name: "Caramel Pecan Drizzle",
    category: "Classic",
    price: 6.99,
    tagline: "Rich. Crunchy. Dangerous.",
    description:
      "Indulgent and nutty. Our classic roll blanketed in house-made salted caramel sauce and topped with toasted Georgia pecans for a satisfying crunch.",
    ingredients: ["Cinnamon dough", "Salted caramel sauce", "Toasted Georgia pecans", "Vanilla glaze"],
    image: "/images/caramel-pecan-roll.jpg",
  },
  {
    name: "Pumpkin Spice Swirl",
    category: "Seasonal",
    price: 7.49,
    tagline: "Fall, but make it extra.",
    description:
      "Fall in a roll. Pumpkin puree and warm spices swirled through our signature dough, glazed with maple cream cheese frosting and a dusting of nutmeg.",
    ingredients: ["Cinnamon dough", "Pumpkin puree", "Pumpkin spice blend", "Maple cream cheese frosting", "Nutmeg"],
    image: "/images/pumpkin-roll.jpg",
  },
  {
    name: "SWRL Iced Coffee",
    category: "Drinks",
    price: 4.99,
    tagline: "Cold brew, warm vibes.",
    description:
      "Our house cold brew poured over ice and finished with sweet cream and a hint of cinnamon. The perfect partner to any roll on the menu.",
    ingredients: ["House cold brew", "Sweet cream", "Cinnamon", "Ice"],
    image: "/images/iced-coffee.jpg",
  },
  {
    name: "Fresh Lemonade",
    category: "Drinks",
    price: 3.99,
    tagline: "Squeezed. Never faked.",
    description:
      "Hand-squeezed daily. Sharp, honest, and perfectly balanced — the reset button between rolls.",
    ingredients: ["Fresh-squeezed lemons", "Cane sugar", "Filtered water", "Ice"],
    image: "/images/oreo-roll.png",
  },
];

export const MENU_CATEGORIES: MenuCategory[] = [
  "All",
  "Signature Stuffed",
  "Classic",
  "Seasonal",
  "Drinks",
];

// Locations
export interface Location {
  name: string;
  city: string;
  state: string;
  address: string;
  phone: string;
  hours: string;
  image: string;
  comingSoon: boolean;
  mapsUrl: string;
}

export const LOCATIONS: Location[] = [
  {
    name: "SWRL Factory Charlotte",
    city: "Charlotte",
    state: "NC",
    address: "1234 Trade Street, Charlotte, NC 28202",
    phone: "(704) 555-SWRL",
    hours: "Mon–Sat 7AM–9PM · Sun 8AM–6PM",
    image: "/images/oreo-roll.png",
    comingSoon: false,
    mapsUrl: "https://maps.google.com/?q=1234+Trade+Street+Charlotte+NC+28202",
  },
  {
    name: "SWRL Factory Atlanta",
    city: "Atlanta",
    state: "GA",
    address: "Coming Soon",
    phone: "",
    hours: "",
    image: "/images/oreo-roll.png",
    comingSoon: true,
    mapsUrl: "",
  },
  {
    name: "SWRL Factory Houston",
    city: "Houston",
    state: "TX",
    address: "Coming Soon",
    phone: "",
    hours: "",
    image: "/images/oreo-roll.png",
    comingSoon: true,
    mapsUrl: "",
  },
  {
    name: "SWRL Factory Dallas",
    city: "Dallas",
    state: "TX",
    address: "Coming Soon",
    phone: "",
    hours: "",
    image: "/images/oreo-roll.png",
    comingSoon: true,
    mapsUrl: "",
  },
];

// FAQs
export interface FAQ {
  question: string;
  answer: string;
}

export const FAQS: FAQ[] = [
  {
    question: "Do you ship?",
    answer:
      "Not yet — but trust us, it's coming. We're building a shipping program that does our rolls justice. Follow @swrlfactory so you're first in line.",
  },
  {
    question: "Can I book catering?",
    answer:
      "Absolutely! We love bringing SWRL to your event. Whether it's a corporate breakfast, birthday party, or wedding, reach out through our Contact page and our catering team will get back to you within 24 hours.",
  },
  {
    question: "How do I franchise?",
    answer:
      "We're actively growing our franchise family! Head to our Franchise page to learn about investment levels, territory availability, and the support we provide. Fill out the inquiry form and our development team will be in touch.",
  },
  {
    question: "Are you hiring?",
    answer:
      "If you're fast, friendly, and can't fake enthusiasm — yeah, we want to talk. Hit us up on the Contact page and tell us why you belong at SWRL.",
  },
  {
    question: "Do you have gluten-free options?",
    answer:
      "We currently bake in a shared kitchen environment, so we cannot guarantee gluten-free products are free from cross-contamination. We're actively developing a dedicated gluten-free roll — follow us on social for updates.",
  },
];

// Franchise
export interface FranchiseStat {
  label: string;
  value: string;
}

export const FRANCHISE_STATS: FranchiseStat[] = [
  { label: "Estimated Investment", value: "$150K – $300K" },
  { label: "Signature Flavors", value: "12+" },
  { label: "Target ROI Timeline", value: "18 months" },
];

export interface FranchiseBenefit {
  title: string;
  description: string;
  icon: string;
}

export const FRANCHISE_BENEFITS: FranchiseBenefit[] = [
  {
    title: "Proven Recipes & Training",
    description:
      "Master our signature dough and stuffing techniques with hands-on training at our Charlotte flagship before you open your doors.",
    icon: "📋",
  },
  {
    title: "Store Design & Buildout",
    description:
      "Our in-house design team provides full store layout plans, fixture specs, and brand-approved materials so your space looks and feels like SWRL.",
    icon: "🏗️",
  },
  {
    title: "Marketing Playbook",
    description:
      "Launch with confidence using our turnkey marketing system — social templates, grand opening strategy, and ongoing campaign support.",
    icon: "📣",
  },
  {
    title: "Supply Chain Access",
    description:
      "We've already vetted the suppliers, locked in the pricing, and built the relationships. You plug in and go — better ingredients, lower costs, zero guesswork.",
    icon: "🚚",
  },
  {
    title: "Operational Support",
    description:
      "From hiring guides to POS setup, our franchise operations team is with you from day one through every milestone.",
    icon: "🛠️",
  },
  {
    title: "Territory Exclusivity",
    description:
      "Your market is yours. We carve out a territory so you can build your customer base without another SWRL owner next door. Room to breathe, room to grow.",
    icon: "📍",
  },
];

export const INVESTMENT_BUDGETS = [
  { label: "Under $150K", value: "under-150k" },
  { label: "$150K – $200K", value: "150k-200k" },
  { label: "$200K – $250K", value: "200k-250k" },
  { label: "$250K – $300K", value: "250k-300k" },
  { label: "Over $300K", value: "over-300k" },
];
