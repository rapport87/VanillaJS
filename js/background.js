const imgs = ["1.png", "2.png", "3.png", "4.png"];
const chooseImg = Math.floor(Math.random() * imgs.length) + 1;
const imgSrc = `${chooseImg}.png`;

const newImg = document.createElement("img");
newImg.src = `img/${imgSrc}`;

document.body.appendChild(newImg);