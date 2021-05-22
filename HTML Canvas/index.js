console.log("File atteched");

let canvas=document.querySelector("#draw");
let ctx=canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
ctx.strokeStyle='#BADA55'
ctx.lineWidth=100;
ctx.lineJoin='round';
ctx.lineCap='round';

let isDrawing=false;
let lastX=0;
let lastY=0;
let hue=0;
let direction=true;

function draw(e){
    if(!isDrawing) return;
    // console.log(e);


    ctx.strokeStyle=`hsl(${hue},100%,50%)`
    ctx.beginPath();

    // Start from
    ctx.moveTo(lastX,lastY);

    // Go to
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];

    // Chnage color
    hue++;
    if (hue >= 360) {
      hue = 0;
    }

    //pointer width
     if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }

  if(direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }

}
canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
  });

canvas.addEventListener('mouseup',()=>isDrawing=false);
canvas.addEventListener('mouseout',()=>isDrawing=false);

