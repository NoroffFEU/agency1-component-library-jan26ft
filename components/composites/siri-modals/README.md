# Confirm Dialog

A modal dialog with confirm and cancel actions.

## How to use

Copy the `#modalCard` HTML and include `style.css` and `script.js`.

The modal opens when the DELETE button is clicked. It can be closed by:

- Clicking the No button
- Pressing the Escape key
- Clicking on the backdrop outside the dialog

## Design decisions

- Uses the native `<dialog>` element for built-in modal behaviour and accessibility.
- Destructive actions are styled in red to signal caution.
- A backdrop dims the page while the modal is open.
- The modal is centred in the viewport.
- Focus returns to the trigger button when the modal closes.

## Known limitations

- No stacking support for multiple modals.