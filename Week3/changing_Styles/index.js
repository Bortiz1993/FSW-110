for (var i = 0; i < 5; i++){
var newElement = document.createElement("h2");
if ( i == 0){
newElement.textContent ="Hello Everyone" };
newElement.style.fontSize = '20px';
newElement.style.fontWeight = "lighter";
newElement.style.fontFamily = "sans-serif";
newElement.style.color = "cornflowerblue";
newElement.classList.add('border');
// div.classList.add('info');
if ( i == 1){
newElement.textContent = "I like"};
 if (i == 2){
 newElement.textContent = "the color"};
if (i == 3){
newElement.textContent = "blue"};
if (i == 4)
{newElement.textContent = "I also like the color Aqua."};
document.body.append(newElement);
}