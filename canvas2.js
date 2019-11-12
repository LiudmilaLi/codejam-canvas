
  
  let canvas2 = document.getElementsById('myCanvas2');
  let  ctx2 = canvas2.getContext('2d');
    canvas2.width = 512;
    canvas2.height = 512;
    let img=new Image();
    img.onload=start;
    img.src="./assets/image.png";
    function start(){
      ctx2.drawImage(img, 0, 0, canvas2.width, canvas2.height);
}
