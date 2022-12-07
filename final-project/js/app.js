class Ingredient { 
    constructor(name, co2, fishBool, vegBool){
        this.name = name;
        this.co2 = co2;
        this.fishBool = fishBool;
        this.vegBool = vegBool;
    }
}

let IngredientsArray = [
    new Ingredient('soy wrap', 10, false, true),
    new Ingredient('seaweed wrap', 15, false, true),
    new Ingredient('brown rice', 54, false, true),
    new Ingredient('white rice', 54, false, true),
    new Ingredient('salmon', 479, true, false),
    new Ingredient('tuna', 1016, true, false),
    new Ingredient('yellowtail', 436, true, false),
    new Ingredient('shrimp', 1775, true, false),
    new Ingredient('eggs', 270, false, true),
    new Ingredient('tofu', 148, false, true),
    new Ingredient('krab', 400, true, false),
    new Ingredient('avocado', 204, false, true),
    new Ingredient('lettuce', 48, false, true),
    new Ingredient('carrots', 34, false, true),
    new Ingredient('cucumber', 58, false, true),
    new Ingredient('corn', 32, false, true),
    new Ingredient('seaweed salad', 60, false, true),
    new Ingredient('masago', 30, true, false),
    new Ingredient('sesame seeds', 25, false, true),
    new Ingredient('furikake', 28, true, false),
    new Ingredient('tempura flakes', 8, false, true),
]

function runAnimation(){
    document.getElementsByClassName("falling").style.AnimationPlayState = "running";
}

let ingredient = document.querySelector('.ingredient');
ingredient.addEventListener('click', runAnimation)

$('.ingredient').onClick(function(){
    $('.builder').addClass('.falling');
});

/*
const cart = [];

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
*/