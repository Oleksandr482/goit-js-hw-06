const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

textEl.style.fontSize = '56px';

inputEl.addEventListener('input', onRangeInput);

function onRangeInput(event) {
    let fontSize = event.currentTarget.value;
    textEl.style.fontSize = `${fontSize}px`;
}