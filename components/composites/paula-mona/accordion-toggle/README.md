# Accordion with Toggle Switch

A composite component combining an accordion (expandable/collapsible sections) with toggle switches. Built collaboratively as part of Week 2's pair sprint.

## How to use

Include `style.css` and `script.js`. Each section is an `.accordion__item` containing an `.accordion__header` (clickable, shows title/subtitle/chevron) and an `.accordion__body` (hidden by default, revealed on click).

## Design decisions

- Clicking a header toggles an `accordion__item--open` class on its parent, which CSS uses to show/hide that section's body
- The chevron rotates 180° when a section is open, giving a clear visual cue
- Each section can be expanded independently — opening one doesn't close the others
- Section headers include a title and subtitle for context before expanding
- Nested rows inside each section also use title + subtitle pairs, consistent with the header style

## Composite breakdown

- Accordion structure, layout, and content: Paula
- Toggle switches (main header switches and nested row switches): Mona

## Known limitations

- No persistence — sections reset to collapsed on page reload
- Expand/collapse is instant (no smooth open/close animation) — content jumps into place rather than sliding
- This README.md was written with the help of AI
- Toggle switch functionality to be added by Mona on this same branch