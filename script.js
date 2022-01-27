const gridContainer = document.querySelector('.grid-container');
let blocks;

function createGrid(rows, columns) {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }

    for (let i = 1; i <= rows; i++) {
        let rowDiv = document.createElement('div');
        for (let j = 1; j <= columns; j++) {
            let columnDiv = document.createElement('div');
            columnDiv.classList.add('block')
            rowDiv.appendChild(columnDiv);
        }
        rowDiv.classList.add('row');
        gridContainer.appendChild(rowDiv);
    }
    blocks = document.querySelectorAll('.block');
    blocks.forEach(block => block.addEventListener('mouseover', handleBlockHover));
}


let rowCount = 16;
createGrid(rowCount, rowCount);

let penEnabled = true;

const colorPicker = document.querySelector('.color-picker');

let color = colorPicker.getAttribute('value');

document.addEventListener('keydown', e => {
    if (e.code === 'KeyF') {
    penEnabled = !penEnabled;
    console.log(`Pen enabled changed to ${penEnabled}`);
    }
});

colorPicker.addEventListener('input', changeColor);

function changeColor () {
    color = colorPicker.value;
    console.log(`Changed pen color to ${color}`);
}

function handleBlockHover (e) {
    if (penEnabled) {
        if (mode === 'rainbow') blockColor = getRandomColor();
        else if (mode === 'eraser') blockColor = 'transparent';
        else blockColor = color;
        this.style.backgroundColor = blockColor;
        let rowNumber = getElementIndex(this);
        let columnNumber = getElementIndex(this.parentNode);
        console.log(`Changed (${rowNumber + 1}, ${columnNumber + 1}) to ${blockColor}`);
    }
}

function getElementIndex (node) {
    let nodes = Array.from(node.parentNode.children);
    return nodes.indexOf(node);
}

const slider = document.querySelector('.slider');
const sliderValueContainer = document.querySelector('.slider-value');

slider.addEventListener('input', () => {
    rowCount = slider.value;
    sliderValueContainer.textContent = `${rowCount} x ${rowCount}`;
});

slider.addEventListener('change', () => createGrid(rowCount, rowCount));

const colorModeButton = document.querySelector('.color-button');
const rainbowModeButton = document.querySelector('.rainbow-button');
const eraserModeButton = document.querySelector('.eraser-button');
let mode = 'color';

function selectButton (button) {
    Array.from(button.parentNode.parentNode.children).forEach(node => node.querySelector('button').classList.remove('selected'));
    button.classList.add('selected');
}

colorModeButton.addEventListener('click', function () {
    mode = 'color';

    selectButton(this);
});

rainbowModeButton.addEventListener('click', function () {
    mode = 'rainbow';

    selectButton(this);
});

eraserModeButton.addEventListener('click', function () {
    mode = 'eraser';

    selectButton(this);
});

const clearButton = document.querySelector('.clear-button');

clearButton.addEventListener('click', () => {
    createGrid(rowCount, rowCount)
    selectButton(colorModeButton);
});

function getRandomColor() {
    let letters = "0123456789ABCDEF"
    let color = "#"
    for (let i = 1; i <= 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}