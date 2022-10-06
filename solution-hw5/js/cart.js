class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
    }
}
// const cart = [];
const cart = new Set();

let rollOne = new Roll('Original', 'Sugar Milk', 1, 2.49);
let rollTwo = new Roll('Walnut', 'Vanilla Milk', 12, 3.49);
let rollThree = new Roll('Raisin', 'Sugar Milk', 3, 2.99);
let rollFour = new Roll('Apple', 'Keep Original', 3, 3.49);

// arrays
// cart.push(rollOne);
// cart.push(rollTwo);
// cart.push(rollThree);
// cart.push(rollFour);

// set
cart.add(rollOne);
cart.add(rollTwo);
cart.add(rollThree);
cart.add(rollFour);

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
    // for(let i=0; i<cart.length; i++){
    for (let cartObject of cart) {
        let cartElement = document.getElementById("ItemOne");
        let docFragment = cartElement.content.cloneNode(true);
        let clone = docFragment.querySelector('.product-one');

        // ARRAY SYNTAX
        // clone.querySelector(".product-thumbnails").src = "../assets/" + cart[i].type + "-cinnamon-roll.jpg";
        // clone.querySelector(".rollName").innerText = cart[i].type + " Cinnamon Roll";
        // clone.querySelector(".glazeType").innerText = "Glazing: " + cart[i].glazing;
        // clone.querySelector(".packSize").innerText = "Pack Size: " + cart[i].size;
        // finalPrice = calculatePrice(cart[i].basePrice, glazingPrice[cart[i].glazing], priceAdaptation[cart[i].size]); 
        // clone.querySelector(".price").innerText = "$" + finalPrice.toFixed(2);
        
        clone.querySelector(".product-thumbnails").src = "../assets/" + rolls[cartObject.type].imageFile;
        clone.querySelector(".rollName").innerText = cartObject.type + " Cinnamon Roll";
        clone.querySelector(".glazeType").innerText = "Glazing: " + cartObject.glazing;
        clone.querySelector(".packSize").innerText = "Pack Size: " + cartObject.size;
        finalPrice = calculatePrice(cartObject.basePrice, glazingPrice[cartObject.glazing], priceAdaptation[cartObject.size]); 
        // console.log(finalPrice);
        clone.querySelector(".price").innerText = "$" + finalPrice.toFixed(2);
        // cartTotal = cartTotal + finalPrice;
        // document.querySelector(".cartPrice").innerText = "$" + parseFloat(cartTotal).toFixed(2);
        
        const btnDelete = clone.querySelector('.remove');

        btnDelete.addEventListener('click', () => {
            // HTML Element
            clone.remove();

            // Roll Object created in lines 13-16
            cart.delete(cartObject);
            calculateTotal();

        });

        document.querySelector(".main-cart").appendChild(clone);

        
        // console.log(clone);
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


createCart(cart);

// function deleteItem(clone) {
//     clone.remove();
//     cart.delete(clone);
//   }