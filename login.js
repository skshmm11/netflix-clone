// ===========================================
// StreamFlix Login
// ===========================================

// Password Show/Hide

const passwordField = document.getElementById("password");
const eye = document.querySelector(".togglePassword");

if (eye) {

    eye.addEventListener("click", () => {

        if (passwordField.type === "password") {

            passwordField.type = "text";

            eye.classList.remove("fa-eye");
            eye.classList.add("fa-eye-slash");

        } else {

            passwordField.type = "password";

            eye.classList.remove("fa-eye-slash");
            eye.classList.add("fa-eye");

        }

    });

}


// ===========================================
// Load saved email
// ===========================================

window.addEventListener("DOMContentLoaded", () => {

    const savedEmail = localStorage.getItem("email");

    if (savedEmail) {

        document.getElementById("email").value = savedEmail;

    }

});


// ===========================================
// Login
// ===========================================

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const email = document.getElementById("email").value.trim();

    const password = document.getElementById("password").value.trim();

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "" || password === "") {

        alert("Please fill in all fields.");

        return;

    }

    if (!emailPattern.test(email)) {

        alert("Please enter a valid email.");

        return;

    }

    if (password.length < 6) {

        alert("Password must be at least 6 characters.");

        return;

    }

    localStorage.setItem("loggedIn", "true");

    localStorage.setItem("userEmail", email);

    alert("Login Successful!");

    window.location.href = "browse.html";

});


// ===========================================
// Continue as Guest
// ===========================================

const guestBtn = document.getElementById("guestBtn");

guestBtn.addEventListener("click", () => {

    localStorage.setItem("loggedIn", "guest");

    localStorage.setItem("userEmail", "Guest");

    window.location.href = "browse.html";

});


// ===========================================
// Remember Me
// ===========================================

const remember = document.querySelector("input[type='checkbox']");

remember.addEventListener("change", () => {

    if (remember.checked) {

        localStorage.setItem("remember", "true");

    } else {

        localStorage.removeItem("remember");

    }

});


// ===========================================
// Enter Key Support
// ===========================================

document.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {

        loginForm.requestSubmit();

    }

});


// ===========================================
// Input Focus Effect
// ===========================================

const inputs = document.querySelectorAll("input");

inputs.forEach(input => {

    input.addEventListener("focus", () => {

        input.parentElement.style.transform = "scale(1.02)";

    });

    input.addEventListener("blur", () => {

        input.parentElement.style.transform = "scale(1)";

    });

});


// ===========================================
// Fake Loading Animation
// ===========================================

const button = loginForm.querySelector("button");

loginForm.addEventListener("submit", () => {

    button.innerHTML = "Signing In...";

    button.disabled = true;

    setTimeout(() => {

        button.innerHTML = "Sign In";

        button.disabled = false;

    }, 1200);

});


// ===========================================
// Console Message
// ===========================================

console.log("%cStreamFlix Login Loaded",
"color:#e50914;font-size:18px;font-weight:bold;");