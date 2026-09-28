# Tabs + Modal

A tabs component combined with a modal. Built collaboratively as part of Week 3's pair sprint.

## Composite component

- Tabs (Mona)
- Modal (Emil)

## How to use

Copy the `.tabs` HTML structure and include `style.css` and `script.js`. 
Each button needs a `data-tab` attribute that matches the panel's `id` (prefixed with `tab-`).

Each tab panel has a **View More** button that will be connected to the modal.

## Design decisions

- Three tabs are used to show different content
- Only the active tab panel is visible
- The active tab has a different style
- Tabs can be changed by clicking or using the left and right arrow keys
- The tab buttons use ARIA attributes for accessibility
- The **View More** buttons are placed inside each tab panel for the modal to use

## Known limitations

- Tab content is static
- No URL hash support for deep-linking to a specific tab
- The selected tab resets when the page is refreshed
- The modal has not been implemented yet

