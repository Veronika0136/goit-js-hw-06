const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener('input', rewriteHeader);

function rewriteHeader (evt){
    if(!evt.currentTarget.value){
        span.textContent = 'Anonymous';  
    } else {
    span.textContent = evt.currentTarget.value;}
}