# Toggle Switch

An iOS-style toggle switch built with a hidden checkbox and CSS/js.

## How to use

Copy the `<label class="switch">` block and include `styles.css`. The hidden `<input type="checkbox">` holds the on/off state, controlled in js.

## Design decisions

- Uses a real `<input>` for accessibility and form compatibility
- The checkbox is visually hidden but still focusable

## Known limitations

- Only one size — would need CSS custom properties for different sizes
- No smooth transition on the slider knob using `transform`
