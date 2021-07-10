const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.png",
    "8.png",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
    "15.png",
    "16.jpg",
    "17.jpg",
    "18.jpg",
    "19.jpg",
    "20.jpg",
    "21.jpg",
    "22.jpg",
    "23.jpg",
    "24.jpg",
    "25.jpg",
    "26.jpg",
    "27.jpg",
    "28.jpg",
    "29.jpg",
    "30.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const body = document.querySelector("body");
body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)), url(img/${ chosenImage })`;

/*
const bgImage = document.createElement("div");
bgImage.id = "bgImage"
bgImage.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)), url(img/${ chosenImage })`;
document.body.appendChild(bgImage);
*/

/*
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
bgImage.id = "bgImage";

document.body.appendChild(bgImage);
*/