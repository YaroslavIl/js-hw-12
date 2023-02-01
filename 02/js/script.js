

let btn = document.querySelector('button');
let input = document.querySelector('input');
let svg = '';
let circle = '';
let valueInput = 0;
console.log(input);

input.addEventListener('change', function () {
    valueInput = input.value;
    if (valueInput > 0) {
        btn.disabled = false;
    }
});

btn.addEventListener('click', function () {
    svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    document.body.appendChild(svg);
    circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    svg.appendChild(circle);
    svg.setAttribute("width", valueInput);
    svg.setAttribute("height", valueInput);
    circle.setAttribute("stroke", "green");
    circle.setAttribute("cx", valueInput / 2);
    circle.setAttribute("cy", valueInput / 2);
    circle.setAttribute("r", valueInput / 2);
    circle.addEventListener('click', function () {
        circle.remove();
    });
});

