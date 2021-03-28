var h1Element = document.createElement("h1");
h1Element.textContent = "Hello, this is my basic JavaScript Website.....with some memes."
document.body.appendChild(h1Element);

var newP = document.createElement('p');
newP.textContent = "This page will at least have some memes."
document.body.appendChild(newP);

var unorderedList = document.createElement("ul");
var newList = document.createElement("li");
var newList2 = document.createElement('li')
var newImage = document.createElement("img");
newImage.src = "https://toppng.com/public/uploads/preview/spongebob-meme-11550718688fsege1k3mz.png"
newImage.style = "width:200px;height:200px;"
var newA = document.createElement('a')
newA.href = "https://www.pinterest.com/pin/302585668708582250/"
newA.textContent = "Click me for a Leonardo DiCaprio meme.";
var newA2 = document.createElement('a')
newA2.appendChild(newImage)
newA2.href = "https://toppng.com/public/uploads/preview/spongebob-meme-11550718688fsege1k3mz.png"
unorderedList.appendChild(newList2)
unorderedList.appendChild(newA2)
unorderedList.appendChild(newList)
unorderedList.appendChild(newA)
document.body.appendChild(unorderedList)

var newNav = document.createElement('nav')
newNav.textContent = "My Navigation bar: " 
var newA3 = document.createElement('a');
newA3.textContent = "The novel of Silent Hill 2 for anyone interested."
newA3.href = "https://www.silenthillmemories.net/fan/sh2_official_novel_en.htm"
newNav.appendChild(newA3)
document.body.appendChild(newNav);

var newFooter = document.createElement('footer');
newFooter.textContent = "I hope you guys enjoyed the Website!"
newFooter.style = "color:Blue;text-Align:center"
document.body.appendChild(newFooter);
