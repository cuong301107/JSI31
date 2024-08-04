let input_search = document.querySelector("input")
let search_btn = document.querySelector("button")
let response = document.querySelector(".response")
    search_btn.addEventListener("click", function () {
        let place = input_search.value
    let khoqua = `https://geocoding-api.open-meteo.com/v1/search?name=${place}`
     fetch(khoqua)
    .then((res) => res.json())
    .then((data) => {
    //   console.log();
    //   console.log(data.results[0].longitude);
    let latitude = data.results[0].latitude;
    let longitude = data.results[0].longitude;
    console.log(latitude)
    console.log(longitude)  
    // let url = "https://api.open-meteo.com/v1/forecast?latitude=" + latitude + "&longitude=" + longitude + "&current_weather=true"
    let url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
    fetch(url)
        .then((res) => res.json())
        .then((data_weather) => {
            let temperature = data_weather.current_weather.temperature;
        response.innerHTML = `
        <p>Place:       <b>${place}</b></p>
        <p>Latitude:    <b>${latitude}</b></p>
        <p>Longitude:   <b>${longitude}</b></p>
        <p>Temperature: <b>${temperature}</b></p>
`;
        });
    });
});



