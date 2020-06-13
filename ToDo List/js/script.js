var add = document.getElementById("plus");

//add list
add.onclick = function() {

    var div = document.createElement('div');
    div.classList.add("newDiv");

    var text = document.createElement("span");
    text.id = "newText";

    var del = document.createElement("i");
    del.classList.add("fas");
    del.classList.add("fa-bars");


    var container = document.getElementById("container");
    container.appendChild(div);
    div.appendChild(text);
    div.appendChild(del);

    //adding text

    var userInput = document.getElementById("userInput").value;
    text.innerHTML = userInput;
    document.getElementById("userInput").value = "";
}