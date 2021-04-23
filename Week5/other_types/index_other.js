function submitForm(e){
    e.preventDefault()
    const form = document.forms[0];
    var firstName = document.getElementById("Name").value
    var lastName = document.getElementById("lastName").value
    var age = document.getElementById("age").value 
    const radios = form.elements['question'];
    const dropdown = form.elements['dropdown'];
    const checkbox = form.elements['checkbox1'];
    const checkbox2 = form.elements['checkbox2'];
    const checkbox3 = form.elements['checkbox3'];

    console.log(firstName);
    console.log(lastName);
    console.log(age);
    console.log(radios.value);
    console.log(dropdown.value);
    console.log(checkbox.value);
    console.log(checkbox2.value);
    console.log(checkbox3.value);
    alert(`First Name: ${firstName} \n Last Name: ${lastName} \n Age: ${age} \n Have you been here before? ${radios.value} \n Where are you from: ${dropdown.value} \n What you like:${checkbox.checked? checkbox.value:""} \n ${checkbox2.checked? checkbox2.value: ""} \n${checkbox3.checked? checkbox3.value: "" }\n` + " Thank you for your input");
//template literal = ``
}   
//ternary statement. Better than if statements depending on situation , only works for one statement at a time. syntax=  checkbox.checked? checkbox.value:
//style:
var bodyStyle = document.getElementById("body");
bodyStyle.style.backgroundColor = "skyblue";
var formStyle = document.getElementById("myform");
formStyle.style.height = "325px"
formStyle.style.width = "450px";
formStyle.style.margin = "auto";
formStyle.style.backgroundColor = "purple";
formStyle.style.padding = "5px";
formStyle.style.marginTop = "150px";
formStyle.style.borderRadius = "20px";
formStyle.style.float = "center";
formStyle.style.textAlign = "center";
formStyle.style.fontFamily = "Impact";
var h2Text = document.getElementById("h2");
h2Text.style.textAlign = "center";
h2Text.style.fontFamily = "Impact";
