const products = [
  { name: "Coffee Mug", price: 149 },
  { name: "Notebook", price: 89 },
  { name: "Backpack", price: 699 },
  { name: "Desk Lamp", price: 449 },
  { name: "Water Bottle", price: 249 },
  { name: "Mouse Pad", price: 129 },
  { name: "Headphones", price: 899 },
  { name: "Keyboard", price: 1199 },
  { name: "Phone Case", price: 199 },
  { name: "Sunglasses", price: 379 },
  { name: "T-Shirt", price: 299 },
  { name: "Cap", price: 189 },
];

const productsPerPage = 4;
const totalPages = Math.ceil(products.length / productsPerPage);
let currentPage = 1;

const productList = document.getElementById("productList");
const pageNumbers = document.getElementById("pageNumbers");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function showProducts() {
  const start = (currentPage - 1) * productsPerPage;
  const end = start + productsPerPage;
  const pageProducts = products.slice(start, end);

  productList.innerHTML = "";

  pageProducts.forEach(function (product) {
    const item = document.createElement("li");
    item.classList.add("product");
    item.innerHTML =
      '<span class="product__name">' +
      product.name +
      "</span>" +
      '<span class="product__price">' +
      product.price +
      " kr</span>";
    productList.appendChild(item);
  });
}

function showPageNumbers() {
  pageNumbers.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.classList.add("pagination__number");
    button.textContent = i;

    if (i === currentPage) {
      button.classList.add("active");
    }

    button.addEventListener("click", function () {
      currentPage = i;
      update();
    });

    pageNumbers.appendChild(button);
  }
}

function update() {
  showProducts();
  showPageNumbers();
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
}

prevBtn.addEventListener("click", function () {
  if (currentPage > 1) {
    currentPage = currentPage - 1;
    update();
  }
});

nextBtn.addEventListener("click", function () {
  if (currentPage < totalPages) {
    currentPage = currentPage + 1;
    update();
  }
});

update();
