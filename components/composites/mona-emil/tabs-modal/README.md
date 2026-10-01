# Tabs + Modal

A tabs component combined with a modal. Built collaboratively as part of Week 3's pair sprint.

## Composite component

- Tabs (Mona)
- Modal (Emil)

## How to use

Copy the `.tabs` and `<dialog class="modal">` HTML structure and include `style.css` and `script.js`. 
Each button needs a `data-tab` attribute that matches the panel's `id` (prefixed with `tab-`).

Each tab panel has a **View More** button that opens the modal. The button carries the modal content in its `data-modal-title` and `data-modal-text` attributes, so each tab can show its own text in the same modal.

## Design decisions

- Three tabs are used to show different content
- Only the active tab panel is visible
- The active tab has a different style
- Tabs can be changed by clicking or using the left and right arrow keys
- The tab buttons use ARIA attributes for accessibility
- The **View More** buttons are placed inside each tab panel for the modal to use
- One modal is reused for all three tabs instead of one modal per panel
- The modal uses the native `<dialog>` element with `showModal()`, which traps focus and makes the rest of the page inert without extra code
- `::backdrop` dims the page behind the modal
- The Escape key is handled by `<dialog>` itself, and clicks on the backdrop close the modal
- Focus returns to the **View More** button when the modal closes
- `prefers-reduced-motion` turns off the open animation

## Known limitations

- Tab content is static
- No URL hash support for deep-linking to a specific tab
- The selected tab resets when the page is refreshed
- `<dialog>` is unsupported in older browsers, and there is no fallback
- The page behind the modal can still be scrolled
- The modal content comes from data attributes, so longer text has to be written into the HTML
