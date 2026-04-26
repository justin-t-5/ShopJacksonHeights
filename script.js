function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

let currentCard = 0;
const track = document.getElementById("flashcardTrack");
const cards = document.querySelectorAll(".flashcard");
const totalCards = cards.length;

// Swipe with arrow buttons
document.getElementById("prevCard").onclick = () => moveCard(-1);
document.getElementById("nextCard").onclick = () => moveCard(1);

// Swipe with keyboard arrows
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") moveCard(-1);
    if (e.key === "ArrowRight") moveCard(1);
});

// Move card
function moveCard(direction) {
    currentCard = Math.max(0, Math.min(totalCards - 1, currentCard + direction));
    track.style.transform = `translateX(-${currentCard * 100}%)`;
}

// Flip on click/tap
cards.forEach(card => {
    const inner = card.querySelector(".card-inner");
    card.addEventListener("click", () => {
        inner.classList.toggle("flipped");
    });
});
