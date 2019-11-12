
let canvas = document.getElementById('myCanvas');
let  ctx = canvas.getContext('2d');
canvas.width = 512;
    canvas.height = 512;
  let map = [
    ["#00BCD4", "#FFEB3B","#FFEB3B","#00BCD4"],
    ["#FFEB3B", "#FFC107","#FFC107","#FFEB3B"],
    ["#FFEB3B", "#FFC107","#FFC107","#FFEB3B"],
    ["#00BCD4", "#FFEB3B","#FFEB3B","#00BCD4"],
  ];
  function drawPix () {
 /*for (let column = 0; column < 4; column++) {
     for (let row = 0; row < 4; row++) {
         ctx.drawImage(ctx,map[row][column]*128, 0, 128, 128, column*128, row*128, 128, 128); }
 } */
 ctx.fillStyle = "#00BCD4";
 ctx.fillRect(0, 0, 128, 128); 

 ctx.fillStyle = "#FFEB3B";
 ctx.fillRect(0, 128, 128, 256);
 
 ctx.fillStyle = "#FFEB3B";
 ctx.fillRect(128, 0, 256, 128);

 ctx.fillStyle = "#00BCD4";
 ctx.fillRect(384, 0, 128, 128); 

 ctx.fillStyle = "#FFEB3B";
 ctx.fillRect(384, 128, 128, 256);

 ctx.fillStyle = "#FFEB3B";
 ctx.fillRect(128, 384, 256, 128);
 
 ctx.fillStyle = "#00BCD4";
 ctx.fillRect(0, 384, 128, 128); 

 ctx.fillStyle = "#00BCD4";
 ctx.fillRect(384, 384, 128, 128); 

 ctx.fillStyle = "#FFC107";
 ctx.fillRect(128, 128, 256, 256); 


}
drawPix();
