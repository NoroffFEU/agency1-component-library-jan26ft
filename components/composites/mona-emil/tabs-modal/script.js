const tabBtn = document.querySelectorAll(".tabs__button");
const tabPanels = document.querySelectorAll(".tabs__panel");

tabBtn.forEach(function (button) {
  button.addEventListener("click", function () {
    const tabId = this.getAttribute("data-tab");

    // Remove active from all buttons and panels
    tabBtn.forEach(function (btn) {
      btn.classList.remove("active");
      btn.setAttribute("aria-selected", "false");
    });

    tabPanels.forEach(function (panel) {
      panel.classList.remove("active");
    });

    // Activate clicked button and matching panel
    this.classList.add("active");
    this.setAttribute("aria-selected", "true");
    document.getElementById("tab-" + tabId).classList.add("active");
  });
});

tabBtn.forEach(function (button, index) {
  button.addEventListener("keydown", function (event) {

    if (event.key === "ArrowRight") {
      event.preventDefault();

      const nextIndex = (index + 1) % tabBtn.length;
      tabBtn[nextIndex].focus();
      tabBtn[nextIndex].click();
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();

      const previousIndex = (index - 1 + tabBtn.length) % tabBtn.length;
      tabBtn[previousIndex].focus();
      tabBtn[previousIndex].click();
    }
  });
});