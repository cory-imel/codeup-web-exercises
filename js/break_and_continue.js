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
        userInput = parseInt(userInput);

        valid = !(isNaN(userInput)) && !(userInput % 2 === 0) && !(userInput > 50);


            if (valid){
                break;
            }
    }

    oddOutput(userInput);
}

getUsersNumber();

} )()
