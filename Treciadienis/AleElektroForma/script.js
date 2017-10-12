var mpfa = document.getElementById('mpfa')
var mpi = document.getElementById('mpi')
var div_juridinis_asmuo = document.getElementById('juridinis_asmuo')
var imo_kod = document.getElementById('ik');
var imo_kod2= document.getElementById('ik2');

mpi.addEventListener("click", function(){
	if("click"){
		mpi.style.backgroundColor = "red";
		mpi.style.color = "white";
		mpfa.style.backgroundColor = "white";
		mpfa.style.color = "black";
	}
});

mpfa.addEventListener("click", function(){
	if("click"){
		mpfa.style.backgroundColor = "red";
		mpfa.style.color = "white";
		mpi.style.backgroundColor = "white";
		mpi.style.color = "black";

	}
});

mpi.addEventListener("click", function(){
	if(div_juridinis_asmuo.style.display = "none"){
		div_juridinis_asmuo.style.display = "block";
	}
});

mpfa.addEventListener("click", function(){
	if(div_juridinis_asmuo.style.display == "block"){
		div_juridinis_asmuo.style.display = "none";
	}
});

function addTodo() {
	var imkod = document.getElementById('imkod');
	var pimkod = document.getElementById('pimkod')

	if(imkod.value !== pimkod.value){
		pimkod.style.backgroundColor = "red";
		pimkod.style.color = "white";
	} else {
		pimkod.style.background = "none";
		pimkod.style.color = "black";
	}
}

function checkEmail() {

    var email = document.getElementById('email');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
    email.style.backgroundColor = "red";
    email.style.color = "white";
    return false;
 	}
 }