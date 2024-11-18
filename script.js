// Login functionality
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "student" && password === "vitap") {
        window.location.href = "home.html";
    } else {
        document.getElementById("error-message").style.display = "block";
    }
});

// Movie selection functionality
let selectedMovie = null;
let selectedFormat = null;

function selectFormat(format) {
    selectedFormat = format;
    alert(`You selected ${format}`);
    loadSeats();
}

function loadSeats() {
    const seatContainer = document.getElementById("seat-selection");
    for (let i = 1; i <= 20; i++) {
        const seat = document.createElement("div");
        seat.classList.add("seat");
        seat.addEventListener("click", function() {
            seat.classList.toggle("selected");
        });
        seatContainer.appendChild(seat);
    }
}
function validateLogin(event) {
    event.preventDefault(); // Prevent form submission

    // Hardcoded credentials
    const correctUsername = 'student';
    const correctPassword = 'vitap';

    // Get the entered username and password
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the credentials are correct
    if (username === correctUsername && password === correctPassword) {
        // If credentials are correct, redirect to the homepage (or other action)
        window.location.href = "homepage.html"; // Redirect to the homepage or dashboard
    } else {
        // If credentials are incorrect, show a popup with a custom message
        alert("Ohh, you entered the wrong theatre!");
        document.getElementById('error-message').style.display = 'block'; // Show error message
    }
}


function pay() {
    const selectedSeats = document.querySelectorAll(".seat.selected");
    const totalPrice = selectedSeats.length * 12; // Price per seat
    alert(`Payment of $${totalPrice} completed!`);
    window.location.href = "home.html"; // Redirect to homepage after payment
}
// Seat Selection Logic
const seats = document.querySelectorAll('.seat');

seats.forEach(seat => {
    seat.addEventListener('click', () => {
        // Toggle the 'selected' class on the clicked seat
        seat.classList.toggle('selected');
    });
});
let selectedSeats = [];
let seatPrice = 12; // Price per seat

// Function to handle seat selection
function selectSeat(seat) {
    if (seat.classList.contains('booked')) {
        seatBooked();
        return;
    }

    // Toggle seat selection
    if (seat.classList.contains('vacant')) {
        seat.classList.add('selected');
        selectedSeats.push(seat);
        updateTotal();
    } else if (seat.classList.contains('selected')) {
        seat.classList.remove('selected');
        selectedSeats = selectedSeats.filter(s => s !== seat);
        updateTotal();
    }
}

// Function to show popup when clicking a booked seat
function seatBooked() {
    const popup = document.getElementById('popup');
    popup.style.display = 'flex';
}

// Function to close popup
function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

// Function to calculate the total price
function updateTotal() {
    const totalPrice = selectedSeats.length * seatPrice;
    document.getElementById('total-price').innerText = totalPrice;
}

// Function to handle payment (basic example)
function payNow() {
    if (selectedSeats.length > 0) {
        alert("Payment Successful! Thank you for booking your seats.");
    } else {
        alert("Please select at least one seat.");
    }
}


