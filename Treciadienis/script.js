var cb_vg = document.getElementById('cb_veg');
var sriuba = document.getElementById('sriubos');
var div_sriubos = document.getElementById('div_sriubos');
var salotos = document.getElementById('salotos');
var div_salotos = document.getElementById('div_salotos');


sriuba.addEventListener("change", function(){
	if(sriuba.checked) {
		div_sriubos.style.display = "block";
	} else {
		div_sriubos.style.display = "none";
	}
});
salotos.addEventListener("change", function(){
	if(salotos.checked) {
		div_salotos.style.display = "block";
	} else {
		div_salotos.style.display = "none";
	}
});
cb_vg.addEventListener("change", function(){
	var sriubu_sarasas = document.getElementById('sriubu_sarasas').options;

	if(cb_veg.checked) {
		for(var i=0; i < sriubu_sarasas.length; i++){
			if(sriubu_sarasas[i].getAttribute("veg") == "false") {
				sriubu_sarasas[i].style.display = "none";
			} else {
				var selected = false;
				if(!selected) {
					sriubu_sarasas[i].setAttribute("selected", "true");
					selected = true;
				}
			}
		}
	} else {
		for(var i=0; i < sriubu_sarasas.length; i++){
			sriubu_sarasas[i].style.display = "block";
		}
	}
});
cb_vg.addEventListener("change", function(){
	var salotu_sarasas = document.getElementById('salotu_sarasas').options;
	
	if(cb_veg.checked) {
		for(var i=0; i < salotu_sarasas.length; i++){
			if(salotu_sarasas[i].getAttribute("veg") == "false") {
				salotu_sarasas[i].style.display = "none";
			} else {
				var selected = false;
				if(!selected) {
					salotu_sarasas[i].setAttribute("selected", "true");
					selected = true;
				}
			}
		}
	} else {
		for(var i=0; i < salotu_sarasas.length; i++){
			salotu_sarasas[i].style.display = "block";
		}
	}
});