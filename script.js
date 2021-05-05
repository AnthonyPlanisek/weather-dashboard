var options = "api.openweathermap.org/data/2.5/weather?q=raleigh&appid=bfdb8d3b749b5006a535cd83f463f01f"
var current = $("#current")

var city = $("#city")
//var icon = $("#wicon")

//icon.style.display = "none"

$("#save").click(function weather(event){
    event.preventDefault()
    console.log("I", city.val())
    console.log("L", 
    "api.openweathermap.org/data/2.5/weather?q=" + city.val() + "&appid=bfdb8d3b749b5006a535cd83f463f01f")

//-------------------------------------storage

/*
    var storage = JSON.parse(localStorage.getItem("cityName")) || []

    storage.push(city)

   localStorage.setItem("cityName", JSON.stringify(storage))
    
   var saved = JSON.parse(localStorage.getItem("cityName"))

    console.log("day", saved)
*/
//-----------------------------------------------storage

   var link = "https://api.openweathermap.org/data/2.5/weather?q=" + city.val() + "&units=imperial" + "&appid=bfdb8d3b749b5006a535cd83f463f01f"

console.log("t", link)



    //finds lat/lon
    $.ajax({
        url: link,
        method: "GET",
    }).then(function (response){
        console.log('AJAX Response \n-------------')
        console.log(response)



        //find the correct city NEEDS TO BE ADDED!!!!!!!!!!
        var lat = response.coord.lat
        var lon = response.coord.lon
        //https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

        var finalLink = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly,alerts" + "&units=imperial" + "&appid=bfdb8d3b749b5006a535cd83f463f01f"

        $.ajax({
            url: finalLink,
            method: "GET",
        }).then(function (response2){
            console.log('AJAX Response2 \n-------------')
            console.log(response2)






        //icon url
        var iconurl = "http://openweathermap.org/img/w/" + response2.current.weather[0].icon + ".png"
        //city name and date along with current weather icon
        $("#day").append(city.val())
        
        //add iconurl
        $("#wicon").attr("src", iconurl)

        //temp
        $("#temp").append(" " + response2.current.temp)

        //wind
        $("#wind").append(" " + response2.current.wind_speed)

        //humidity
        $("#humidity").append(" " + response2.current.humidity)

        //uv index
        $("#uvi").append(" " + response2.current.uvi)

        //five day forecast





        })
    })   
})
