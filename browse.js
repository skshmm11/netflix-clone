// ======================================
// STREAMFLIX - browse.js
// ======================================


// ================================
// LOGIN CHECK
// ================================

const loginStatus = localStorage.getItem("loggedIn");

if (!loginStatus) {

    window.location.href = "login.html";

}


// ================================
// USERNAME
// ================================

const username = document.getElementById("username");

const email = localStorage.getItem("userEmail");

if (username) {

    username.textContent = email || "Guest";

}


// ================================
// LOGOUT
// ================================

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", () => {

        if (confirm("Are you sure you want to logout?")) {

            localStorage.removeItem("loggedIn");
            localStorage.removeItem("userEmail");

            window.location.href = "login.html";

        }

    });

}


// ================================
// SEARCH
// ================================

const searchInput = document.getElementById("search");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        const cards = document.querySelectorAll(".movie-card");

        cards.forEach(card => {

            const title = card.querySelector("h4").innerText.toLowerCase();

            if (title.includes(value)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}


// ================================
// MOVIE CLICK
// ================================

const movieCards = document.querySelectorAll(".movie-card");

movieCards.forEach(card => {

    card.addEventListener("click", () => {

        const movieTitle = card.querySelector("h4").innerText;

        localStorage.setItem("selectedMovie", movieTitle);

        window.location.href = "movie.html";

    });

});


// ================================
// MY LIST
// ================================

movieCards.forEach(card => {

    card.addEventListener("dblclick", () => {

        const movie = card.querySelector("h4").innerText;

        let myList = JSON.parse(localStorage.getItem("myList")) || [];

        if (!myList.includes(movie)) {

            myList.push(movie);

            localStorage.setItem("myList", JSON.stringify(myList));

            alert(movie + " added to My List!");

        } else {

            alert(movie + " is already in My List.");

        }

    });

});


// ================================
// NAVBAR SCROLL
// ================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        navbar.style.background = "#111";
        navbar.style.boxShadow = "0 6px 20px rgba(0,0,0,.5)";

    } else {

        navbar.style.background =
        "linear-gradient(to bottom, rgba(0,0,0,.95), rgba(0,0,0,.6), transparent)";

        navbar.style.boxShadow = "none";

    }

});


// ================================
// HERO BUTTONS
// ================================

const playBtn = document.querySelector(".play-btn");

const infoBtn = document.querySelector(".info-btn");

if (playBtn) {

    playBtn.addEventListener("click", () => {

        alert("Playing Trailer...");

    });

}

if (infoBtn) {

    infoBtn.addEventListener("click", () => {

        alert("Movie information will appear here.");

    });

}


// ================================
// FADE IN ANIMATION
// ================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll(".category").forEach(section => {

    section.style.opacity = "0";

    section.style.transform = "translateY(60px)";

    section.style.transition = ".8s";

    observer.observe(section);

});


// ================================
// MOVIE HOVER SOUND (Optional)
// ================================

const hoverAudio = new Audio("audio/hover.mp3");

movieCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        hoverAudio.volume = 0.15;

        hoverAudio.play().catch(() => {});

    });

});


// ================================
// GREETING
// ================================

const hour = new Date().getHours();

let greeting = "";

if (hour < 12) {

    greeting = "Good Morning";

}
else if (hour < 18) {

    greeting = "Good Afternoon";

}
else {

    greeting = "Good Evening";

}

console.log(greeting + ", Welcome to StreamFlix!");


// ================================
// CONSOLE MESSAGE
// ================================

console.log("%cSTREAMFLIX",
"color:#e50914;font-size:24px;font-weight:bold;");

console.log("%cBrowse Page Loaded Successfully",
"color:white;font-size:15px;");