function checkPalindrome() {

    var inputText = document.getElementById("inputText").value;
    console.log(inputText);
    var reverse = inputText.split("").reverse().join("");
    console.log(reverse);

    if (inputText == reverse) {
        document.getElementById("result").innerHTML = "PALINDROME";
    } else {
        document.getElementById("result").innerHTML = "NOT A PALINDROME";
    }
}