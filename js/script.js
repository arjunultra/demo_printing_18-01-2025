function userScroll() {
  const navbar = document.querySelector(".navbar");
  const navbarBrand = document.querySelector(".navbar-brand");
  const navLink = document.querySelector(".nav-link");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("bg-main");
      navbar.classList.add("navbar-sticky");
      navbarBrand.classList.add("text-black");
      navbarBrand.classList.remove("text-main");
    } else {
      navbar.classList.remove("bg-main");
      navbar.classList.remove("navbar-sticky");
      navbarBrand.classList.remove("text-black");
      navbarBrand.classList.add("text-main");
    }
  });
}
document.addEventListener("DOMContentLoaded", userScroll);
