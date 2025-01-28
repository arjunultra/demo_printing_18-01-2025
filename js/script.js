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
  // console.log(clickEffect);
  // console.log(cursor);

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

    // Function to change the large image with sliding animation
    function changeImage(index) {
      largeImage.classList.add("slide-out"); // Add the slide-out class

      // After the slide-out animation is complete, change the image and slide it in
      setTimeout(() => {
        largeImage.src = imageSources[index]; // Update image source
        largeImage.classList.remove("slide-out"); // Remove the slide-out class
        largeImage.classList.add("slide-in"); // Add the slide-in class

        // Remove the slide-in class after the animation is complete
        setTimeout(() => {
          largeImage.classList.remove("slide-in");
        }, 500); // Match the CSS animation duration
      }, 500); // Match the CSS animation duration
    }

    // Add click events to small images
    smallImages.forEach((smallImage, index) => {
      smallImage.addEventListener("click", () => {
        currentIndex = index; // Update currentIndex
        changeImage(currentIndex);
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
// typewriter effect
class Typewriter {
  constructor(element, texts, interval = 2000) {
    this.texts = texts;
    this.element = element;
    this.interval = interval;
    this.text = "";
    this.currentIndex = 0;
    this.isDeleting = false;
    this.startTyping();
  }

  type() {
    const currentText = this.texts[this.currentIndex];
    const typingSpeed = this.isDeleting ? 100 : 200;

    if (this.isDeleting) {
      this.text = currentText.substring(0, this.text.length - 1);
    } else {
      this.text = currentText.substring(0, this.text.length + 1);
    }

    this.element.innerHTML = `<span class="text">${this.text}</span>`;

    if (!this.isDeleting && this.text === currentText) {
      setTimeout(() => (this.isDeleting = true), this.interval);
    } else if (this.isDeleting && this.text === "") {
      this.isDeleting = false;
      this.currentIndex = (this.currentIndex + 1) % this.texts.length;
    }

    setTimeout(() => this.type(), typingSpeed);
  }

  startTyping() {
    this.type();
  }
}
window.addEventListener("DOMContentLoaded", () => {
  const typewriterElements = document.querySelectorAll(".typewriter");
  // console.log(typewriterElements); // Should now log the correct NodeList

  typewriterElements.forEach((element) => {
    const texts = JSON.parse(element.getAttribute("data-texts") || "[]");
    const interval =
      parseInt(element.getAttribute("data-interval"), 10) || 2000;

    if (texts.length > 0) {
      new Typewriter(element, texts, interval); // Initialize Typewriter
    } else {
      console.error("No texts found for element:", element);
    }
  });
});
