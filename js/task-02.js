const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


function liItem (array){
  const list =[];

  array.map(ingredient => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  list.push(li);
  }) 
  
  const ul = document.querySelector('#ingredients');
  ul.append(...list);
}

liItem(ingredients);






