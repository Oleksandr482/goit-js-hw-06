const categoriesEl = document.querySelector('#categories');
console.log('Number of categories:', categoriesEl.children.length);

const categoryEl = categoriesEl.querySelectorAll('.item');

categoryEl.forEach((item) => {
    console.log('')
    console.log('Category:', item.firstElementChild.textContent);
    console.log('Elements:', item.lastElementChild.children.length);
})