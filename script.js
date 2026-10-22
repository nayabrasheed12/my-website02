
alert("Welcome to Creative Studio!");

console.log("Bano Qabil Task 02 is working!");

// ===== Mobile Navigation =====
const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {
        menuBtn.textContent = "✕";
        menuBtn.setAttribute("aria-label", "Close navigation");
    } else {
        menuBtn.textContent = "☰";
        menuBtn.setAttribute("aria-label", "Open navigation");
    }
});

// Close mobile menu after clicking a link
const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navbar.classList.remove("active");
        menuBtn.textContent = "☰";
        menuBtn.setAttribute("aria-label", "Open navigation");
    });
});

// ===== Contact Form =====
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = "#d93025";
        return;
    }

    formMessage.textContent =
        "Thank you, " + name + "! Your form has been completed successfully.";

    formMessage.style.color = "#238636";
    contactForm.reset();
});
