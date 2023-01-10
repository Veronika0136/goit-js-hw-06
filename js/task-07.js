const input =document.querySelector('#font-size-control');
const span = document.querySelector('#text');

input.addEventListener('input', сhangesTextSize);

function сhangesTextSize (evt){
   let value = evt.currentTarget.value;
   span.style.fontSize = `${value}px`;
}