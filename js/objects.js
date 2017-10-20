(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.firstName) // "Sanchez"
     */
    var person = {
      fistName: "Cory",
      lastName: "Imel"
    };

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function () {
        return "Hello from " + this.fistName + " " + this.lastName;
    };
    // console.log(person.sayHello());
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [ {name: 'Cameron', amount: 180},
                     {name: 'Ryan', amount: 250},
                    {name: 'George', amount: 320}
        ];


    shoppers.forEach(function (shopper) {

            var name = "Name: " + shopper.name;
            var subtotal = " - Subtotal: $" + shopper.amount;
            var discount = " - Discount: $" + (shopper.amount * .12).toFixed(2);
            var total = " - Total: $" + (shopper.amount - (shopper.amount * .12)).toFixed(2);

            if (shopper.amount > 200) {

                console.log( name + subtotal + discount + total);

            } else {

                console.log(name + subtotal + " - Discount: $0.00 " + " - Total: $" + shopper.amount);
            }
        }

    );


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    var books = [
        {
           title: "Some book",
           author: {
               firstName: "John",
               lastName: "Doe"
           }
        },
        {
            title: "Some other book",
            author: {
                firstName: "John",
                lastName: "Doe"
            }
        },
        {
            title: "Some other other book",
            author: {
                firstName: "John",
                lastName: "Doe"
            }
        },
        {
            title: "Just Some book",
            author: {
                firstName: "John",
                lastName: "Doe"
            }
        },
        {
            title: "Some Self Help book",
            author: {
                firstName: "John",
                lastName: "Doe"
            }
        }
    ];
    //
    // console.log(books[4].title);
    // console.log(books[4].author.firstName);
    // console.log(books[4].author.lastName);
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    // books.forEach(function (book, index) {
    //
    //     console.log("Book # " + index);
    //     console.log("Title: " + book.title);
    //     console.log("Author: " + book.fistName + " " + book.lastName);
    //     console.log("---")
    //
    // });

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    function createBook(booktitle, author) {

        var authorArr = [author.split(" ")];
        var authorObj = {fistName:authorArr[0], lastName:authorArr[1]};
        var bookObj = {title:booktitle, author:authorObj};

        showBookInfo(bookObj);

    }

    function showBookInfo(book) {

        console.log("Book # !");
        console.log("Title: " + book.title);
        console.log("Author: " + book.fistName + " " + book.lastName);
        console.log("---")

    }

    createBook("Stuff","Some Dude");


//
//     BONUS 1 (create a dog object):
//     The dog object should have properties for:
//     breed (string),
//         weightInPounds (number),
//         age (number),
//         color (string),
//         sterilized (boolean),
//         shotRecords (array of objects with properties for date and typeOfShot)
//     The dog object should have methods to:
//         bark() - will console.log “Woof!”
//         getOlder() - will increase age by 1
//     fix() - will set sterile to true if dog sterilized property is false
//     vaccinate() - takes in an argument for the name of the shot and adds a new shot with the current date to the shotRecords array
//
//
// BONUS 2 (expanding on the books object exercise):
//     Add a property “keywords” that contains an array of possible genres the book may be categorized by
//     Add a boolean property “available” and set it to true
//     Add a dateAvailable property that has a string of the date/time when the book will be available
//     Add a method lend() that...
//     - changes the available property to false if it is not already false
//     - sets the dateAvailable to a date exactly two weeks from when the lend() method is called
//     (to do this, research the JS Date object and use methods from it in your code)
//     Add a method receive() that...
//     - changes the available property to true
//     - changes the dateAvailable property to the string “now”
//
//
// BONUS 3 (expanding on the books object exercise):
//     Create an application to take in user input to build the books array of objects.
//         Allow the user to continue adding books or to finish adding books.
//         Once the books have been added, output the books array in the console.
//         Allow a user to delete a book or a group of books by title or author last name
//     Allow a user to edit a book by index number in the books array
//



})();
