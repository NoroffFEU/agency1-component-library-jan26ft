# Button Group

A group of connected buttons that can be displayed horizontally or vertically, with an active state to indicate the selective button.

## How to use

Copy the `.button-group` and add as many `.button-group__btn` buttons as needed. Include `style.css` and `script.js`. One button should have the `active` class initially.

Add the `.button-group--vertical`class to display the buttons vertically.

## Design decisions

- Buttons share borders so they appear as one connected component.
- Supports both horizontal and vertical orientations.
- The active button uses a gradient background to indicate the selected state.
- A subtle grey hover effect provides visual feedback wen interacting with the buttons.
- Only one can be active at a time — clicking a new one deactivates the previous
- Two colour schemes available (primary/secondary)
- Font size uses `clamp()` to improve responsiveness across different viewport sizes.

## Known limitations

- No radio button or hidden input — state is only visual
- The active state is managed with JavaScript and is only maintained within each button group.
