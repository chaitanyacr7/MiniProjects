var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value + " %";

slider.oninput = function() {
    output.innerHTML = this.value + " %";
}

document.querySelector('#tip-form').onchange = function() {

    var amount = document.getElementById("inputUserNum").value;
    var tip = document.getElementById("myRange").value;

    var tipAmount = amount * (tip / 100);
    console.log(tipAmount);

    var tipAmountCalculated = document.getElementById("tipAmount");
    tipAmountCalculated.value = tipAmount;

    var finalAmount = document.getElementById("totalBill");
    finalAmount.value = parseInt(amount) + parseInt(tipAmount);

    document.getElementById("result").style.display = "block";
}