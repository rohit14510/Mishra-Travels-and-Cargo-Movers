// JavaScript for toggling the mobile menu
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});



document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".stats-number");
    const observerOptions = {
        root: null, // viewport
        threshold: 0.5 // 50% visibility required
    };
  
    const startCounter = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const targetValue = parseInt(counter.textContent);
                counter.textContent = 0;
  
                let count = 0;
                const interval = setInterval(() => {
                    if (count < targetValue) {
                        count++;
                        counter.textContent = count;
                    } else {
                        clearInterval(interval);
                    }
                }, 10); // Update speed
                observer.unobserve(counter); // Stop observing after animation
            }
        });
    };
  
    const observer = new IntersectionObserver(startCounter, observerOptions);
  
    counters.forEach(counter => {
        observer.observe(counter);
    });
  });

// Open Modal
const loginBtn = document.getElementById("login-btn");
const modal = document.getElementById("loginModal");
const closeModal = document.querySelector(".close");

loginBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    modal.style.display = "flex";
});

// Close Modal
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close Modal on Outside Click
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
