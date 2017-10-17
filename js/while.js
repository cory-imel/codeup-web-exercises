(function () {
    "use strict";

    //Binary
    var number = 1;
    while (number < 65536) {

        number = number * 2;
        console.log(number);
    }

    //Cones

    var allCones = Math.floor(Math.random() * 50) + 50;


    function currentSale() {

        return Math.floor(Math.random() * 5) + 1;
    }

    do {

        var thisSale  = currentSale();

        if ((allCones - thisSale) > 0){
            allCones = allCones - thisSale;
            console.log(thisSale + " cones sold");
        } else if (allCones - thisSale === 0){
            allCones = allCones - thisSale;
            console.log("Yay! I sold them all!");
        } else {
            console.log("Cannot sell you " + thisSale + " cones I only have " + allCones + " ...");
        }

    } while (allCones > 0);

} )()