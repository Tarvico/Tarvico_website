# NVIDIA Inception membership: website usage

Status: preview (PR #85). Merge after the final Cloudflare preview is approved.

Tarvico Inc. is the member. Product pages and product cards do not carry the badge. Copy describes a program membership only. It does not claim certification, endorsement, investment or a commercial partnership.

## Placements

| Placement | Content |
| --- | --- |
| Homepage, directly below the hero | "Ecosystem membership" section: heading, one paragraph, official badge |
| About, "Innovation Ecosystem" section | Two paragraphs and the official badge |
| About, Company Timeline | "November 2026 — Accepted into NVIDIA Inception" |
| Global footer | Official badge with "Member of NVIDIA Inception", together as one link to https://www.nvidia.com/en-us/startups/ (new tab, `rel="noopener noreferrer"`) |
| Legal, "No Agency or Endorsement" | Names the NVIDIA Developer Program and NVIDIA Inception as separate program memberships |

Comparable placements (homepage, a membership page, the global footer) appear on other Inception member sites reviewed by Tarvico management: studioram.app, aivory.uk/nvidia-inception, forceaisecurity.com, three.ws and pyrenth.app. These sites were used as placement references only. They are not a source of artwork or rules.

## 1. Official NVIDIA guidance

The NVIDIA pages below could not be opened directly from the build environment (network-blocked). The wording here comes from search-result excerpts of those official pages. Re-check against the live pages and the Inception member portal.

**[NVIDIA Logo & Brand Guidelines](https://www.nvidia.com/en-us/about-nvidia/legal-info/logo-brand-usage/)** (written for the NVIDIA logo; the closest official guidance for the badge):
- Clear space on all sides should be at least the height of the "n" of the NVIDIA logo. More space is welcome.
- Do not distort, stylize, recolor (outside approved colors), recreate, or apply effects to the logo.
- Keep sufficient contrast with the background, and avoid busy backgrounds.

**[How to Announce NVIDIA Inception Membership](https://perspectives.nvidia.com/nvidia-inception/faq/how-to-announce-nvidia-inception-membership/)**:
- The program provides member badges and other promotional assets. Approved assets and brand instructions are in the Inception member portal.
- Membership should be kept distinct from investment, product certification, or a formal sales partnership.

## 2. Asset review (supplied by Tarvico, from NVIDIA Inception)

| Variant | Construction | Suitable on light | Suitable on dark |
| --- | --- | --- | --- |
| Full-color Screen SVG (`rgb-for-screen`) | Black frame and lettering, green (`#76b900`) eye, solid white panel inside the frame, transparent outer margin | Yes | Only on a light surface: the black frame is lost on dark backgrounds |
| One-color black Screen SVG (`rgb-1c-blk-for-screen`) | Same geometry, all black on the same solid white panel | Yes | Same limitation |

Neither file is a dark-background (reverse or white) variant, so no official dark variant was available. Only the full-color file is committed, unchanged. SHA-256: `d2f1fc25616ba02933506b21fa668289169e58ac4c76b5f7f209f2632f289f2e`. The SVG contains paths and a style block only: no scripts or external references.

## 3. Tarvico design decisions (not NVIDIA requirements)

- **Variant:** full-color in every theme and placement.
- **Dark backgrounds:** in the dark theme, and in the always-dark footer, the same artwork sits on a flat neutral light surface (`#f8f8f6`, the site's light-theme page color). The badge therefore looks the same as on the light theme. The surface has no border, shadow, radius, gradient or effect, and adds space beyond the artwork's own margin: 16 px in content sections, 12 px in the footer.
- **Sizes:**
  - Homepage and About: 180 px minimum, up to 240 px.
  - Footer: 140 px, so it stays secondary to the 150 px Tarvico wordmark.
- **Spacing from text:** at least 32 px in content sections.
- **Accessibility:** in the footer the badge is decorative (`alt=""`) because the link text states the membership. On the homepage and About page its alt text is "NVIDIA Inception member badge".

## 4. Worth confirming in the Inception member portal

1. Whether a dark-background (reverse) badge variant exists. If it does, use it in the dark theme and footer instead of the light surface.
2. Any badge-specific clear-space, minimum-size or linking rules that differ from the general NVIDIA logo guidance above.

When anything changes, update `.inception-badge` / `.footer-inception` in `tarvico-website/app/editorial.css` and this file.
