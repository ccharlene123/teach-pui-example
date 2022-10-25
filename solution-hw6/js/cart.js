class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
    }
}

const cart = new Set();

//new from hw 6
function addNewRoll() {
    const newRoll = new Roll(rollType, rollGlazing, packSize, rollPrice);
    cart.add(newRoll);
    return newRoll;
}

//below is taken out for hw 6
/* let rollOne = new Roll('Original', 'Sugar Milk', 1, 2.49);
let rollTwo = new Roll('Walnut', 'Vanilla Milk', 12, 3.49);
let rollThree = new Roll('Raisin', 'Sugar Milk', 3, 2.99);
let rollFour = new Roll('Apple', 'Keep Original', 3, 3.49);

cart.add(rollOne);
cart.add(rollTwo);
cart.add(rollThree);
cart.add(rollFour); */

let priceAdaptation = {
    1:1,
    3:3,
    6:5,
    12:10
}

let glazingPrice = {
    "Keep Original":0,
    "Sugar Milk":0,
    "Vanilla Milk":0.5,
    "Double Chocolate":1.5
}

function calculatePrice(basePrice, glazingPrice, packPrice) {
    return((basePrice + glazingPrice) * packPrice);
}

function createCart(data) {
    for (let cartObject of cart) {
        let cartElement = document.getElementById("ItemOne");
        let docFragment = cartElement.content.cloneNode(true);
        let clone = docFragment.querySelector('.product-one');
        
        const productThumbnail = clone.querySelector(".product-thumbnails");
        productThumbnail.src = "../assets/" + rolls[cartObject.type].imageFile;

        const rollName = clone.querySelector(".rollName");
        rollName.innerText = cartObject.type + " Cinnamon Roll";

        const glazeType = clone.querySelector(".glazeType");
        glazeType.innerText = "Glazing: " + cartObject.glazing;

        const packSize = clone.querySelector(".packSize");
        packSize.innerText = "Pack Size: " + cartObject.size;
        
        finalPrice = calculatePrice(cartObject.basePrice, glazingPrice[cartObject.glazing], priceAdaptation[cartObject.size]); 
        clone.querySelector(".price").innerText = "$" + finalPrice.toFixed(2);
        
        const btnDelete = clone.querySelector('.remove');

        btnDelete.addEventListener('click', () => {
            // HTML Element
            clone.remove();

            // Roll Object created in lines 13-16
            cart.delete(cartObject);
            calculateTotal();
            saveToLocalStorage();
        });

        document.querySelector(".main-cart").appendChild(clone);

    }
    calculateTotal();
}

function calculateTotal(){
    let cartTotal = 0;
    for (let cartObject of cart) {
        finalPrice = calculatePrice(cartObject.basePrice, glazingPrice[cartObject.glazing], priceAdaptation[cartObject.size]); 
        cartTotal = cartTotal + finalPrice;
    }
    document.querySelector(".cartPrice").innerText = "$" + parseFloat(cartTotal).toFixed(2);
}

// HW 6 additions

function retrieveFromLocalStorage() {
    const cartArrayString = localStorage.getItem('cartItems');
    const cartArray = JSON.parse(cartArrayString);
    for (const cartData of cartArray) {
        const newRoll = addNewRoll(cartData.type, cartData.glazing, cartData.size, cartData.basePrice);
        createCart(cart); 
    }
}

if (localStorage.getItem('cartItems') != null) {
    retrieveFromLocalStorage();
}