export default function LogoTipo(){
const lienzo = document.createElement('canvas');

lienzo.width = '300';
lienzo.height = "260";

lienzo.style.background = 'black';
lienzo.style.padding = '8px';
let canvas = lienzo.getContext('2d');
canvas.strokeStyle = '#2B2B2B';
canvas.fillStyle = '#000000';
canvas.lineWidth = 5;
canvas.strokeRect(8, 30, 288, 200);
canvas.fillRect(8, 30, 288, 200);

canvas.beginPath();
  canvas.fillStyle='#FFF754';
canvas.font = '28px courier new';
canvas.fillText('{:Codevelp:}', 50, 100);
canvas.fillStyle='#B500FB';

canvas.fillText('(</>)', 143, 140);
canvas.fillText('(</>)', 83, 140);
canvas.fillText('[XOR ^ XOR]', 60, 180);
canvas.fill();
canvas.closePath();



canvas.beginPath();
canvas.lineJoin = 'round';
canvas.strokeStyle = '#B500FB';
canvas.moveTo(30, 40);
canvas.bezierCurveTo(80, 66, 225, 66, 270, 40);
canvas.stroke();
canvas.closePath();



canvas.beginPath();
canvas.lineJoin = 'round';
canvas.strokeStyle = '#B500FB';
canvas.moveTo(30, 40);
canvas.bezierCurveTo(80, 86, 225, 86, 270, 40);
canvas.stroke();
canvas.closePath();




canvas.beginPath();
canvas.lineJoin = 'round';
canvas.strokeStyle = '#B500FB';
canvas.moveTo(30, 40);
canvas.bezierCurveTo(80, 46, 225, 46, 270, 40);
canvas.stroke();
canvas.closePath();




canvas.beginPath();
canvas.lineJoin = 'round';
canvas.lineWidth = 8;
canvas.strokeStyle = '#B500FB';
canvas.moveTo(40, 200);
canvas.lineTo(80, 200);
canvas.stroke();
canvas.closePath();


canvas.beginPath();
canvas.lineJoin = 'round';
canvas.lineWidth = 8;
canvas.strokeStyle = '#B500FB';
canvas.moveTo(85, 200);
canvas.lineTo(130, 200);
canvas.stroke();
canvas.closePath();


canvas.beginPath();
canvas.lineJoin = 'round';
canvas.lineWidth = 8;
canvas.strokeStyle = '#B500FB';
canvas.moveTo(135, 200);
canvas.lineTo(175, 200);
canvas.stroke();
canvas.closePath();


//$$$$$$$$$$$$"""$"
canvas.beginPath();
canvas.lineJoin = 'round';
canvas.lineWidth = 8;
canvas.strokeStyle = '#B500FB';
canvas.moveTo(180, 200);
canvas.lineTo(220, 200);
canvas.stroke();
canvas.closePath();

//$$$$$$$$$$$$"""$"
canvas.beginPath();
canvas.lineJoin = 'round';
canvas.lineWidth = 8;
canvas.strokeStyle = '#B500FB';
canvas.moveTo(225, 200);
canvas.lineTo(268, 200);
canvas.stroke();
canvas.closePath();

return lienzo.toDataURL();

}


