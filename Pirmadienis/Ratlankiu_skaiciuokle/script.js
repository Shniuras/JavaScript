function calc() {

	var div_result = document.getElementById('result');
	var input_arg1 = document.getElementById('arg1');
	var input_arg2 = document.getElementById('arg2');
	var input_arg3 = document.getElementById('arg3');

	var arg1 = parseInt(input_arg1.value) * 2.54;
	var arg2 = parseInt(input_arg2.value) /10 * 2;
	var arg3 = parseInt(input_arg3.value);
	var result;

	result = arg1 + arg2;

	if (arg3 < result){
		result = "Ratas netilps i Arka!";
	} else {
		result = "Viskas gerai! :)";
	}

	div_result.innerHTML = result;
}

var table = document.getElementById("table");

function addTable() {

	var tr = table.InsertRow(0);

	var td0 = tr.InsertCell(0);
	var td1 = tr.InsertCell(1);
	var td2 = tr.InsertCell(2);
	var td3 = tr.InsertCell(3);

	td0.innerHTML = document.getElementById("arg1").value;
	td1.innerHTML = document.getElementById("arg2").value;
	td2.innerHTML = document.getElementById("arg3").value;
	td3.innerHTML = document.getElementById("result").value;

}
