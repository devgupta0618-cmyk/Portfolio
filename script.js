// ==========================================
// Portfolio JavaScript
// Devkumar Gupta Portfolio
// ==========================================

// ===============================
// Loading Screen
// ===============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }

});


// ===============================
// Typing Animation
// ===============================

const typingElement = document.getElementById("typing");

const typingText = "ETQ Reliance Developer";

let typingIndex = 0;

function typeText() {

    if (!typingElement) return;

    if (typingIndex < typingText.length) {

        typingElement.innerHTML += typingText.charAt(typingIndex);

        typingIndex++;

        setTimeout(typeText, 80);

    }

}

typeText();


// ===============================
// Fade In Animation
// ===============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(".hidden").forEach((element) => {

    observer.observe(element);

});


// ===============================
// Back To Top Button
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 400) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


// ===============================
// Dark / Light Mode
// ===============================

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {

            themeToggle.innerHTML = "☀️";

        } else {

            themeToggle.innerHTML = "🌙";

        }

    });

}
