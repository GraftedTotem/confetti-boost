// Grab the button and the confetti div
const button = document.getElementById("magicButton");
const confettiZone = document.getElementById("confettiZone");

//when clicked. show confetti
button.addEventListener("click", function(){
    confettiZone.style.display = "block"; //reveal the confetti and text
    button.style.display = "none"; //hide the button
});