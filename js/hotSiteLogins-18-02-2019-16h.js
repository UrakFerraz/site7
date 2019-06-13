var modalTemplateMailings = document.querySelector('.modalTemplateMailings');
var receberBtn = document.querySelector('.receberBtn');
var cadastroModalCloseBtn = document.querySelector('.cadastroModalCloseBtn ');

receberBtn.addEventListener('click', function() {
	setTimeout(function(){
		modalTemplateMailings.classList.remove("fadeOutUp");
	}, 10);
	setTimeout(function(){
		modalTemplateMailings.style.display = 'block';
		modalTemplateMailings.classList.add("animated");
		modalTemplateMailings.classList.add("fadeInUp");
	}, 12);
});


cadastroModalCloseBtn.addEventListener('click', function(){
	setTimeout(function(){
		modalTemplateMailings.classList.remove("animated");
		modalTemplateMailings.classList.remove("fadeInUp");
	}, 10);
	setTimeout(function(){
		// modalTemplateMailings.style.display = 'none';
		modalTemplateMailings.classList.add("animated");
		modalTemplateMailings.classList.add("fadeOutUp");
	}, 15);
	setTimeout(function(){
		modalTemplateMailings.style.display = 'none';
	}, 150);
});


var registreSeBtn = document.querySelector('.registreSeBtn');
var registroModalCloseBtn = document.querySelector('.registroModalCloseBtn');
var loginWrapper = document.querySelector('.loginWrapper');



registreSeBtn.addEventListener('click', function() {
	setTimeout(function(){
		loginWrapper.classList.remove("fadeOutUp");
	}, 10);
	setTimeout(function(){
		loginWrapper.style.display = 'grid';
		loginWrapper.classList.add("animated");
		loginWrapper.classList.add("fadeInUp");
	}, 12);
});


registroModalCloseBtn.addEventListener('click', function(){
	setTimeout(function(){
		loginWrapper.classList.remove("animated");
		loginWrapper.classList.remove("fadeInUp");
	}, 10);
	setTimeout(function(){
		// loginWrapper.style.display = 'none';
		loginWrapper.classList.add("animated");
		loginWrapper.classList.add("fadeOutUp");
	}, 15);
	setTimeout(function(){
		loginWrapper.style.display = 'none';
	}, 150);
});




var revelarSenhaBtn = document.querySelector('.revelarSenhaBtn');
var ocultarSenhaBtn = document.querySelector('.ocultarSenhaBtn');

revelarSenhaBtn.addEventListener('click', function() {
  revelarSenhaBtn.style.display = 'none';
  ocultarSenhaBtn.style.display = 'block';
});