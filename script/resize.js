// const athletsBlock = document.querySelectorAll('.row');
// athletsBlock.forEach(b => console.log(b.offsetTop))
// window.onscroll = function(event){
// 	console.log(this.pageYOffset);
// }
const social = document.querySelectorAll('.fa');
// var windowWidth = window.innerWidth;

var mql = window.matchMedia("(min-width: 48em)");

if(mql.matches) {  
		desktop();
    // Портретная ориентация
} else {  
	smart();
    // Горизонтальная ориентация
}

// Прослушка события изменения ориентации
mql.addListener(function(m) {
    if(m.matches) {
    	desktop();
        // Изменено на портретный режим
    }
    else {
    	smart();
        // Изменено на горизонтальный режим
    }
});

// if(windowWidth < 992){
function smart(){
	social.forEach(elem =>  {
		if(elem.classList.contains('fa-2x')){
			elem.classList.remove('fa-2x');
			elem.classList.add('fa-lg');
		}
	})
};
// }

function desktop(){
	social.forEach(elem =>  {
		if(elem.classList.contains('fa-lg')){
			elem.classList.remove('fa-lg');
			elem.classList.add('fa-2x');
		}
	})
}