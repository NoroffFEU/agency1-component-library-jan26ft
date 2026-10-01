let products = [
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
const originalProducts = [...products];

const productsPerPage = 4;
const totalPages = Math.ceil(products.length / productsPerPage);
let currentPage = 1;

const productList = document.getElementById("productList");
const pageNumbers = document.getElementById("pageNumbers");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const spinner = document.querySelector('.spinner');
const dropdownTrigger = document.querySelector(".dropdown__trigger");
const dropdown = document.querySelector(".dropdown");
const sortItems = document.querySelectorAll(".dropdown__item");
const dropdownSelected = document.querySelector(".dropdown__selected");
const defaultItem = document.querySelector('.default');

// Dropdown sorting options
dropdownTrigger.addEventListener('click', ()=>{
  dropdown.classList.toggle('open')
})

sortItems.forEach((item)=>{

item.addEventListener('click', ()=> {
  const sortBy = item.dataset.sort;

  dropdownSelected.textContent = item.textContent;

  if(sortBy !== 'default'){
    defaultItem.style.display = 'block';
  }

  switch(sortBy){
    case 'name':
    products = [...originalProducts].sort((a, b)=> 
      a.name.localeCompare(b.name));
    break;

    case 'price':
    products = [...originalProducts].sort((a, b) =>
      a.price - b.price);
    break;

    case 'default':
      products = [...originalProducts];
      dropdownSelected.textContent = 'Sort by';
      defaultItem.style.display = 'none';
      break;
  }

  currentPage = 1;
  update()

  dropdown.classList.remove('open');
});
});

document.addEventListener('click', (event) => {
  if(!dropdown.contains(event.target)){
    dropdown.classList.remove('open');
  }
  });

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
  productList.innerHTML = "";
  spinner.style.display = "block";

setTimeout(() =>{
  showProducts();
  showPageNumbers();
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;

  spinner.style.display = "none";
  }, 200);
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
