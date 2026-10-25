import { site, breeds, protectionTypes, areas, dogs } from "./data.mjs";
import {
  btn, arrow, img, esc, pageHero, glassPanel, split, sectionHead, breedCards, dogCard, dogFilters,
  typeCards, credentials, cta, faqList, contactForm,
} from "./layout.mjs";

const phoneBtn = () => btn(site.phone, site.phoneHref);
const areaList = () => `<ul class="area-grid">${areas.map((a) => `<li><a href="/areas/${a.slug}/">${a.name}${arrow}</a></li>`).join("")}<li><a href="/contact/">Rest of India, on request${arrow}</a></li></ul>`;

// ------------------------------------------------------------------ HOME
const home = {
  path: "/",
  title: "Home",
  description: "Wolfmaster K9 breeds, trains and places protection dogs for families, homes and principals across Delhi NCR. Led by Rajender ‘Wolfmaster Bunty’ Chauhan since 2002.",
  body: `
<section class="hero">
  <div class="hero__slides" data-slides>
    <img class="hero__img is-active" src="${img("heroFamily")}" alt="A family relaxing on a sunny garden lawn with their Belgian Malinois" fetchpriority="high">
    <img class="hero__img" src="${img("heroWalk")}" alt="A man walking a German Shepherd in heel along a sunny tree-lined avenue" loading="lazy">
    <img class="hero__img" src="${img("heroBite")}" alt="A Belgian Malinois launching onto a decoy's bite sleeve during training" loading="lazy">
    <img class="hero__img" src="${img("heroSprint")}" alt="A German Shepherd sprinting at full speed across a training field" loading="lazy">
  </div>
  <div class="hero__shade"></div>
  <div class="wrap hero__inner">
    <p class="eyebrow">Protection dogs &amp; training · Delhi NCR · Since 2002</p>
    <h1 class="display">Controlled Power</h1>
    <p class="lead">Wolfmaster K9 raises and trains protection dogs that are calm with your family, clear-headed in public and decisive the moment it matters.</p>
    <a class="hero__down" href="#intro" aria-label="Scroll to content"><svg viewBox="0 0 14 8"><path d="m1 1 6 6 6-6" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></a>
  </div>
</section>

${glassPanel({
  image: "dayFamily", imageAlt: "A German Shepherd relaxing on the lawn while a family plays in the garden",
  title: "Trained to trial standard",
  text: "Our dogs are trained by a team that competes and works as decoys in Protection Sports Association trials, then proofed for the real places they will live and work.",
  buttons: btn("Our protection dogs", "/protection-dogs/") + btn("Our difference", "/our-difference/") + btn("Connect with us", "/contact/", { arrowIcon: true }),
  list: ["Working-line genetics", "Family-safe temperament", "Off-leash obedience & control", "Health screened & vaccinated", "Handler training before handover", "Lifetime support"],
})}

<section class="section" id="intro">
  <div class="wrap">
    ${sectionHead({ title: "In the field", text: "What the Wolfmaster K9 team has built over two decades of working dogs." })}
    ${credentials()}
  </div>
</section>

${split({
  image: "buntyHeel", imageAlt: "Rajender Chauhan working a Belgian Malinois in heel",
  title: "Protection dogs for families, homes &amp; principals",
  paras: [
    "Wolfmaster K9 is a team of trainers, decoys and handlers led by founder and head trainer Rajender “Wolfmaster Bunty” Chauhan. We select, raise and train every dog ourselves, from the first months of foundation work to thousands of hours of obedience, protection and real-world proofing.",
    "The result is a dog that settles into your home, behaves impeccably in public and protects your family on command.",
  ],
  buttons: btn("Explore available dogs", "/available-dogs/", { variant: "primary", arrowIcon: true }) + phoneBtn(),
})}

<section class="section section--alt">
  <div class="wrap">
    ${sectionHead({ eyebrow: "Our breeds", title: "Selected for nerve.<br>Trained for control.", text: "We work with three proven protection breeds, each matched to the home it is going to." })}
    ${breedCards()}
  </div>
</section>

<section class="section">
  <div class="wrap">
    ${sectionHead({ eyebrow: "Available now", title: "Our protection dogs", text: "Fully trained dogs and dogs in development. Ask us about current availability." })}
    ${dogFilters()}
    <div class="dog-grid" data-dog-grid>${dogs.slice(0, 4).map(dogCard).join("")}</div>
    <p class="center">${btn("View all available dogs", "/available-dogs/", { arrowIcon: true })}</p>
  </div>
</section>

<section class="section section--alt">
  <div class="wrap">
    ${sectionHead({ title: "A protection dog for every situation", text: "Every placement starts with how you live. We match the dog and the training to your home, family and routine." })}
    ${typeCards()}
  </div>
</section>

${split({
  image: "dayTraining", imageAlt: "A German Shepherd in a down-stay beside its trainer on a sunny lawn",
  reverse: true,
  eyebrow: "After handover",
  title: "Support for the life of your dog",
  paras: [
    "A protection dog is a long relationship, not a one-time purchase. After your dog comes home, the Wolfmaster team stays with you: follow-up sessions, refresher training, behaviour advice and a direct line to the trainers who know your dog.",
  ],
  buttons: btn("How it works", "/how-it-works/") + btn("Home integration", "/process/"),
})}

<section class="section">
  <div class="wrap">
    ${sectionHead({ title: "Areas we serve", text: `Based in ${site.base}. We place and support dogs across the National Capital Region, and further across India on request.` })}
    ${areaList()}
  </div>
</section>

${contactForm()}
`,
};

// ------------------------------------------------------------------ AVAILABLE DOGS
const availableDogs = {
  path: "/available-dogs/",
  title: "Available Protection Dogs",
  description: "Trained protection dogs and dogs in development from Wolfmaster K9, Delhi NCR.",
  body: `
${pageHero({ eyebrow: "Available dogs", title: "Available protection dogs", lead: "Every dog listed has been bred or selected by our team and trained to the Wolfmaster standard. Prices are shared on request after a consultation.", image: "dayField" })}
<section class="section">
  <div class="wrap">
    <p class="notice">These are sample listings to show the layout. Real dogs, with photos and details, replace them before launch.</p>
    ${dogFilters()}
    <div class="dog-grid" data-dog-grid>${dogs.map(dogCard).join("")}</div>
    <p class="empty" data-empty hidden>No dogs match those filters right now. Ask us about upcoming dogs.</p>
  </div>
</section>
${cta({ title: "Not sure which dog is right?", text: "Tell us about your home and we will recommend dogs that fit.", buttons: btn("Book a consultation", "/contact/", { variant: "primary", arrowIcon: true }) + phoneBtn() })}
`,
};

// ------------------------------------------------------------------ BREEDS
const breedPages = breeds.map((b) => ({
  path: `/breeds/${b.slug}/`,
  title: `${b.name} Protection Dogs`,
  description: `${b.name} protection dogs from Wolfmaster K9: ${b.short}`,
  body: `
${pageHero({ eyebrow: b.tag, title: `${b.name} protection dogs`, lead: b.short, image: b.image, buttons: btn("See available dogs", "/available-dogs/", { variant: "primary", arrowIcon: true }) + btn("Connect with us", "/contact/", { arrowIcon: true }) })}
<section class="section">
  <div class="wrap split">
    <figure class="split__media split__media--tall reveal"><img src="${img(b.image)}" alt="${esc(b.name)} portrait" loading="lazy"></figure>
    <div class="split__body reveal">
      <h2 class="h2">The ${b.name}</h2>
      ${b.body.map((p) => `<p class="muted">${p}</p>`).join("")}
      <dl class="facts">
        <div><dt>Origin</dt><dd>${b.origin}</dd></div>
        <div><dt>Weight</dt><dd>${b.weight}</dd></div>
        <div><dt>Temperament</dt><dd>${b.temperament}</dd></div>
        <div><dt>Best for</dt><dd>${b.bestFor}</dd></div>
      </dl>
    </div>
  </div>
</section>
<section class="section section--alt">
  <div class="wrap">
    ${sectionHead({ title: "Other breeds we train" })}
    <div class="breed-grid breed-grid--two">${breeds.filter((o) => o.slug !== b.slug).map((o) => `
      <a class="breed-card reveal" href="/breeds/${o.slug}/"><div class="breed-card__img"><img src="${img(o.image, "sm")}" alt="${esc(o.name)} portrait" loading="lazy"></div><p class="eyebrow">${o.tag}</p><h3 class="h3">${o.name}</h3><p class="muted">${o.short}</p><span class="breed-card__go">${arrow}</span></a>`).join("")}</div>
  </div>
</section>
`,
}));

// ------------------------------------------------------------------ PROTECTION DOGS
const protectionIndex = {
  path: "/protection-dogs/",
  title: "Protection Dogs",
  description: "Personal, family, executive, estate, guard and security dogs trained by Wolfmaster K9.",
  body: `
${pageHero({ eyebrow: "Protection dogs", title: "Protection dogs for real life", lead: "Six kinds of placement, one standard of training. Choose the situation closest to yours, or talk to us and we will help you decide.", image: "action" })}
<section class="section"><div class="wrap">${typeCards()}</div></section>
${glassPanel({ image: "psa", title: "Protection dog or guard dog?", text: "A guard dog protects a place. A protection dog protects people, goes where they go and works under precise control. Most families need the second. Read our guide before you decide.", buttons: btn("Read the guide", "/guides/protection-dog-vs-guard-dog/", { arrowIcon: true }), align: "left" })}
`,
};

const protectionPages = protectionTypes.map((t) => ({
  path: `/protection-dogs/${t.slug}/`,
  title: `${t.name} Dogs`,
  description: `${t.name} dogs from Wolfmaster K9: ${t.short}`,
  body: `
${pageHero({ eyebrow: "Protection dogs", title: t.name, lead: t.short, image: t.image, buttons: btn("See available dogs", "/available-dogs/", { variant: "primary", arrowIcon: true }) + btn("Connect with us", "/contact/", { arrowIcon: true }) })}
<section class="section">
  <div class="wrap split">
    <div class="split__body reveal">
      <h2 class="h2">What a ${t.name.toLowerCase()} dog does</h2>
      ${t.body.map((p) => `<p class="muted">${p}</p>`).join("")}
    </div>
    <div class="reveal">
      <ul class="ticks ticks--boxed">${t.points.map((p) => `<li>${p}</li>`).join("")}</ul>
    </div>
  </div>
</section>
<section class="section section--alt">
  <div class="wrap">
    ${sectionHead({ title: "Other kinds of protection" })}
    ${typeCards(protectionTypes.filter((o) => o.slug !== t.slug).slice(0, 3))}
  </div>
</section>
${contactForm(`Talk to us about ${t.name.toLowerCase()}`)}
`,
}));

// ------------------------------------------------------------------ THE PROCESS
const difference = {
  path: "/our-difference/",
  title: "Our Difference",
  description: "What sets Wolfmaster K9 protection dogs apart: trial-standard training, family-first temperament and lifetime support.",
  body: `
${pageHero({ eyebrow: "Our difference", title: "The Wolfmaster standard", lead: "What separates a trained protection dog from a dog that has simply been taught to bite.", image: "dayEstate" })}
<section class="section">
  <div class="wrap">
    <div class="pillars">
      ${[
        ["Temperament first", "We select for stable nerves and a social nature before anything else. A dog that is anxious or reactive can never be a safe family protection dog."],
        ["Trained by working decoys", "Our team works as decoys and competitors in Protection Sports Association trials. Our dogs train against people who know exactly how to test them."],
        ["Control before protection", "Obedience and the off switch come first. A Wolfmaster dog releases on one command, every time, before it ever learns to engage."],
        ["Proofed in real places", "Markets, parking lots, apartment lifts, farmhouses and busy homes. We train where your dog will live, not only on our field."],
        ["You train too", "Handover is not a delivery. You learn to handle your dog with our trainers until it responds to you as well as it does to us."],
        ["We stay with you", "Follow-up sessions, refresher training and a direct line to the team, for the life of the dog."],
      ].map(([h, p], i) => `<div class="pillar reveal"><span class="pillar__n">${String(i + 1).padStart(2, "0")}</span><h3 class="h3">${h}</h3><p class="muted">${p}</p></div>`).join("")}
    </div>
  </div>
</section>
${split({ image: "buntyPsa", imageAlt: "Rajender with his Malinois and trophies at the Memorial PSA Trial 2025", title: "Proven on the trial field", paras: ["In December 2025 Rajender and his Malinois took home a medal and three trophies at the Memorial PSA Trial in Hyderabad. The same standard that wins on the trial field goes into every dog we place."], buttons: btn("PSA sport & decoy", "/psa/", { arrowIcon: true }) })}
`,
};

const team = {
  path: "/team/",
  title: "The Team",
  description: "Meet the Wolfmaster K9 team, led by founder and head trainer Rajender ‘Wolfmaster Bunty’ Chauhan.",
  body: `
${pageHero({ eyebrow: "The team", title: "The people behind every dog", lead: "Wolfmaster K9 is a team of trainers, decoys and handlers who work with every dog from its first weeks to the day it goes home, and long after.", image: "dayHeel" })}
<section class="section">
  <div class="wrap split">
    <figure class="split__media split__media--tall reveal"><img src="${img("buntyHeel")}" alt="Rajender Chauhan working a Malinois in heel" loading="lazy"></figure>
    <div class="split__body reveal">
      <p class="eyebrow">Founder &amp; head trainer</p>
      <h2 class="h2">Rajender “Wolfmaster Bunty” Chauhan</h2>
      <p class="muted">Rajender has trained dogs professionally since 2002 and founded Wolfmaster K9 to bring international working-dog standards to Indian families. He is a canine behaviourist, a Protection Sports Association competitor and a PSA decoy, and he has hosted PSA trials and decoy certification camps in India.</p>
      <p class="muted">He leads training on every dog the team places and personally oversees each handover.</p>
      <dl class="facts">
        <div><dt>In the field</dt><dd>Since 2002</dd></div>
        <div><dt>Discipline</dt><dd>PSA competitor &amp; decoy</dd></div>
        <div><dt>Practice</dt><dd>Canine behaviourist</dd></div>
      </dl>
    </div>
  </div>
</section>
<section class="section section--alt">
  <div class="wrap">
    ${sectionHead({ title: "The Wolfmaster team", text: "Team profiles are being added. Each role below is part of every dog's journey." })}
    <div class="team-grid">
      ${[["Trainers", "Foundation, obedience and protection training, every day."], ["Decoys", "Trained decoys who test and build each dog's confidence and control."], ["Kennel &amp; care", "Feeding, exercise, health checks and the daily routine that keeps dogs well."], ["Client support", "Your first call, your consultation and every follow-up after handover."]]
        .map(([h, p]) => `<div class="team-card reveal"><div class="team-card__ph" aria-hidden="true"></div><h3 class="h3">${h}</h3><p class="muted">${p}</p></div>`).join("")}
    </div>
  </div>
</section>
`,
};

const processPage = {
  path: "/process/",
  title: "Home Integration",
  description: "How Wolfmaster K9 integrates a protection dog into your home: handler training, home sessions and follow-up.",
  body: `
${pageHero({ eyebrow: "The process", title: "Home integration", lead: "Bringing a protection dog home is a structured process. We stay with you through every step until your dog is settled and you are confident handling it.", image: "dayFamily" })}
<section class="section">
  <div class="wrap">
    <ol class="steps">
      ${[
        ["Handler training at our facility", "Before the dog comes home, you train with it alongside our trainers: commands, body language, the off switch and what to do in different situations."],
        ["Arrival and settling in", "A trainer brings your dog home and spends time setting up its space, routine and house rules with the whole family."],
        ["Home sessions", "Over the first weeks, trainers visit to work through your daily routine: walks, visitors, children, staff and the car."],
        ["Real-world practice", "Sessions in the places you go: your society, market, office or farmhouse."],
        ["Check-ins", "Scheduled follow-ups to fine-tune behaviour as your dog settles."],
        ["Lifetime support", "Refresher training and advice whenever you need it, for the life of the dog."],
      ].map(([h, p], i) => `<li class="step reveal"><span class="step__n">${i + 1}</span><div><h3 class="h3">${h}</h3><p class="muted">${p}</p></div></li>`).join("")}
    </ol>
  </div>
</section>
${cta({ title: "Ready to start?", text: "Every placement begins with a conversation about your home.", buttons: btn("Connect with us", "/contact/", { variant: "primary", arrowIcon: true }) + phoneBtn() })}
`,
};

const story = {
  path: "/our-story/",
  title: "Our Story",
  description: "The story of Wolfmaster K9, from Rajender Chauhan's first working dogs in 2002 to a team training protection dogs across Delhi NCR.",
  body: `
${pageHero({ eyebrow: "Our story", title: "Two decades of working dogs", lead: "Wolfmaster K9 grew from one trainer's obsession with working dogs into a team that sets the standard for protection dogs in India.", image: "dawn" })}
<section class="section">
  <div class="wrap narrow">
    <ol class="timeline">
      ${[
        ["2002", "The beginning", "Rajender Chauhan starts training dogs professionally."],
        ["Wolfmaster K9", "A team, not one trainer", "Rajender founds Wolfmaster K9 and builds a team of trainers and decoys around one standard: control first, protection second."],
        ["PSA in India", "Bringing protection sport home", "Wolfmaster K9 hosts Protection Sports Association trials in India, with Rajender working as decoy."],
        ["Dec 2024", "Decoy certification camp", "Wolfmaster K9 hosts a PSA decoy certification camp in New Delhi, instructed by Jeff Riccio."],
        ["Dec 2025", "Memorial PSA Trial, Hyderabad", "Rajender and his Malinois take home a medal and three trophies."],
      ].map(([y, h, p]) => `<li class="reveal"><span class="timeline__y">${y}</span><div><h3 class="h3">${h}</h3><p class="muted">${p}</p></div></li>`).join("")}
    </ol>
  </div>
</section>
${split({ image: "buntyArchive", imageAlt: "An early photo of Rajender with his Malinois", title: "Where it started", paras: ["An early photo from Rajender's archive. Two decades on, the dogs have changed and the team has grown, but the standard is the same."], buttons: btn("Meet the team", "/team/", { arrowIcon: true }) })}
`,
};

const howItWorks = {
  path: "/how-it-works/",
  title: "How It Works",
  description: "How to get a protection dog from Wolfmaster K9: consultation, matching, training, handover and support.",
  body: `
${pageHero({ eyebrow: "How it works", title: "From first call to lifetime support", lead: "Five clear steps. No pressure, and no dog leaves us until it is right for your home.", image: "dayExec" })}
<section class="section">
  <div class="wrap">
    <ol class="steps steps--grid">
      ${[
        ["Consultation", "We learn about your home, family, routine and what you need the dog to do."],
        ["Matching", "We recommend dogs from our current and upcoming dogs, or evaluate your own dog for training."],
        ["Training", "A structured program of obedience, protection and real-world proofing."],
        ["Handover", "You train with your dog before it comes home, then we integrate it into your household."],
        ["Support", "Follow-ups, refreshers and advice for the life of the dog."],
      ].map(([h, p], i) => `<li class="step reveal"><span class="step__n">${i + 1}</span><div><h3 class="h3">${h}</h3><p class="muted">${p}</p></div></li>`).join("")}
    </ol>
  </div>
</section>
${contactForm("Start with a consultation")}
`,
};

// ------------------------------------------------------------------ CLIENT SERVICE
const training = {
  path: "/training/",
  title: "Training Programs",
  description: "Obedience, behaviour, protection and board-and-train programs for your own dog, from Wolfmaster K9.",
  body: `
${pageHero({ eyebrow: "Training programs", title: "Train your own dog with Wolfmaster", lead: "The same trainers who prepare our protection dogs work with your dog, at our facility or at your home.", image: "dayTraining" })}
<section class="section">
  <div class="wrap">
    <div class="program-grid">
      ${[
        ["Obedience &amp; off-leash", "Reliable obedience from foundations to off-leash control around traffic, crowds and other dogs.", "dayTraining"],
        ["Behaviour", "Aggression, fear, reactivity and anxiety, assessed and addressed by an experienced behaviourist.", "dayMalinois"],
        ["Protection training", "For suitable dogs, structured protection work built on control and a clear off switch.", "action"],
        ["Puppy foundation", "Confidence, socialisation and engagement in the months that shape a working dog.", "dayPuppy"],
        ["Board &amp; train", "Residential training at our facility with daily sessions and a full handler handover.", "dayEstate"],
        ["Handler coaching", "One-to-one sessions that teach you to read and lead your dog.", "dayHeel"],
      ].map(([h, p, im]) => `<article class="program reveal"><div class="program__img"><img src="${img(im, "sm")}" alt="" loading="lazy"></div><h3 class="h3">${h}</h3><p class="muted">${p}</p></article>`).join("")}
    </div>
  </div>
</section>
${contactForm("Book a training assessment")}
`,
};

const psa = {
  path: "/psa/",
  title: "PSA Sport & Decoy",
  description: "Protection Sports Association training, trials and decoy work with Wolfmaster K9 in India.",
  body: `
${pageHero({ eyebrow: "PSA sport & decoy", title: "Protection sport in India", lead: "PSA is one of the most demanding protection sports in the world. Wolfmaster K9 trains dogs, handlers and decoys for it, and has hosted trials in India.", image: "psa" })}
${split({ image: "buntyPsa", imageAlt: "Rajender with his Malinois and trophies at the Memorial PSA Trial 2025", title: "Memorial PSA Trial 2025", paras: ["Hosted by Progressive Canines PSA Club in Hyderabad on 7–8 December 2025. Rajender and his Malinois took home a medal and three trophies."], buttons: btn("Train for PSA", "/contact/", { variant: "primary", arrowIcon: true }) })}
<section class="section section--alt">
  <div class="wrap narrow">
    ${sectionHead({ title: "PSA with Wolfmaster", center: false })}
    <ul class="record">
      <li class="reveal"><span>Dec 2025</span><div><h3 class="h3">Memorial PSA Trial, Hyderabad</h3><p class="muted">A medal and three trophies.</p></div></li>
      <li class="reveal"><span>Dec 2024</span><div><h3 class="h3">PSA Decoy Certification Camp, New Delhi</h3><p class="muted">Instructed by Jeff Riccio, hosted by Wolfmaster K9.</p></div></li>
      <li class="reveal"><span>Ongoing</span><div><h3 class="h3">PSA trials in India</h3><p class="muted">Hosted by Wolfmaster K9, with Rajender working as decoy.</p></div></li>
    </ul>
  </div>
</section>
`,
};

const guides = [
  {
    slug: "protection-dog-vs-guard-dog",
    title: "Protection dog vs guard dog: which one do you need?",
    summary: "They sound similar but are trained very differently. Here is how to tell which suits your home.",
    image: "psa",
    body: [
      ["The short answer", ["A guard dog protects a place. A protection dog protects people. Most families who want security at home and when they go out need a protection dog."]],
      ["What a guard dog does", ["A guard dog watches a fixed area such as a compound, warehouse or construction site. It alerts and deters anyone who approaches its territory. It usually works alone and is not expected to go out with its owner or mix with guests."]],
      ["What a protection dog does", ["A protection dog lives with its family and goes where they go. It is social and calm around people, and it responds to a threat on command, stops on command and returns to its handler.", "That level of control takes far more training than guarding, which is why protection dogs cost more and come with handler training."]],
      ["Which is right for you", ["If you want a dog for the whole family that you can take out with you, choose a protection dog. If you need to secure a site with no family living on it, a guard dog may be enough. If you are unsure, we are happy to talk it through."]],
    ],
  },
  {
    slug: "what-affects-protection-dog-price",
    title: "What goes into the price of a trained protection dog",
    summary: "Why a fully trained protection dog costs what it does, and what you should expect for the money.",
    image: "leash",
    body: [
      ["It is mostly time", ["A finished protection dog represents many months of daily training by experienced trainers and decoys, on top of the cost of raising a healthy working-line dog."]],
      ["What drives the cost", ["Genetics and health screening. The age and level of training. Specialised work such as executive or estate protection. Handler training and home integration. The support you receive after handover."]],
      ["What to ask any seller", ["Can I see the dog work with and without its trainer? Can I meet it around children and strangers? What happens if there is a problem after handover? How much handler training is included?"]],
      ["Our approach", ["We share prices after a consultation, once we understand what you need. Every Wolfmaster placement includes handler training, home integration and lifetime support."]],
    ],
  },
];

const guidesIndex = {
  path: "/guides/",
  title: "Guides",
  description: "Guides from Wolfmaster K9 on choosing, training and living with a protection dog.",
  body: `
${pageHero({ eyebrow: "Guides", title: "Guides for protection dog owners", lead: "Plain answers to the questions families ask us most.", image: "dayPuppy" })}
<section class="section"><div class="wrap"><div class="guide-grid">
  ${guides.map((g) => `<a class="guide-card reveal" href="/guides/${g.slug}/"><div class="guide-card__img"><img src="${img(g.image, "sm")}" alt="" loading="lazy"></div><h2 class="h3">${g.title}</h2><p class="muted">${g.summary}</p><span class="link">Read the guide ${arrow}</span></a>`).join("")}
</div></div></section>
`,
};

const guidePages = guides.map((g) => ({
  path: `/guides/${g.slug}/`,
  title: g.title,
  description: g.summary,
  body: `
${pageHero({ eyebrow: "Guide", title: g.title, lead: g.summary, image: g.image })}
<section class="section"><div class="wrap narrow prose">
  ${g.body.map(([h, ps]) => `<h2 class="h2">${h}</h2>${ps.map((p) => `<p>${p}</p>`).join("")}`).join("")}
  <p class="btn-row">${btn("Talk to the team", "/contact/", { variant: "primary", arrowIcon: true })}${btn("All guides", "/guides/")}</p>
</div></section>
`,
}));

const faq = {
  path: "/faq/",
  title: "FAQ",
  description: "Frequently asked questions about Wolfmaster K9 protection dogs and training.",
  body: `
${pageHero({ eyebrow: "FAQ", title: "Frequently asked questions", image: "dayGsd" })}
<section class="section"><div class="wrap narrow">
${faqList([
  ["Is a protection dog safe around children?", ["A well-selected, properly trained protection dog is calm and social at home. We select for stable temperament first and test every family dog around children before recommending it."]],
  ["Will the dog listen to me, or only to the trainer?", ["Handover includes handler training until the dog responds to you reliably. We keep supporting you afterwards."]],
  ["Can you train the dog I already have?", ["Often, yes. We assess your dog's temperament and health first, then recommend obedience, behaviour or protection training as suitable."]],
  ["How much does a protection dog cost?", ["It depends on the dog, its level of training and the work you need. We share prices after a consultation. Our guide explains what goes into the cost."]],
  ["Where are you based?", [`We are based in ${site.base} and work with clients across the NCR, and further across India on request.`]],
  ["What happens after the dog comes home?", ["Home integration sessions, scheduled check-ins and lifetime support from the team."]],
])}
</div></section>
${cta({ title: "Still have a question?", buttons: btn("Connect with us", "/contact/", { variant: "primary", arrowIcon: true }) + phoneBtn() })}
`,
};

const contact = {
  path: "/contact/",
  title: "Contact",
  description: "Contact Wolfmaster K9 about protection dogs, training and PSA sport. Based in Faridabad, Delhi NCR.",
  body: `
${pageHero({ eyebrow: "Connect with us", title: "Speak with Wolfmaster K9", lead: "Call, WhatsApp or send the form. We usually reply the same day.", image: "dayFamily", buttons: btn("WhatsApp us", `https://wa.me/${site.whatsapp}`, { variant: "primary", arrowIcon: true, ext: true }) + phoneBtn() })}
${contactForm("Send an enquiry")}
`,
};

// ------------------------------------------------------------------ AREAS
const areaPages = areas.map((a) => ({
  path: `/areas/${a.slug}/`,
  title: `Protection Dogs in ${a.name}`,
  description: `Trained protection dogs and dog training for families in ${a.name}, from Wolfmaster K9 in ${site.base}.`,
  body: `
${pageHero({ eyebrow: "Areas we serve", title: `Protection dogs in ${a.name}`, lead: `Wolfmaster K9 places and supports trained protection dogs for families and properties in ${a.name}, from our base in ${site.base}.`, image: "dayEstate", buttons: btn("Connect with us", "/contact/", { variant: "primary", arrowIcon: true }) + phoneBtn() })}
<section class="section"><div class="wrap">
  ${sectionHead({ title: `What we offer in ${a.name}` })}
  ${typeCards(protectionTypes.slice(0, 3))}
</div></section>
<section class="section section--alt"><div class="wrap narrow">
  ${sectionHead({ title: `Delivery, handling &amp; support in ${a.name}`, text: "Every placement includes handler training, home integration sessions at your address and lifetime support from the team." })}
</div></section>
<section class="section"><div class="wrap">${sectionHead({ title: "Other areas" })}${areaList()}</div></section>
`,
}));

export const pages = [
  home, availableDogs, ...breedPages, protectionIndex, ...protectionPages,
  difference, team, processPage, story, howItWorks,
  training, psa, guidesIndex, ...guidePages, faq, contact, ...areaPages,
];
