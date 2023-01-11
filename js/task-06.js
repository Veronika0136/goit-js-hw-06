const input = document.querySelector('input');

input.addEventListener('blur', сhangesСolorBorder);

function сhangesСolorBorder (){
    if(input.value.length === Number(input.getAttribute('data-length'))){
    input.classList.add("valid");
    input.classList.remove("invalid");
    
}
    else {
    input.classList.add("invalid");
    input.classList.remove("valid");
}
}
