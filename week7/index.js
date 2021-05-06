
//variables

var input = document.getElementById('main-input');
var button = document.querySelector('.add-todo > button');
//event listeners
button.addEventListener('click', addList);
//input
input.addEventListener('keyup', (e)=> {
   (e.keyCode == 13 ? addList(e) : null);
    console.log(e)
})
//main function, prevent default;

function addList(e){
    e.preventDefault()
//querySelectors
    var notCompleted = document.querySelector('.not-completed');
    var completed = document.querySelector('.completed');
    //created elements, everytime the add button is clicked, a new element will be created.
    var newList = document.createElement('li');
    var checkButton = document.createElement('button');
    var clearButton = document.createElement('button');
//innerhtml elements, icons
    checkButton.innerHTML = '<i class="fas fa-check-square"></i>'; 
    clearButton.innerHTML = '<i class="fas fa-trash"></i>';
//if statement and appending buttons and adding event listeners;
    if(input.value !=='' ){
        newList.textContent = input.value;
        input.value = '';
        notCompleted.appendChild(newList);
        newList.appendChild(checkButton);
        newList.appendChild(clearButton);
    }
    checkButton.addEventListener('click', function(){
        var parent = this.parentNode;
        parent.remove();
        completed.appendChild(parent);
        checkButton.style.display = "none";
    });
    clearButton.addEventListener('click', function(){
        var parent = this.parentNode;
        parent.remove();
});

console.log(e);
}