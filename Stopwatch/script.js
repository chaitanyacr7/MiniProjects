var sec = 0;
var ten = 0;

document.getElementById("start-button").onclick = function() { startInterval() };
var appendTen = document.getElementById("tens");
var appendSec = document.getElementById("seconds");

function startInterval() {

    var start = setInterval(function() {

        ten++;
        if (ten <= 9) {
            appendTen.innerHTML = "0" + ten;
        }
        if (ten > 9 && ten < 100) {
            appendTen.innerHTML = ten;
        }
        if (ten > 99) {
            appendTen.innerHTML = "00";
            sec++;
            ten = 0;

            if (sec <= 9) {
                appendSec.innerHTML = "0" + sec;
            }
            if (sec > 9) {
                appendSec.innerHTML = sec;
            }
        }

    }, 10);

    document.getElementById("stop-button").onclick = function() {
        clearInterval(start);
    }

    document.getElementById("reset-button").onclick = function() {
        clearInterval(start);
        sec = 0;
        ten = 0;
        appendSec.innerHTML = "00";
        appendTen.innerHTML = "00";
    };
}