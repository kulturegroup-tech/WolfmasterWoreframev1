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
  // Home hero slideshow (bright lifestyle)
  heroFamily: "hf_20261025_130856_ffa5950a-18fd-42b0-8f0a-3545218f5bf3",
  heroWalk: "hf_20261025_130856_c3cbcfee-c7ee-462d-80c5-0c0ee8bd1133",
  heroBite: "hf_20261025_131515_a3bb615d-7b95-4aeb-8400-554120e02f07",
  heroSprint: "hf_20261025_131515_a7deb46e-2f7b-4100-a3a6-ebe4cfc62ae7",
  // Daylight set: fresher, brighter scenes to balance the night photography
  dayFamily: "hf_20261025_125519_f8997c60-1b77-44eb-a27c-bdbbb92b03c2",
  dayHeel: "hf_20261025_125518_4bd4bd0f-73b2-414f-8892-bfaaec5fd228",
  dayField: "hf_20261025_125519_370b8d97-ee97-4885-95b1-367f60b9490a",
  dayMalinois: "hf_20261025_125520_b7d65ff0-f588-4c23-81ab-c9c2a4b66ec9",
  dayGsd: "hf_20261025_125606_4d32eaed-524c-4c08-9091-4aaf3d4220ff",
  dayDutch: "hf_20261025_125607_c024f8fb-2b87-4815-a4e0-39a0e49c9f19",
  dayEstate: "hf_20261025_125607_3e487d41-0fd3-49f0-a160-caae2356239e",
  dayPuppy: "hf_20261025_125607_e5d70fff-fc7b-4389-a7de-107ff8dbaf35",
  dayExec: "hf_20261025_125652_86f3730e-f585-436f-9a41-2b3396efe554",
  dayTraining: "hf_20261025_125653_15cf5887-0820-41fc-9d36-da2ead069f23",
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
  { label: "Courses", href: "/courses/" },
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
      { label: "Board & Train Programs", href: "/board-and-train/" },
      { label: "Gallery", href: "/gallery/" },
      { label: "Guides", href: "/guides/" },
      { label: "FAQ", href: "/faq/" },
      { label: "Contact", href: "/contact/" },
    ],
  },
];

export const breeds = [
  {
    slug: "belgian-malinois", name: "Belgian Malinois", image: "dayMalinois", tag: "Speed & Drive",
    short: "Fast, athletic and intensely focused. The Malinois is the working-dog world's first choice for protection.",
    origin: "Belgium", weight: "25–30 kg", temperament: "High drive, quick to learn, deeply handler-focused",
    bestFor: "Personal and executive protection, active families, PSA sport",
    body: [
      "The Malinois was bred to work, and it shows. It is light on its feet, quick to read a situation and happiest with a job to do. In the right hands it is the most responsive protection dog there is.",
      "That drive needs structure. Our Malinois are raised around family routines and trained until their behaviour is calm at home and decisive on command. We place them with owners who can give them daily work and clear leadership, and we teach those owners how.",
    ],
  },
  {
    slug: "german-shepherd", name: "German Shepherd", image: "dayGsd", tag: "Presence & Loyalty",
    short: "Steady, intelligent and devoted. A German Shepherd's presence alone deters most threats.",
    origin: "Germany", weight: "30–40 kg", temperament: "Balanced, loyal, naturally watchful",
    bestFor: "Family homes, farmhouses and estates, first-time protection dog owners",
    body: [
      "A well-bred German Shepherd is the classic family guardian: confident with strangers, gentle with children and alert to anything out of place. Few dogs combine that much presence with that much patience.",
      "We select working-line Shepherds for sound hips, stable nerves and real courage, then train them for control first. The result is a dog that settles into family life and steps forward only when it is asked to.",
    ],
  },
  {
    slug: "dutch-shepherd", name: "Dutch Shepherd", image: "dayDutch", tag: "Grit & Versatility",
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
    slug: "personal", name: "Personal Protection", image: "dayHeel",
    short: "A dog trained to stay at your side and step in on command, at home or out in public.",
    points: ["Heel and off-leash control in crowds and traffic", "Threat recognition without overreaction", "Out and release on a single command", "Handler training before handover"],
    body: [
      "A personal protection dog goes where you go. It walks calmly beside you through a market, waits quietly at a café and ignores everyone who means you no harm. If someone does, it responds on command and stops on command.",
      "Every personal protection dog we place has been proofed in real environments across Delhi NCR, not only on the training field. Before it comes home, you train with it until handling is second nature.",
    ],
  },
  {
    slug: "family", name: "Family Protection", image: "dayFamily",
    short: "A calm, social guardian that lives with your children and protects the whole household.",
    points: ["Raised and tested around children and visitors", "Clear house manners and boundaries", "Protection of the home and family members", "Ongoing support as your family changes"],
    body: [
      "A family protection dog has two jobs, and the first one is being a good family dog. It has to be gentle with children, relaxed with guests and easy to live with every single day.",
      "Its second job is to protect that family if it ever needs to. We select for stable temperament above everything else and test each dog in busy homes before we recommend it to yours.",
    ],
  },
  {
    slug: "executive", name: "Executive Protection", image: "dayExec",
    short: "A discreet, highly controlled dog for business owners, public figures and their families.",
    points: ["Vehicle, doorway and entrance scenarios", "Composure around staff, drivers and guests", "Integration with existing security teams", "Discreet, private handover"],
    body: [
      "Executive protection dogs work in demanding settings: vehicles, offices, events and homes with staff coming and going. They have to be completely composed until the moment they are needed.",
      "We train these dogs for precision and discretion, and we coordinate with your security staff so the dog fits into the way your household already runs.",
    ],
  },
  {
    slug: "farmhouse-estate", name: "Farmhouse & Estate", image: "dayEstate",
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
  { name: "Sample listing", breed: "German Shepherd", sex: "Female", age: "20 months", image: "dayGsd", status: "Available", note: "Family protection, raised with children" },
  { name: "Sample listing", breed: "Dutch Shepherd", sex: "Male", age: "2.5 years", image: "dayDutch", status: "Reserved", note: "Farmhouse and estate work" },
  { name: "Sample listing", breed: "Belgian Malinois", sex: "Female", age: "18 months", image: "action", status: "In training", note: "Personal protection, finishing proofing" },
  { name: "Sample listing", breed: "German Shepherd", sex: "Male", age: "3 years", image: "gsd", status: "Available", note: "Family and home protection" },
  { name: "Sample listing", breed: "Belgian Malinois", sex: "Male", age: "10 months", image: "dayPuppy", status: "Puppy", note: "Foundation trained, ready for development" },
];

// Courses Wolfmaster K9 plans to offer. No dates or fees until the team confirms them.
export const courses = [
  {
    slug: "professional-dog-trainer", name: "Professional Dog Trainer Course", image: "dayTraining", level: "Career", format: "Classroom + field",
    short: "A structured course for people who want to train dogs professionally, built on the methods the Wolfmaster team uses every day.",
    topics: ["Learning theory and canine body language", "Obedience from foundation to off-leash", "Behaviour assessment and problem cases", "Working with clients and their families"],
  },
  {
    slug: "decoy-camp", name: "Decoy Camp", image: "psa", level: "Advanced", format: "Field",
    short: "Hands-on decoy fundamentals: safe catches, reading the dog and building its confidence and control.",
    topics: ["Equipment, safety and suit work", "Presenting the sleeve and catching", "Reading drive, stress and confidence", "Working safely with handlers and trial dogs"],
  },
  {
    slug: "protection-dog-handler", name: "Protection Dog Handler Course", image: "dayHeel", level: "Owners", format: "Field + home",
    short: "For owners of protection dogs who want complete, confident handling at home and in public.",
    topics: ["Control, commands and the off switch", "Handling in traffic, crowds and vehicles", "Scenario awareness and safe responses", "Maintenance training at home"],
  },
  {
    slug: "puppy-foundation", name: "Puppy Foundation Course", image: "dayPuppy", level: "Beginner", format: "Weekly sessions",
    short: "The first months shape a working dog. Owners learn socialisation, engagement and early obedience the Wolfmaster way.",
    topics: ["Socialisation and confidence building", "Engagement, play and focus", "House manners and routines", "Early obedience foundations"],
  },
  {
    slug: "canine-behaviour", name: "Canine Behaviour Workshop", image: "dayMalinois", level: "Open to all", format: "Workshop",
    short: "Understand why dogs do what they do, and how to approach fear, reactivity and aggression safely.",
    topics: ["Stress signals and body language", "Fear, reactivity and aggression", "Management versus training", "When to call a professional"],
  },
  {
    slug: "basic-obedience", name: "Basic Obedience for Pet Owners", image: "dayGsd", level: "Beginner", format: "Group classes",
    short: "Practical group classes that give everyday owners a calm, reliable, well-mannered dog.",
    topics: ["Walking nicely on lead", "Sit, down, stay and recall", "Calm greetings and visitors", "Building good habits at home"],
  },
];

// Gallery: real Wolfmaster photographs first, then stand-in imagery to be replaced by real shoots.
export const gallery = [
  { image: "buntyPsa", caption: "Memorial PSA Trial 2025, Hyderabad", real: true, wide: false },
  { image: "buntyHeel", caption: "Heel work on the training field", real: true, wide: false },
  { image: "heroBite", caption: "Bite work", wide: true },
  { image: "dayHeel", caption: "Morning heel walk" },
  { image: "dayMalinois", caption: "Belgian Malinois" },
  { image: "heroSprint", caption: "Full sprint", wide: true },
  { image: "dayFamily", caption: "Family protection" },
  { image: "buntyArchive", caption: "From the archive", real: true },
  { image: "dayTraining", caption: "Down-stay" },
  { image: "dayEstate", caption: "Farmhouse placement", wide: true },
  { image: "dayGsd", caption: "German Shepherd" },
  { image: "psa", caption: "PSA trial field" },
  { image: "dayPuppy", caption: "Foundation puppy" },
  { image: "dayExec", caption: "Executive protection" },
  { image: "dayDutch", caption: "Dutch Shepherd" },
];
