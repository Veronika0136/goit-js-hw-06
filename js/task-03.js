const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ul = document.querySelector('.gallery');
// console.dir (ul);

const list = images.map(({url,alt}) => 
`<li><img src="${url}" alt="${alt}" height = 450 width = 700  ></li>`).join('');
// console.log (list);

ul.insertAdjacentHTML('beforeend', list);

ul.style.display = "flex";
ul.style.flexWrap = "wrap";
ul.style.justifyContent = "space-around";
ul.style.gap = "50px";

