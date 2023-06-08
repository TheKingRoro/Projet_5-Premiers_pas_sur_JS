const slidestry = ["slide1.jpg", "slide2.jpg", "slide3.jpg", "slide4.png"];

const slidestrytagline = ["Impressions tous formats <span>en boutique et en ligne</span>",
	"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	"Grand choix de couleurs <span>de CMJN aux pantones</span>",
	"Autocollants <span>avec découpe laser sur mesure</span>"];

window.addEventListener(
	"DOMContentLoaded", (event) => {
		
		// pointer l'id de la div "dots-line"
		var p = document.getElementById("dots-line");
		
		// boucle de création des dots
		for(var i=1; i<=(slidestry.length - 1); i++) {
			var e= document.createElement("div");
			e.id = "dot"+i;
			e.className = "dot";
			p.appendChild(e);
		}
		
		const slidedot = document.querySelector(".dot");
		console.log(slidedot);
}
, false);

let i = 0;
let y = (slidestry.length - 1);

function ArrowSlide(sens) {
	y = i;
	i = i + sens;
	if (i > (slidestry.length - 1))
		i = 0;
	if (i < 0)
		i = (slidestry.length - 1);
	document.getElementById("image").src = "./assets/images/slideshow/" + slidestry[i];
	document.getElementById("tagLine").innerHTML = slidestrytagline[i];
	document.getElementById("dot"+y).classList.remove("dot_selected");
	document.getElementById("dot"+i).classList.add("dot_selected");
};
