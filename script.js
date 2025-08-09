document.addEventListener("DOMContentLoaded", () => {
  
  const darkModeToggle = document.getElementById("darkModeToggle");

  
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    if (darkModeToggle) darkModeToggle.textContent = "☀";
  }

  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      const isDark = document.body.classList.contains("dark");
      darkModeToggle.textContent = isDark ? "☀" : "🌙";
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  }

  
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  if (scrollTopBtn) {
    window.addEventListener("scroll", () => {
      scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  
  const menuToggle = document.querySelector(".menu-toggle");
  const navbar = document.querySelector(".navbar");

  if (menuToggle && navbar) {
    menuToggle.addEventListener("click", () => {
      navbar.classList.toggle("show");
      menuToggle.classList.toggle("active");
      const expanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", !expanded);
    });
  }

  
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      const nameField = contactForm.querySelector("#name");
      const emailField = contactForm.querySelector("#email");
      const messageField = contactForm.querySelector("#message");

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      let isValid = true;
      let errorMessages = [];


      if (!nameField.value.trim()) {
        isValid = false;
        errorMessages.push("Name is required.");
      }

      
      if (!emailField.value.trim()) {
        isValid = false;
        errorMessages.push("Email is required.");
      } else if (!emailRegex.test(emailField.value.trim())) {
        isValid = false;
        errorMessages.push("Please enter a valid email address.");
      }

      
      if (!messageField.value.trim()) {
        isValid = false;
        errorMessages.push("Message is required.");
      }

      if (!isValid) {
        e.preventDefault();
        alert(errorMessages.join("\n")); // Simple alert, can replace with custom UI
      }
    });
  }
});
