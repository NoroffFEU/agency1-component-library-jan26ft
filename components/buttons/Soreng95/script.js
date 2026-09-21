// Loading state for .btn.
function setLoading(button, isLoading) {
  const label = button.querySelector(".btn-text");
  if (!label) return;

  if (isLoading) {
    button.dataset.originalText = label.textContent;
    label.textContent = button.dataset.loadingText || "Loading...";
    button.classList.add("loading");
  } else {
    label.textContent = button.dataset.originalText;
    button.classList.remove("loading");
  }
}
