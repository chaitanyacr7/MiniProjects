var number = document.getElementById("counter").innerHTML;
console.log(number);

function addCount() {
    number++;
    var newNum = number;
    document.getElementById("counter").innerHTML = newNum;
    console.log(newNum);
    if (newNum > 0) {
        document.getElementById("counter").style.color = "green";
    } else if (newNum == 0) {
        document.getElementById("counter").style.color = "black";
    } else {
        document.getElementById("counter").style.color = "red";
    }
}

function lowerCount() {
    number--;
    var newNum1 = number;
    document.getElementById("counter").innerHTML = newNum1;
    console.log(number);
    if (newNum1 > 0) {
        document.getElementById("counter").style.color = "green";
    } else if (newNum1 == 0) {
        document.getElementById("counter").style.color = "black";
    } else {
        document.getElementById("counter").style.color = "red";
    }
}