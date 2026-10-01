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

const modalTriggers = document.querySelectorAll(".tabs__modal-trigger");
const modalOverlay = document.getElementById("modalOverlay");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const closeBtn = document.getElementById("closeModal");

let lastTrigger = null;

function openModal(trigger) {
  modalTitle.textContent = trigger.getAttribute("data-modal-title");
  modalText.textContent = trigger.getAttribute("data-modal-text");
  modalOverlay.classList.add("active");
  lastTrigger = trigger;
  closeBtn.focus();
}

function closeModal() {
  modalOverlay.classList.remove("active");

  if (lastTrigger) {
    lastTrigger.focus();
  }
}

modalTriggers.forEach(function (trigger) {
  trigger.addEventListener("click", function () {
    openModal(this);
  });
});

closeBtn.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", function (event) {
  if (event.target === modalOverlay) {
    closeModal();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && modalOverlay.classList.contains("active")) {
    closeModal();
  }
});
