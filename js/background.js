const images = [
    "0.jpg", "1.jpg", "2.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
const bgdiv = document.querySelector("#bgimg");

bgimg.style.backgroundImage = `url(img/${chosenImage})`;


document.body.appendChild(bgImage);