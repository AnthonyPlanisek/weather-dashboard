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



        //find the correct city
        $.ajax({
            url: link,
            method: "GET",
        }).then(function (response){
            console.log('AJAX Response \n-------------')
            console.log(response)






        
        var iconurl = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png"
        //city name and date along with current weather icon

        //$("#wicon").style.display = "block"
        $("#day").append(city.val())
        $("#wicon").attr("src", iconurl)

        //temp
        $("#temp").append(" " + response.main.temp)

        //wind
        $("#wind").append(" " + response.wind.speed)

        //humidity
        $("#humidity").append(" " + response.main.humidity)

        //uv index




        })
    })   
})
