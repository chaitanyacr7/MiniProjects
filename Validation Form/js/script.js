var spousefield = document.getElementById("spouse");

//spouse name toggle
document.getElementById("Unmarried").addEventListener("click", function() {
    document.getElementById("spouse").disabled = true;
    document.getElementById("spouse").value = "";
})
document.getElementById("married").addEventListener("click", function() {
    document.getElementById("spouse").disabled = false;
    document.getElementById("spouse").focus();
})

//reset
document.getElementById("reset").addEventListener("click", function() {
    document.getElementsByName("fname")[0].focus();
})

//whitespace
function hasWhiteSpace(s) {
    return s.indexOf(' ') >= 0;
}
//number
function hasNumber(n) {
    return n.search(/[0-9]/g) >= 0;
}

//DOB
function dobFormat(x) {
    var regX = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)(((19)\d\d)|(20)(0|1)[0-9])$/i;
    return regX.test(x);
}
//email
function emailValidation(email) {
    var emailRegx = /^\w+\w+@\w+(\.\w{2,3})+$/i;
    return emailRegx.test(email);
}
var storeData = [];

// //save

function validate() {
    var firstName = document.getElementsByName("fname")[0].value;
    if (firstName === "") {
        alert("FirstName empty");
        document.getElementsByName("fname")[0].focus();
        return false;
    }
    // if (hasWhiteSpace(firstName)) {
    //     document.getElementsByName("fname")[0].focus();
    //     alert("First Name has White Space");
    //     return false;
    // }
    // if (hasNumber(firstName)) {
    //     document.getElementsByName("fname")[0].focus();
    //     alert("First Name has Number");
    //     return false;
    // }

    var lastName = document.getElementsByName("lname")[0].value;
    if (lastName === "") {
        alert("LastName empty");
        document.getElementsByName("lname")[0].focus();
        return false;
    }
    // if (hasNumber(lastName)) {
    //     document.getElementsByName("lname")[0].focus();
    //     alert("Last Name has Number");
    //     return false;
    // }
    var gender = document.getElementsByName("gender");
    if (!gender[0].checked && !gender[1].checked) {
        alert("Gender empty");
        document.getElementsByName("gender")[0].focus();
        return false;
    }

    // var hobbies = document.getElementsByName("hobby");
    // if (!hobbies[0].checked && !hobbies[1].checked && !hobbies[2].checked) {
    //     alert("Hobbies empty");
    //     document.getElementsByName("hobby")[0].focus();
    //     return false;
    // }

    // var skills = document.getElementsByName("skills")[0].value;
    // if (skills == "") {
    //     document.getElementsByName("skills")[0].focus();
    //     alert("Please select skills");
    //     return false;
    // }
    // var marital = document.getElementsByName("marital");
    // if (!marital[0].checked && !marital[1].checked) {
    //     alert("Marital empty");
    //     document.getElementsByName("marital")[0].focus();
    //     return false;
    // } else {
    //     if (marital[0].checked) {
    //         if (document.getElementsByName("spouse")[0].value == "") {
    //             document.getElementsByName("spouse")[0].focus();
    //             alert("Please enter a Spouse Name");
    //             return false;
    //         }
    //     }
    // }
    // var spouseName = document.getElementsByName("spouse")[0].value;
    // if (hasWhiteSpace(spouseName)) {
    //     document.getElementsByName("spouse")[0].focus();
    //     alert("Spouse Name has White Space");
    //     return false;
    // }
    var otherDetail = document.getElementsByName("otherdetails")[0].value;
    if (otherDetail == "") {
        document.getElementsByName("otherdetails")[0].focus();
        alert("Please enter a Other Detail");
        return false;
    }

    // var dateOfBirth = document.getElementsByName("dob")[0].value;
    // if (!dobFormat(dateOfBirth)) {
    //     alert("DOB format invalid");
    //     document.getElementsByName("dob")[0].focus();
    //     return false;    
    // }

    // var email = document.getElementsByName("email")[0].value;
    // if (!emailValidation(email)) {
    //     alert("Email format invalid");
    //     document.getElementsByName("email")[0].focus();
    //     return false;
    // }

    storeData.push(firstName);
    alert("Thank You!");
    return true;
}

document.getElementById("view").addEventListener("click", viewTable);

function viewTable() {
    if (storeData.length >= 1) {

        document.getElementById("infoTable").style.display = "block";


        var row = document.createElement("tr");

        var data1 = document.createElement("td");
        var data2 = document.createElement("td");
        var data3 = document.createElement("td");
        var data4 = document.createElement("td");


        var infoTable = document.getElementById("infoTable");
        var innerTable = document.querySelector("#infoTable table");

        innerTable.appendChild(row);
        row.appendChild(data1);
        row.appendChild(data2);
        row.appendChild(data3);
        row.appendChild(data4);

        var firstName = document.getElementsByName("fname")[0].value;
        var lastName = document.getElementsByName("lname")[0].value;
        var gender = document.querySelector('input[name="gender"]:checked').value;
        var otherDetail = document.getElementsByName("otherdetails")[0].value;

        data1.append(firstName);
        data2.append(lastName);
        data3.append(gender);
        data4.append(otherDetail);

    } else {
        alert("Please save data first")
    }
}