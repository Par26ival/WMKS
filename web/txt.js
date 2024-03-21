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