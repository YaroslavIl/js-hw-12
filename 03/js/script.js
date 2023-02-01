

let canvas = document.querySelector('canvas');
let content = canvas.getContext('2d');

function circle() {
    content.arc(200, 200, 100, 0, Math.PI * 2, true);
    content.stroke();
}

circle();

function text(textValue) {
    content.font = '25px Arial';
    content.strokeText(textValue, 150, 200);
}
text('Task-12');