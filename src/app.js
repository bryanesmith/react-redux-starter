import './styles/index.scss';

const svgSample = 'http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg';

// Adding text
const root = document.querySelector('#root');
root.innerHTML = 'foo';

// Adding SVG
const img = document.createElement('img');
img.src = svgSample;
img.classList.add('sample-svg');
root.appendChild(img);
