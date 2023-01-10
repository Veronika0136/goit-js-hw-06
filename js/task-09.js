function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector('.change-color');
const body = document.querySelector('body');
const span = document.querySelector('.color');

btn.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor(){
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  span.textContent = color;

}

