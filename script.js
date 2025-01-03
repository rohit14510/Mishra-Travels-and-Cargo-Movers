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


// view seats
// Select all buttons in the group
const buttons = document.querySelectorAll('.btn-group .btn');

// Add click event listener to each button
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // Remove 'active' class from all buttons
        buttons.forEach((btn) => btn.classList.remove('active'));
        
        // Add 'active' class to the clicked button
        button.classList.add('active');
    });
});

document.querySelectorAll('.seat.available').forEach(seat => {
    seat.addEventListener('click', () => {
        seat.classList.toggle('selected');
        updateFareDetails();
    });
});

function updateFareDetails() {
    const selectedSeats = document.querySelectorAll('.seat.selected').length;
    const ticketFare = selectedSeats * 799; // Example fare
    document.getElementById('selected-seats').textContent = selectedSeats;
    document.getElementById('ticket-fare').textContent = ticketFare;
}

// View Seat Btn

const viewSeatsBtn = document.getElementById('viewSeatsBtn');
const seatsContainer = document.getElementById('seatsContainer');
const hideSeatsBtn = document.getElementById('hideSeatsBtn');

// Show the seats container when 'View Seats' is clicked
viewSeatsBtn.addEventListener('click', () => {
    seatsContainer.style.display = 'block';
});

// Hide the seats container when cross icon is clicked
hideSeatsBtn.addEventListener('click', () => {
    seatsContainer.style.display = 'none';
});


// All Details Btn
const AllDetailsBtn = document.getElementById('All_Details_Btn');
const AllDetails = document.getElementById('All_Details');
const HideDetailsCrossBtn = document.getElementById('Details_Hide-Btn');

// Show the details container with animation
AllDetailsBtn.addEventListener('click', () => {
    AllDetails.classList.add('show');
});

// Hide the details container with animation
HideDetailsCrossBtn.addEventListener('click', () => {
    AllDetails.classList.remove('show');
});
