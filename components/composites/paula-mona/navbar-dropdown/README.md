# Top Navigation

A sticky navbar with mobile hamburger menu toggle, and option dropdowns.

## Composite component

- Navbar
- Dropdown

## How to use

- Copy the `.header` HTML structure and include both `style.css` and `script.js`. 
- Click the hamburger menu on smaller screens to open the navigation.
- Click a category button (e.g. "Coffee") to open its dropdown menu.
- The navigation changes to a horizontal layout on larger screens.

## Design decisions

- The logo is centered above the navigation
- A hamburger menu is used on smaller screens.
- The navigation is centered on larger screens.
- A light glass/blur effect is used for the mobile menu.
- The layout is responsive and works on different screen sizes.
- Each category button toggles its own dropdown menu; opening one closes any other open dropdown.
- Dropdown menus appear as elevated white panels with rounded corners, visually separating them from the page.
- Clicking outside the navbar closes any open dropdown.
- On mobile, an open dropdown pushes the categories below it down (accordion-style); on wider screens it floats below its button instead.

## Known limitations

- The navigation does not include a search function
- Dropdown items are static text and are not linked to real pages.
- Dropdown menus do not support keyboard navigation (e.g. arrow keys or Escape to close) — only mouse/touch clicks are handled.