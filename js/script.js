const display = document.getElementById('display-text')

let count = 0;
display.innerText = count;

const increment = () => {
    count++;
    display.innerText = count;
}

const decrement = () => {
    count--;
    display.innerHTML = count
}

const incBtn = document.getElementById('inc-btn')
incBtn.addEventListener('click', increment)

const decBtn = document.getElementById('dec-btn')
decBtn.addEventListener('click', decrement)