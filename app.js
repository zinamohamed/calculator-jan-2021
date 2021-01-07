var inputOne = document.getElementById('input-1');
var inputTwo = document.getElementById('input-2');
var addButton = document.getElementById('add-button');
var subButton = document.getElementById('sub-button');
var multButton = document.getElementById('mult-button');
var divButton = document.getElementById('div-button');
var allResults = document.getElementById('results');



addButton.addEventListener('click', () => {
    const number1 = Number(inputOne.value);
    const number2 = Number(inputTwo.value);
    const result = number1 + number2;

    allResults.textContent = result;
}); 

subButton.addEventListener('click', () => {
    const number1 = Number(inputOne.value);
    const number2 = Number(inputTwo.value);
    const result = number1 - number2;

    allResults.textContent = result;
}); 

multButton.addEventListener('click', () => {
    const number1 = Number(inputOne.value);
    const number2 = Number(inputTwo.value);
    const result = number1 * number2;

    allResults.textContent = result;
}); 

divButton.addEventListener('click', () => {
    const number1 = Number(inputOne.value);
    const number2 = Number(inputTwo.value);
    const result = number1 / number2;

    allResults.textContent = result;
});
 




