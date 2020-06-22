var add = document.getElementById("plus");
add.addEventListener("click", addNote);

//Enter Button
document.getElementById("userInput").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        add.click();
    }
});

//add list
function addNote() {
    var userInput = document.getElementById("userInput").value;
    //empty note alert
    if (userInput == "") {
        alert("Empty Note!");

    } else {
        var div = document.createElement('div');
        div.classList.add("newDiv");

        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkboxClass";
        checkbox.name = "checkbox";
        checkbox.id = "checkd";
        div.appendChild(checkbox);

        var text = document.createElement("span");
        text.classList.add("newText");

        var del = document.createElement("i");
        del.classList.add("fas");
        del.classList.add("fa-bars");
        del.id = "deleteNote";

        var container = document.getElementById("container");
        container.appendChild(div);
        div.appendChild(text);
        div.appendChild(del);

        //adding text   

        text.innerHTML = userInput;
        document.getElementById("userInput").value = "";

        //add delete button

        var deleteNote = document.getElementsByClassName("newDiv");
        for (var i = 0; i < deleteNote.length; i++) {
            deleteNote[i].addEventListener("click", deleteNoteClick);
        }

    }

}

//delete note      
function deleteNoteClick(e) {
    const item = e.target;
    if (item.id === "deleteNote") {
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function() {
            todo.remove();
        })
    }
    if (item.id === "checkd") {
        console.log(e.target);
        if (e.target.checked) {
            item.nextElementSibling.style.textDecoration = "line-through";
        } else {
            item.nextElementSibling.style.textDecoration = "none";
        }
    }
}