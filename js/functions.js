"use strict";
(function () {
/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 *  > sayHello("codeup") // returns "Hello, codeup!"
 */
    function sayHello(name) {

        return "Hello, " + name + "!";
    }


    /**
     * TODO:
     * Call the function 'sayHello' and pass your name as a string literal argument.
     * Store the result of the function call in a variable named 'helloMessage'.
     *
     * console.log 'helloMessage' to check your work
     */

    var helloMessage = sayHello("Cory");

    // console.log(helloMessage)

    /**
     * TODO:
     * Store your name as a string in a variable named 'myName', and pass that
     * variable to the 'sayHello' function. You should see the same output in the
     * console.
     */

    var myName = "Cory";

    // console.log(sayHello(myName));


// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
    var random = Math.floor((Math.random() * 3) + 1);

    /**
     * TODO:
     * Create a function called 'isTwo' that takes a number as a parameter.
     * The function should return a boolean value based on whether or not the passed
     * number is the number 2.
     *
     * Example
     *  > isTwo(1) // returns false
     *  > isTwo(2) // returns true
     *  > isTwo(3) // returns false
     *
     * Call the function 'isTwo' passing the variable 'random' as a argument.
     *
     * console.log *outside of the function* to check your work (you should see a
     * different result everytime you refresh the page if you are using the random
     * number)
     */

        function isTwo (random) {

        return random === 2;

        }

     // console.log(isTwo(random));

    /**
     * TODO:
     * Create a function named 'calculateTip' to calculate a tip on a bill at a
     * restaurant. The function should accept a tip percentage and the total of the
     * bill, and return the amount to tip
     *
     * Example:
     * > calculateTip(0.20, 20) // returns 4
     */
        function calculateTip(level, bill) {

            return bill * level;
    }

    /**
     * TODO:
     * Use prompt and alert in combination with your calculateTip function to
     * prompt the user for the bill total and a percentage they would like to tip,
     * then display the dollar amount they should tip
     */

    function promptBillInfo() {

        var total = prompt('Please input the total bill: $');
        var percentage = prompt('Please input the tip level: ');
        percentage = percentage / 100;
        alert('Your tip amount is: $' + calculateTip(percentage, total).toFixed(2));

    }

    // promptBillInfo();



//     Write a function called `identity(input)` that takes in an argument called input and returns that input.

    function identify(input) {
        return input;
    }
//
//         Write a function called `getRandomNumber(min, max)` that returns a random number between min and max values sent to that funciton call.
    function getRandomNumber(min, max) {

        min = Math.ceil(min);
        max = Math.floor(max) + 1;
        return Math.floor(Math.random() * (max - min)) + min;
    }

//         Write a function called `first(input)` that returns the first character in the provided string.

            function first(input) {

                return input.charAt(0);
            }

//         Write a fuction called `last(input)` that returns the last character of a string

            function last(input) {

                return input.charAt(input.length - 1);
            }


//     Write a function called `rest(input)` that returns everything but the first character of a string.
           function rest(input) {

            return input.substring(1, input.length - 1)

           }
//
//         Write a function called `reverse(input)` that takes a string and returns it reversed.
//
            function reverse(input){
                var s = "";
                var i = input.length;

                while (i>0){

                s += input.substring(i-1,i);
                i--;

                }

            }

//         Write a function called `isNumeric(input)` that takes an input and returns a boolean if the input is numeric.

            function isNumeric(input) {

                return !isNan(input);
                // return typeof input == "number";

            }

//         Write a function called `count(input)` that takes in a string and returns the number of characters.

            function count(input) {

                return input.length;
            }
//
//         Write a function called `add(a, b)` that returns the sum of a and b

           function add(a,b) {

                 return a + b;
           }
//
//     Write a function called `subtract(a, b)` that return the difference between the two inputs.

        function subtract(a,b) {

                return a - b;
        }
//
//         Write `multiply(a, b)` function that returns the product
//
            function multiply(a,b) {

                return a * b;

            }


//     Write a divide(numerator, denominator) function that returns a divided by b

        function divide(numerator, denominator) {

                return a / b;
        }
//
//     Write a remainder(number, divisor) function that returns the remainder left over when dividing `number` by the `divisor`

        function remainder(number, divisor) {

                 return number % divisor;

        }

//     Write the function `square(a)` that takes in a number and returns the number multiplied by itself.

        function square(a) {

                return a * a;
        }
//
// # Super Duper Gold-Star Bonus
//
//     Write a function called sumOfSquares(a, b) that uses only your add() function and your square function and not + or * operators
//
           function sumOfSquares(a,b) {

                return add(square(a),square(b));

           }


//     Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the name of the math function you want to apply. a and b are the two numbers to run that function on.

    function doMath(operator, a, b) {

        var result = null;

        switch (operator) {
            case "+":
                result = add(a, b);
                return result;
                break;
            case "-":
                result = subtract(a, b);
                return result;
                break;
            case "/":
                result = divide(a, b);
                return result;
                break;
            case "*":
                result = multiply(a, b);
                return result;
                break;


        }
    }

} )()
