function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorButton = document.querySelector('.change-color');
const colorValue = document.querySelector('.color');
const bodyEl = document.querySelector('body');

colorValue.textContent = '#ffffff';

changeColorButton.addEventListener('click', onCangeColorButton);

function onCangeColorButton(event) {
  event.preventDefault();
  const newColor = getRandomHexColor();

  bodyEl.style.backgroundColor = newColor;
  colorValue.innerHTML = `${newColor}`;
  
  console.log(newColor);
}