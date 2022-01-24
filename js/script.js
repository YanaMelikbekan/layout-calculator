const startBtn = document.getElementById('start');
const resetBtn = document.getElementById('reset')
const screen = document.querySelector('.screen');
const plusBtn = document.querySelector('.screen-btn');
const itemsPercent = document.querySelectorAll('.other-items.percent');
const numberPercent = document.querySelectorAll('.other-items.number');


function costLayout() {

    screens.forEach(screen => {
        const select = screen.querySelector('select').value;
        const input = screen.querySelector('input').value;
        const res = select * input
        console.log(res)
    });

}
function result() {
    costLayout()

}
startBtn.addEventListener('click', result);

function changingValue() {
    const range = document.querySelector('.rollback input[type=range]');
    const rangeNum = document.querySelector('.range-value');
    rangeNum.textContent = range.value + '%'
}
plusBtn.addEventListener('click', () => {
    const newScreen = screen.cloneNode(true);
    newScreen.querySelector('input').value = '';
    plusBtn.insertAdjacentElement('beforebegin', newScreen);
})




