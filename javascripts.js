// Dark / Light Mode

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }

});


// Login Modal

function showLogin() {
    document.getElementById("loginModal").classList.add("show");
}

function closeLogin() {
    document.getElementById("loginModal").classList.remove("show");
}

function loginUser() {

    const email = document.querySelector(
        '.modal-box input[type="email"]'
    ).value;

    const password = document.querySelector(
        '.modal-box input[type="password"]'
    ).value;

    if (email === "" || password === "") {
        alert("Please enter email and password.");
        return;
    }

    alert("Login successful! 🎓");

    closeLogin();
}


// Event Registration

function registerEvent() {

    alert(
        "🎉 Registration Successful!\n\n" +
        "You are registered for this event."
    );

}


// Campus Button

function showMessage() {

    alert(
        "🏫 Welcome to CampusConnect!\n\n" +
        "Explore events, clubs and student communities."
    );

}


// Join Club

function joinClub(event) {

    event.preventDefault();

    alert("🎉 You have joined this club!");

}


// Search Function

function searchContent() {

    const input = document
        .getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();

    const cards = document.querySelectorAll(".event-card");

    if (input === "") {

        cards.forEach(card => {
            card.style.display = "block";
        });

        return;
    }

    let found = false;

    cards.forEach(card => {

        const text = card.innerText.toLowerCase();

        if (text.includes(input)) {

            card.style.display = "block";
            found = true;

        } else {

            card.style.display = "none";

        }

    });

    if (!found) {
        alert("❌ No matching event found.");
    }

}


// Search using Enter key

document
    .getElementById("searchInput")
    .addEventListener("keypress", function(event) {

        if (event.key === "Enter") {
            searchContent();
        }

    });


// View All Events

function showAllEvents() {

    const cards = document.querySelectorAll(".event-card");

    cards.forEach(card => {
        card.style.display = "block";
    });

    document.getElementById("searchInput").value = "";

    alert("📅 All upcoming events are displayed.");

}


// Close modal by clicking outside

document
    .getElementById("loginModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {
            closeLogin();
        }

    });