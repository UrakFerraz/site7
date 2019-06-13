var modalTemplateMailings = document.querySelector('.modalTemplateMailings');
var receberBtn = document.querySelector('.receberBtn');
var cadastroModalCloseBtn = document.querySelector('.cadastroModalCloseBtn ');
var registreSeBtn = document.querySelector('.registreSeBtn');
var registroModalCloseBtn = document.querySelector('.registroModalCloseBtn');
var loginWrapper = document.querySelector('.loginWrapper');
var block1Full = document.querySelector('#block1Full');
var block2Pocket = document.querySelector('#block2Pocket');
var registroTodos = document.querySelector('#registroTodos');
var pocketBtn = document.querySelector('.pocketBtn');
var closeRegistroTodos = document.querySelector('#closeRegistroTodos');
var registroImaxFull = document.querySelector('#registroImaxFull');





registreSeBtn.addEventListener('click', function() {
	setTimeout(function(){
		modalTemplateMailings.classList.remove("fadeOutUp");
	}, 10);
	setTimeout(function(){
		modalTemplateMailings.style.display = 'block';
		modalTemplateMailings.classList.add("animated");
		modalTemplateMailings.classList.add("fadeInUp");
	}, 12);
});





block1Full.addEventListener('click', function(){
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
	setTimeout(function(){
		registroImaxFull.classList.remove("fadeOutUp");
	}, 160);
	setTimeout(function(){
		registroImaxFull.style.display = 'grid';
		registroImaxFull.classList.add("animated");
		registroImaxFull.classList.add("fadeInUp");
	}, 170);
});





block2Pocket.addEventListener('click', function(){
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
	setTimeout(function(){
		registroTodos.classList.remove("fadeOutUp");
	}, 160);
	setTimeout(function(){
		registroTodos.style.display = 'grid';
		registroTodos.classList.add("animated");
		registroTodos.classList.add("fadeInUp");
	}, 170);
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




closeRegistroTodos.addEventListener('click', function(){
	setTimeout(function(){
		registroTodos.classList.remove("animated");
		registroTodos.classList.remove("fadeInUp");
	}, 10);
	setTimeout(function(){
		// registroTodos.style.display = 'none';
		registroTodos.classList.add("animated");
		registroTodos.classList.add("fadeOutUp");
	}, 15);
	setTimeout(function(){
		registroTodos.style.display = 'none';
	}, 150);
});







var loginWrapperRecuperaSenha = document.querySelector('.loginWrapperRecuperaSenha');
var lostPassModalCloseBtn = document.querySelector('.lostPassModalCloseBtn');
var recuperaSenha = document.querySelector('.recuperaSenha');




recuperaSenha.addEventListener('click', function() {
	setTimeout(function(){
		loginWrapperRecuperaSenha.classList.remove("fadeOutUp");
	}, 10);
	setTimeout(function(){
		loginWrapperRecuperaSenha.style.display = 'grid';
		loginWrapperRecuperaSenha.classList.add("animated");
		loginWrapperRecuperaSenha.classList.add("fadeInUp");
	}, 12);
});





lostPassModalCloseBtn.addEventListener('click', function(){
	setTimeout(function(){
		loginWrapperRecuperaSenha.classList.remove("animated");
		loginWrapperRecuperaSenha.classList.remove("fadeInUp");
	}, 10);
	setTimeout(function(){
		// loginWrapperRecuperaSenha.style.display = 'none';
		loginWrapperRecuperaSenha.classList.add("animated");
		loginWrapperRecuperaSenha.classList.add("fadeOutUp");
	}, 15);
	setTimeout(function(){
		loginWrapperRecuperaSenha.style.display = 'none';
	}, 150);
});







var revelarSenhaBtn = document.querySelector('.revelarSenhaBtn');
var ocultarSenhaBtn = document.querySelector('.ocultarSenhaBtn');

revelarSenhaBtn.addEventListener('click', function() {
  revelarSenhaBtn.style.display = 'none';
  ocultarSenhaBtn.style.display = 'block';
});







var registroEmailField = document.querySelector('.registroEmailField');
var registroDominioField = document.querySelector('.registroDominioField');
var naoTemDominioCheckbox = document.querySelector('.naoTemDominioCheckbox');
var registroEmail1 = document.querySelector('.registroEmail1');


naoTemDominioCheckbox.addEventListener('change', function() {
	if(this.checked) {
		registroEmailField.style.display = 'block';
		registroDominioField.style.display = 'none';
		registroEmail1.style.display = 'none';
	} else {
		registroEmailField.style.display = 'none';
		registroDominioField.style.display = 'block';
		registroEmail1.style.display = 'block';
	}
});







var supportBtnWrapper = document.querySelector('.supportBtnWrapper');
var supportBtnBg = document.querySelector('.supportBtnBg');


supportBtnWrapper.addEventListener('mouseover', function() {
supportBtnBg.style.animationName = 'supportBtn';
supportBtnBg.style.animationDuration = '1s';
});


supportBtnWrapper.addEventListener('mouseout', function() {
supportBtnBg.style.removeProperty('animation-name');
supportBtnBg.style.removeProperty('animation-duration');
});



var mensagemErroWrapper = document.querySelector('.mensagemErroWrapper ');
var registroErroMsgCloseBtn = document.querySelector('.registroErroMsgCloseBtn');

registroErroMsgCloseBtn.addEventListener('click', function() {
	mensagemErroWrapper.style.display = 'none';
})