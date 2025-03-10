'use strict';

const canvas = document.querySelector('#draw');

const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#bada55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;
// ctx.globalCompositeOperation = 'lighten';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

const draw = e => {
  // Stop the function from running when they are not moused down
  if (!isDrawing) return;

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

  ctx.beginPath();

  // Start from
  ctx.moveTo(lastX, lastY);

  // Go to
  ctx.lineTo(e.offsetX, e.offsetY);

  ctx.stroke();

  [lastX, lastY] = [e.offsetX, e.offsetY];

  hue++;
  if (hue >= 360) hue = 0;

  if (ctx.lineWidth >= 250 || ctx.lineWidth <= 33) {
    direction = !direction;
  }
  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
};

canvas.addEventListener('mousemove', draw);

canvas.addEventListener('mousedown', e => {
  isDrawing = true;

  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mouseup', () => (isDrawing = false));
// canvas.addEventListener('mouseout', () => (isDrawing = false));
