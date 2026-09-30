# Button + Spinner — Send a Birthday Message

A themed form composite where a user fills in a short birthday message and sends it. The Send button stays disabled until every field is filled in, shows a loading spinner while "sending," then confirms with "Sent!"

## Features

- Form fields: sender name, recipient name, recipient email, and message
- Send button is disabled until all fields have valid input
- Button becomes enabled in real time as the user types
- On submit:
  1. Button shows a spinner (sending state)
  2. After a few seconds, spinner disappears and button text changes to "Sent!"

## Task breakdown

**Paula**

- [x] Build form structure and fields (From, To, Recipient's Email, Message)
- [x] Style the form and background (balloon decorations)
- [x] JS: disable/enable Send button based on field validation

**Siri-Ann**

- [x] Design and add the spinner
- [x] JS: on submit, show spinner, then after a few seconds swap to "Sent!" text

## Files

- `index.html`
- `style.css`
- `script.js`
