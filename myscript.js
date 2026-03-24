// clickTag (standard advertising)
const clickTag = "https://www.google.com";

document.getElementById("banner").addEventListener("click", function () {
    window.open(clickTag, "_blank");
});

// sequenza animazioni
const frames = [
    document.getElementById("frame1"),
    document.getElementById("frame2"),
    document.getElementById("frame3")
];

let current = 0;

function showNextFrame() {
    frames[current].classList.remove("active");
    current = (current + 1) % frames.length;
    frames[current].classList.add("active");
}

setInterval(showNextFrame, 2000);
