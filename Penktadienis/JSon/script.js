/*$("#button").click(function(){
    $.getJSON("http://www.ca-php.lt/json/products.php", function(result){
    	$.each(result, function(i, row){
         $("table").append("<tr><td>"+row.name+"</td></tr>");
         $("table").append("<tr><td>"+row.price+"</td></tr>");
    	});
	});
});*/

$("#button").click(function(){
    $.getJSON("http://www.ca-php.lt/json/products.php", function(result){
    	for(i = 0; i < result.length; i++){
         $("table").append("<tr>"+"<td>"+result[i]['name']+"</td>"+"<td>"+result[i]['price']+"</td>"+"<td>"+result[i]['stock']+"</td>"+"</tr>");
    	}
    	});
	});
