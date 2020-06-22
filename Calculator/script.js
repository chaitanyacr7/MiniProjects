//selecting number div
// var seven = document.querySelectorAll(".seven div");
// var four = document.querySelectorAll(".four div");
// var one = document.querySelectorAll(".one div");
// var zero = document.querySelectorAll(".zero div");

var operator = document.querySelectorAll(".operators div");
var allNumbers = document.querySelectorAll(".numbers div div");
var input = document.getElementById("input");
var operators = document.getElementsByClassName("operators");
var equal = document.getElementById("equal");


for (var i = 0; i < 11; i++) {

    allNumbers[i].addEventListener("click", function() {
        // for (i = 0; i < allNumbers.length; i++) {
        var specificNum = i;
        console.log(specificNum);

        var hey = allNumbers[i].innerHTML;
        var numSeven = document.createTextNode(hey);
        input.appendChild(numSeven);
        // };
    });

}




operators[0].addEventListener("click", appendInOperator);

function appendInOperator() {
    var add = document.createTextNode("+");
    input.appendChild(add);
}

equal.addEventListener("click", calculate);

function calculate() {

    var output = +input.innerHTML[0] + +input.innerHTML[2];
    var output1 = document.createTextNode(output);
    input.appendChild(output1);

}