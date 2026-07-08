// ======================================
// MOBILE MENU
// ======================================

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navMenu.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});

// Tutup menu setelah klik link
document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");

        const icon = menuBtn.querySelector("i");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    });
});


// ======================================
// MODAL
// ======================================

const buttons = document.querySelectorAll(".detail-btn");
const modals = document.querySelectorAll(".modal");
const closes = document.querySelectorAll(".close");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const modalId = button.dataset.modal;

        document.getElementById(modalId).style.display = "flex";

        document.body.style.overflow = "hidden";

    });

});

closes.forEach(close => {

    close.addEventListener("click", () => {

        close.closest(".modal").style.display = "none";

        document.body.style.overflow = "auto";

    });

});

window.addEventListener("click", e => {

    modals.forEach(modal => {

        if (e.target === modal) {

            modal.style.display = "none";

            document.body.style.overflow = "auto";

        }

    });

});


// ======================================
// SMOOTH ACTIVE NAVBAR
// ======================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        const height = section.clientHeight;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ======================================
// HEADER SHADOW
// ======================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.1)";

    } else {

        header.style.boxShadow = "none";

    }

});


// ======================================
// IMAGE HOVER EFFECT
// ======================================

document.querySelectorAll(".gallery-grid img").forEach(img => {

    img.addEventListener("click", () => {

        window.open(img.src, "_blank");

    });

});


// ======================================
// SMALL FADE IN
// ======================================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});


// ======================================
// CONSOLE
// ======================================

console.log("Engineering English Club Website Ready 🚀");