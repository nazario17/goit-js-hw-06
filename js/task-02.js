const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const li = [...ingredients].map(element => { 
  const item = document.createElement('li')
  item.textContent = element
  item.classList.add('item')
  return item;
})

const ul = document.querySelector("#ingredients");
ul.append(...li);