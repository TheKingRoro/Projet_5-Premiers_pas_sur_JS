/*const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}

]*/

const slidestry = ["slide1.jpg", "slide2.jpg", "slide3.jpg", "slide4.png"];


const slidestrytagline = ["Impressions tous formats <span>en boutique et en ligne</span>",
	"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	"Grand choix de couleurs <span>de CMJN aux pantones</span>",
	"Autocollants <span>avec découpe laser sur mesure</span>"]

window.addEventListener(
	"DOMContentLoaded", (event) => {
		const slidedot = document.querySelectorAll(".dot")
		console.log(slidedot)
});

let i = 0;
let y = 3;

function ArrowSlide(sens) {
	y = i;
	i = i + sens;
	if (i > 3)
		i = 0;
	if (i < 0)
		i = 3;
	document.getElementById("image").src = "./assets/images/slideshow/" + slidestry[i];
	document.getElementById("tagLine").innerHTML = slidestrytagline[i];
	document.getElementById("dot"+y).classList.remove("dot_selected");
	document.getElementById("dot"+i).classList.add("dot_selected");
}




