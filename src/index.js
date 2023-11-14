import './index.html';
import './index.scss';
import code from './img/about-2.jpg'
import { mult, sum } from './modules/calc';


const main = document.querySelector('.main');
const image = document.createElement('img');
image.src = code
main.append(image)


console.log(mult(3, 4));
console.log(sum(3, 4));