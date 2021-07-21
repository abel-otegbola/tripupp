let navLinks = document.querySelectorAll("header .topbar nav ul li a")


for(let i=0; i<navLinks.length; i++) {
    navLinks[i].onclick = () => {
        for(let x=0; x<navLinks.length; x++) {
            navLinks[x].classList.remove("active");
            navLinks[i].classList.add("active");
            menu.classList.toggle("active")
    }
}
}

let menuButton = document.querySelector(".menuToggle");
let menu = document.querySelector(".topbar nav");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("active");
})
  /**
   * Animation on scroll
   */
   window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });


/*
* slide
*/
document.addEventListener( 'DOMContentLoaded', function () {
	var secondarySlider = new Splide( '#secondary-slider', {
		fixedWidth  : 120,
		height      : 120,
		gap         : 10,
		cover       : false,
		isNavigation: true,
		focus       : 'center',
	} ).mount();
	
	var primarySlider = new Splide( '#primary-slider', {
		type       : 'fade',
		pagination : false,
		arrows     : false,
		cover      : false,
	} ); // do not call mount() here.
	
	primarySlider.sync( secondarySlider ).mount();
} );