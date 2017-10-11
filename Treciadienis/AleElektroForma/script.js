var mpfa = document.getElementById('mpfa')
var mpi = document.getElementById('mpi')
var div_fizinis_asmuo = document.getElementById('fizinis_asmuo')
var div_juridinis_asmuo = document.getElementById('juridinis_asmuo')

mpfa.addEventListener("click", function(){
	if(div_fizinis_asmuo.style.display === "none"){
		div_fizinis_asmuo.style.display = "block";
	} else {
		div_fizinis_asmuo.style.display = "none";
	}
});

mpi.addEventListener("click", function(){
	if(div_juridinis_asmuo.style.display == "none"){
		div_juridinis_asmuo.style.display = "block";
	} else {
		div_juridinis_asmuo.style.display = "none";
	}
});