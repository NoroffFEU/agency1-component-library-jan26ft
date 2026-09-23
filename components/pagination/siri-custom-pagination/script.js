"use strict";

let currentPage = 1;
const totalPages = 10;

function getPaginationItems() {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    const firstPage = i === 1;
    const lastPage = i === totalPages;
    const nextPage = i >= currentPage - 1 && i <= currentPage + 1;

    if (firstPage || lastPage || nextPage) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== "ellipsis") {
      pages.push("ellipsis");
    }
  }
  return pages;
}

const pageNumbers = document.querySelector("#pageNumbers");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const paginationList = document.querySelector("#paginationList");

function renderPagination() {
  pageNumbers.innerHTML = "";

  getPaginationItems().forEach((item) => {
    if (item === "ellipsis") {
      const span = document.createElement("span");
      span.className = "ellipsis";
      span.textContent = "…";
      pageNumbers.appendChild(span);
    } else {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "page-btn";
      button.textContent = item;
      button.dataset.page = item;

      if (item === currentPage) {
        button.classList.add("is-current");
      }

      pageNumbers.appendChild(button);
    }
  });

  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
}

function choosePage(page) {
  currentPage = page;
  renderPagination();
}

prevBtn.addEventListener("click", () => {
  choosePage(currentPage - 1);
});

nextBtn.addEventListener("click", () => {
  choosePage(currentPage + 1);
});

paginationList.addEventListener("click", (event) => {
  if (event.target.matches(".page-btn")) {
    const pageNumber = Number(event.target.dataset.page);
    choosePage(pageNumber);
  }
});

renderPagination();
