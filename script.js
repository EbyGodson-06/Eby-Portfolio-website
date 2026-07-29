// ===========================
// Typed Text Animation
// ===========================

var typed = new Typed(".typing", {

    strings: [

        "Computer Science Student",
        "Web Developer",
        "Python Programmer",
        "IoT Enthusiast",
        "Cloud Learner"

    ],

    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1500,
    loop: true

});


// ===========================
// AOS Animation
// ===========================

AOS.init({

    duration: 1000,
    once: false

});


// ===========================
// Sticky Navbar Effect
// ===========================

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.background = "rgba(5,8,22,0.95)";
        header.style.boxShadow = "0 5px 20px rgba(0,217,255,0.3)";

    }

    else {

        header.style.background = "rgba(0,0,0,.4)";
        header.style.boxShadow = "none";

    }

});


// ===========================
// Active Navigation Link
// ===========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {

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


// ===========================
// Smooth Scroll
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({

                behavior: "smooth"

            });

    });

});


// ===========================
// Fade Hero on Scroll
// ===========================

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    hero.style.opacity = 1 - window.scrollY / 700;

});


// ===========================
// Welcome Message
// ===========================

console.log("Welcome to Eby Godson Samuel's Portfolio!");