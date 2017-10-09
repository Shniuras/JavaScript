function calc() {

	var div_result = document.getElementById('result');
	var input_arg1 = document.getElementById('arg1');
	var input_arg2 = document.getElementById('arg2');
	var input_operation = document.getElementById('operation');

	var arg1 = parseInt(input_arg1.value) || 0;
	var arg2 = parseInt(input_arg2.value) || 0;

	if(input_operation.value == "add") {
		div_result.innerHTML = arg1 + arg2;
	} else if (input_operation.value == "sub") {
		div_result.innerHTML = arg1 - arg2;
	} else if (input_operation.value == "multi") {
		div_result.innerHTML = arg1 * arg2;
	} else if (input_operation.value == "div") {
		div_result.innerHTML = arg1 / arg2;
	}

	//console.log(sum);

}

