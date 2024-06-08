// Toggle mobile menu visibility
document.getElementById("menu-toggle").addEventListener("click", function () {
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenu.classList.contains("hidden-mobile")) {
    mobileMenu.classList.remove("hidden-mobile");
    mobileMenu.classList.add("block-mobile");
  } else {
    mobileMenu.classList.remove("block-mobile");
    mobileMenu.classList.add("hidden-mobile");
  }
});

// Handle active state for navbar links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80; // Adjust the value to match your navbar height
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    window.scrollTo({
      top: target.offsetTop - 60,
      behavior: "smooth",
    });
  });

  var typed = new Typed("#text", {
    strings: ["Frontend Developer"],
    typeSpeed: 200,
    backSpeed: 200,
    backDelay: 1000,
    loop: true,
    showCursor: false,
  });
});
