
// ===================================
// 1. DARK MODE / LIGHT MODE TOGGLE
// ===================================

const themeBtn = document.getElementById("themeBtn");

// Check previously saved theme
const savedTheme = localStorage.getItem("portfolioTheme");

// Apply saved theme
if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeBtn.textContent = "☀️";
} else {
    document.body.classList.remove("dark-mode");
    themeBtn.textContent = "🌙";
}

// Change theme when button is clicked
themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeBtn.textContent = "☀️";

        localStorage.setItem("portfolioTheme", "dark");

    } else {

        themeBtn.textContent = "🌙";

        localStorage.setItem("portfolioTheme", "light");

    }

});


// ===================================
// 2. CONTACT FORM VALIDATION
// ===================================

const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    // Prevent page from refreshing
    event.preventDefault();

    // Get input values
    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();

    // Check empty fields
    if (name === "" || email === "" || message === "") {

        formMessage.textContent = "Please fill in all fields.";

        return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        formMessage.textContent = "Please enter a valid email address.";

        return;
    }

    // Successful validation
    formMessage.textContent =
        "Thank you, " + name + "! Your message has been submitted successfully.";

    // Clear form
    contactForm.reset();

});
