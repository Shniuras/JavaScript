$("#button").click(function(){
    $.getJSON("http://www.ca-php.lt/json/products.php", function(result){
    	$.each(result, function(i, row){
         $("table").append("<tb><tr>"+row.name+"</tr></tb>");
    	});
	});
});

$("#button").click(function(){
    $.getJSON("http://www.ca-php.lt/json/products.php", function(result){
    	for(i = 0; i < result.length; i++){
         $("table").append("<tb><tr>"+result[i]['name']+"</tr></tb>");
    	}
    	});
	});
