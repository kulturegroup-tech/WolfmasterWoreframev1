# Wolfmaster K9 website

Multi-page site for **Wolfmaster K9**, the protection-dog and training team led by founder and head trainer Rajender “Wolfmaster Bunty” Chauhan (Faridabad, Delhi NCR).

The structure, page architecture and design system follow the Israel Protection K9 site, as requested:
- **Type:** Cormorant Garamond for headlines and Onest for text.
- **Look:** a near-black page with thin-outlined glass panels over full-bleed photos.
- **Buttons:** small uppercase labels, one blue primary action.
- **Navigation:** dropdowns, with the phone number and "Connect with us" in the header.

All copy, photos and the logo are Wolfmaster's own.

## How it's built

- `build/data.mjs`: contact details, navigation, breeds, protection types, areas, dog listings and the image map.
- `build/layout.mjs`: header, footer, contact form and shared building blocks (page hero, glass panel, cards).
- `build/pages.mjs`: every page.
- `build/build.mjs`: writes the static site into `public/`, along with `sitemap.xml`, `robots.txt` and `404.html`.
- `public/assets`: the CSS, JS, fonts (self-hosted, OFL) and local photos.

Edit the files in `build/`, then run:

```bash
node build/build.mjs
```

Netlify runs the same command on every push (see `netlify.toml`, which publishes `public/`).

## Pages

| Section | Pages |
|---|---|
| Home | `/` |
| Available Dogs | `/available-dogs/` (filters by breed, sex and status) |
| Courses | `/courses/`: six planned courses, each marked "Coming soon" with Register interest |
| Gallery | `/gallery/`: photo grid with a full-screen viewer (tap, arrow keys, Esc) |
| Breeds | Belgian Malinois, German Shepherd, Dutch Shepherd |
| Protection Dogs | overview, plus Personal, Family, Executive, Farmhouse & Estate, Guard, Security |
| The Process | Our Difference, The Team, Home Integration, Our Story, How It Works |
| Client Service | Training Programs, PSA Sport & Decoy, Guides (2 articles), FAQ, Contact |
| Areas | Delhi, Gurugram, Noida, Faridabad, Ghaziabad |

## Before launch

- **Courses.** `courses` in `build/data.mjs` lists the planned courses with no dates or fees. Confirm the course list, then add dates, duration and fees once the team sets them.
- **Gallery.** Only the three photos of Rajender are real. Replace the rest of `gallery` in `build/data.mjs` with real Wolfmaster photos, because visitors will read a gallery as real moments.

- **Dog listings.** `dogs` in `build/data.mjs` contains **sample** entries, shown with a "Sample" badge. Replace them with real dogs.
- **Team.** The team page has role cards with no names yet. Add real profiles and photos.
- **Areas.** Confirm the cities served before adding more (`areas` in `build/data.mjs`).
- **Press and testimonials.** The reference site has press logos and named testimonials. Add these only with real coverage and quotes used with permission.
- **Contact details** (`+91 98733 35698`, `wolfmasterk9@gmail.com`). Confirm these.
- **Photos.** Real photos of Rajender are in `public/assets/img`. The other images are AI-generated stand-ins hosted on Higgsfield. Run `python3 scripts/self-host-images.py` to download and compress them locally (it rebuilds the site), or replace them with real shoots.
