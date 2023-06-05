const slides = [
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

]

const slidestry = ["slide1.jpg", "slide2.jpg", "slide3.jpg", "slide4.png"];


const slidestrytagline = ["Impressions tous formats <span>en boutique et en ligne</span>",
	"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	"Grand choix de couleurs <span>de CMJN aux pantones</span>",
	"Autocollants <span>avec découpe laser sur mesure</span>"]

let numero = 0;

function ArrowSlide(sens) {
	numero = numero + sens;
	if (numero > 3)
		numero = 0;
	if (numero < 0)
		numero = 3;
	document.getElementById("image").src = "./assets/images/slideshow/" + slidestry[numero];
	document.getElementById("tagLine").innerHTML = slidestrytagline[numero];

}

function changeClass() {
	dot2.style.backgroundColor = "#fff"
}