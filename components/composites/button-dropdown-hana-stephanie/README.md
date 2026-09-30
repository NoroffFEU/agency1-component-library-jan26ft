# Button + Dropdown

A button that opens a dropdown menu of links.

Built by Hana (button structure, toggle and close behavior, typography) and Stephanie (button design and dropdown layout).

## How to use

Copy the `.dropdown` block - it contains both the button and the menu - then include `styles.css`, `script.js` and `BricolageGrotesque.ttf`. All four files need to sit in the same folder for the component to work standalone.

The menu is found byt its `id`, so if you decide to change `id="dropdown-menu"` update `aria-controls` on the button to match.

## Design decisions

- Uses the disclosure pattern with plain links rather than `role="menu"` - a true ARIA menu does require arrow-key navigation
- `aria-expanded` on the button is the single source of truth for whether the menu is open; both the JS and the CSS arrow rotation read from it
- The menu is hidden with the `hidden` attribute rather than `display: none`, which does hide it from screen readers as well as sighted users
- The menu closes five ways: clicking the button again, Escape, clicking outside the component, choosing an item, and moving focus out of it with Tab
- The font is self-hosted rather than linked from Google Fonts, so the component still renders correctly offline and has no external dependency
- Menu items lift sligthly on hover and on keyboard focus, so mouse and keyboard users get the same feedback

## Font

Bricolage Grotesque by Atelier Triay, licensed under the SIL Open Font
License 1.1. https://github.com/ateliertriay/bricolage

## Known limitations

- The `hidden` attribute cannot be animated, so the menu appears instantly rather than fading or sliding in
- Only one dropdown per page - the script uses `querySelector`, so a second instance would need the selectors changing to `querySelectorAll` and a loop
- No arrow-key navigation between items
- The menu always opens downwards and left-aligned
