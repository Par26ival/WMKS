document.addEventListener("DOMContentLoaded", function () {
  var animationContainer = document.querySelector(".animation-container");
  var notificationContainer = document.querySelector(".notification-container");

  setTimeout(function () {
    animationContainer.classList.add("hidden");

    setTimeout(function () {
      notificationContainer.style.display = "block";
    }, 1000);
  }, 2300);
});

document.addEventListener("DOMContentLoaded", function () {
  const filterButton = document.getElementById("filter-button");
  const filterOptions = document.getElementById("filter-options");

  filterButton.addEventListener("click", function () {
    filterOptions.classList.toggle("block");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const filterButton = document.getElementById("filter-button");
  const filterOptions = document.getElementById("filter-options");

  filterButton.addEventListener("click", function () {
    filterOptions.classList.toggle("opened");
    filterOptions.classList.toggle("slide-animation");
  });
});
