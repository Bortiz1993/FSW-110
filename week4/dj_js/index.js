var square = document.createElement('div');
var button = document.createElement("button");
window.addEventListener('load', function(){
    square.style.backgroundColor = "black";
})
square.addEventListener('mouseover', function(){
    square.style.backgroundColor = "green";
})
square.addEventListener('mouseout', function(){
    square.style.backgroundColor = "black";
})
square.addEventListener('mousedown', function(){
    square.style.backgroundColor = "yellow";
})
square.addEventListener('mouseup', function(){
    square.style.backgroundColor = "blue";
})
square.addEventListener("dblclick", function(){
    square.style.backgroundColor = "red";
})
button.addEventListener("click", function(){
    square.style.backgroundColor = "purple";
})
var  keyCodeFunction = (event) => {
    if (event.keyCode == "82"){
        square.style.backgroundColor = "red"
    };
     if (event.keyCode == "87"){
        square.style.backgroundColor = "white"
    };
    if (event.keyCode == "71"){
        square.style.backgroundColor = "green"
    };
     if (event.keyCode == "89"){
        square.style.backgroundColor = "yellow"
    };
     if (event.keyCode == "80"){
        square.style.backgroundColor = "purple"
    };
     if (event.keyCode == "66"){
        square.style.backgroundColor = "black"    
    };
    console.log(event);
    };

window.addEventListener("keydown", keyCodeFunction);
button.textContent = "Click Me";
square.style.width = "250px";
square.style.height = "250px";
square.style.backgroundColor = "white";
square.append(button);
document.body.append(square);