function convertCurrency() {
    var amount = document.getElementById("amount").value;
    var convertFrom = document.getElementById("fromCurrency").value;
    var convertTo = document.getElementById("toCurrency").value;
    var result = document.getElementById("finalResult");
    console.log(result);

    //coversion
    //rupee
    var currencyLeft = document.getElementById("fromCurrency");
    var rupee = currencyLeft.options[0];
    //dollar
    var currencyRight = document.getElementById("toCurrency");
    var dollar = currencyRight.options[0];

    //equating currencies
    dollar = 0;
    rupee = amount;
    dollar = rupee / 70;



    //Displaying Result
    result.innerHTML = amount + " " + convertFrom +
        " = " + dollar + " " + convertTo;
}