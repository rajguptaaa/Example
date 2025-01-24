// Select an element by ID
const title = document.getElementById('title');

// Select elements by class name
const items = document.getElementsByClassName('item');

// Select elements using query selectors
const firstItem = document.querySelector('.item');
const allItems = document.querySelectorAll('.item');



title.style.color = 'blue';
title.style.fontSize = '24px';
title.style.backgroundColor = 'lightgray';



const input = document.querySelector('input');
const button = document.querySelector('button');
button.addEventListener('click', () => {
  alert(`Input value: ${input.value}`);
});
