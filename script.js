//quotes code
const quotes = [
    "The storm of frenzy and faction must inevitably dash itself in vain against the unshaken rock of the Constitution.",
    "Frequently the more trifling the subject, the more animated and protracted the discussion.",
    "You have summoned me in my weakness. You must sustain me by your strength."
];

// Button click listener to show a random quote
document.getElementById("quoteButton").addEventListener("click", function() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quoteDisplay").innerHTML = `<blockquote>${randomQuote}</blockquote>`;
});









//timeline code
 // Function to toggle event details visibility
 function toggleDetails(eventId) {
    const eventDetails = document.getElementById(eventId);
    if (eventDetails.style.display === "none" || eventDetails.style.display === "") {
        eventDetails.style.display = "block";
    } else {
        eventDetails.style.display = "none";
    }
}