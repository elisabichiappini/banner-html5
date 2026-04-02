// ---------------VARIABILI--------
// clickTag (standard advertising)
const clickTag = "https://www.google.com";
// sequenza animazioni
const frames = [
    document.getElementById("frame1"),
    document.getElementById("frame2"),
    document.getElementById("frame3")
];

let current = 0;
// ---------------FUNZIONI--------
//carosello
function showNextFrame() {
    frames[current].classList.remove("active");
    current = (current + 1) % frames.length;
    frames[current].classList.add("active");
}

// ---------------OPERAZIONI--------
document.getElementById("banner").addEventListener("click", function () {
    window.open(clickTag, "_blank");
});

setInterval(showNextFrame, 2000);