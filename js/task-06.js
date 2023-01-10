const input = document.querySelector('input');

input.addEventListener('blur', сhangesСolorBorder);

function сhangesСolorBorder (){
    input.value.length === Number(input.getAttribute('data-length'))
    ?input.classList.add("valid")
    :input.classList.add("invalid");
}
