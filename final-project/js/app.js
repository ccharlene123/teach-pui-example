class Ingredient { 
    constructor(name, imgSrc, co2, fishBool, vegBool){
        this.name = name;
        this.imgSrc = imgSrc;
        this.co2 = co2;
        this.fishBool = fishBool;
        this.vegBool = vegBool;
    }
}

function runAnimation(button){
    let animationImg = document.querySelector('.fallingImg');
    let key = button.querySelector('p').innerText;
    console.log(key);
    console.log(ingredients[key])
    animationImg.src = '../assets/' + ingredients[key].imageFile;
    document.getElementById("falling").style.animationPlayState = "running";
}

/*

let ingredient = document.querySelector('.ingredient');
ingredient.addEventListener('click', runAnimation);

$('.ingredient').onClick(function(){
    $('.builder').addClass('.falling');
});

let IngredientsArray = [
    new Ingredient('soy wrap', 'soy-wrap', 10, false, true),
    new Ingredient('seaweed wrap', 'seaweed-wrap', 15, false, true),
    new Ingredient('brown rice', 'brown-rice', 54, false, true),
    new Ingredient('white rice', 'white-rice', 54, false, true),
    new Ingredient('salmon', 'salmon', 479, true, false),
    new Ingredient('tuna', 'tuna', 1016, true, false),
    new Ingredient('yellowtail', 'yellowtail', 436, true, false),
    new Ingredient('shrimp', 'shrimp', 1775, true, false),
    new Ingredient('eggs', 'eggs', 270, false, true),
    new Ingredient('tofu', 'tofu', 148, false, true),
    new Ingredient('krab', 'krab', 400, true, false),
    new Ingredient('avocado', 'avocado', 204, false, true),
    new Ingredient('lettuce', 'lettuce', 48, false, true),
    new Ingredient('carrots', 'carrots', 34, false, true),
    new Ingredient('cucumber', 'cucumber', 58, false, true),
    new Ingredient('corn', 'corn', 32, false, true),
    new Ingredient('seaweed salad', 'seaweed-salad', 60, false, true),
    new Ingredient('masago', 'masago', 30, true, false),
    new Ingredient('sesame seeds', 'sesame-seeds', 25, false, true),
    new Ingredient('furikake', 'furikake', 28, true, false),
    new Ingredient('tempura flakes', 'tempura-flakes', 8, false, true),
]

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
