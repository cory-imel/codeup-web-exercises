$(document).ready(function() {
    "use strict";
    var map;
    var city = "San Antonio, TX";
    var currentLatLng = {lat: 29.428949, lng: -98.489945};
    var firstrun = true;
    var geocoder = new google.maps.Geocoder;

    function initMap() {

        $('#map').addClass('map-style well');

        map = new google.maps.Map(document.getElementById('map'), {center: currentLatLng,zoom: 8});

        var marker = new google.maps.Marker({
            position: currentLatLng,
            map: map,
            draggable:true
        });

        google.maps.event.addListener(marker, 'dragend', function (event) {
            $('#loading-indicator').show();
            $('#city').hide();
            $('#weather').hide();
            var newLatLng = {lat: parseFloat(event.latLng.lat()), lng: parseFloat(event.latLng.lng())};
            revserseGeocode(newLatLng);
            map.setCenter(newLatLng);
        });

    }

function getWeather(city) {

    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/forecast/daily",
        type: "GET",
        data: {
            APPID: "",
            q: city,
            units: "imperial",
            cnt: 3
        },
        beforeSend: function () {
            $('#loading-indicator').show();
            $('#city').hide();
            $('#weather').hide();
        }
    }).done(function (data) {
        buildWeatherPanes(data);
        $('#loading-indicator').hide();
        $('#city').html('<h3>' + data.city.name + '</h3>');
        $('#city').show();
        $('#weather').show();
        if (firstrun) {
            initMap();
            firstrun = false;
        }
    }).fail(function (jqXhr, status, error) {
        $('#loading-indicator').hide();
        $('#weather_row').html("There was an error: " + '"' + error + '"');
    });
}

    function buildWeatherPanes(forecast) {
        var html ="";

        forecast.list.forEach(function (day) {
                var icon = '<img src="https://openweathermap.org/img/w/' + day.weather[0].icon + '.png">';

                html += '<div class="weather-pane well col-sm-4">';
                html += '<b>' + day.temp.day.toFixed(0) + '&#176;' + '/' + day.temp.night.toFixed(0) + '&#176;' + '</b><br>';
                html += icon + '<br>';
                html += '<b>Clouds: </b>' + day.weather[0].description +  '<br>';
                html += '<b>Humidity: </b>' + day.humidity +  '<br>';
                html += '<b>Wind: </b>' + day.speed +  '<br>';
                html += '<b>Pressure: </b>' + day.pressure +  '<br>';
                html += '</div>';

        });

        $('#weather').html(html);
    }

    function forwardGeocode(cityStr) {
            geocoder.geocode({address: cityStr}, function (results, status) {
                if (status === 'OK') {
                    getWeather(results[0].formatted_address);
                    console.log(results[0].formatted_address);
                } else {
                    $('#weather_row').html("Could not find your location: " + status);
                }
            });
        }
    
    
    function revserseGeocode(latLng) {
        geocoder.geocode({'location': latLng}, function (results, status) {
            if (status === 'OK') {
                getWeather(results[0].formatted_address);
                console.log(results[0]);
            } else {
                $('#weather_row').html("Geocoding was not successful - STATUS: " + status);
            }
        });
    }
    //
    // $('#registerModal').modal();
    //
    // $('#search-btn').click(function (e) {
    //     e.preventDefault();
    //     var inputCity = $('#city-name').val();
    //     geocodeInput(inputCity, "");
    // });

$('#loading-indicator').show();
forwardGeocode(city);

});