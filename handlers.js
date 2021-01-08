import { getSum, getSub, getMult, getDiv } from './utils.js';

const inputOne = document.getElementById('input-1');
const inputTwo = document.getElementById('input-2');
const allResults = document.getElementById('results');

export function addClickHandler() {
    const inputValue = inputOne.valueAsNumber;
    const inputValueTwo = inputTwo.valueAsNumber;

    const result = getSum(inputValue, inputValueTwo);

    allResults.textContent = result;
}

export function subClickHandler() {
    const inputValue = inputOne.valueAsNumber;
    const inputValueTwo = inputTwo.valueAsNumber;

    const result = getSub(inputValue, inputValueTwo);

    allResults.textContent = result;
}

export function multClickHandler() {
    const inputValue = inputOne.valueAsNumber;
    const inputValueTwo = inputTwo.valueAsNumber;

    const result = getMult(inputValue, inputValueTwo);

    allResults.textContent = result;
}

export function divClickHandler() {
    const inputValue = inputOne.valueAsNumber;
    const inputValueTwo = inputTwo.valueAsNumber;

    const result = getDiv(inputValue, inputValueTwo);

    allResults.textContent = result;
}