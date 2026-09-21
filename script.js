// ================================
// MOBILE MENU
// ================================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Close menu after clicking a link
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
}


// ================================
// ANIMATED STATISTICS COUNTERS
// ================================

const counters = document.querySelectorAll(".counter");
let counterStarted = false;

const startCounter = () => {

    counters.forEach(counter => {

        const target = Number(counter.getAttribute("data-target"));
        let count = 0;

        const increment = Math.max(1, Math.ceil(target / 100));

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


// Start counters when statistics section enters screen
window.addEventListener("scroll", () => {

    const statistics = document.querySelector(".statistics");

    if (!statistics || counterStarted) {
        return;
    }

    const position = statistics.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (position < screenPosition) {
        startCounter();
        counterStarted = true;
    }
});
