document.addEventListener("DOMContentLoaded", () => {
    const myBtn = document.getElementById("myBtn");
    const body = document.body;
    const gallery = document.querySelector(".gallery");

// Load stored theme on page load
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
       body.classList.add("dark");
    }

// Toggle theme and save preference
    myBtn.addEventListener("click", () => {
        body.classList.toggle("dark");
        localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light"); 
    
// Trigger image animation on click
        gallery.classList.add("animate-spin");

// Remove animation class after animation completes (to allow re-trigger)
        setTimeout(() => {
            gallery.classList.remove("animate-spin");
        }, 1000);
    });
});

