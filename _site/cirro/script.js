var geoSuccessHandler = function (position) { 
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  var apikey = "f572d20ea2102695290cb045d281d42d";
  //console.log(latitude);
  //console.log(longitude);
  
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&APPID=" + apikey, function(json){
    //console.log(json);
    document.getElementById("town").innerHTML = json.name;
    var kelvin = json.main.temp;
    var fah = Math.round((kelvin - 273.15) * 1.8 + 32);
    //console.log(fah + "°");
    document.getElementById("temp").innerHTML = fah + "°"
    document.getElementById("cond").innerHTML = json.weather[0].description
  });
};

navigator.geolocation.getCurrentPosition(geoSuccessHandler);

// The above code is frankencode consisting of JavaScript and jQuery. No, it probably isn't formatted correctly. Yes, I am well aware.