var min = "nine";
var max = "seventeen";
var currHr = "";
console.log("test");
// Function for running current time at top.
function weatherDashBoard() {
  var currentDay = $("#currentDay").text(
    moment().format("dddd, MMMM Do, h:mm A")
  );
  // For continous time.

  moment().format("MMMM Do YYYY, h:mm:ss a");
  var date = new Date();
  var hours = date.getHours();

  weatherDashBoard();
  setInterval(weatherDashBoard, 60000);

  var elementTime = $(this)
    .parent()
    .attr("date-time");
  var currNote = $(this)
    .parent()
    .find("city-name")
    .val();
  localStorage.setItem(elementTime, currNote);

  $(".currentDay").each(function() {
    var elementTime = $(this).attr("date-time");
    var currNote = localStorage.getItem(elementTime);
    $(this)
      .find("city-name")
      .val(currNote);
  });
}
// to store a city name
function saveSettings() {
  localStorage = $("#city-name").val();
}
const temerature = [].temerature;
const humidity = [].humidity;
const windSpeed = [].windSpeed;
const uvIndex = [].uvIndex;
// couldn't find an api key that was for free
function loadWeather() {
  var weather = $("#weather");
  var url = "";
  var apikey = "";
}
// geolocation area
function success(position) {
  var longitude = "34.9285°S";
  var latitude = "138.6007°E";

  $.getJSON(
    url + apikey + "/" + latitude + "," + longitude + "?units=si&callback=?",
    function(data) {
      weather.text(
        "Based on your current location, it is" +
          data.current.temperature +
          "°C right now"
      );
    }
  );
}
// run an error for no position to get the weather
function error() {
  alert("Unable to retrieve your location for weather");
}
navigator.geolocation.getCurrentPosition(success, error);
