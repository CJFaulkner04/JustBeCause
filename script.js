document.addEventListener("DOMContentLoaded", () => {
    window.openModal = function(modalId) {
        document.getElementById(modalId).style.display = "block";
    }

    window.closeModal = function(modalId) {
        document.getElementById(modalId).style.display = "none";
    }

    // Accordion functionality
    const accordions = document.querySelectorAll(".accordion-button");
    accordions.forEach(accordion => {
        accordion.addEventListener("click", () => {
            const content = accordion.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});
