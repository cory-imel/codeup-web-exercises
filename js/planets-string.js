(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split("|");
    // console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    // console.log(planetsArray.join("<br>"));

   function buildTable(array) {
       var table = "<ul>\n";
       array.forEach(function (t) {
           table += "   <li>\n    " + t + "\n    </li>\n";
       });

        table += "</ul>";
        return table;
    }

    // console.log(buildTable(planetsArray));

    //
    // Write a function that accepts an array whose elements are arrays of numbers. The function should return
    // the original array, but in the place of each element, the sum of the numbers from the inner array.
    //
    // sumEmUp([[1], [1, 2, 3], [5, 5, 5], [1, 1, 1, 1, 1]]) // returns [1, 6, 15, 5]

    function sumEmUp(array) {
        var total = [];
        array.forEach(function (t) {
             total.push(t.reduce(function(sum, value) {
                return sum + value;
            }, 0))
        });

        console.log(total);

    }
// sumEmUp([[1], [1, 2, 3], [5, 5, 5], [1, 1, 1, 1, 1]]);
    //
    //
    // Write a function that converts 12 to 24 hour time, and one that does the inverse
    //
    // twelveToTwentyFour('1:00pm') // returns '13:00'
    // twelveToTwentyFour('9:00pm') // returns '21:00'
    // twelveToTwentyFour('9:00am') // returns '09:00'
    // twelveToTwentyFour('12:00pm') // returns '12:00'
    // twelveToTwentyFour('12:00am') // returns '00:00'
    //
    // twentyFourToTwelve('13:00') // returns '1:00pm'
    // twentyFourToTwelve('06:30') // returns '6:30am'
    // twentyFourToTwelve('23:00') // returns '11:00pm'
    // twentyFourToTwelve('12:00') // returns '12:00pm'
    // twentyFourToTwelve('00:45') // returns '12:45am'

    function minTwoDigits(n) {
       if (n < 10) {
           return n + "0";
       }
    }

    function twelveToTwentyFour(time) {

            if (time.substring('pm')){
                time =  time.substring(0, time.length-2);
                time = time + " PM";
                var d = new Date("1/1/2013 " + time);
                var minutes = minTwoDigits(d.getMinutes());
                return d.getHours() + ':' + minutes;
            }else {
                time =  time.substring(0, time.length-2);
                time = time + " AM";
                d = new Date("1/1/2013 " + time);
                minutes = minTwoDigits(d.getMinutes());
                return d.getHours() + ':' + minutes;
            }
    }

console.log(twelveToTwentyFour('1:00pm'));

})();