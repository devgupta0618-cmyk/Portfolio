// ==========================================
// Portfolio JavaScript
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

function typeText(){

    if(!typingElement) return;

    if(typingIndex < typingText.length){

        typingElement.innerHTML += typingText.charAt(typingIndex);

        typingIndex++;

        setTimeout(typeText,80);

    }

}

typeText();


// ===============================
// Scroll Animation
// ===============================

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

            entry.target.classList.remove("hidden");

        }

    });

},{
    threshold:0.15
});

hiddenElements.forEach((el)=>{

    observer.observe(el);

});


// ===============================
// Back To Top Button
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(!topBtn) return;

    if(window.scrollY > 300){

        topBtn.style.display="flex";

    }else{

        topBtn.style.display="none";

    }

});

if(topBtn){

    topBtn.onclick=function(){

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    }

}

// ===============================
// Dark / Light Mode
// ===============================

const themeToggle = document.getElementById("theme-toggle");

// Restore saved theme

if(localStorage.getItem("theme")==="light"){

    document.body.classList.add("light-mode");

    if(themeToggle){

        themeToggle.checked=true;

    }

}

// Toggle theme

if(themeToggle){

    themeToggle.addEventListener("change",function(){

        if(this.checked){

            document.body.classList.add("light-mode");

            localStorage.setItem("theme","light");

        }else{

            document.body.classList.remove("light-mode");

            localStorage.setItem("theme","dark");

        }

    });

}

// ==========================================
// Contact Form - EmailJS
// ==========================================

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const submitButton = contactForm.querySelector("button");

        submitButton.disabled = true;
        submitButton.innerHTML = "Sending...";

        emailjs.sendForm(

            "service_ip4rd8j",

            "template_jjp7yeq",

            this

        )

        .then(() => {

            alert("✅ Message sent successfully!");

            contactForm.reset();

            submitButton.disabled = false;
            submitButton.innerHTML = "Send Message";

        })

        .catch((error) => {

            console.error(error);

            alert("❌ Failed to send message. Please try again.");

            submitButton.disabled = false;
            submitButton.innerHTML = "Send Message";

        });

    });

}
