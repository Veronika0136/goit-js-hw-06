const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector('#value');

btnDecrement.addEventListener('click', addCounterValue);
console.dir(btnDecrement);
btnIncrement.addEventListener('click', addCounterValue);
console.dir(btnIncrement);
let counterValue = 0;

function addCounterValue (evt){
    const value = Number(evt.currentTarget.textContent);
    counterValue += value ;
    counter.textContent = counterValue;
}    

