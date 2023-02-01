
// ======task-1======
let form = document.querySelector('form');
let widInput = document.querySelector('#width');
let heiInput = document.querySelector('#height');
let elipsInput = document.querySelector('#ellipse');
let rect = document.querySelector('.rect');
let ellipse = document.querySelector('.ellipse');
let btn = document.querySelector('.btn');
let valueWidth = '';
let valueHeight = '';
let valueElipse = '';

btn.addEventListener('click', btnCalc());
widInput.addEventListener('change', calcWidth());
heiInput.addEventListener('change', calcHeight());
elipsInput.addEventListener('change', calcEllipse());

function calcWidth() {
    widInput.addEventListener('change', function () {
        console.log(widInput.value);
        valueWidth = widInput.value;
        if (valueWidth !== '' && valueHeight !== '') {
            btn.disabled = false;
        }
        return valueWidth;
    });
};
function calcHeight(){
    heiInput.addEventListener('change', function () {
        console.log(heiInput.value);
        valueHeight = heiInput.value;
        if (valueWidth !== '' && valueHeight !== '') {
            btn.disabled = false;
        }
        return valueHeight;
    });
    
};
function calcEllipse() {
    elipsInput.addEventListener('change', function () {
        valueElipse = elipsInput.checked;
        console.log(elipsInput.checked);
        return valueElipse;
    });
};

function btnCalc() {
    btn.addEventListener('click', function () {
        if (valueWidth !== '' && valueHeight !== '' && valueElipse == false) {
            rect.setAttribute('width', valueWidth);
            rect.setAttribute('height', valueHeight);
            rect.classList.remove('off');
        }
        else {
            rect.classList.add('off');
        }
    });
    btn.addEventListener('click', function () {
        if (valueWidth !== '' && valueHeight !== '' && valueElipse == true) {
            ellipse.setAttribute('rx', valueWidth/2);
            ellipse.setAttribute('ry', valueHeight/2);
            ellipse.setAttribute('cx', valueWidth/2);
            ellipse.setAttribute('cy', valueHeight/2);
            ellipse.classList.remove('off');
            
        }
        else {
            ellipse.classList.add('off');
        }
    });
};

// ======task-2=====



