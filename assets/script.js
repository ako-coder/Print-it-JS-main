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

// ---------- Code pour le Projet #6 -----------

const bannerImg = document.querySelector('#banner img');
const bannerText = document.querySelector('#banner p');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;


// ---------- Focntion pour mettre à jour le contenu de la bannière -----

function updateBannerContent() {
	bannerImg.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
	bannerText.innerHTML = slides[currentIndex].tagLine;

	// Mettre à jour la classe dot_selected
	dots.forEach((dot, index) => {
		dot.classList.toggle('dot_selected', index === currentIndex);
	});
}


// ---------- Événement : flèche gauche -------

document.getElementById("arrow_l").addEventListener('click', function () {
	currentIndex = (currentIndex - 1 + slides.length) % slides.length; 
	// Gestion du débordement à gauche
	updateBannerContent();
});


// ---------- Événement : flèche droite -------

document.getElementById("arrow_r").addEventListener('click', function () {
	currentIndex = (currentIndex + 1) % slides.length; 
	// Gestion du débordement à droite
	updateBannerContent();
});


// ---------- Initialiser le contenu avec le premier slide ---
updateBannerContent();