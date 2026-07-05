// ===========================================
// STREAMFLIX - app.js
// ===========================================


// ================================
// NAVBAR SCROLL EFFECT
// ================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        navbar.style.background = "#111";

        navbar.style.transition = ".35s";

        navbar.style.boxShadow = "0 5px 15px rgba(0,0,0,.4)";

    } else {

        navbar.style.background =
            "linear-gradient(to bottom, rgba(0,0,0,.95), rgba(0,0,0,.2), transparent)";

        navbar.style.boxShadow = "none";

    }

});


// ================================
// EMAIL VALIDATION
// ================================

const startBtn = document.getElementById("startBtn");

if(startBtn){

startBtn.addEventListener("click",()=>{

    const email=document.getElementById("email");

    const value=email.value.trim();

    const pattern=/^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

    if(value===""){

        alert("Please enter your email.");

        email.focus();

        return;

    }

    if(!pattern.test(value)){

        alert("Please enter a valid email.");

        email.focus();

        return;

    }

    localStorage.setItem("email",value);

    window.location.href="login.html";

});

}


// ================================
// FAQ ACCORDION
// ================================

const faqItems=document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

    const question=item.querySelector(".faq-question");

    question.addEventListener("click",()=>{

        faqItems.forEach(i=>{

            if(i!==item){

                i.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});


// ================================
// SMOOTH SCROLL
// ================================

const links=document.querySelectorAll('a[href^="#"]');

links.forEach(link=>{

    link.addEventListener("click",(e)=>{

        e.preventDefault();

        const target=document.querySelector(link.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// ================================
// FADE IN ON SCROLL
// ================================

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0px)";

        }

    });

},{
    threshold:0.15
});

const sections=document.querySelectorAll(".feature,.movies,.faq");

sections.forEach(section=>{

    section.style.opacity="0";

    section.style.transform="translateY(60px)";

    section.style.transition=".8s";

    observer.observe(section);

});


// ================================
// HERO BUTTON ANIMATION
// ================================

const heroButton=document.querySelector(".email-box button");

if(heroButton){

heroButton.addEventListener("mouseenter",()=>{

    heroButton.style.transform="scale(1.05)";

});

heroButton.addEventListener("mouseleave",()=>{

    heroButton.style.transform="scale(1)";

});

}


// ================================
// BACK TO TOP (OPTIONAL)
// ================================

const topBtn=document.getElementById("topBtn");

if(topBtn){

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

}


// ================================
// PRELOADER (OPTIONAL)
// ================================

window.addEventListener("load",()=>{

    const loader=document.querySelector(".loader");

    if(loader){

        loader.style.opacity="0";

        setTimeout(()=>{

            loader.style.display="none";

        },500);

    }

});


// ================================
// CONSOLE MESSAGE
// ================================

console.log("%cWelcome to StreamFlix",
"color:#e50914;font-size:22px;font-weight:bold;");

console.log("%cDeveloped using HTML, CSS & JavaScript",
"color:white;font-size:14px;");