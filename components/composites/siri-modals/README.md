# Confirm Dialog

A modal dialog with confirm and cancel actions.

## How to use

Copy the #modalCard html. Include `style.css` and `script.js`. The modal opens when the trigger button is clicked and closes on No... and esc key.

## Design decisions

- Destructive action (confirm) is styled in red to signal caution
- Escape key closes the modal for keyboard users

## Known limitations

- Focus is not trapped inside the modal — Tab can reach elements behind it
- No stacking support for multiple modals
- Does not use `aria-modal="true"` and `role="dialog"` for screen reader support
- Overlay click does not close the modal
