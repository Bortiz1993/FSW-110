function submitForm(e){
    e.preventDefault()
    alert("Form has been submited, thank you!");
    var firstName = document.getElementById("Name").value
    var lastName = document.getElementById("lastName").value
    var age = document.getElementById("age").value
    var yes = document.getElementById("question").value 
    var no = document.getElementById("question2").value 
    console.log(firstName);
    console.log(lastName);
    console.log(age);
    console.log(yes);
    console.log(no);

}   
