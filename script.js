// JavaScript for toggling the mobile menu
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// splide slider

document.addEventListener('DOMContentLoaded', function () {
new Splide('#Latest_offers_Slider', {
type: 'loop',
perPage: 3, 
autoplay: true,
breakpoints: {
    768: { 
        perPage: 1, 
    },
},
}).mount();
});

document.addEventListener('DOMContentLoaded', function () {
    new Splide('#Testimonials_splide', {
        type: 'loop',
        perPage: 1,
        autoplay: true,
    }).mount();
});


document.addEventListener('DOMContentLoaded', function () {
  new Splide('#date-slider', {
    type: 'loop',
    perPage: 7, // Number of slides visible at a time
    perMove: 1, // Move one slide at a time
    arrows: true, // Enable arrows
    pagination: false, // Disable pagination
    breakpoints: {
      768: {
        perPage: 2, // Adjust for smaller screens
      },
      480: {
        perPage: 1, // Adjust for very small screens
      },
    },
  }).mount();
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
    e.preventDefault(); 
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
const buttons = document.querySelectorAll('.btn-group .btn');
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


// Range
const initializeSlider = (sliderId, rangeId, leftThumbId, rightThumbId) => {
    const slider = document.getElementById(sliderId);
    const range = document.getElementById(rangeId);
    const thumbLeft = document.getElementById(leftThumbId);
    const thumbRight = document.getElementById(rightThumbId);
  
    let leftValue = 20; // Initial left thumb value (in %)
    let rightValue = 80; // Initial right thumb value (in %)
  
    const updateSlider = () => {
      thumbLeft.style.left = `${leftValue}%`;
      thumbRight.style.left = `${rightValue}%`;
      range.style.left = `${leftValue}%`;
      range.style.width = `${rightValue - leftValue}%`;
    };
  
    const handleDrag = (thumb, event) => {
      const sliderRect = slider.getBoundingClientRect();
      const isLeft = thumb === thumbLeft;
      const x = event.clientX || event.touches[0].clientX; // Use touch event clientX on mobile
      const percent = Math.max(0, Math.min(100, (x - sliderRect.left) / sliderRect.width * 100));
  
      if (isLeft) {
        leftValue = Math.min(percent, rightValue - 5); // Minimum gap of 5%
      } else {
        rightValue = Math.max(percent, leftValue + 5); // Minimum gap of 5%
      }
  
      updateSlider();
    };
  
    const addDragEvents = (thumb) => {
      const onMove = (event) => handleDrag(thumb, event);
      const onEnd = () => {
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onEnd);
        document.removeEventListener('touchmove', onMove);
        document.removeEventListener('touchend', onEnd);
      };
  
      // Mouse events
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onEnd);
  
      // Touch events for mobile
      document.addEventListener('touchmove', onMove);
      document.addEventListener('touchend', onEnd);
    };
  
    // Mouse down or touch start events
    thumbLeft.addEventListener('mousedown', () => addDragEvents(thumbLeft));
    thumbLeft.addEventListener('touchstart', () => addDragEvents(thumbLeft));
    
    thumbRight.addEventListener('mousedown', () => addDragEvents(thumbRight));
    thumbRight.addEventListener('touchstart', () => addDragEvents(thumbRight));
  
    updateSlider(); // Initialize the slider positions
  };
  
  // Initialize all sliders
  initializeSlider('slider-depart', 'slider-range-depart', 'thumb-left-depart', 'thumb-right-depart');
  initializeSlider('slider-arrival', 'slider-range-arrival', 'thumb-left-arrival', 'thumb-right-arrival');
  initializeSlider('slider-fare', 'slider-range-fare', 'thumb-left-fare', 'thumb-right-fare');
    