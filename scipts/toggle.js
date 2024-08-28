document.addEventListener("DOMContentLoaded", function () {
    // Responsive menu toggle
    const menuToggle = document.querySelector("#menu-toggle");
    const navLinks = document.querySelector("header nav ul");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });

    // Weather forecast dynamic content (placeholder data)
    const forecastItems = document.querySelectorAll(".forecast-item");
    const weatherData = [
        { day: "Monday", condition: "Sunny" },
        { day: "Tuesday", condition: "Cloudy" },
        { day: "Wednesday", condition: "Rainy" },
        { day: "Thursday", condition: "Sunny" },
        { day: "Friday", condition: "Stormy" }
    ];

    forecastItems.forEach((item, index) => {
        item.innerHTML = `<strong>${weatherData[index].day}</strong><br>${weatherData[index].condition}`;
    });

    // Award hover effect
    const awardItems = document.querySelectorAll(".award-item");

    awardItems.forEach((item) => {
        item.addEventListener("mouseover", function () {
            item.style.backgroundColor = "#f0f0f0";
        });
        item.addEventListener("mouseout", function () {
            item.style.backgroundColor = "transparent";
        });
    });

    // Event highlight on click
    const eventItems = document.querySelectorAll(".event-item");

    eventItems.forEach((item) => {
        item.addEventListener("click", function () {
            eventItems.forEach(i => i.classList.remove("highlight"));
            item.classList.add("highlight");
        });
    });

    // Dynamic contact form handling (if applicable)
    const contactForm = document.querySelector("#contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const formObject = {};
            formData.forEach((value, key) => (formObject[key] = value));
            alert("Form submitted! We'll get back to you soon.");
            contactForm.reset();
        });
    }
});