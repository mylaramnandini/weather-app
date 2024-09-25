var inputvalue = document.querySelector("#cityinput");
var btn = document.querySelector("#add");
var city = document.querySelector("#cityoutput");
var desc = document.querySelector("#description");
var temp = document.querySelector("#temp");
var wind = document.querySelector("#wind");
var errorMessage = document.querySelector("#error-message");
var apik = "83514bedc3a5857be653cf3e591e19be";

function convertion(val) {
    return (val - 273).toFixed(3);
}

btn.addEventListener("click", function () {

     // Clear previous error message
     errorMessage.innerHTML = "";

    // Check if the input value is blank
    if (inputvalue.value.trim() === "") {
        errorMessage.innerHTML = "Please enter a city name.";
       // alert("Please enter a city name.");
        return; // Stop the function if the input is blank
    }
    const cityName = inputvalue.value.trim();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apik}`;
    console.log("Fetching data from:", url);
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        
            var nameval = data["name"];
            var descrip = data["weather"][0]["description"];
            var temparature = data["main"]["temp"];
            var wndspeed = data["wind"]["speed"];
           

            city.innerHTML = "Weather of <span>" + nameval + "</span>";
            temp.innerHTML = "Temparature: <span>" + convertion(temparature) + " C</span>";
            desc.innerHTML = "Sky conditions: <span>" + descrip + "</span>";
            wind.innerHTML = "Wind speed: <span>" + wndspeed + " km/hr</span>";
           
        })
        .catch(eerr => errorMessage.innerHTML = "An error occurred while fetching data. Please try again.");
});