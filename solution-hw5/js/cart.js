class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
    }
}

cart = [];

let rollOne = new Roll('Original', 'Sugar Milk', 1, 2.49);
let rollTwo = new Roll('Walnut', 'Vanilla Milk', 12, 3.49);
let rollThree = new Roll('Raisin', 'Sugar Milk', 3, 2.99);
let rollFour = new Roll('Apple', 'Keep Original', 3, 3.49);

cart.push(rollOne);
cart.push(rollTwo);
cart.push(rollThree);
cart.push(rollFour);

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
    for(let i=0; i<cart.length; i++){
        let cartItem = document.getElementsByTagName("template")[0];
        let cartItemClone = cartItem.content.cloneNode(true);
        cartItemClone.querySelector(".rollName").innerText = cart[i].type + " Cinnamon Roll";
        cartItemClone.querySelector(".glazeType").innerText = "Glazing: " + cart[i].glazing;
        cartItemClone.querySelector(".packSize").innerText = "Pack Size: " + cart[i].size;
        finalPrice = calculatePrice(cart[i].basePrice, glazingPrice[cart[i].glazing], priceAdaptation[cart[i].size]); 
        cartItemClone.querySelector(".price").innerText = "$" + finalPrice.toFixed(2)
        
        document.querySelector(".main-cart").appendChild(cartItemClone);
    }
}

createCart(cart)
console.log(cart)

    // const btnDelete = cartItem.element.querySelector('.remove');
    // console.log(btnDelete);
    // btnDelete.addEventListener('click', () => {
    // deleteNote(cartItem);
    // });

//calculate total cart price
//change imgs
//add remove function

// function deleteItem(cartItem) {
//     // remove the notecard DOM object from the UI
//     cartItem.element.remove();
//     // remove the actual Notecard object from our set of notecards
//     cart.delete(cartItem);
//   }
