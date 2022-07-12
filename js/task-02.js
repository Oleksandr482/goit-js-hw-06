const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientItems = [];
for (let ingredient of ingredients) {
  const ingredientEl = document.createElement('li');
  ingredientEl.classList.add('item');
  ingredientEl.textContent = ingredient;
  ingredientItems.push(ingredientEl);
}

const ingredientsEl = document.querySelector('#ingredients');
ingredientsEl.append(...ingredientItems);


console.log(ingredientsEl)