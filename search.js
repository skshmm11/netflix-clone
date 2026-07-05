// ======================================
// StreamFlix Search Module
// ======================================

const searchInput = document.getElementById("search");
const movieCards = document.querySelectorAll(".movie-card");

function filterMovies() {

    const searchText = searchInput.value.trim().toLowerCase();

    movieCards.forEach(card => {

        const title = card.querySelector("h4").textContent.toLowerCase();

        if (title.includes(searchText)) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });

}

// Live Search
if (searchInput) {

    searchInput.addEventListener("input", filterMovies);

}

// Clear Search with Escape key
document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        searchInput.value = "";

        filterMovies();

    }

});

// Search on Enter
searchInput?.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {

        filterMovies();

    }

});

// Autofocus Search using Ctrl + K
document.addEventListener("keydown", (e) => {

    if (e.ctrlKey && e.key.toLowerCase() === "k") {

        e.preventDefault();

        searchInput.focus();

    }

});

// Search Box Focus Effects
searchInput?.addEventListener("focus", () => {

    searchInput.parentElement.style.border = "2px solid #e50914";

});

searchInput?.addEventListener("blur", () => {

    searchInput.parentElement.style.border = "none";

});

// Console Message
console.log("%cSearch Module Loaded",
"color:#e50914;font-size:16px;font-weight:bold;");