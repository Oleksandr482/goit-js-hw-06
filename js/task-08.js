const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onLoginFormSubmit);
const formElements = formEl.elements;
function onLoginFormSubmit(event) {
    event.preventDefault();
    
    const email = formElements.email.value;
    const password = formElements.password.value;

    if (formElements.email.value === '' || formElements.password.value === '') {
       return alert('All fields must be filled!!!');
    }
    
    console.log({ email, password}); 
    formEl.reset();
}


