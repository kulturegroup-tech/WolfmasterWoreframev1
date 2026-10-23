import { site, nav, img, breeds, protectionTypes, dogs } from "./data.mjs";

export const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const arrow = `<svg class="ico-arrow" viewBox="0 0 12 12" aria-hidden="true"><path d="M3 9 9 3M4 3h5v5" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>`;
const chev = `<svg class="ico-chev" viewBox="0 0 10 6" aria-hidden="true"><path d="m1 1 4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>`;

// ---------- Buttons ----------
export function btn(label, href, { variant = "outline", ext = false, arrowIcon = false } = {}) {
  const attrs = ext ? ' target="_blank" rel="noopener"' : "";
  return `<a class="btn btn--${variant}" href="${href}"${attrs}><span>${label}</span>${arrowIcon ? arrow : ""}</a>`;
}

// ---------- Logo ----------
const mark = `<svg class="logo__mark" viewBox="0 0 40 40" aria-hidden="true"><path d="M7 7l7 8 6-5 6 5 7-8-2 15c0 8-5 13-11 15C14 35 9 30 9 22L7 7z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M15 21l2.5 2.5M25 21l-2.5 2.5M17.5 28h5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`;
export const logo = `<a class="logo" href="/" aria-label="Wolfmaster K9 home">${mark}<span class="logo__word">WOLFMASTER<em>K9</em></span></a>`;

// ---------- Header ----------
function header(current) {
  const items = nav.map((n, i) => {
    if (!n.items) return `<li><a class="nav__link${current === n.href ? " is-current" : ""}" href="${n.href}">${n.label}</a></li>`;
    const sub = n.items.map((s) => `<li><a href="${s.href}"${current === s.href ? ' aria-current="page"' : ""}>${s.label}</a></li>`).join("");
    return `<li class="has-sub"><button class="nav__link nav__toggle" type="button" aria-expanded="false" aria-controls="sub-${i}">${n.label}${chev}</button><ul class="nav__sub" id="sub-${i}">${sub}</ul></li>`;
  }).join("");
  return `
<header class="header" id="header">
  <div class="header__inner">
    ${logo}
    <nav class="nav" id="nav" aria-label="Primary"><ul class="nav__list">${items}</ul></nav>
    <div class="header__right">
      <a class="header__phone" href="${site.phoneHref}">${site.phone}</a>
      <a class="header__cta" href="/contact/">CONNECT WITH US ${arrow}</a>
      <button class="burger" id="burger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="nav"><span></span><span></span></button>
    </div>
  </div>
</header>`;
}

// ---------- Footer banner + contact + footer ----------
export function contactForm(title = "Speak with the Wolfmaster team") {
  return `
<section class="contact-block" id="contact">
  <div class="wrap contact-block__grid">
    <div class="contact-block__intro">
      <p class="eyebrow">Connect with us</p>
      <h2 class="h2">${title}</h2>
      <p class="muted">Tell us about your home, your family and what you need from a dog. A member of the team will call you back, usually the same day.</p>
      <ul class="contact-list">
        <li><span>Phone / WhatsApp</span><a href="${site.phoneHref}">${site.phone}</a></li>
        <li><span>Email</span><a href="mailto:${site.email}">${site.email}</a></li>
        <li><span>Base</span>${site.base}</li>
      </ul>
    </div>
    <form class="form" data-whatsapp="${site.whatsapp}" novalidate>
      <div class="form__row">
        <label class="field"><span>First name</span><input name="first" autocomplete="given-name" required></label>
        <label class="field"><span>Last name</span><input name="last" autocomplete="family-name"></label>
      </div>
      <div class="form__row">
        <label class="field"><span>Phone</span><input name="phone" type="tel" autocomplete="tel" required></label>
        <label class="field"><span>Email</span><input name="email" type="email" autocomplete="email"></label>
      </div>
      <label class="field"><span>City</span><input name="city" autocomplete="address-level2"></label>
      <fieldset class="field field--radio">
        <legend>I'm interested in</legend>
        <label><input type="radio" name="interest" value="A trained protection dog" checked> A trained protection dog</label>
        <label><input type="radio" name="interest" value="Training my own dog"> Training my own dog</label>
        <label><input type="radio" name="interest" value="PSA sport or decoy work"> PSA sport or decoy work</label>
        <label><input type="radio" name="interest" value="Something else"> Something else</label>
      </fieldset>
      <label class="field"><span>Message</span><textarea name="message" rows="4"></textarea></label>
      <button class="btn btn--primary" type="submit"><span>Send enquiry</span>${arrow}</button>
      <p class="form__note" aria-live="polite">Sends your details to us on WhatsApp.</p>
    </form>
  </div>
</section>`;
}

function footer() {
  const cols = nav.filter((n) => n.items).map((n) => `<div><h4>${n.label}</h4><ul>${n.items.map((s) => `<li><a href="${s.href}">${s.label}</a></li>`).join("")}</ul></div>`).join("");
  return `
<section class="banner">
  <img class="banner__img" src="${img("action")}" alt="" loading="lazy">
  <div class="banner__shade"></div>
  <div class="wrap banner__inner">
    <h2 class="h1">Trained by Wolfmaster.<br>Trusted at home.</h2>
    <div class="btn-row">${btn("Available dogs", "/available-dogs/", { variant: "primary", arrowIcon: true })}${btn("Connect with us", "/contact/", { arrowIcon: true })}</div>
  </div>
</section>
<footer class="footer">
  <div class="wrap footer__grid">
    <div class="footer__brand">
      ${logo}
      <p>Protection dogs, training and PSA sport from the Wolfmaster K9 team, led by founder and head trainer Rajender “Wolfmaster Bunty” Chauhan. In the field since 2002.</p>
      <p class="footer__contact"><a href="${site.phoneHref}">${site.phone}</a><br><a href="mailto:${site.email}">${site.email}</a><br>${site.base}</p>
    </div>
    ${cols}
  </div>
  <div class="wrap footer__bottom">
    <span>© <span data-year>2026</span> Wolfmaster K9. All rights reserved.</span>
    <span class="footer__social"><a href="${site.instagram}" target="_blank" rel="noopener">Instagram</a><a href="${site.facebook}" target="_blank" rel="noopener">Facebook</a><a href="${site.youtube}" target="_blank" rel="noopener">YouTube</a></span>
  </div>
</footer>
<a class="wa" href="https://wa.me/${site.whatsapp}" target="_blank" rel="noopener" aria-label="Chat with Wolfmaster K9 on WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.3 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.7 1.2 1.6 2 1.1 1 2 1.3 2.3 1.4.3.1.4.1.6-.1l.8-1c.2-.3.4-.2.6-.1l2 .9c.3.1.5.2.5.3.1.2.1.7-.1 1.3z"/></svg></a>`;
}

// ---------- Page shell ----------
export function page({ path, title, description, body, ogImage }) {
  const fullTitle = path === "/" ? `${site.name} | Protection Dogs & Training in Delhi NCR` : `${title} | ${site.name}`;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${site.url}${path}">
<meta property="og:title" content="${esc(fullTitle)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:image" content="${ogImage || img("hero")}">
<meta name="theme-color" content="#0c0c0c">
<link rel="preload" href="/assets/fonts/cormorant-500-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/onest-var.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/assets/css/site.css">
<script>document.documentElement.classList.add("js")</script>
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
${header(path)}
<main id="main">
${body}
</main>
${footer()}
<script src="/assets/js/site.js" defer></script>
</body>
</html>
`;
}

// ---------- Shared building blocks ----------
export function pageHero({ eyebrow, title, lead, image, buttons = "" }) {
  return `
<section class="page-hero">
  <img class="page-hero__img" src="${img(image)}" alt="" fetchpriority="high">
  <div class="page-hero__shade"></div>
  <div class="wrap page-hero__inner">
    ${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ""}
    <h1 class="h1">${title}</h1>
    ${lead ? `<p class="lead">${lead}</p>` : ""}
    ${buttons ? `<div class="btn-row">${buttons}</div>` : ""}
  </div>
</section>`;
}

export function glassPanel({ image, title, text, buttons = "", list = [], align = "right", imageAlt = "" }) {
  return `
<section class="glass glass--${align}">
  <img class="glass__img" src="${img(image)}" alt="${esc(imageAlt)}" loading="lazy">
  <div class="wrap glass__wrap">
    <div class="glass__panel reveal">
      <h2 class="h2">${title}</h2>
      <p>${text}</p>
      ${buttons ? `<div class="btn-row">${buttons}</div>` : ""}
      ${list.length ? `<ul class="ticks">${list.map((l) => `<li>${l}</li>`).join("")}</ul>` : ""}
    </div>
  </div>
</section>`;
}

export function split({ image, imageAlt = "", eyebrow, title, paras = [], buttons = "", reverse = false, tall = false }) {
  return `
<section class="section">
  <div class="wrap split${reverse ? " split--rev" : ""}">
    <figure class="split__media${tall ? " split__media--tall" : ""} reveal"><img src="${img(image)}" alt="${esc(imageAlt)}" loading="lazy"></figure>
    <div class="split__body reveal">
      ${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ""}
      <h2 class="h2">${title}</h2>
      ${paras.map((p) => `<p class="muted">${p}</p>`).join("")}
      ${buttons ? `<div class="btn-row">${buttons}</div>` : ""}
    </div>
  </div>
</section>`;
}

export function sectionHead({ eyebrow, title, text, center = true }) {
  return `<div class="section-head${center ? " section-head--center" : ""} reveal">${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ""}<h2 class="h2">${title}</h2>${text ? `<p class="muted">${text}</p>` : ""}</div>`;
}

export function breedCards() {
  return `<div class="breed-grid">${breeds.map((b) => `
    <a class="breed-card reveal" href="/breeds/${b.slug}/">
      <div class="breed-card__img"><img src="${img(b.image, "sm")}" alt="${esc(b.name)} portrait" loading="lazy"></div>
      <p class="eyebrow">${b.tag}</p>
      <h3 class="h3">${b.name}</h3>
      <p class="muted">${b.short}</p>
      <span class="breed-card__go">${arrow}</span>
    </a>`).join("")}</div>`;
}

export function dogCard(d) {
  return `
<article class="dog-card reveal" data-breed="${esc(d.breed)}" data-sex="${esc(d.sex)}" data-status="${esc(d.status)}">
  <div class="dog-card__img"><img src="${img(d.image, "sm")}" alt="${esc(d.breed)}" loading="lazy"><span class="badge">Sample</span></div>
  <div class="dog-card__body">
    <p class="eyebrow">${d.breed}</p>
    <h3 class="h3">${d.name}</h3>
    <p class="muted">${d.note}</p>
    <dl class="dog-card__meta"><div><dt>Sex</dt><dd>${d.sex}</dd></div><div><dt>Age</dt><dd>${d.age}</dd></div><div><dt>Status</dt><dd>${d.status}</dd></div></dl>
    <a class="link" href="/contact/">Enquire ${arrow}</a>
  </div>
</article>`;
}

export function dogFilters() {
  const uniq = (k) => [...new Set(dogs.map((d) => d[k]))];
  const sel = (name, label, opts) => `<label class="select"><span class="sr-only">${label}</span><select name="${name}"><option value="">${label}</option>${opts.map((o) => `<option>${o}</option>`).join("")}</select></label>`;
  return `<form class="filters" data-filters>${sel("breed", "Select breed", uniq("breed"))}${sel("sex", "Select sex", uniq("sex"))}${sel("status", "Select status", uniq("status"))}<button class="btn btn--ghost" type="reset">Clear</button></form>`;
}

export function typeCards(list = protectionTypes) {
  return `<div class="type-grid">${list.map((t) => `
    <a class="type-card reveal" href="/protection-dogs/${t.slug}/">
      <img src="${img(t.image, "sm")}" alt="" loading="lazy">
      <div class="type-card__shade"></div>
      <div class="type-card__front"><h3 class="h3">${t.name}</h3></div>
      <div class="type-card__hover"><h3 class="h3">${t.name}</h3><p>${t.short}</p><span class="link">Learn more ${arrow}</span></div>
    </a>`).join("")}</div>`;
}

export function credentials() {
  const items = [
    ["Since 2002", "Over two decades of training working and protection dogs."],
    ["PSA Decoy", "Rajender works as a Protection Sports Association decoy and competitor."],
    ["PSA trials in India", "Wolfmaster K9 has hosted multiple PSA trials in India."],
    ["Decoy certification", "Hosted a PSA decoy certification camp in New Delhi, December 2024."],
    ["Memorial PSA Trial 2025", "A medal and three trophies at the Hyderabad trial, December 2025."],
  ];
  return `<div class="cred-track">${items.map(([t, d]) => `<div class="cred reveal"><h3 class="cred__title">${t}</h3><p>${d}</p></div>`).join("")}</div>`;
}

export function cta({ title, text, buttons }) {
  return `<section class="section section--tight"><div class="wrap cta-strip reveal"><div><h2 class="h2">${title}</h2>${text ? `<p class="muted">${text}</p>` : ""}</div><div class="btn-row">${buttons}</div></div></section>`;
}

export function faqList(items) {
  return `<div class="faq">${items.map(([q, a]) => `<details class="faq__item reveal"><summary>${q}<span aria-hidden="true">+</span></summary><div class="faq__a">${a.map((p) => `<p>${p}</p>`).join("")}</div></details>`).join("")}</div>`;
}

export { arrow, img, site };
