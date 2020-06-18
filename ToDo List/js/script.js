// function functionOne(x) {
//     alert(x);
// }

// function functionTwo(var1, callback) {
//     callback(var1);
// }

// functionTwo(2, functionOne);

var add = document.getElementById("plus");

//Enter Button
document.getElementById("userInput").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        add.click();
    }
});

//add list
add.onclick = function addNote() {
    var userInput = document.getElementById("userInput").value;
    //empty note alert
    if (userInput == "") {
        // alert("Empty Note!");

    } else {
        var div = document.createElement('div');
        div.classList.add("newDiv");

        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkboxClass";
        checkbox.name = "checkbox";
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

        // var checkboxNote = document.querySelector("input[name=checkbox]");
        // checkboxNote.addEventListener("change", function() {
        //     if (this.checked) {
        //         document.getElementById("newText").style.textDecoration = "line-through";
        //         document.getElementById("newText").style.color = "grey";
        //     } else {
        //         document.getElementById("newText").style.textDecoration = " none";
        //         document.getElementById("newText").style.color = "black";
        //     }
        // })

        function toggleDone(event) {
            if (event.target.matches('.newDiv input[type=checkbox]')) {

                if (event.target.checked) {
                    var x = document.querySelectorAll("span");
                    var i;
                    for (i = 0; i < x.length; i++) {
                        x[i].style.textDecoration = "line-through";
                    }
                    // var a = event.target.checked;
                    // var y = document.querySelector(a);
                    // y.style.textDecoration = "line-through";

                    console.log(event.target);
                } else {
                    document.querySelector(".newDiv .newText").style.textDecoration = " none";
                    document.querySelector(".newDiv .newText").style.color = "black";
                }
            } else {
                document.querySelector(".newDiv .newText").style.textDecoration = " none";
            }
        }
        const characterList = document.querySelector('#container')
        characterList.addEventListener('change', toggleDone)
    }

}

//delete note      
function deleteNote() {
    var div = document.createElement('div');
    var deleteNote = document.getElementById("deleteNote");
    deleteNote.onclick = function() {
        div.remove();
    }
}