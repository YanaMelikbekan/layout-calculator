const startBtn = document.getElementById('start');
const resetBtn = document.getElementById('reset')
const screen = document.querySelector('.screen');
const plusBtn = document.querySelector('.screen-btn');
const itemsPercent = document.querySelectorAll('.other-items.percent');
const numberPercent = document.querySelectorAll('.other-items.number');
const range = document.querySelector('.main-controls__range > input');
const rangeValue = document.querySelector('.range-value');


function changingTitle() {
    const title = document.querySelector('.title');
    document.title = title.textContent;
}
changingTitle();

function costLayout() {
    const select = screen.querySelector('select').value;
    const input = screen.querySelector('input').value;
    const res = select * input
    const totalField = document.querySelector('#total');
    totalField.value = res

}

function numberOfScreens() {
    const input = screen.querySelector('input').value;
    const totalCountField = document.querySelector('#total-count');
    totalCountField.value = input
}

function changingValue() {
    const range = document.querySelector('.rollback input[type=range]');
    const rangeNum = document.querySelector('.range-value');
    rangeNum.textContent = `${range.value}%`
}

plusBtn.addEventListener('click', () => {
    const newScreen = screen.cloneNode(true);
    newScreen.querySelector('input').value = '';
    plusBtn.insertAdjacentElement('beforebegin', newScreen);
})

function result() {
    costLayout()
    numberOfScreens()
    changingValue()
}
startBtn.addEventListener('click', result);



