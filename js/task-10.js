function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsEl = document.querySelector('#controls');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

boxesEl.style.display = 'flex';
boxesEl.style.flexWrap = 'wrap';
boxesEl.style.alignItems = 'center';

createBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const amount = controlsEl.firstElementChild.value;
  createBoxes(amount);
  
})

destroyBtn.addEventListener('click', () => destroyBoxes())

function createBoxes(amount) {
  
  const arrOfColors = [];

  let width = 20; 
  for (let i = 0; i < amount; i += 1) {
   let hex = getRandomHexColor();
    width += 10;
    arrOfColors.push({hex, width})
  }
// console.log(arrOfColors);
  const markup = arrOfColors.map(({hex, width}) => {
    return `<div 
    style="background-color: ${hex}; 
    width: ${width}px; 
    height: ${width}px; 
    border: 5px solid #000000; 
    margin: 5px;">
    </div>`
  }).join('');
  boxesEl.insertAdjacentHTML('afterbegin', markup);
  // console.log(markup);
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
}