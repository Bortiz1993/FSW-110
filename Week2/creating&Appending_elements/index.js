var firstElement = document.createElement("h1");
firstElement.textContent = 'Welcome to my JS site!';
document.body.appendChild(firstElement);

var newP = document.createElement('p');
newP.textContent = 'All of this was created with JavaScript.';
document.body.appendChild(newP);

var newOrderList = document.createElement('ol');
var list = document.createElement('li');
list.textContent = 'Hello Everyone.'
var list2 = document.createElement('li');
list2.textContent = 'This is quite interesting.'
var list3 = document.createElement('li');
list3.textContent = 'I hope I can get better.'
newOrderList.appendChild(list);
newOrderList.appendChild(list2);
newOrderList.appendChild(list3);
document.body.appendChild(newOrderList);


