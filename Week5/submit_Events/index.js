function submitForm(e){
    e.preventDefault()
    var firstName = document.getElementById("Name").value;
    var lastName = document.getElementById("lastName").value;
    var color = document.getElementById("color").value;
    alert(firstName);
    alert(lastName);
    alert(color);

    console.log(firstName);
    console.log(lastName);
    console.log(color);

};

function clearInput(){
    var clear = document.getElementById("Name");
    var clear2 = document.getElementById("lastName");  
    var clear3 = document.getElementById("color");
    clear.value = " ";
    clear2.value = " ";
    clear3.value = " ";

};

