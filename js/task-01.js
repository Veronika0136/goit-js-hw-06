// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const categoriesEl = document.getElementsByClassName('item');
console.log (`Number of categories:`, categoriesEl.length);

const category = [...categoriesEl].map(item => item.firstElementChild.textContent);
const elementsCategory = [...categoriesEl].map(item => item.lastElementChild.children.length);


console.log (`Category:`, category [0]);
console.log (`Elements:`, elementsCategory[0] );
console.log (`Category:`, category [1]);
console.log (`Elements:`, elementsCategory[1])
console.log (`Category:`, category [2]);
console.log (`Elements:`, elementsCategory[2]);


