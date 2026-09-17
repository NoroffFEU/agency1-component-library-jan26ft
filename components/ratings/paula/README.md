# Ravioli Rating

An interactive 5-ravioli rating input with hover preview and click confirmation, styled entirely with CSS (no images or emoji).

## How to use

Include `style.css` and `script.js`. Each ravioli needs a `data-value` attribute (1–5). One version is interactive; use the `rating--readonly` class with the `rating__ravioli--filled` modifier for a display-only variant.

## Design decisions

- Each unit is a CSS-drawn ravioli: a dashed border represents the crimped pasta edge, and a dotted circle in the center represents the pressed seam
- Hovering previews the rating by filling in ravioli up to that number
- Clicking locks in the rating
- A warm tan/gold (`#dba869`) signals a selected/filled state, applied via a single `.active` class for the interactive version and a `--filled` modifier class for the read-only version (avoids mismatched `:hover` vs `.active` styling)
- Light blue background chosen so the gold fill color stands out clearly
- Scale animation on hover/active for visual feedback

## Known limitations

- No form integration — rating is just displayed, not submitted
- No way to reset or clear the rating