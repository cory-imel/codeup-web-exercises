(function () {
    "use strict";



function oddOutput (userInput){

    for (var i = 1; i < 50; i++) {


        if (i % 2 === 0) {
            continue;
        } else if (i === userInput) {
            console.log("Yikes! Skipping number: " + userInput);
        }else {
            console.log('Here is an odd number: ' + i);
        }


    }
}

function getUsersNumber() {

    var userInput = "";
    var valid = false;

    while(!valid) {

        userInput = prompt("Please provide an odd number between 1 and 50.");
        userInput = parsevar(userInput);

        valid = !(isNaN(userInput)) && !(userInput % 2 === 0) && !(userInput > 50);

            if (valid){
                break;
            }
    }

    oddOutput(userInput);
}

//getUsersNumber();


function diamond(width) {

    var output = "";


    for (var i = 0; i < width - 1; i++)
    {
        for (var j = 0; j < (width - i); j++) {
            output += " ";
        }
        for (j = 1; j <= i; j++) {
            output += "*";
        }
        for (var k = 1; k < i; k++) {
            output += "*";
        }
        output += "\n";
    }

    for (i = width - 1 ; i >= 1; i--)
    {
        for (j = 0; j < (width - i); j++) {
            output += " ";
        }
        for (j = 1; j <= i; j++) {
            output += "*";
        }
        for (k = 1; k < i; k++) {
            output += "*";
        }
        output += "\n"
    }

console.log(output);

}


function fizzBuzz() {

    for (var i = 1; i <= 100; i++) {
        var expletive = "";

        if (i % 3 === 0) expletive += "Fizz";
        if (i % 5 === 0) expletive += "Buzz";
        console.log(expletive || i);
    }

}

// fizzBuzz();
// diamond(7);
//

function multiplicationTable() {

    var output = "";

    for (var i = 1; i <= 12; i++){

        for (var j = 1; j <= 12; j++){

            output += i * j;

            if (j = 12)
                output += "\n";

              if ((i* j) < 10 ){
                  output += "   ";
              }else if ((i*j) < 100) {
                  output += "  ";
              }else {
                  output += " ";
              }

        }
    }
    console.log(output)
}

multiplicationTable();
} )()

