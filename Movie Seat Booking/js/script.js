(function() {
    var movieSelected = document.getElementById("movie");
    var seatSelect = document.querySelectorAll('.row');

    movieSelected.addEventListener("change", seatCount);

    for (var i = 0; i < seatSelect.length; i++) {
        seatSelect[i].addEventListener("click", seatCount);
    }

    function seatCount(e) {
        var moviePrice = movieSelected.value;
        console.log(moviePrice);
        if (e.target.matches(".seat")) {
            var seat = e.target;
            seat.classList.toggle("selected");
            var seatSelected = document.querySelectorAll(".container .seat.selected");
            var value = seatSelected.length;
            var price = moviePrice * value;
            document.getElementById("count").innerHTML = value;
            document.getElementById("total").innerHTML = price;
        } else {
            var seatSelected = document.querySelectorAll(".container .seat.selected");
            var value = seatSelected.length;
            var price = moviePrice * value;
            document.getElementById("count").innerHTML = value;
            document.getElementById("total").innerHTML = price;
        }
    }
})();