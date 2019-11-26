$(document).ready(function(){


$("button").click(function(){
    var city = document.getElementById("city");
	console.log(city.value);
	weather(city.value);
  });


function weather(city){
	var URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=eb00242e574c96b28707f175f02e4f83`;
	console.log(URL);
	$.getJSON(URL, function(data){
		console.log(data);
		updateDOM(data);
	});
	
}

function updateDOM(data){
	var city = data.name;
	console.log(city);
	var temp = Math.floor(data.main.temp - 273.15);
	var desc = data.weather[0].description;
	var icon = data.weather[0].icon;
	
	$('#cityName').html(city);
	$('#temp').html(temp);
	$('#desc').html(desc);
	var path = 'http://openweathermap.org/img/wn/'+ icon +'@2x.png';
	console.log(path);
	$('#icon').attr('src', path );
	
}

});