const sel = document.querySelector('#select');
let div = document.querySelector('#figure');
sel.addEventListener('change', () => {
    let value = sel.value;
    div.setAttribute('class', value)
});


const col = document.querySelector('#color');
const but = document.querySelector('#changeColor');
but.addEventListener('click', () => {
    let value = col.value;
    div.style.background = value;
});