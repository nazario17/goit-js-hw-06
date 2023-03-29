const counter = document.querySelector('#value')
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

let value = 0;

incrementBtn.addEventListener('click', () => { 
    value += 1
    counter.textContent = value;
})

decrementBtn.addEventListener('click', () => { 
    value -= 1
    counter.textContent = value
})
