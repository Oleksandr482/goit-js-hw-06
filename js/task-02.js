const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientItems = ingredients.map(ingredient => {
  const ingredientEl = document.createElement('li');
  ingredientEl.classList.add('item');
  ingredientEl.textContent = ingredient;
  return ingredientEl;
})

const ingredientsEl = document.querySelector('#ingredients');
ingredientsEl.append(...ingredientItems);


console.log(ingredientsEl)