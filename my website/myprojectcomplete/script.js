// Mobile menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Lightbox for portfolio images
const images = document.querySelectorAll(".lightbox");
const lightboxContainer = document.createElement("div");
lightboxContainer.classList.add("lightbox-container");
document.body.appendChild(lightboxContainer);

images.forEach(img => {
    img.addEventListener("click", () => {
        lightboxContainer.innerHTML = `<img src="${img.src}" alt="Expanded Image">`;
        lightboxContainer.classList.add("show");
    });
});

lightboxContainer.addEventListener("click", () => {
    lightboxContainer.classList.remove("show");
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});


