const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addButton = document.getElementById('add-button');
const addResults = document.getElementById('add-results');



addButton.addEventListener('click', () => {
    const number1 = Number(addInput1.value);
    const number2 = Number(addInput2.value);
    const result = number1 + number2;

    addResults.textContent = result;
}); 


const subInput1 = document.getElementById('sub-input-1');
const subInput2 = document.getElementById('sub-input-2');
const subButton = document.getElementById('sub-button');
const subResults = document.getElementById('sub-results');



subButton.addEventListener('click', () => {
    const number3 = Number(subInput1.value);
    const number4 = Number(subInput2.value);
    const result = number3 - number4;

    subResults.textContent = result;
}); 


const multInput1 = document.getElementById('mult-input-1');
const multInput2 = document.getElementById('mult-input-2');
const multButton = document.getElementById('mult-button');
const multResults = document.getElementById('mult-results');



multButton.addEventListener('click', () => {
    const number5 = Number(multInput1.value);
    const number6 = Number(multInput2.value);
    const result = number5 * number6;

    multResults.textContent = result;
}); 


const divInput1 = document.getElementById('div-input-1');
const divInput2 = document.getElementById('div-input-2');
const divButton = document.getElementById('div-button');
const divResults = document.getElementById('div-results');



divButton.addEventListener('click', () => {
    const number7 = Number(divInput1.value);
    const number8 = Number(divInput2.value);
    const result = number7 / number8;

    divResults.textContent = result;

}); 

