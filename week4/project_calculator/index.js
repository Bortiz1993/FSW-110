var centerCalculator = document.getElementById('center');
centerCalculator.style.backgroundColor = "aqua";
centerCalculator.style.border = "thick solid blue ";
centerCalculator.style.width = "400px";
centerCalculator.style.marginTop = "200px";
centerCalculator.style.marginLeft = "540px";
centerCalculator.style.paddingTop = "50px";
var elementH1 = document.getElementById('h1');
elementH1.style.textAlign = "center";
var addButton = document.getElementById("Add");
plusOperation  = function() {
    number1 = document.getElementById("Number1");
    number2 = document.getElementById("Number2");
    sum = parseInt(number1.value) + parseInt(number2.value);
    result = document.getElementById("result");
    result.innerText = "Result of Sum = " + sum;

}
addButton.addEventListener("click", plusOperation);

var minusButton = document.getElementById("Minus");
minusOperation = function() {
   number3 = document.getElementById("Number3");
   number4 = document.getElementById("Number4");
    minus = parseInt(number3.value) - parseInt(number4.value);
    result2 = document.getElementById("result2");
   result2.innerText = "Result of Minus = " + minus;

}
minusButton.addEventListener("click", minusOperation);

var multiplyButton = document.getElementById("Multiply");
multiplyOperation = function() {
    number5 = document.getElementById("Number5");
    number6 = document.getElementById("Number6");
    result3 = document.getElementById("result3");
   multiply = parseInt(number5.value) * parseInt(number6.value)
   result3.innerText = "Result of Multiply = " + multiply;
}
        
multiplyButton.addEventListener("click", multiplyOperation);

function clearText(){
    var clear = document.getElementById("Number1");
    var clear2 = document.getElementById("Number2");  
    var clear3 = document.getElementById("Number3");
    var clear4 = document.getElementById("Number4");
    var clear5 = document.getElementById("Number5");
    var clear6 = document.getElementById("Number6");     
    clear.value = " ";
    clear2.value = " ";
    clear3.value = " ";
    clear4.value = " ";
    clear5.value = " ";
    clear6.value = " ";
}
var elementh2 = document.getElementById("h2");
elementh2.style.textAlign = "center";
centerCalculator.append(elementh2);
document.body.append(elementH1);
document.body.append(centerCalculator);