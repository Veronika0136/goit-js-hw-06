const form = document.querySelector('.login-form');
form.addEventListener('submit', onSubmit);

function onSubmit(evt){
    evt.preventDefault();
    const formElements = evt.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;

    if (password === ''|| email === ''){
        alert (`Не все поля заполнены!`)
    } else {
        const formResult ={email,password,}
        console.log (formResult);
        const btn = evt.currentTarget.elements[2];
        btn.setAttribute('type', 'reset');





    // const formData = new FormData(evt.currentTarget);
    //    formData.forEach((element, value) => {
    //    console.log({value, element})
    //    const btn = evt.currentTarget.elements[2];
    //    btn.setAttribute('type', 'reset');
    //    });
    }
}
