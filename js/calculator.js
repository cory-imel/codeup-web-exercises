(function() {
    "use strict";

    var textArea = "0";
    var inputStore = [];
    var current = null;
    // var buttonTags = document.getElementsByTagName("button");
    // console.log(buttonTags);


    document.getElementById('clear').addEventListener('click', clearInputs, false);

    document.getElementById('del').addEventListener('click', delLastInput, false);

    document.getElementById("1").addEventListener('click', function () {
        inputStore.push(1);
        console.log(inputStore);
        updateWindow();

    }, false);
    document.getElementById("2").addEventListener('click', function () {
        inputStore.push(2);
        console.log(inputStore);
        updateWindow();
    }, false);
    document.getElementById("3").addEventListener('click', function () {
        inputStore.push(3);
        console.log(inputStore);
        updateWindow();
    }, false);
    document.getElementById("4").addEventListener('click', function () {
        inputStore.push(4);
        console.log(inputStore);
        updateWindow();
    }, false);
    document.getElementById("5").addEventListener('click', function () {
        inputStore.push(5);
        console.log(inputStore);
        updateWindow();
    }, false);
    document.getElementById("6").addEventListener('click', function () {
        inputStore.push(6);
        console.log(inputStore);
        updateWindow();
    }, false);
    document.getElementById("7").addEventListener('click', function () {
        inputStore.push(7);
        console.log(inputStore);
        updateWindow();
    }, false);
    document.getElementById("8").addEventListener('click', function () {
        inputStore.push(8);
        console.log(inputStore);
        updateWindow();
    }, false);
    document.getElementById("9").addEventListener('click', function () {
        inputStore.push(9);
        console.log(inputStore);
        updateWindow();
    }, false);





    function clearInputs() {
        inputStore = [];
        textArea = "0";
        current = null;
        updateWindow();
    }

    function delLastInput() {
        if (inputStore.length === 0) {
            textArea = "0";
            updateWindow();
        } else {
            inputStore.pop();
            textArea = inputStore.toString();
            updateWindow();
        }
    }

    function updateWindow() {
        if (inputStore.length === 0){
            document.getElementById("window").innerHTML = textArea;
        }else if (!current.length === null){
            document.getElementById("window").innerHTML = current;
        }else {
            document.getElementById("window").innerHTML = inputStore[inputStore.length - 1];
        }
    }

updateWindow();

})();