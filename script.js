// Wait for the DOM to be fully loaded before executing JavaScript
document.addEventListener("DOMContentLoaded", function () {

  // Intersection Observer for updating active link and section
  const navLinks = document.querySelectorAll(".nav-link"); // Get all navigation links
  const sections = document.querySelectorAll(".section"); // Get all sections to observe

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  };

  // Handle intersection between sections and navigation links
  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      const sectionId = entry.target.getAttribute("id");
      const navLink = document.querySelector(`a[href="#${sectionId}"]`);

      if (entry.isIntersecting) {
        // Remove 'active' class from all links
        navLinks.forEach((link) => link.classList.remove("active"));

        // Add 'active' class to the corresponding link
        navLink.classList.add("active");
      }
    });
  }

  // Create an Intersection Observer and observe each section
  const observer = new IntersectionObserver(handleIntersection, observerOptions);
  sections.forEach((section) => {
    observer.observe(section);
  });

  // Typing Animation
  const fullText = "Welcome to my webpage. I provide outstanding services.";
  let currentText = "";
  let charIndex = 0;
  const delay = 100;
  const typedText = document.getElementById("typed-text");

  // Function to type text character by character
  function type() {
    if (charIndex < fullText.length) {
      currentText += fullText.charAt(charIndex);
      typedText.textContent = currentText;
      charIndex++;
      setTimeout(type, delay);
    }
  }

  type(); // Start typing effect when the page loads

  // Text Rotation Animation
  const words = ["A Web Developer", "A Web Designer", "UI/UX Specialist"];
  let currentWordIndex = 0;
  const animatedText = document.querySelector(".animated-text");

  // Function to animate text rotation
  function animateText() {
    animatedText.textContent = words[currentWordIndex];
    currentWordIndex = (currentWordIndex + 1) % words.length;
  }

  // Animate the text every 3 seconds
  setInterval(animateText, 3000);
  animateText();

  // Navbar change color on scroll
  const navEl = document.querySelector(".navbar");

  // Function to update the navbar class based on scroll position
  function updateNavbarClass() {
    if (window.scrollY >= 100) {
      navEl.classList.add("navbar-scrolled");
    } else {
      navEl.classList.remove("navbar-scrolled");
    }
  }

  // Listen for scroll events
  window.addEventListener("scroll", () => {
    updateNavbarClass(); // Update the navbar class on scroll
  });

  // Update the navbar class when the page loads
  window.addEventListener("load", () => {
    updateNavbarClass(); // Update the navbar class on page load
  });

  // Purecounter code
  const counters = document.querySelectorAll('.purecounter');
  counters.forEach(counter => {
    const start = parseInt(counter.getAttribute('data-purecounter-start') || '0');
    const end = parseInt(counter.getAttribute('data-purecounter-end') || '0');
    const duration = parseInt(counter.getAttribute('data-purecounter-duration') || '1');

    new PureCounter(counter, {
      start,
      end,
      duration,
    });
  });

  // Count up animation
  const counts = document.querySelectorAll('.count');
  const speed = 97;

  // Function to update count values with animation
  counts.forEach((counter) => {
    function updateCount() {
      const target = Number(counter.getAttribute('data-target'));
      const count = Number(counter.innerText);
      const inc = target / speed;
      if (count < target) {
        counter.innerText = Math.floor(inc + count);
        setTimeout(updateCount, 15);
      } else {
        counter.innerText = target;
      }
    }
    updateCount();
  });

  // Add any other JavaScript code that doesn't depend on the DOM here.

});