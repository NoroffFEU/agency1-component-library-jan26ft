# Card + Modal Composite

A profile card with a "More Info" call-to-action button that opens a modal with additional details.

Built by Trym (card) and Hana (button styling, modal and open/close logic).

# How to use

Copy the `.profile-card` and `<dialog class="modal">` blocks, then include `style.css` and `script.js`. The modal is referenced by its `id`, so if you change `id="info-modal"` remember to update the selector in `script.js`.

# Design Decisions

- The modal uses native `<dialog>` element with `showModal()`, which focuses on trapping an inert background for free
- `::backdrop` styles the overlay
- Both buttons share one rule set: pill shape, gradient fill and a shadow tinted to match, so they read as CTA's rather than plain buttons
- `prefers-reduce-motion` disables the open animation and the button hover lift

# Known limitations

- `<dialog>` is unsupported in older browsers; there is no fallback
- The modal content is hard-coded rather than populated from the card
- Only one close button
