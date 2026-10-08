# Glass Cards

Frosted glass credit card components. Blurred colour spheres sit behind each card and show through the translucent surface, and the cards tilts in 3D to follow the cursor on hover, and clicking it flips the card over to reveal the back.

## How to use

Copy one `.card-slot`block it contains the three `.orb`divs and the `.glass-card`itself - then include `styles.css`and `script.js`.

The glass effect depends on it being something colorful behind the card, so the orbs are part of the component, not decoration. To create a new colorway, add a modifier class and set three custom properties:

.card-slot--sunset {
--orb-1: #color
--orb-2: #color
--orb-3: #color
}

No changes to the `.orb`rules are needed.

## Design Decisions

- Each card sits in its own `.card-slot`wrapper so the orbs are positioned relative to the card's centre rather than the page centre.
- Colours come from CSS custom properties on the variant class
- `backdrop-filter: blur() saturate()`does the frosting; the `saturate()`keeps the color behind the glass
- A `linear-gradient` background plus an `inset`box-shadow on the top edge simulate the light catching rim of the glass
- The tilt is applied as an inline `transform`from JS and smoothed by a short CSS `transition`
- Grid uses `repeat(auto-fit, minmax(300px, 1fr))`so the cards reflow
- The card is a `<button>`rather than a `<div>`, so enter and space fir the flip for free and the card is reachable by keyboard

## Known limitations

- `backdrop-filter`is unsupported in older browsers
- The tilt is mouse-only, not available on mobile
- Orb positons are fixed pixel offsets, so they are tuned for the card's default size
- Card numbers, CVVs and names are fictional placeholders
