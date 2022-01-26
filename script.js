const gridContainer = document.querySelector('.grid-container');

for (let i = 1; i <= 16; i++) {
    let rowDiv = document.createElement('div');
    for (let j = 1; j <= 16; j++) {
        let columnDiv = document.createElement('div');
        columnDiv.classList.add('block')
        rowDiv.appendChild(columnDiv);
    }
    rowDiv.classList.add('row');
    gridContainer.appendChild(rowDiv);
}

let blocks = document.querySelectorAll('.block');
let penEnabled = true;

const colorPicker = document.querySelector('.color-picker');

let color = colorPicker.getAttribute('value');

document.addEventListener('keydown', e => {if (e.code === 'KeyF') penEnabled = !penEnabled;});

colorPicker.addEventListener('change', changeColor);

function changeColor () {
    color = colorPicker.value;
    console.log(`Changed color to ${color}!`);
}

blocks.forEach(block => block.addEventListener('mouseover', handleBlockHover));

function handleBlockHover (e) {
    if (penEnabled) {
        this.style.backgroundColor = color;
        console.log(`Attempted to change color to ${color}`);
    }
}