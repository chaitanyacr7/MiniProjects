var display = document.querySelector("#input");
var keyboardKeys = document.querySelector('#calculator');

//append button press data to display

keyboardKeys.addEventListener("click", getData);

function getData(e) {
    const item = e.target;
    if (item.matches(".numbers div div") || item.matches(".operators div")) {
        var keyValue = item.getAttribute("data-number");
        display.innerHTML += keyValue;
    }

    //calculate
    const equal = e.target;
    if (equal.id === "equal") {
        var displayValue = display.innerHTML;
        console.log(displayValue.slice(displayValue.indexOf('+') + 1));

    }
}