# Product List + Pagination

A product list that only shows a few products at a time, with pagination under the list.

## Composite component

- Card (list container)
- Pagination

## How to use

- Copy the `.container` HTML and include both `style.css` and `script.js`.
- The products are in the `products` array at the top of `script.js`. Add or remove items there.
- Change `productsPerPage` to show more or fewer products on each page.
- Click a page number, or Previous / Next, to change page.

## Design decisions

- The list and the pagination share the same card so they look like one component.
- Previous and Next are disabled on the first and last page instead of being hidden, so the buttons do not jump around.
- The page numbers are built in JavaScript from the number of products, so they update if the list changes.
- The active page number uses the same purple as the price to keep the colours consistent.

## Known limitations

- The products are hardcoded in `script.js` and are not fetched from an API.
- There is no sorting or filtering yet.
- The page numbers are all shown, so a very long list would make the pagination too wide.

## Next step

Mona adds a sort dropdown (price / name) and a spinner while the list loads.
