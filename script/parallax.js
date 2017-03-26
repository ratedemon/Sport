const pluses = document.querySelectorAll('.about__img_plus');
// const athletsBlock = document.querySelector('.athlets');
// const playersBlock = document.querySelector('.players');
window.onscroll = function(){
	var scrolled = window.pageYOffset || document.documentElement.scrollTop;
	pluses.forEach(elem => {
		elem.style.transform = "translate("+scrolled/50+"%,"+scrolled/10+"%)";
	});
	// athletsBlock.style.transform= "translateY("+ -scrolled/120+"%)";
	// playersBlock.style.transform= "translateY("+ -scrolled/200+"%)";

}