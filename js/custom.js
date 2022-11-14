window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  let scrollPos = window.scrollY;
  if (scrollPos > 40) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

let menuButton = document.querySelector("header .navbar .navbar-toggler");
menuButton.addEventListener("click", function () {
  if (!menuButton.classList.contains("collapsed")) {
    document.querySelector("body").classList.add("menu-opened");
    document.querySelector("html").classList.add("menu-opened");
  } else {
    document.querySelector("body").classList.remove("menu-opened");
    document.querySelector("html").classList.remove("menu-opened");
  }
});

// Animate on Scroll
AOS.init({
  once: true,
  duration: 500,
});

// When click on menu item it'll hide the collapse menu
if (screen.width < 992) {
  let menuItems = document.querySelectorAll("header .navbar a");

  for (menuItem of menuItems) {
    menuItem.addEventListener("click", function () {
      let menuButton = document.querySelector("header .navbar .navbar-toggler");
      menuButton.click();
    });
  }
}
