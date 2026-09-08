// MOBILE MENU

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// COUNTER ANIMATION

const counters = document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target = +counter.getAttribute("data-target");

        let count = 0;

        const increment = Math.ceil(target / 100);

        const updateCounter = () => {

            count += increment;

            if (count < target) {

                counter.innerText = count;

                setTimeout(updateCounter, 20);

            } else {

                counter.innerText = target + "+";

            }

        };

        updateCounter();

    });

};


// START COUNTER WHEN SECTION IS VISIBLE

let counterStarted = false;

window.addEventListener("scroll", () => {

    const statistics = document.querySelector(".statistics");

    const position = statistics.getBoundingClientRect().top;

    const screenPosition = window.innerHeight;

    if (position < screenPosition && !counterStarted) {

        startCounter();

        counterStarted = true;

    }

});


// CONTACT FORM

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert(
        "Thank you for contacting Arjun BuildPro! We will get back to you soon."
    );

    contactForm.reset();

});
