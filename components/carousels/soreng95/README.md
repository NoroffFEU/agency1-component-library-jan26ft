# Step Carousel

A plain, flat carousel that steps through four text panels. Navigation sits in a control bar under the slide: a Prev button, pagination bars, and a Next button. Arrow keys work when the carousel has focus, and it auto-advances every 4 seconds unless the user is hovering or focused on it.

## How to use

Copy the `.carousel` markup from `index.html` and link `style.css` and `script.js`. Replace the content inside each `.carousel__slide` with your own. Add or remove slides freely — the dots are built from the number of slides in the DOM, so no extra HTML is needed.

The wrapper keeps `tabindex="0"` so it can receive focus and handle the arrow keys.

## Design decisions

- No gradients or shadows, just a thin border and black text on white, so it can drop into a content page without fighting the surrounding design
- Controls live in a bar below the slide instead of floating on top of it, which keeps them off the content and gives them a real hit area on small screens
- Pagination dots are short bars rather than circles, so the active one is readable at a glance even in a monochrome palette
- The active slide also gets a black left edge, so the current slide is marked by more than just position
- Sliding track with `transform: translateX()` for the transition
- Dots are generated in JavaScript and read their target from a `data-index` attribute, with one click listener on the container instead of one per dot
- Index wraps around inside `goToSlide()`, so the buttons, the dots, and the auto-advance loop all share the same bounds logic
- Auto-advance pauses on `mouseenter` and on `focusin`, so keyboard users are not interrupted while navigating
- `aria-label` on the buttons and dots, plus `aria-current` on the active dot, for screen readers

## Known limitations

- Text-only slides; images would need a fixed height or an aspect ratio to stop the track jumping
- All slides share the height of the tallest one, since they sit in a flex row
- No touch or swipe support
- One slide is shown at a time, so a multi-item view would need layout changes
- The auto-advance timer restarts from zero when the pointer leaves, it does not resume from where it stopped
