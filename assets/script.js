//Tableaux images et taglines
const slidesImage = ["slide1.jpg", "slide2.jpg", "slide3.jpg", "slide4.png"];

const slidesTagline = [
  "Impressions tous formats <span>en boutique et en ligne</span>",
  "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  "Autocollants <span>avec découpe laser sur mesure</span>",
];

window.addEventListener("DOMContentLoaded", (event) => {
  // Sélectionner la div parent #dots-line
  let dotsLine = document.getElementById("dots-line");

  // Boucle de création des child .dot
  for (let z = 1; z <= slidesImage.length - 1; z++) {
    let newDot = document.createElement("div");
    newDot.id = "dot" + z;
    newDot.className = "dot";
    dotsLine.appendChild(newDot);
  }
});

//Variables d'initialisation
let i = 0;
let y = slidesImage.length - 1;

function arrowSlide(sens) {
  y = i;
  i = i + sens;
  if (i > slidesImage.length - 1) i = 0;
  if (i < 0) i = slidesImage.length - 1;
  document.getElementById("image").src =
    "./assets/images/slideshow/" + slidesImage[i];
  document.getElementById("tagLine").innerHTML = slidesTagline[i];
  document.getElementById("dot" + y).classList.remove("dot_selected");
  document.getElementById("dot" + i).classList.add("dot_selected");
}

console.log(arrowSlide);
