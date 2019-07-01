// nav baaar 

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-hash");
const links = document.querySelectorAll(".nav-hash li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

// end nav baaaaaar