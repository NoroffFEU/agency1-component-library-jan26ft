# Product List + Pagination

A product list that only shows a few products at a time, with pagination, sorting, and a loading spinner.

## Composite component

- Card (list container)
- Pagination
- Sorting dropdown
- Loading spinner

## How to use

- Copy the `.container` HTML and include both `style.css` and `script.js`.
- The products are in the `products` array at the top of `script.js`. Add or remove items there.
- Change `productsPerPage` to show more or fewer products on each page.
- Click a page number, or Previous / Next, to change page.
- Use the `Sort`by dropdown to sort products by name or price.
- Select `Default`to return the products to their original order.

## Design decisions

- The list and the pagination share the same card so they look like one component.
- Previous and Next are disabled on the first and last page instead of being hidden, so the buttons do not jump around.
- The page numbers are built in JavaScript from the number of products, so they update if the list changes.
- The active page number uses the same purple as the price to keep the colours consistent.
- Sorting resets the list to page 1.
- The original product order is saved so it can be restored with the Default option.
- A loading spinner is shown while the list updates.

## Known limitations

- The products are hardcoded in `script.js` and are not fetched from an API.
- The page numbers are all shown, so a very long list would make the pagination too wide.
- The loading spinner uses a short simulated loading delay and does not represent a real API request.
