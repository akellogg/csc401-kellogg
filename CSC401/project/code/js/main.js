$(document).ready(function(){
	$.getJSON('http://api.openweathermap.org/data/2.1/find/name?q=Boston,MA', function(data){
		$.each(data.weather, function(i, item){
			var name    	= item.name;
//				temp     	= item.temp,
//				temp_max 	= item.temp.max,
//				weather  	= name + temp + temp_max;
			
			console.log(news_item);
			$('#weather ul').append('hello world');
		});//end each
	})//end getJSON
	$('#weather ul').append('hello world');
});//jquery
