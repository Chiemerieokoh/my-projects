// Example: alert when clicking a project
const cards = document.querySelectorAll(".project-card a");
cards.forEach(card => {
    card.addEventListener("click", () => {
        alert("Opening: " + card.querySelector("h2").textContent);
    });
});
