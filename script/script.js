var polosa = document.getElementById('polosa');
var article = document.getElementsByClassName('article__about');
var page = document.getElementById('page');
var athlets = 'athlets';
var articleLength = article.length;
var counter = 0, counter1 = 0;
addDott(page, article, athlets);

var dott = document.getElementsByClassName('page__span_athlets');
dott[0].classList.add('page__span_active');

var polosaPlayers =document.getElementById('polosa_players');
var playersArticle = document.getElementsByClassName('players__about');
var pagePlayers = document.getElementById('page_players');
var players = 'players';
addDott(pagePlayers, playersArticle, players);

var newDott = document.getElementsByClassName('page__span_players');
newDott[0].classList.add('page__span_active');

function addDott(stran, arr, str){
var newDiv = document.createElement('div');
str="page__span_"+str;
newDiv.classList.add(str);
stran.appendChild(newDiv);
for(i=0;i<arr.length-1;i++){
var newDiv2 = newDiv.cloneNode(true);
newDiv.parentNode.insertBefore(newDiv2, newDiv.nextSibling);
}
};

$(function(){
Hammer(polosa).on("swipeleft", function() {
  counter++;
  if(counter<articleLength){
    dott[counter-1].classList.remove('page__span_active');
  }
  else{
    counter=0;
    dott[articleLength-1].classList.remove('page__span_active');
  }
    dott[counter].classList.add('page__span_active');
    polosa.style.transform = 'translateX(' + -100*counter +'%)';
});
Hammer(polosa).on("swiperight", function() {
  counter--;
  if(counter<0){
    counter=articleLength-1;
    dott[0].classList.remove('page__span_active');
  }
  else{
    dott[counter+1].classList.remove('page__span_active');
  }  
  dott[counter].classList.add('page__span_active');
  polosa.style.transform = 'translateX(' + -100*counter +'%)';
    });
})


$(function(){
Hammer(polosaPlayers).on("swipeleft", function() {
	counter1++;
	if(counter1<playersArticle.length){
    newDott[counter1-1].classList.remove('page__span_active');
  }
  else{
  	counter1=0;
  	newDott[playersArticle.length-1].classList.remove('page__span_active');
  }
  	newDott[counter1].classList.add('page__span_active');
  	polosaPlayers.style.transform = 'translateX(' + -100*counter1 +'%)';
});
Hammer(polosaPlayers).on("swiperight", function() {
	counter1--;
	if(counter1<0){
		counter1=playersArticle.length-1;
    newDott[0].classList.remove('page__span_active');
  }
  else{
  	newDott[counter1+1].classList.remove('page__span_active');
  }  
  newDott[counter1].classList.add('page__span_active');
  polosaPlayers.style.transform = 'translateX(' + -100*counter1 +'%)';
    });
})
