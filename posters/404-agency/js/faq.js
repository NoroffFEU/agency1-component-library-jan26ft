// ══════ SECTION 5 · FAQ (Trym) ══════
//
// NOTE: All JS files share the same global scope.
// Use specific names for top-level variables and functions,
// e.g. faqItems instead of items, to avoid clashing with
// other files. Only select elements inside .faq.

const faqQuestions = document.querySelectorAll(".faq .faq__question");

faqQuestions.forEach(function (faqQuestion) {
  faqQuestion.addEventListener("click", function () {
    const faqItem = faqQuestion.parentElement;
    const faqAnswer = faqItem.querySelector(".faq__answer");
    const faqIcon = faqItem.querySelector(".faq__icon");

    const isOpen = faqAnswer.style.display === "block";

    faqAnswer.style.display = isOpen ? "none" : "block";
    faqIcon.textContent = isOpen ? "+" : "−";
  });
});
