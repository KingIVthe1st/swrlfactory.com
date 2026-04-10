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
  description: string;
  ingredients: string[];
  image: string;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    name: "Oreo Stuff'd",
    category: "Signature Stuffed",
    price: 7.99,
    description:
      "Our most iconic creation — a warm, pillowy cinnamon roll loaded with crushed Oreo cookies, whipped cream filling, and finished with a glossy cookies-and-cream drizzle.",
    ingredients: ["Cinnamon dough", "Crushed Oreos", "Whipped cream filling", "Cookies & cream glaze"],
    image: "/images/oreo-roll.png",
  },
  {
    name: "Cherry Cobbler Stuff'd",
    category: "Signature Stuffed",
    price: 7.99,
    description:
      "Southern comfort in every bite — sweet cherry compote tucked inside a buttery cinnamon roll, topped with streusel crumble and a warm vanilla glaze.",
    ingredients: ["Cinnamon dough", "Cherry compote", "Streusel crumble", "Vanilla glaze"],
    image: "/images/cherry-cobbler.png",
  },
  {
    name: "Strawberry Cheesecake Stuff'd",
    category: "Signature Stuffed",
    price: 8.49,
    description:
      "Dessert royalty. A soft cinnamon roll bursting with real cream cheese filling and fresh strawberry jam, crowned with a tangy cheesecake drizzle.",
    ingredients: ["Cinnamon dough", "Cream cheese filling", "Strawberry jam", "Cheesecake glaze"],
    image: "/images/oreo-roll.png",
  },
  {
    name: "Cookies & Cream Dream",
    category: "Signature Stuffed",
    price: 7.99,
    description:
      "Double the cookies, double the dream. Layers of Oreo cream and chocolate cookie crumbs swirled through our signature dough, finished with dark chocolate ganache.",
    ingredients: ["Cinnamon dough", "Oreo cream", "Chocolate cookie crumbs", "Dark chocolate ganache"],
    image: "/images/oreo-roll.png",
  },
  {
    name: "Cinnamon Sugar Classic",
    category: "Classic",
    price: 5.99,
    description:
      "The one that started it all. Our classic cinnamon roll made with hand-laminated dough, brown sugar, warm cinnamon, and a sweet original cream cheese icing.",
    ingredients: ["Hand-laminated dough", "Brown sugar", "Ground cinnamon", "Cream cheese icing"],
    image: "/images/oreo-roll.png",
  },
  {
    name: "Caramel Pecan Drizzle",
    category: "Classic",
    price: 6.99,
    description:
      "Indulgent and nutty. Our classic roll blanketed in house-made salted caramel sauce and topped with toasted Georgia pecans for a satisfying crunch.",
    ingredients: ["Cinnamon dough", "Salted caramel sauce", "Toasted Georgia pecans", "Vanilla glaze"],
    image: "/images/oreo-roll.png",
  },
  {
    name: "Pumpkin Spice Swirl",
    category: "Seasonal",
    price: 7.49,
    description:
      "Fall in a roll. Pumpkin puree and warm spices swirled through our signature dough, glazed with maple cream cheese frosting and a dusting of nutmeg.",
    ingredients: ["Cinnamon dough", "Pumpkin puree", "Pumpkin spice blend", "Maple cream cheese frosting", "Nutmeg"],
    image: "/images/oreo-roll.png",
  },
  {
    name: "SWRL Iced Coffee",
    category: "Drinks",
    price: 4.99,
    description:
      "Our house cold brew poured over ice and finished with sweet cream and a hint of cinnamon. The perfect partner to any roll on the menu.",
    ingredients: ["House cold brew", "Sweet cream", "Cinnamon", "Ice"],
    image: "/images/oreo-roll.png",
  },
  {
    name: "Fresh Lemonade",
    category: "Drinks",
    price: 3.99,
    description:
      "Hand-squeezed daily. Bright, tart, and just sweet enough — a refreshing contrast to the warmth of our signature cinnamon rolls.",
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
      "Not yet — our rolls are best enjoyed fresh out of the oven. We're working on a shipping program so you can get SWRL delivered anywhere in the US. Stay tuned by joining our email list.",
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
      "We're always looking for passionate people who love food and great hospitality. Check the Contact page and mention you're interested in joining the team — we'd love to hear from you.",
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
      "Leverage our preferred vendor relationships for ingredients, packaging, and equipment — saving you time and lowering your cost of goods.",
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
      "Approved franchisees receive a protected geographic territory, giving you the space to grow your market without competition from fellow SWRL owners.",
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
