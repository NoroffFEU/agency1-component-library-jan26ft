# Button

A reusable button with seven variants, three sizes, a disabled state and a
loading state.

## How to use

Include `style.css` and add the classes to a `<button>`:

```html
<button class="btn primary">Continue</button>
<button class="btn outline small">Cancel</button>
```

The component is standalone — all colours are defined as `--btn-*` variables in
the `:root` block at the top of `style.css`, so it does not depend on any other
stylesheet and the names cannot collide with the library's own variables.

### Classes

- Variants: `primary`, `secondary`, `outline`, `ghost`, `link`, `destructive`, `success`
- Sizes: `small`, `large` (leave both off for the medium default), `full` for full width
- State: `loading`, plus the normal `disabled` attribute

### Loading

A button that can load needs a spinner and a text span inside it:

```html
<button class="btn primary" data-loading-text="Saving...">
  <span class="spinner"></span>
  <span class="btn-text">Save</span>
</button>
```

Then call `setLoading()` from `script.js`:

```js
setLoading(button, true); // shows the spinner and the loading text
setLoading(button, false); // puts the original text back
```

While loading, the button ignores clicks (`pointer-events: none`).

## Design decisions

- The brand orange `#ff2f02` only reaches 3.7:1 against white text, which fails
  WCAG AA. The filled variants therefore use a darker step of the same hue
  (`#d92e02`, 4.8:1) and text-only variants use `#c22602` (5.9:1 on white)
- Same reason for `destructive` (`#c42a30`, 5.6:1) and `success` (`#0e7c45`, 5.3:1)
- Every variant only sets `background`, `color` and `border-color`, so any variant
  can be combined with any size
- Sizes only change padding and font size
- Disabled uses the native `disabled` attribute, so the button is greyed out, shows
  `cursor: not-allowed`, is removed from tab order and cannot fire a click
- Focus uses `:focus-visible` with a 2px outline and `outline-offset`, so keyboard
  users get a clear ring while mouse users do not
- The spinner uses `currentColor`, so it matches whichever variant it sits in
- The loading text is swapped in JS rather than CSS, so the button can say what is
  actually happening ("Saving...", "Deleting...")

## Known limitations

- The colours are made for light backgrounds; a dark theme needs new values for
  `--btn-secondary`, `--btn-muted` and `--btn-disabled-bg`
- `setLoading()` expects the `.spinner` and `.btn-text` spans to be in the button
- No icon-only or pill variant yet
- The button width changes when the loading text is longer than the normal text
