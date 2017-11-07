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

        map = new google.maps.Map(document.getElementById('map'), {center: currentLatLng,zoom: 8,
            styles: [
                {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
                {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
                {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
                {
                    featureType: 'administrative.locality',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#d59563'}]
                },
                {
                    featureType: 'poi',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#d59563'}]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'geometry',
                    stylers: [{color: '#263c3f'}]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#6b9a76'}]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry',
                    stylers: [{color: '#38414e'}]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry.stroke',
                    stylers: [{color: '#212a37'}]
                },
                {
                    featureType: 'road',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#9ca5b3'}]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry',
                    stylers: [{color: '#746855'}]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry.stroke',
                    stylers: [{color: '#1f2835'}]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#f3d19c'}]
                },
                {
                    featureType: 'transit',
                    elementType: 'geometry',
                    stylers: [{color: '#2f3948'}]
                },
                {
                    featureType: 'transit.station',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#d59563'}]
                },
                {
                    featureType: 'water',
                    elementType: 'geometry',
                    stylers: [{color: '#17263c'}]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#515c6d'}]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.stroke',
                    stylers: [{color: '#17263c'}]
                }
            ]});

        setMarker();

    }

    function setMarker() {

        var marker = new google.maps.Marker({
            position: currentLatLng,
            map: map,
            draggable:true

        });

        google.maps.event.addListener(marker, 'dragend', function (event) {
            $('#loading-indicator').show();
            var newLatLng = {lat: parseFloat(event.latLng.lat()), lng: parseFloat(event.latLng.lng())};
            currentLatLng = newLatLng;
            getWeather(newLatLng);
        });
    }



    function getWeather(city) {
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/forecast/daily",
        type: "GET",
        data: {
            APPID: "",
            lat: city.lat,
            lon: city.lng,
            units: "imperial",
            cnt: 3
        }
    }).done(function (data) {

        $('#loading-indicator').hide();
        $('#city').html('<h3>' + data.city.name + '</h3>');

        buildWeatherPanes(data);

        //Create map or re-center in marker drag case.
        if (firstRun) {
            initMap();
            firstRun = false;
        }else{
            map.setCenter(currentLatLng);
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



    function geocoder(cityStr) {
        geocoder.geocode({address: cityStr}, function (results, status) {
            if (status === 'OK') {
                currentLatLng = {lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng()};
                getWeather(currentLatLng);
            } else {
                $('#weather-row').html("Could not find your location: " + status);
                setTimeout(function () {
                    $('#searchModal').modal('show');
                }, 2000)
            }
        });
    }



    $('#search-btn').click(function (e) {
        e.preventDefault();
        var inputCity = $('#city-name').val();
        $('#loading-indicator').show();
        geocoder(inputCity);
        firstRun = true;
    });

    $('#city-name').keyup(function (e) {
        if (e.keyCode === 13){
            var inputCity = $('#city-name').val();
            $('#loading-indicator').show();
            geocoder(inputCity);
            $('#searchModal').modal('hide');
            firstRun = true;
        }
    });

    $('.close').click(function () {
        geocoder(city);
    });

    $('#new-search-btn').click(function () {
        $('#searchModal').modal('show');
    });

$('#loading-indicator').show();
$('#searchModal').modal();
});