var options = "api.openweathermap.org/data/2.5/weather?q=raleigh&appid=bfdb8d3b749b5006a535cd83f463f01f"
var current = $("#current")

var city = $("#city")
//var icon = $("#wicon")

//icon.style.display = "none"

var saved


$("#save").click(function weather(event){
    event.preventDefault()
    console.log("I", city.val())
    console.log("L", 
    "api.openweathermap.org/data/2.5/weather?q=" + city.val() + "&appid=bfdb8d3b749b5006a535cd83f463f01f")

//-------------------------------------storage


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
        var iconurl = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png"
        console.log(iconurl)
        //city name and date along with current weather icon
        $("#day").text(city.val())
        
        //add iconurl

        console.log('ICON? ', $('#wicon'))
        $("#wicon").attr("src", iconurl)

        //temp
        $("#temp").text("Temp: " + response2.current.temp)

        //wind
        $("#wind").text("Wind: " + response2.current.wind_speed)

        //humidity
        $("#humidity").text("humidity: " + response2.current.humidity)

        //uv index
        $("#uvi").text("UV Index: " + response2.current.uvi)

        //five day forecast

        //iconurl
        var iconurl1 = "http://openweathermap.org/img/w/" + response2.daily[0].weather[0].icon + ".png"
        var iconurl2 = "http://openweathermap.org/img/w/" + response2.daily[1].weather[0].icon + ".png"
        var iconurl3 = "http://openweathermap.org/img/w/" + response2.daily[2].weather[0].icon + ".png"
        var iconurl4 = "http://openweathermap.org/img/w/" + response2.daily[3].weather[0].icon + ".png"
        var iconurl5 = "http://openweathermap.org/img/w/" + response2.daily[4].weather[0].icon + ".png"
        //display icon
        $("#wicon1").attr("src", iconurl1)
        $("#wicon2").attr("src", iconurl2)
        $("#wicon3").attr("src", iconurl3)
        $("#wicon4").attr("src", iconurl4)
        $("#wicon5").attr("src", iconurl5)
        //temp
        $("#temp1").text("Temp: " + response2.daily[0].temp.day)
        $("#temp2").text("Temp: " + response2.daily[1].temp.day)
        $("#temp3").text("Temp: " + response2.daily[2].temp.day)
        $("#temp4").text("Temp: " + response2.daily[3].temp.day)
        $("#temp5").text("Temp: " + response2.daily[4].temp.day)
        //wind speed
        $("#wind1").text("Wind: " + response2.daily[0].wind_speed)
        $("#wind2").text("Wind: " + response2.daily[1].wind_speed)
        $("#wind3").text("Wind: " + response2.daily[2].wind_speed)
        $("#wind4").text("Wind: " + response2.daily[3].wind_speed)
        $("#wind5").text("Wind: " + response2.daily[4].wind_speed)
        //humidity
        $("#humidity1").text("Humidity: " + response2.daily[0].humidity)
        $("#humidity2").text("Humidity: " + response2.daily[1].humidity)
        $("#humidity3").text("Humidity: " + response2.daily[2].humidity)
        $("#humidity4").text("Humidity: " + response2.daily[3].humidity)
        $("#humidity5").text("Humidity: " + response2.daily[4].humidity)



        })
    })   
})

$("#save").click(function data(){

    var storage = JSON.parse(localStorage.getItem('cityName')) || []
    //storage = JSON.parse(localStorage.getItem("cityName")) || []

    storage.push(city.val())



   localStorage.setItem("cityName", JSON.stringify(storage))
    
   saved = JSON.parse(localStorage.getItem("cityName"))

    console.log("day", saved)
    console.log("day", storage)
        })


        function checkLocalStorage() {
           var searches = JSON.parse(localStorage.getItem('cityName'))

           console.log('searches ', searches)

           // make the buttons and put them on the page
           
        }

        checkLocalStorage()