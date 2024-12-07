document.getElementById('mobile-menu').addEventListener('click', function () {
  var navbarMenu = document.querySelector('.navbar-menu');
  navbarMenu.classList.toggle('active');
});


// Learn More/Less
document.getElementById('learn-more-btn').addEventListener('click', function (event) {
  event.preventDefault();
  var hiddenText = document.querySelector('.hidden-text');
  var button = document.getElementById('learn-more-btn');

  if (hiddenText.style.display === 'block') {
    hiddenText.style.display = 'none';
    button.textContent = 'Learn More';
  } else {
    hiddenText.style.display = 'block';
    button.textContent = 'Learn Less';
  }
});


// Smooth Behaviour
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');

  for (const link of links) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }
});


// Dark/Light mode Toggle:
document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('mode-toggle');
  const newToggleButton = document.getElementById('new-mode-toggle');
  function toggleMode() {
    document.body.classList.toggle('light-mode');
  }
  if (toggleButton) {
    toggleButton.addEventListener('click', toggleMode);
  }
  if (newToggleButton) {
    newToggleButton.addEventListener('click', toggleMode);
  }
});



