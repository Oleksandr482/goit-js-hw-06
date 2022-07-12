const inputEl = document.querySelector('#validation-input');

const onInputBlur = event => {
    event.currentTarget.value.length === Number(inputEl.dataset.length) ?
        (inputEl.classList.add('valid'),
        inputEl.classList.remove('invalid')) :
        (inputEl.classList.add('invalid'),
        inputEl.classList.remove('valid'));
}

inputEl.addEventListener('blur', onInputBlur);