# Button

A reusable button with variants, sizes and a loading state.

## How to use

Include `style.css` (it needs the variables from `main.css`) and add the classes
to a `<button>`:

```html
<button class="btn primary">Continue</button>
<button class="btn outline small">Cancel</button>
```

`main.css` is not modified — the extra colours the button needs are added in a
`:root` block at the top of `style.css`. Every `var()` also has a fallback
value, so `style.css` works on its own too: without a fallback an undefined
variable makes the background transparent, which leaves a white label on a
white page.

### Classes

- Variants: `primary`, `secondary`, `outline`, `ghost`, `link`, `destructive`, `success`
- Sizes: `small`, `large` (leave both off for the default size), `full` for full width
- State: `loading`, plus the normal `disabled` attribute

### Loading

A button that can load needs a spinner and a text span inside it:

```html
<button class="btn primary" data-loading-text="Saving...">
  <span class="spinner"></span>
  <span class="btn-text">Save</span>
</button>
```

Then call `setLoading()` from `button.js`:

```js
setLoading(button, true);   // shows the spinner and the loading text
setLoading(button, false);  // puts the original text back
```

While loading, the button ignores clicks (`pointer-events: none`).

## Design decisions

- Colours all come from CSS variables so the button follows the theme instead of
  hardcoding hex values, but each one has a fallback so a missing variable can
  never make a button disappear
- `secondary` and the disabled state have a visible border, so they still read as
  buttons on a pure white background
- Every variant only sets `background`, `color` and `border-color`, so any variant
  can be combined with any size
- Sizes only change padding and font size
- The spinner is a rotating circle with a transparent top border, so it uses
  `currentColor` and matches the text of whatever variant it is in
- `:focus-visible` is used for the focus outline so it does not show on mouse clicks
- The loading text is swapped in JS rather than in CSS, so the button can say what is
  actually happening ("Saving...", "Deleting...")

## Known limitations

- The colours are made for light backgrounds; a dark theme needs new values for
  `--color-secondary`, `--color-muted` and `--color-disabled-bg`
- `setLoading()` expects the `.spinner` and `.btn-text` spans to be in the button
- No icon-only or pill variant yet
- The button width changes when the loading text is longer than the normal text