//for loop that adds styling to 10 h1.
for (var i=0; i < 10; i++){
    var firstElement = document.createElement("h1");
firstElement.textContent = "Hello World!"
firstElement.style.color = "Aqua"
document.body.appendChild(firstElement)
}

//for loop that iterates through array.
const names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"];
let namesList = document.getElementById("names");
for (var i = 0; i < names.length; i++){
namesList.innerHTML += '<li>' + names[i] + '</li>'
}
document.body.appendChild(names);