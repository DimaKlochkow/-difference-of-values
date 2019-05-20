// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var value1 = prompt('Введите первое значение');
var value2 = prompt('Введите второе значение');
if (value1 == value2){
    console.log('Значения равны');
}else{
    console.log('Значения не равны');
}