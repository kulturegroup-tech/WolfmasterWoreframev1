import { site, breeds, protectionTypes, areas, dogs, courses, gallery } from "./data.mjs";
import {
  btn, arrow, img, esc, pageHero, glassPanel, split, sectionHead, breedCards, dogCard, dogFilters,
  typeCards, credentials, cta, faqList, contactForm, courseCards, galleryGrid,
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
  text: "Our dogs are trained by a team that has competed in PSA protection sport since 2016, with PSA 1 and PSA 2 titled dogs, including Jade, the only Dutch Shepherd in Asia with a PSA 2 title. Every dog is then proofed for real-life scenarios and the places it will live and work.",
  buttons: btn("Our protection dogs", "/protection-dogs/") + btn("Our difference", "/our-difference/") + btn("Connect with us", "/contact/", { arrowIcon: true }),
  list: ["Working-line genetics", "Family-safe temperament", "Off-leash obedience & control", "Impulse control", "Appropriate protective response", "Handler training before handover"],
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
    "Wolfmaster K9 is a team of trainers, decoys and handlers led by Rajender “Wolfmaster Bunty” Chauhan: professional dog trainer, champion dog handler, PSA coach and working-dog specialist, with more than two decades in dog training, competitive handling, canine sport and personal protection.",
    "We train protection dogs for stability, obedience, impulse control and appropriate protective responses, not indiscriminate aggression. The result is a dog that settles into your home, behaves well in public and protects your family when it matters.",
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

<section class="section section--alt">
  <div class="wrap">
    ${sectionHead({ eyebrow: "Wolfmaster Academy", title: "Courses", text: "Learn from the team that trains Wolfmaster dogs. New courses for owners, trainers and decoys are launching soon." })}
    ${courseCards(courses.slice(0, 3))}
    <p class="center">${btn("View all courses", "/courses/", { arrowIcon: true })}</p>
  </div>
</section>

<section class="section">
  <div class="wrap">
    ${sectionHead({ eyebrow: "Gallery", title: "From the field", text: "Training days, trials and the dogs we work with." })}
    ${galleryGrid(gallery.slice(0, 6))}
    <p class="center">${btn("Open the gallery", "/gallery/", { arrowIcon: true })}</p>
  </div>
</section>

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
  description: "Personal, family, executive, estate, guard, security and detection dogs trained by Wolfmaster K9.",
  body: `
${pageHero({ eyebrow: "Protection dogs", title: "Protection dogs for real life", lead: "Trained dogs for personal protection, property security and specialised working roles, matched to each dog's suitability and training. Choose the situation closest to yours, or talk to us and we will help you decide.", image: "action" })}
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
  description: "What sets Wolfmaster K9 protection dogs apart: trial-standard training, family-first temperament and ongoing support.",
  body: `
${pageHero({ eyebrow: "Our difference", title: "The Wolfmaster standard", lead: "What separates a trained protection dog from a dog that has simply been taught to bite.", image: "dayEstate" })}
<section class="section">
  <div class="wrap">
    <div class="pillars">
      ${[
        ["Temperament first", "We select for stable nerves and a social nature before anything else. A dog that is anxious or reactive can never be a safe family protection dog."],
        ["Coached by competitors", "Our team has competed in PSA since 2016 and develops its own trial decoys. Our dogs train with people who understand timing, movement and safety, and know how to test a dog properly."],
        ["Control before protection", "Stability, obedience and impulse control come first. We build appropriate protective responses, never indiscriminate aggression."],
        ["Proofed in real places", "Markets, parking lots, apartment lifts, farmhouses and busy homes. We train where your dog will live, not only on our field."],
        ["You train too", "Handover is not a delivery. You learn to handle your dog with our trainers until it responds to you as well as it does to us."],
        ["We stay with you", "Follow-up sessions, refresher training and a direct line to the team after handover."],
      ].map(([h, p], i) => `<div class="pillar reveal"><span class="pillar__n">${String(i + 1).padStart(2, "0")}</span><h3 class="h3">${h}</h3><p class="muted">${p}</p></div>`).join("")}
    </div>
  </div>
</section>
${split({ image: "buntyPsa", imageAlt: "Rajender with his Malinois and trophies at the Memorial PSA Trial 2025", title: "Proven on the trial field", paras: ["Since 2016 Rajender has prepared more than nine dogs for the PSA PDC and developed three dogs for PSA 1: two have earned full PSA 1 titles and the third has its first leg. His Dutch Shepherd Jade holds a PSA 2 title and is progressing toward PSA 3.", "In December 2025 Rajender and his Malinois took home a medal and three trophies at the Memorial PSA Trial in Hyderabad. The same standard goes into every dog we place."], buttons: btn("Board & train programs", "/board-and-train/", { arrowIcon: true }) })}
`,
};

const team = {
  path: "/team/",
  title: "The Team",
  description: "Meet the Wolfmaster K9 team, led by Rajender ‘Wolfmaster Bunty’ Chauhan: professional dog trainer, champion dog handler, PSA coach and working-dog specialist.",
  body: `
${pageHero({ eyebrow: "The team", title: "The people behind every dog", lead: "Wolfmaster K9 is a team of trainers, decoys and handlers who work with every dog from its first weeks to the day it goes home, and long after.", image: "dayHeel" })}
<section class="section">
  <div class="wrap split">
    <figure class="split__media split__media--tall reveal"><img src="${img("buntyHeel")}" alt="Rajender Chauhan working a Malinois in heel" loading="lazy"></figure>
    <div class="split__body reveal">
      <p class="eyebrow">Professional dog trainer · Champion dog handler · PSA coach · Working-dog specialist</p>
      <h2 class="h2">Rajender “Wolfmaster Bunty” Chauhan</h2>
      <p class="muted">Rajender began his professional career in dog training in 2002. Over more than two decades he has built expertise across Kennel Club of India (KCI) obedience, competitive show handling, Protection Sports Association (PSA), personal protection dogs, working-dog development, scent detection and operational dog training.</p>
      <p class="muted">His work is built on understanding each dog, recognising its potential and developing a strong partnership between dog and handler.</p>
      <dl class="facts">
        <div><dt>Training since</dt><dd>2002</dd></div>
        <div><dt>PSA since</dt><dd>2016</dd></div>
        <div><dt>Disciplines</dt><dd>KCI obedience, show handling, PSA, PPD, detection</dd></div>
        <div><dt>Based in</dt><dd>${site.base}</dd></div>
      </dl>
    </div>
  </div>
</section>
<section class="section section--alt">
  <div class="wrap">
    ${sectionHead({ title: "Two decades across every discipline", text: "From the show ring to the trial field and operational work." })}
    <div class="pillars">
      ${[
        ["Competitive handling", "Rajender has handled and developed numerous champion dogs in India and won multiple Best Handler awards, known for professional presentation, ring discipline and technical understanding. He has mentored many handlers who are now successful in India's dog-show community."],
        ["KCI obedience", "He has trained German Shepherds and Labradors for KCI obedience. His red-nose American Staffordshire Terrier competed at Master Class level and, according to Rajender, earned more than 300 trophies across obedience and breed shows. He continues to coach handlers in obedience and show handling."],
        ["PSA since 2016", "Rajender has prepared more than nine dogs for PDC and developed three dogs for PSA 1: two have earned full PSA 1 titles and the third has its first leg. He coaches obedience, engagement, control, environmental confidence and the technical demands of PSA."],
        ["Jade · PSA 2", "His female Dutch Shepherd, Jade, has achieved a PSA 2 title and is progressing toward PSA 3. In Rajender's description, she is the only Dutch Shepherd in Asia to have achieved a PSA 2 title."],
        ["Trainers, handlers &amp; decoys", "Rajender develops trainers, handlers and trial decoys. His coaching covers training mechanics, handling skills, decoy development, timing, movement and safety. One of his student decoys has been recognised as one of Asia's youngest."],
        ["Working &amp; operational dogs", "He has worked with companies, government-sector organisations and military personnel on patrol dog training, scent-work and detection, explosive-detection dog training, protection-work development, handler education and environmental conditioning."],
        ["Personal protection dogs", "His approach to protection dogs focuses on stability, obedience, impulse control and appropriate protective responses rather than indiscriminate aggression. Trained dogs are offered for personal protection, property security and specialised working roles, according to each dog's suitability and training."],
        ["Training professionals", "Rajender trains professionals across India in PSA, obedience, personal protection and working dogs, teaching them to understand behaviour, evaluate performance and make sound training decisions."],
      ].map(([h, p], i) => `<div class="pillar reveal"><span class="pillar__n">${String(i + 1).padStart(2, "0")}</span><h3 class="h3">${h}</h3><p class="muted">${p}</p></div>`).join("")}
    </div>
  </div>
</section>
${cta({ title: "Build better dogs. Develop better handlers. Train better trainers.", text: "Raise the standard of the canine industry. That is the mission behind every dog, handler and trainer Wolfmaster K9 works with.", buttons: btn("Connect with us", "/contact/", { variant: "primary", arrowIcon: true }) + btn("Courses", "/courses/") })}
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
        ["Ongoing support", "Refresher training and advice whenever you need it."],
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
${pageHero({ eyebrow: "Our story", title: "Two decades of working dogs", lead: "From the show ring and the obedience field to PSA and working dogs: more than two decades of professional dog training.", image: "dawn" })}
<section class="section">
  <div class="wrap narrow">
    <ol class="timeline">
      ${[
        ["2002", "The beginning", "Rajender Chauhan begins his professional career in dog training."],
        ["The show ring", "Champion dogs and Best Handler awards", "Rajender handles and develops numerous champion dogs in India, wins multiple Best Handler awards and mentors handlers who go on to succeed in India's dog-show community."],
        ["KCI obedience", "German Shepherds, Labradors and a 300-trophy AmStaff", "Rajender trains dogs for Kennel Club of India obedience. His red-nose American Staffordshire Terrier competes at Master Class level and, by Rajender's count, wins more than 300 trophies across obedience and breed shows."],
        ["2016", "Into PSA", "Rajender enters Protection Sports Association sport. He goes on to prepare more than nine dogs for PDC and develop three for PSA 1: two earn full titles and the third has its first leg."],
        ["PSA 2", "Jade", "Rajender's Dutch Shepherd, Jade, earns a PSA 2 title, the only Dutch Shepherd in Asia to do so, and progresses toward PSA 3."],
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
${pageHero({ eyebrow: "How it works", title: "From first call to ongoing support", lead: "Five clear steps. No pressure, and no dog leaves us until it is right for your home.", image: "dayExec" })}
<section class="section">
  <div class="wrap">
    <ol class="steps steps--grid">
      ${[
        ["Consultation", "We learn about your home, family, routine and what you need the dog to do."],
        ["Matching", "We recommend dogs from our current and upcoming dogs, or evaluate your own dog for training."],
        ["Training", "A structured program of obedience, protection and real-world proofing."],
        ["Handover", "You train with your dog before it comes home, then we integrate it into your household."],
        ["Support", "Follow-ups, refreshers and advice after your dog comes home."],
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
  description: "Obedience, behaviour, protection, sport coaching, show handling and working-dog training from Wolfmaster K9.",
  body: `
${pageHero({ eyebrow: "Training programs", title: "Train your own dog with Wolfmaster", lead: "The same trainers who prepare our protection dogs work with your dog, at our facility or at your home.", image: "dayTraining" })}
<section class="section">
  <div class="wrap">
    <div class="program-grid">
      ${[
        ["Obedience &amp; off-leash", "Reliable obedience from foundations to off-leash control around traffic, crowds and other dogs.", "dayTraining"],
        ["Behaviour", "Aggression, fear, reactivity and anxiety, assessed and addressed by experienced trainers.", "dayMalinois"],
        ["Protection training", "For suitable dogs, structured protection work built on control and a clear off switch.", "action"],
        ["Puppy foundation", "Confidence, socialisation and engagement in the months that shape a working dog.", "dayPuppy"],
        ["Board &amp; train", "Residential training at our facility with daily sessions and a full handler handover.", "dayEstate"],
        ["Handler coaching", "One-to-one sessions that teach you to read and lead your dog.", "dayHeel"],
        ["Sport &amp; competition coaching", "PSA and KCI obedience preparation: obedience, engagement, control, environmental confidence and the technical demands of trials.", "psa"],
        ["Show handling", "Competitive show handling coached by a champion handler with multiple Best Handler awards.", "dayGsd"],
        ["Working &amp; detection dogs", "Patrol, scent-work and detection training for companies, government-sector organisations and security teams.", "leash"],
      ].map(([h, p, im]) => `<article class="program reveal"><div class="program__img"><img src="${img(im, "sm")}" alt="" loading="lazy"></div><h3 class="h3">${h}</h3><p class="muted">${p}</p></article>`).join("")}
    </div>
  </div>
</section>
${contactForm("Book a training assessment")}
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
      ["Our approach", ["We share prices after a consultation, once we understand what you need. Every Wolfmaster placement includes handler training, home integration and ongoing support."]],
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
  ["Who trains the dogs?", ["The Wolfmaster K9 team, led by Rajender “Wolfmaster Bunty” Chauhan, who has trained dogs professionally since 2002 and competed in PSA since 2016."]],
  ["Are protection dogs aggressive?", ["Not ours. We train for stability, obedience, impulse control and appropriate protective responses, not indiscriminate aggression. A Wolfmaster dog is calm and social until it is needed."]],
  ["Do you work with companies and organisations?", ["Yes. Rajender has worked with companies, government-sector organisations and military personnel on patrol, scent-work, detection and explosive-detection dogs, and on handler education."]],
  ["Where are you based?", [`We are based in ${site.base} and work with clients across the NCR, and further across India on request.`]],
  ["What happens after the dog comes home?", ["Home integration sessions, scheduled check-ins and ongoing support from the team."]],
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
${pageHero({ eyebrow: "Connect with us", title: "Speak with Wolfmaster K9", lead: "Call, WhatsApp or send the form and a member of the team will get back to you.", image: "dayFamily", buttons: btn("WhatsApp us", `https://wa.me/${site.whatsapp}`, { variant: "primary", arrowIcon: true, ext: true }) + phoneBtn() })}
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
  ${sectionHead({ title: `Delivery, handling &amp; support in ${a.name}`, text: "Every placement includes handler training, home integration sessions at your address and ongoing support from the team." })}
</div></section>
<section class="section"><div class="wrap">${sectionHead({ title: "Other areas" })}${areaList()}</div></section>
`,
}));

const boardTrain = {
  path: "/board-and-train/",
  title: "Board & Train Programs",
  description: "Residential board and train programs at Wolfmaster K9: obedience, behaviour, protection and puppy programs with daily training and a full handler handover.",
  body: `
${pageHero({ eyebrow: "Board & train", title: "Board &amp; train programs", lead: "Your dog lives and trains with the Wolfmaster team, with structured sessions every day. When it comes home, you learn to handle it with the same results.", image: "dayEstate", buttons: btn("Book an assessment", "/contact/?course=Board%20%26%20Train%20Programs", { variant: "primary", arrowIcon: true }) + phoneBtn() })}
<section class="section">
  <div class="wrap">
    ${sectionHead({ title: "Choose a program", text: "Every program starts with an assessment. We recommend the program and its length once we have met your dog." })}
    <div class="program-grid program-grid--four">
      ${[
        ["Obedience board &amp; train", "Reliable obedience and off-leash control: heel, recall, place, stays and calm manners around people, traffic and other dogs.", "dayTraining"],
        ["Behaviour board &amp; train", "For dogs with reactivity, fear or aggression. A structured behaviour plan worked daily by our trainers.", "dayMalinois"],
        ["Protection board &amp; train", "For suitable dogs: protection work built on obedience and a clear off switch, proofed in real environments.", "heroBite"],
        ["Puppy board &amp; train", "Foundation training for young dogs: socialisation, confidence, engagement and early obedience.", "dayPuppy"],
      ].map(([h, p, im]) => `<article class="program reveal"><div class="program__img"><img src="${img(im, "sm")}" alt="" loading="lazy"></div><h3 class="h3">${h}</h3><p class="muted">${p}</p></article>`).join("")}
    </div>
  </div>
</section>
<section class="section section--alt">
  <div class="wrap split">
    <div class="split__body reveal">
      <h2 class="h2">What every program includes</h2>
      <p class="muted">Your dog follows the same daily routine as the dogs we train for placement, with progress updates from the team throughout.</p>
    </div>
    <div class="reveal">
      <ul class="ticks ticks--boxed">
        <li>Assessment before the program starts</li>
        <li>Daily structured training sessions</li>
        <li>Exercise, feeding and care at our facility</li>
        <li>Regular photo and video progress updates</li>
        <li>Handler sessions so you get the same results</li>
        <li>Follow-up support once your dog is home</li>
      </ul>
    </div>
  </div>
</section>
<section class="section">
  <div class="wrap">
    <ol class="steps steps--grid">
      ${[
        ["Assessment", "We meet your dog, understand the problem or goal and recommend a program."],
        ["Arrival", "Your dog settles in with the team and its daily routine begins."],
        ["Training", "Daily sessions, with regular updates so you can follow its progress."],
        ["Handover", "You train with your dog and our trainers before it goes home."],
        ["Follow-up", "Check-ins and refresher sessions to keep the results."],
      ].map(([h, p], i) => `<li class="step reveal"><span class="step__n">${i + 1}</span><div><h3 class="h3">${h}</h3><p class="muted">${p}</p></div></li>`).join("")}
    </ol>
  </div>
</section>
${contactForm("Book a board & train assessment")}
`,
};

// ------------------------------------------------------------------ COURSES & GALLERY
const coursesPage = {
  path: "/courses/",
  title: "Courses",
  description: "Courses from Wolfmaster K9: professional dog trainer, decoy camp, sport coaching, show handling, protection dog handler, puppy foundation, behaviour and obedience.",
  body: `
${pageHero({ eyebrow: "Wolfmaster Academy", title: "Courses", lead: "The methods behind every Wolfmaster dog, taught by the team that uses them. Courses are launching soon. Register your interest and we will contact you first with dates and details.", image: "dayTraining", buttons: btn("Register interest", "/contact/", { variant: "primary", arrowIcon: true }) + btn(site.phone, site.phoneHref) })}
<section class="section">
  <div class="wrap">
    ${courseCards(courses, { full: true })}
  </div>
</section>
${cta({ title: "Want a course for your team?", text: "We can run training for security agencies, kennels and groups of owners.", buttons: btn("Talk to us", "/contact/", { variant: "primary", arrowIcon: true }) + phoneBtn() })}
${contactForm("Register your interest")}
`,
};

const galleryPage = {
  path: "/gallery/",
  title: "Gallery",
  description: "Photos from Wolfmaster K9 training days, PSA trials and the dogs we work with.",
  body: `
${pageHero({ eyebrow: "Gallery", title: "From the field", lead: "Training days, trials and the dogs we work with. Tap any photo to view it full size.", image: "heroSprint" })}
<section class="section">
  <div class="wrap">
    ${galleryGrid()}
  </div>
</section>
${cta({ title: "Follow us for more", text: "New training clips and photos every week.", buttons: btn("Instagram", site.instagram, { variant: "primary", arrowIcon: true, ext: true }) + btn("Facebook", site.facebook, { arrowIcon: true, ext: true }) })}
`,
};

export const pages = [
  home, availableDogs, ...breedPages, protectionIndex, ...protectionPages,
  difference, team, processPage, story, howItWorks,
  coursesPage, galleryPage, training, boardTrain, guidesIndex, ...guidePages, faq, contact, ...areaPages,
];
