# Toggle Switch + Tooltip

An iOS-style toggle switch built with a hidden checkbox and CSS/JS, with a tooltip that explains what the switch does on hover.

## How to use

Copy the `<label class="switch">` block and include `styles.css`. The hidden `<input type="checkbox">` holds the on/off state, controlled in JS. The `.tooltip` span inside `.switch` shows explanatory text when hovering over the switch — no JS required for the tooltip, it's handled purely with CSS `:hover`.

## Design decisions

- Uses a real `<input>` for accessibility and form compatibility
- The checkbox is visually hidden but still focusable
- Tooltip uses `opacity` + `visibility` (not `display`) so it can fade in/out smoothly with a transition

## Known limitations

- Only one size — would need CSS custom properties for different sizes
- No smooth transition on the slider knob using `transform`
- Tooltip text doesn't wrap — long text would overflow (currently using `white-space: nowrap`)

## Task breakdown

**Siri-Ann**
- [x] Build the toggle switch (HTML structure, checkbox logic, JS)
- [x] Style the switch (CSS)

**Paula**
- [x] Add tooltip explaining what the switch does
- [x] Style and position the tooltip (hover-triggered, centered layout)