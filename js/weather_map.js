$(document).ready(function() {
    "use strict";
    var map;
    var city = "San Antonio, TX";
    var currentLatLng = {lat: 29.428949, lng: -98.489945};
    var firstRun = true;
    var geocoder = new google.maps.Geocoder;

    function initMap() {

        //Adds map styling in order to keep row height to a minimum before the map exists.
        $('#map').addClass('map-style well');

        map = new google.maps.Map(document.getElementById('map'), {center: currentLatLng,zoom: 8});

        setMarker();

    }


    function setMarker() {
        var marker = new google.maps.Marker({
            position: currentLatLng,
            map: map,
            draggable:true

        });
        google.maps.event.addListener(marker, 'dragend', function (event) {
            marker.setMap(null);
            hideWeather();

            var newLatLng = {lat: parseFloat(event.latLng.lat()), lng: parseFloat(event.latLng.lng())};
            revserseGeocode(newLatLng);
            currentLatLng = newLatLng;
        });

        return marker;
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
        }
    }).done(function (data) {

        buildWeatherPanes(data);

        //Show the weather info
        $('#city').html('<h3>' + data.city.name + '</h3>').fadeIn(1000);
        $('#loading-indicator').hide();
        $('#weather').fadeIn(1000);

        //Create or re-center the map
        if (firstRun) {
            initMap();
            firstRun = false;
        }else{
            map.setCenter(currentLatLng);
            setMarker();

        }

    }).fail(function (jqXhr, status, error) {
        $('#loading-indicator').hide();
        $('#weather-row').html("There was an error: " + '"' + error + '"');
    });
}

    function buildWeatherPanes(forecast) {
        var html ="";

        forecast.list.forEach(function (day) {
                var icon = '<img src="https://openweathermap.org/img/w/' + day.weather[0].icon + '.png">';
                var date = new Date(day.dt*1000);

                html += '<div class="weather-pane well col-sm-4">';
                html += '<b>' + day.temp.day.toFixed(0) + '&#176;' + '/' + day.temp.night.toFixed(0) + '&#176;' + '</b><br>';
                html += icon + '<br>';
                html += '<b>Clouds: </b>' + day.weather[0].description +  '<br>';
                html += '<b>Humidity: </b>' + day.humidity +  '<br>';
                html += '<b>Wind: </b>' + day.speed +  '<br>';
                html += '<b>Pressure: </b>' + day.pressure +  '<br><br>';
                html += '<b>' + date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear() + '</b>';
                html += '</div>';

        });

        $('#weather').html(html);
    }

    function hideWeather() {
        $('#loading-indicator').show();
        $('#city').fadeOut(1000);
        $('#weather').fadeOut(1000);
    }

    function forwardGeocode(cityStr) {
            geocoder.geocode({address: cityStr}, function (results, status) {
                if (status === 'OK') {
                    currentLatLng = {lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng()};
                    getWeather(results[0].formatted_address);
                } else {
                    $('#weather-row').html("Could not find your location: " + status);
                    setTimeout(function () {
                        $('#searchModal').modal('show');
                    }, 2000)
                }
            });
        }
    
    
    function revserseGeocode(latLng) {
        geocoder.geocode({'location': latLng}, function (results, status) {
            if (status === 'OK') {
                getWeather(results[0].formatted_address);
            } else {
                $('#weather-row').html("Geocoding was not successful - STATUS: " + status);
                setTimeout(function () {
                    $('#searchModal').modal('show');
                }, 2000)
            }
        });
    }

    $('#searchModal').modal();

    $('#search-btn').click(function (e) {
        e.preventDefault();
        var inputCity = $('#city-name').val();
        hideWeather();
        forwardGeocode(inputCity);
    });

    $('#city-name').keyup(function (e) {
        if (e.keyCode === 13){
            var inputCity = $('#city-name').val();
            hideWeather();
            forwardGeocode(inputCity);
            $('#searchModal').modal('hide');

        }
    });

    $('.close').click(function () {
        forwardGeocode(city);
    });

    $('#new-search-btn').click(function () {
        $('#searchModal').modal('show');
    });

$('#loading-indicator').show();

});