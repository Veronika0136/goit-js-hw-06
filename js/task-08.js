const form = document.querySelector('.login-form');
form.addEventListener('submit', onSubmit);

function onSubmit(evt){
    evt.preventDefault();
    const formElements = evt.currentTarget.elements;
    if (formElements.password.value === ''|| formElements.email.value === ''){
        alert (`Не все поля заполнены!`)
    } else {
    const formData = new FormData(evt.currentTarget);
       formData.forEach((element, value) => {
       console.log(value, element)
       const btn = evt.currentTarget.elements[2];
       btn.setAttribute('type', 'reset');
       });
    }
}
