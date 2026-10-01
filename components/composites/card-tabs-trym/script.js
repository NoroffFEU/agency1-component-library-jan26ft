var tabs = document.querySelectorAll(".tab");
var contents = document.querySelectorAll(".card-content");

tabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    tabs.forEach(function (item) {
      item.classList.remove("active");
    });

    contents.forEach(function (content) {
      content.classList.remove("active");
    });

    tab.classList.add("active");

    var target = tab.getAttribute("data-tab");
    document.getElementById(target).classList.add("active");
  });
});
