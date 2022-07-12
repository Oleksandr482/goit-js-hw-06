const categoriesEl = document.querySelector('#categories');
console.log('Number of categories:', categoriesEl.children.length);

const categoryEl = categoriesEl.querySelectorAll('.item');

for (let i = 0; i < categoryEl.length; i += 1) {
console.log('')
console.log('Category:', categoryEl[i].children[0].textContent);
console.log('Elements:', categoryEl[i].children[1].children.length);
}