var colors = ["red", "green", "yellow", "black"];

function changeColor() {
    var index = parseInt(Math.random() * colors.length);
    console.log(index);
    document.body.style.backgroundColor = colors[index];

}