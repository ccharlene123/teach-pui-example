class Ingredient { 
    constructor(name, imgSrc, co2, fishBool, vegBool){
        this.name = name;
        this.imgSrc = imgSrc;
        this.co2 = co2;
        this.fishBool = fishBool;
        this.vegBool = vegBool;
    }
}

let finishedBurrito = []

function runAnimation(button){
    let key = button.querySelector('p').innerText;
    let grabDiv = document.getElementById("falling");
    console.log(grabDiv)
    //let newDiv = document.createElement('div');
   //newDiv.className = "falling";
    let newIngredient = document.createElement('img');
    grabDiv.appendChild(newIngredient);
    newIngredient.className = "fallingImg";
    newIngredient.src = '../assets/' + ingredients[key].imageFile;
    document.getElementById("falling").style.animationPlayState = "running";
    finishedBurrito.push(ingredients[key]);
    console.log(finishedBurrito)
}

function resetAnimation(){
    document.getElementById("falling").style.animationPlayState = "paused";
}

/*

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const bunType = params.get("roll");

const nameElement = document.querySelector('#product-name');
nameElement.innerText = bunType + ' cinnamon roll'

const basePrice = rolls[bunType].basePrice;
priceChange();

const rollImage = document.querySelector('.product-image');
rollImage.src = '../assets/' + rolls[bunType].imageFile;

function addToCart(){
    const newRoll = new Roll(bunType, glazingOption.options[glazingOption.selectedIndex].text, packOption.options[packOption.selectedIndex].text, basePrice);
    cart.push(newRoll);
    console.log(cart);
    saveToLocalStorage();
}

//session storage: (use remove item from session storage when start over button is clicked)
sessionStorage.setItem("lastname", "Smith");
sessionStorage.getItem("lastname");

function saveToLocalStorage() {
    const cartArrayString = JSON.stringify(cart);
    console.log(cartArrayString);

    localStorage.setItem('cartItems', cartArrayString);
}

function retrieveFromLocalStorage() {
    const cartArrayString = localStorage.getItem('cartItems');
    const cartArray = JSON.parse(cartArrayString);
    for (const cartData of cartArray) {
        const newRoll = addNewRoll(cartData.type, cartData.glazing, cartData.size, cartData.basePrice);
    }
}

if (localStorage.getItem('cartItems') != null) {
    retrieveFromLocalStorage();
}
}

make variables for co2, fish, and vegetarian

let carbonDioxide = 

"used" + co2 + "g carbon dioxide"
"Used" + fish + " types of fish or fish byproducts"
"Used" + veggie + " types of vegetarian ingredients"
*/