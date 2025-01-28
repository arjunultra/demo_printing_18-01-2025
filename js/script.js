document.addEventListener("DOMContentLoaded", () => {
  function userScroll() {
    const navbar = document.querySelector(".navbar");
    const navbarBrand = document.querySelector(".navbar-brand");
    const navItem = document.querySelector(".nav-item.active");
    const navList = document.querySelector(".navbar-nav");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("bg-main", "animate-bounce-in", "navbar-sticky");
        navbarBrand.classList.add("text-black");
        navbarBrand.classList.remove("text-main");
        navItem.classList.add("bg-dark");
      } else {
        navbar.classList.remove(
          "bg-main",
          "animate-bounce-in",
          "navbar-sticky"
        );
        navbarBrand.classList.remove("text-black");
        navbarBrand.classList.add("text-main");
        navItem.classList.remove("bg-dark");
      }
    });
  }
  userScroll();
  // custom cursor animations
  // Select cursor elements

  const cursor = document.querySelector(".custom-cursor");
  const clickEffect = document.querySelector(".click-effect");

  if (cursor && clickEffect) {
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;
      cursor.style.transform = "translate(-50%, -50%)"; // Ensure centering

      clickEffect.style.left = `${e.pageX}px`;
      clickEffect.style.top = `${e.pageY}px`;
    });

    document.addEventListener("click", () => {
      clickEffect.style.animation = "clickAnimation 0.4s ease-out";

      // Reapply centering during click
      cursor.style.transform = "translate(-50%, -50%)";

      setTimeout(() => {
        clickEffect.style.animation = "none";
      }, 400);
    });

    clickEffect.addEventListener("animationend", () => {
      clickEffect.style.animation = "none"; // Reset click effect
    });
  } else {
    console.error("Cursor or click effect element not found in the DOM.");
  }

  // services page layout carousel
  const carousels = document.querySelectorAll(".img-carousel"); // Select all carousels

  carousels.forEach((carousel) => {
    const largeImage = carousel.querySelector(".large-image"); // Find large image in this carousel
    const smallImages = carousel.querySelectorAll(".small-image"); // Find small images in this carousel
    let currentIndex = 0;
    const imageSources = Array.from(smallImages).map((img) => img.src);

    // Function to change the large image with fade-out animation
    function changeImage(index) {
      largeImage.classList.add("fade-out");
      setTimeout(() => {
        largeImage.src = imageSources[index];
        largeImage.classList.remove("fade-out");
      }, 500); // Match the CSS transition duration
    }

    // Add click events to small images
    smallImages.forEach((smallImage, index) => {
      smallImage.addEventListener("click", () => {
        const temp = largeImage.src;
        largeImage.src = smallImage.src;
        smallImage.src = temp;
        currentIndex = index; // Update currentIndex
      });
    });

    // Function for the automatic slider
    function autoSlide() {
      currentIndex = (currentIndex + 1) % imageSources.length; // Increment index
      changeImage(currentIndex);
    }

    // Start automatic slider
    let intervalId = setInterval(autoSlide, 3000);

    // Pause and resume slider on hover
    carousel.addEventListener("mouseover", () => {
      clearInterval(intervalId); // Pause
    });

    carousel.addEventListener("mouseout", () => {
      intervalId = setInterval(autoSlide, 3000); // Resume
    });
  });
});
