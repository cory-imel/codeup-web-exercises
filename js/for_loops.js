(function () {
    "use strict";

function showMultiplicationTable(number) {

    for (var i = 1; i <= 10; i++){
        console.log(number + " x " + i +  " = " + (number * i));
    }

}

showMultiplicationTable(7);


function evenOdd() {

    for (var i = 1; i <= 10; i++){

        var currentNumber = Math.floor(Math.random() * (180 - 20 + 1)) + 20;

        if (currentNumber % 2 === 0){
            console.log(currentNumber + " is even");
        }else {
            console.log(currentNumber + " is odd");
        }
    }

}

evenOdd();


function numberCat() {


    for (var i = 1; i <= 10; i++) {

        var output = "";

        for (var x = 1; x <= i; x++) {
            output = output + i;
        }

        if (i < 10) {
            console.log(output);
        }else {
            console.log("0000000000")
        }
    }

}

numberCat();

function minusFive() {

    for (var i = 100; i > 0; i -= 5){

        console.log(i);

    }

}

minusFive();

} )()