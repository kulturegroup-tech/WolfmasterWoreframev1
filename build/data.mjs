import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Site-wide content for Wolfmaster K9. Everything the pages share lives here.

export const site = {
  name: "Wolfmaster K9",
  url: "https://wolfmaster-k9.netlify.app",
  phone: "+91 98733 35698",
  phoneHref: "tel:+919873335698",
  whatsapp: "919873335698",
  email: "wolfmasterk9@gmail.com",
  base: "Faridabad, Delhi NCR",
  instagram: "https://www.instagram.com/wolfmasterk9_rajender_chauhan/",
  facebook: "https://www.facebook.com/Wolfmasterk9/",
  youtube: "https://www.youtube.com/results?search_query=wolfmaster+k9",
};

// Images: Higgsfield art direction (CDN) + real photographs (local).
const CDN = "https://d8j0ntlcm91z4.cloudfront.net/user_3BAXePEnkazlcLuBegXPULitm9A/";
const ai = {
  hero: "hf_20261005_084426_3af97fd1-8246-4719-8a52-5fd19acb2244",
  malinois: "hf_20261005_084427_f18b8ba6-2092-425e-8f72-b6a49477fd1a",
  action: "hf_20261005_084254_a9151537-ba18-47e4-bc92-e31ae6e37974",
  dawn: "hf_20261005_084427_97fa7049-3609-403c-b1aa-54b55bbc49d7",
  gsd: "hf_20261005_084254_8b51b76a-778b-486d-ae38-faaa03838ff4",
  dutch: "hf_20261005_084428_3e10776a-8e9a-4e64-9595-dd5bfd305e76",
  dobe: "hf_20261005_084501_559f9b4d-77fb-495f-a8cc-f04ced742a6b",
  villa: "hf_20261005_084254_fa48e9de-16e5-4a38-aae1-f204495ac7ca",
  leash: "hf_20261005_084500_46d91bc3-54e4-45a0-8154-4b25d3044f11",
  psa: "hf_20261005_084500_6f1ade1c-d4d5-4b64-8b67-9b8c425bc1fc",
  exec: "hf_20261005_084500_ec7385c8-4449-4e96-8545-4f66a6498ffd",
  puppy: "hf_20261005_084255_72cba74c-4a63-4de8-b19e-0beb8b39e9c8",
};
const local = {
  buntyHeel: "/assets/img/bunty-heel.webp",
  buntyPsa: "/assets/img/bunty-psa-2025.webp",
  buntyArchive: "/assets/img/bunty-archive.webp",
};
// img("hero") → full image, img("hero", "sm") → light preview.
// Self-hosted copies in public/assets/img (from scripts/self-host-images.py) win over the CDN.
const imgDir = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "assets", "img");
export function img(key, size) {
  if (local[key]) return local[key];
  if (!ai[key]) throw new Error("Unknown image key: " + key);
  const file = size === "sm" ? `${key}-sm.webp` : `${key}.webp`;
  if (existsSync(join(imgDir, file))) return `/assets/img/${file}`;
  return CDN + ai[key] + (size === "sm" ? "_min.webp" : ".png");
}

export const nav = [
  { label: "Available Dogs", href: "/available-dogs/" },
  {
    label: "Breeds",
    items: [
      { label: "Belgian Malinois", href: "/breeds/belgian-malinois/" },
      { label: "German Shepherd", href: "/breeds/german-shepherd/" },
      { label: "Dutch Shepherd", href: "/breeds/dutch-shepherd/" },
    ],
  },
  {
    label: "Protection Dogs",
    items: [
      { label: "All Protection Dogs", href: "/protection-dogs/" },
      { label: "Personal Protection", href: "/protection-dogs/personal/" },
      { label: "Family Protection", href: "/protection-dogs/family/" },
      { label: "Executive Protection", href: "/protection-dogs/executive/" },
      { label: "Farmhouse & Estate", href: "/protection-dogs/farmhouse-estate/" },
      { label: "Guard Dogs", href: "/protection-dogs/guard-dogs/" },
      { label: "Security Dogs", href: "/protection-dogs/security-dogs/" },
    ],
  },
  {
    label: "The Process",
    items: [
      { label: "Our Difference", href: "/our-difference/" },
      { label: "The Team", href: "/team/" },
      { label: "Home Integration", href: "/process/" },
      { label: "Our Story", href: "/our-story/" },
      { label: "How It Works", href: "/how-it-works/" },
    ],
  },
  {
    label: "Client Service",
    items: [
      { label: "Training Programs", href: "/training/" },
      { label: "PSA Sport & Decoy", href: "/psa/" },
      { label: "Guides", href: "/guides/" },
      { label: "FAQ", href: "/faq/" },
      { label: "Contact", href: "/contact/" },
    ],
  },
];

export const breeds = [
  {
    slug: "belgian-malinois", name: "Belgian Malinois", image: "malinois", tag: "Speed & Drive",
    short: "Fast, athletic and intensely focused. The Malinois is the working-dog world's first choice for protection.",
    origin: "Belgium", weight: "25–30 kg", temperament: "High drive, quick to learn, deeply handler-focused",
    bestFor: "Personal and executive protection, active families, PSA sport",
    body: [
      "The Malinois was bred to work, and it shows. It is light on its feet, quick to read a situation and happiest with a job to do. In the right hands it is the most responsive protection dog there is.",
      "That drive needs structure. Our Malinois are raised around family routines and trained until their behaviour is calm at home and decisive on command. We place them with owners who can give them daily work and clear leadership, and we teach those owners how.",
    ],
  },
  {
    slug: "german-shepherd", name: "German Shepherd", image: "gsd", tag: "Presence & Loyalty",
    short: "Steady, intelligent and devoted. A German Shepherd's presence alone deters most threats.",
    origin: "Germany", weight: "30–40 kg", temperament: "Balanced, loyal, naturally watchful",
    bestFor: "Family homes, farmhouses and estates, first-time protection dog owners",
    body: [
      "A well-bred German Shepherd is the classic family guardian: confident with strangers, gentle with children and alert to anything out of place. Few dogs combine that much presence with that much patience.",
      "We select working-line Shepherds for sound hips, stable nerves and real courage, then train them for control first. The result is a dog that settles into family life and steps forward only when it is asked to.",
    ],
  },
  {
    slug: "dutch-shepherd", name: "Dutch Shepherd", image: "dutch", tag: "Grit & Versatility",
    short: "Hardy, clear-headed and versatile. The Dutch Shepherd copes with heat, pressure and change.",
    origin: "Netherlands", weight: "25–30 kg", temperament: "Resilient, independent thinker, strong work ethic",
    bestFor: "Personal protection, farm and property work, experienced handlers",
    body: [
      "The Dutch Shepherd is the quiet professional of the shepherd breeds. It shares the Malinois's athleticism but tends to be a little more independent and very hard to rattle.",
      "Their coat and build handle Indian summers well, which makes them a strong choice for farmhouses and larger properties. We pair them with owners who enjoy training and want a dog that thinks for itself.",
    ],
  },
];

export const protectionTypes = [
  {
    slug: "personal", name: "Personal Protection", image: "action",
    short: "A dog trained to stay at your side and step in on command, at home or out in public.",
    points: ["Heel and off-leash control in crowds and traffic", "Threat recognition without overreaction", "Out and release on a single command", "Handler training before handover"],
    body: [
      "A personal protection dog goes where you go. It walks calmly beside you through a market, waits quietly at a café and ignores everyone who means you no harm. If someone does, it responds on command and stops on command.",
      "Every personal protection dog we place has been proofed in real environments across Delhi NCR, not only on the training field. Before it comes home, you train with it until handling is second nature.",
    ],
  },
  {
    slug: "family", name: "Family Protection", image: "villa",
    short: "A calm, social guardian that lives with your children and protects the whole household.",
    points: ["Raised and tested around children and visitors", "Clear house manners and boundaries", "Protection of the home and family members", "Ongoing support as your family changes"],
    body: [
      "A family protection dog has two jobs, and the first one is being a good family dog. It has to be gentle with children, relaxed with guests and easy to live with every single day.",
      "Its second job is to protect that family if it ever needs to. We select for stable temperament above everything else and test each dog in busy homes before we recommend it to yours.",
    ],
  },
  {
    slug: "executive", name: "Executive Protection", image: "exec",
    short: "A discreet, highly controlled dog for business owners, public figures and their families.",
    points: ["Vehicle, doorway and entrance scenarios", "Composure around staff, drivers and guests", "Integration with existing security teams", "Discreet, private handover"],
    body: [
      "Executive protection dogs work in demanding settings: vehicles, offices, events and homes with staff coming and going. They have to be completely composed until the moment they are needed.",
      "We train these dogs for precision and discretion, and we coordinate with your security staff so the dog fits into the way your household already runs.",
    ],
  },
  {
    slug: "farmhouse-estate", name: "Farmhouse & Estate", image: "dawn",
    short: "A confident dog for large properties, farmhouses and estates on the edge of the city.",
    points: ["Boundary and perimeter awareness", "Comfort with livestock and outdoor living", "Night-time alertness without nuisance barking", "Suited to Indian summers"],
    body: [
      "Larger properties need a dog that can cover ground, read a wide space and stay steady through long, quiet nights. They also need a dog that respects staff, visitors and animals that belong there.",
      "We match breed, coat and temperament to your property and climate, then train for the specific layout and routines of your farmhouse or estate.",
    ],
  },
  {
    slug: "guard-dogs", name: "Guard Dogs", image: "leash",
    short: "Territorial dogs for sites and premises where deterrence is the main job.",
    points: ["Strong territorial instinct", "Alerting and deterrence", "Suited to sites, godowns and compounds", "Handler and caretaker training"],
    body: [
      "A guard dog protects a place more than a person. It watches a boundary, alerts to anyone who approaches and deters intruders by presence and voice.",
      "Guard dogs suit warehouses, construction sites and compounds. We help you decide whether a guard dog or a personal protection dog is right for your situation, because they are trained very differently.",
    ],
  },
  {
    slug: "security-dogs", name: "Security Dogs", image: "psa",
    short: "Working dogs for security agencies and teams that need a reliable, handler-led K9.",
    points: ["Patrol and handler-led work", "Training for your handlers", "Maintenance training plans", "Ongoing performance checks"],
    body: [
      "Security agencies and in-house teams need dogs that perform the same way on every shift, with every trained handler. That takes the right dog and a training plan that continues after handover.",
      "We supply and train security dogs and their handlers, then support the team with maintenance training so standards stay high.",
    ],
  },
];

// Cities: Wolfmaster is based in Faridabad. Confirm wider service areas before adding more.
export const areas = [
  { slug: "delhi", name: "Delhi" },
  { slug: "gurugram", name: "Gurugram" },
  { slug: "noida", name: "Noida" },
  { slug: "faridabad", name: "Faridabad" },
  { slug: "ghaziabad", name: "Ghaziabad" },
];

// SAMPLE listings only, shown with a "Sample" badge. Replace with real dogs before launch.
export const dogs = [
  { name: "Sample listing", breed: "Belgian Malinois", sex: "Male", age: "2 years", image: "malinois", status: "Available", note: "Personal protection, fully trained" },
  { name: "Sample listing", breed: "German Shepherd", sex: "Female", age: "20 months", image: "gsd", status: "Available", note: "Family protection, raised with children" },
  { name: "Sample listing", breed: "Dutch Shepherd", sex: "Male", age: "2.5 years", image: "dutch", status: "Reserved", note: "Farmhouse and estate work" },
  { name: "Sample listing", breed: "Belgian Malinois", sex: "Female", age: "18 months", image: "action", status: "In training", note: "Personal protection, finishing proofing" },
  { name: "Sample listing", breed: "German Shepherd", sex: "Male", age: "3 years", image: "villa", status: "Available", note: "Family and home protection" },
  { name: "Sample listing", breed: "Belgian Malinois", sex: "Male", age: "10 months", image: "puppy", status: "Puppy", note: "Foundation trained, ready for development" },
];
