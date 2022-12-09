let finishedBurrito = []

function runAnimation(button){
    //get innertext of p tag of the button
    let key = button.querySelector('p').innerText;
    //get the falling div
    let grabDiv = document.getElementById("falling");
    console.log(grabDiv)
    //create an img element
    let newIngredient = document.createElement('img');
    //append newly created img element to the div
    grabDiv.appendChild(newIngredient);
    grabDiv.style.position = "absolute"
    newIngredient.className = "fallingImg";
    newIngredient.src = '../assets/' + ingredients[key].imageFile;
    newIngredient.style.width = "400px"
    newIngredient.style.position = "relative"
    //change animation state to running
    document.getElementById("falling").style.animationPlayState = "running";
    //push selected ingredient (and its data) to finishedBurrito array
    finishedBurrito.push(ingredients[key]);
    console.log(finishedBurrito)
}

function resetAnimation(){
    document.getElementById("falling").style.animationPlayState = "paused";
}

//save everything that is in finishedBurrito array to session storage, onclick
function saveToSessionStorage(){
    const arrayString = JSON.stringify(finishedBurrito);
    sessionStorage.setItem('burritoItems', arrayString);
    sumCarbonDioxide();
}

const parsedArray = JSON.parse(sessionStorage.getItem('burritoItems'));

let carbonDioxide = 0

function sumCarbonDioxide(){
    for (let i = 0; i < parsedArray.length; i++) {
        let ingredientCO2 = parsedArray[i].co2;
        carbonDioxide += ingredientCO2;
    }
    console.log(carbonDioxide)
}
sumCarbonDioxide();

let jS = document.querySelector('.p2');
jS.innerText = "Used " + carbonDioxide + "g of Carbon Dioxide"