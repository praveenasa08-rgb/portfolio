// =========================
// 1. SELECT HTML ELEMENTS
// =========================

const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

const contactForm = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const successMessage = document.getElementById("successMessage");

// =========================
// 2. DARK / LIGHT THEME
// =========================

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeIcon.textContent = "☀";
        themeToggle.setAttribute("aria-label", "Switch to light theme");
    } else {
        themeIcon.textContent = "☾";
        themeToggle.setAttribute("aria-label", "Switch to dark theme");
    }
});

// =========================
// 3. MOBILE MENU
// =========================

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("open");
});

// Close mobile menu after clicking a navigation link.
document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
    });
});

// =========================
// 4. FORM VALIDATION
// =========================

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Clear previous messages.
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;

    // Name validation
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Please enter your name.";
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value.trim() === "") {
        emailError.textContent = "Please enter your email.";
        isValid = false;
    } else if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = "Please enter a valid email.";
        isValid = false;
    }

    // Message validation
    if (messageInput.value.trim().length < 10) {
        messageError.textContent = "Message must contain at least 10 characters.";
        isValid = false;
    }

    // Final result
    if (isValid) {
        successMessage.textContent =
            "Form looks good! Connect this form to a backend or email service to receive messages.";
        contactForm.reset();
    }
});
