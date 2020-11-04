import '../src/css/styles.css';

const btnStart = document.querySelector('[data-action="start"]');
const btnStop = document.querySelector('[data-action="stop"]');
const body = document.querySelector('body');
let timerId = null;
let isActive = false;

btnStart.addEventListener('click', onBtnStart);
btnStop.addEventListener('click', onBtnStop);

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548',];


function onBtnStart() {
if (isActive) {
    return;
};

isActive = true;

timerId = setInterval(() => {
const min = 0;
const max = colors.length - 1;
let i = randomIntegerFromInterval(min, max);
body.style.backgroundColor = colors[i];
}, 1000);};

function onBtnStop() {
    clearInterval(timerId);
    isActive = false;
}
