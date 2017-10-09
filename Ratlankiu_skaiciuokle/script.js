function calc() {

	var div_result = document.getElementById('result');
	var input_arg1 = document.getElementById('arg1');
	var input_arg2 = document.getElementById('arg2');
	var input_arg3 = document.getElementById('arg3');

	var arg1 = parseInt(input_arg1.value) * 2.54;
	var arg2 = parseInt(input_arg2.value) /10 * 2;
	var arg3 = parseInt(input_arg3.value);
	var result;
	var text;

	result = arg1 + arg2;

	if (arg3 < result){
		result = "Ratas netilps i Arka!";
	} else {
		result = "Viskas gerai! :)";
	}

	div_result.innerHTML = result;
}
