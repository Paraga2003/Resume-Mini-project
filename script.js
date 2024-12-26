//alert("loading");
console.log("Adding new field");
function addNewWEField(){
    var newNode = document.createElement("textarea");
    newNode.classList.add("form-control", "weField", "mt-2");
    newNode.setAttribute("rows", 3);

    newNode.setAttribute('placeholder','Enter here');
    var weOb = document.getElementById("we");
    var weAddButtonOb = document.getElementById("weAddButton");
    weOb.insertBefore(newNode, weAddButtonOb);
}
function addNewAQField(){
    var newNode = document.createElement("textarea");
    newNode.classList.add("form-control", "aqField", "mt-2");
    newNode.setAttribute("rows", 3);

    newNode.setAttribute('placeholder','Enter here');
    var aqOb = document.getElementById("aq");
    var aqAddButtonOb = document.getElementById("aqAddButton");
    aqOb.insertBefore(newNode, aqAddButtonOb);

}
// generating Resume
function generateResume(){
    var nameField = document.getElementById("nameField").value;
    var nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = nameField;
    var nameT2 = document.getElementById("nameT2");
    nameT2.innerHTML = nameField;
    //for Contact
    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;
    //for address
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;
    document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;
    document.getElementById("linkedinT").innerHTML = document.getElementById("linkedField").value;
    document.getElementById("emailT").innerHTML = document.getElementById("mailField").value;
    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;

    //we
    let weFields = document.getElementsByClassName("weField");
    let weList = "";
    for (let field of weFields) {
        if (field.value.trim() !== "") {
            weList += `<li>${field.value}</li>`;
        }
    }
    document.getElementById("weT").innerHTML = weList;
    //aq
    let aqs= document.getElementsByClassName("aqField")
    let str1 = "";
    for(let e of aqs){
        str1+=`<li> ${e.value} </li>`;
    }
    document.getElementById("aqT").innerHTML = str1; 

    //code for setting image
    let file = document.getElementById("imgField").files[0];
    console.log(file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);
    //setting image
    reader.onloadend = function(){
        document.getElementById("imgTemplate").src = reader.result;
    }
    // Show the resume template and hide the form
    document.getElementById("resume-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";
}

function printResume(){
    window.print();
}




    


