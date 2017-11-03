$(document).ready(function() {
    "use strict";
    var map;
    var geocodeOut;

    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/forecast/daily",
        type: "GET",
        data: {
            APPID: "",
            q: "San Antonio, TX",
            units: "imperial",
            cnt: 3
        },
        beforeSend: function() {
            $('.loading-indicator').show(); }
    }).done(function(data) {
            $('.loading-indicator').hide();
            $('.row').prepend('<h3>' + data.city.name + '</h3>');
            buildWeatherPanes(data);
        }).fail(function(jqXhr, status, error) {
        $('#weather_row').html("There was an error: " + '"' + error + '"');
        initMap(data.city.name);
    });


    function buildWeatherPanes(forecast) {

        forecast.list.forEach(function (day) {

                var icon = '<img src="https://openweathermap.org/img/w/' + day.weather[0].icon + '.png">';
                var html = '<div class="weather-pane well col-sm-4">';

                html += '<b>' + day.temp.day.toFixed(0) + '&#176;' + '/' + day.temp.night.toFixed(0) + '&#176;' + '</b><br>';
                html += icon + '<br>';
                html += '<b>Clouds: </b>' + day.weather[0].description +  '<br>';
                html += '<b>Humidity: </b>' + day.humidity +  '<br>';
                html += '<b>Wind: </b>' + day.speed +  '<br>';
                html += '<b>Pressure: </b>' + day.pressure +  '<br>';
                html += '</div>';

                $('#weather_row').append(html);
        });

    }

    function initMap(city) {
        map = new google.maps.Map(document.getElementById('map'), {center: city,zoom: 8});
    }

});