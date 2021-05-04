var options = "api.openweathermap.org/data/2.5/weather?q=raleigh&appid=bfdb8d3b749b5006a535cd83f463f01f"


var city = $("#city")



$("#save").click(function weather(event){
    event.preventDefault()
    console.log("I", city.val())
    console.log("L", 
    "api.openweathermap.org/data/2.5/weather?q=" + city.val() + "&appid=bfdb8d3b749b5006a535cd83f463f01f")

   
   var link = "https://api.openweathermap.org/data/2.5/weather?q=" + city.val() + "&appid=bfdb8d3b749b5006a535cd83f463f01f"

    $.ajax({
        url: link,
        method: "GET",
    }).then(function (response){
        console.log('AJAX Response \n-------------')
        console.log(response)
        console.log("t", response.results.length)


    })   
})
