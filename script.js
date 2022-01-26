const container = document.querySelector('.container');

for (let i = 1; i <= 16; i++) {
    let rowDiv = document.createElement('div');
    for (let j = 1; j <= 16; j++) {
        let columnDiv = document.createElement('div');
        columnDiv.classList.add('block')
        rowDiv.appendChild(columnDiv);
    }
    rowDiv.classList.add('row');
    container.appendChild(rowDiv);
}

let blocks = document.querySelectorAll('.block');

blocks.forEach(block => block.addEventListener('mouseover', handleBlockHover));

function handleBlockHover (e) {
    this.style.backgroundColor = "blue";
}