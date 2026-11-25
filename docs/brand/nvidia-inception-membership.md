# NVIDIA Inception membership: website usage and open compliance questions

Status: preview only. Not approved for production.

## What the site shows

| Placement | Content |
| --- | --- |
| Homepage, directly below the hero | "Ecosystem membership" section: heading, one paragraph, official badge |
| About, "Innovation Ecosystem" section | Two paragraphs and the official badge |
| About, Company Timeline | "November 2026 — Accepted into NVIDIA Inception" |
| Footer | Text link "Member of NVIDIA Inception" to https://www.nvidia.com/en-us/startups/ (new tab, `rel="noopener noreferrer"`) |
| Legal, "No Agency or Endorsement" | Names the NVIDIA Developer Program and NVIDIA Inception as separate program memberships with no partnership, investment or endorsement |

Tarvico Inc. is the member. Product pages and product cards do not carry the badge.

## Asset

- File: `tarvico-website/public/assets/brand/nvidia-inception/nvidia-inception-program-badge-rgb-for-screen.svg`
- Source: the official full-color Screen SVG supplied by Tarvico management, committed byte-for-byte unchanged.
  SHA-256 `d2f1fc25616ba02933506b21fa668289169e58ac4c76b5f7f209f2632f289f2e`.
- Reviewed: paths and a style block only. No scripts, links, external references or embedded images.
- No print, CMYK, one-color or archive files are committed.

## Provisional display defaults (not NVIDIA specifications)

The NVIDIA Inception brand guidelines were not available when this was built. NVIDIA's site could not be reached from the build environment. The values below are Tarvico's conservative preview defaults. They are not NVIDIA-confirmed requirements.

- Minimum display width: 180 CSS px (grows to 240 px on wide screens).
- Clear space: at least 32 px from any text, plus the transparent margin built into the SVG.
- The artwork is never recolored, cropped, filtered, animated, framed or combined with the Tarvico logo.
- Dark theme: the same unmodified full-color SVG is shown on a flat neutral light surface (`#f8f8f6`, the site's light-theme page color) with 16 px of extra space around the artwork's own margin. The badge therefore looks identical in both themes. The surface has no border, shadow, radius, gradient or effect.

**The dark-theme surface is not yet confirmed as NVIDIA-compliant. Do not merge until it is confirmed (open question 3).**

## Open questions to confirm against NVIDIA's Inception brand guidelines

1. Required clear space and minimum on-screen size for the Inception badge.
2. Whether the badge may sit on dark backgrounds. If so, which variant to use, or whether a reverse version exists.
3. **Blocking for merge:** whether the full-color badge may be shown on a neutral light panel inside a dark-themed page, as implemented here. If not, which treatment NVIDIA requires.
4. Whether the badge must link to a specific NVIDIA URL, or must not link at all.
5. Approved wording for describing membership, and any required trademark attribution.

When these are answered, update `.inception-badge` in `tarvico-website/app/editorial.css` and this file.
