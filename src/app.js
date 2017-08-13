import './styles/index.scss';

const svgSample = 'http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg';

const root = document.querySelector('#root');
root.innerHTML = 'foo';

const img = document.createElement('img');
img.src = svgSample;
img.classList.add('sample-svg');
root.appendChild(img);
