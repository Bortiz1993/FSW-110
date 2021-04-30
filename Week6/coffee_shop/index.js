  //This if statement is to make sure the document is already loaded before we access different parts of the document.
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', mainFunction)
} else {
    mainFunction()
}
//set up for all events listeners
function mainFunction() {
    var removeItemButtons = document.getElementsByClassName('clear-button')
    for (var i = 0; i < removeItemButtons.length; i++) {
        var button = removeItemButtons[i]
        button.addEventListener('click', removeItem)
    }

    var quantityInputs = document.getElementsByClassName('quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', priceChanged)
    }

    var addButtons = document.getElementsByClassName('add-button')
    for (var i = 0; i < addButtons.length; i++) {
        var button = addButtons[i]
        button.addEventListener('click', addClicked)
    }

    document.getElementsByClassName('buy-button')[0].addEventListener('click', buyClicked)
}

//set up for different events such as add items, remove items, and price change.
function buyClicked() {
console.log("Thank you for your service!" )
    var mainItems = document.getElementsByClassName('main-items')[0]
    while (mainItems.hasChildNodes()) {
        mainItems.removeChild(mainItems.firstChild)
    }
    updateTotal()
}

function removeItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateTotal()
}

function priceChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateTotal()
}

function addClicked(event) {
    var button = event.target
    var Item2 = button.parentElement.parentElement
    var title = Item2.getElementsByClassName('item-Name')[0].innerText
    var price = Item2.getElementsByClassName('item-price')[0].innerText
    var image1 = Item2.getElementsByClassName('item-image')[0].src
    addItem(title, price, image1)
    updateTotal()
    console.log(title,price,image1);
}
//created a new div, appended to items.
function addItem(title, price, image2) {
    var mainRow = document.createElement('div')
    mainRow.classList.add('main-row')
    var Items2 = document.getElementsByClassName('main-items')[0]
    var ItemNames = Items2.getElementsByClassName('item-title')
    for (var i = 0; i < ItemNames.length; i++) {
        if (ItemNames[i].innerText == title) {
            alert('This item has already been added.')
            return
        }
    }
    //if adding a new element, it needs to be hooked up since it was added after the initial code.
    var RowContents = `
        <div class="item-column">
            <img class="item-image" src="${image2}" width="100" height="100">
            <span class="item-title">${title}</span>
        </div>
        <span class="price-column">${price}</span>
        <div class="quantity-column">
            <input class="quantity-input" type="number" value="1">
            <button class="clear-button" type="button">Clear</button>
        </div>`
    mainRow.innerHTML = RowContents
    Items2.append(mainRow)
    mainRow.getElementsByClassName('clear-button')[0].addEventListener('click', removeItem)
    mainRow.getElementsByClassName('quantity-input')[0].addEventListener('change', priceChanged)
}

function updateTotal() {
    var itemContainer = document.getElementsByClassName('main-items')[0]
    var Rows = itemContainer.getElementsByClassName('main-row')
    var total = 0
    for (var i = 0; i < Rows.length; i++) {
        var secondaryRow = Rows[i]
        var priceColumn = secondaryRow.getElementsByClassName('price-column')[0]
        var quantityInput = secondaryRow.getElementsByClassName('quantity-input')[0]
        var price = parseFloat(priceColumn.innerText.replace('$', ''))
        var quantity = quantityInput.value
        total = total + (price * quantity)
        console.log(price * quantity)
    }
    //Used Math.round to round to the second decimal place.
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('total-price')[0].innerText = '$' + total
    
    
}