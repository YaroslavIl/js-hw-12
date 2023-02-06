

let canvas = document.querySelector('canvas');
let content = canvas.getContext('2d');
let arr = [60,71,141,179,349,200,60,78,88,41,51,101,1,229,342,212,89,54,300,];
let numY = 0;
let numX = 0;


function showLine(arr, color) {
    for (let i = 0; i < arr.length; i++){
        content.beginPath();
        content.strokeStyle = (color)
        content.moveTo(numY += 20, 400);
        content.lineWidth = '8';
        content.lineTo(numX += 20, arr[i]);
        content.stroke();
    }
}
showLine(arr, 'red');