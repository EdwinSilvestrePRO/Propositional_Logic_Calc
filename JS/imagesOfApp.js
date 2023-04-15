export function getImagesOfApp () {
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = 300;
    const {width, height} = canvas;
    
    let context = canvas.getContext("2d");
    context.beginPath();
    context.fillStyle = "#444";
    context.fillRect(0, 0, width, height);
    context.lineWidth = 10;
    context.strokeStyle = "cyan";
    context.beginPath();
    context.moveTo(11, 88);
    context.quadraticCurveTo(45, 14, 75, 60);
    context.bezierCurveTo(-56, 393, 251, 321, 277, 82);
    context.quadraticCurveTo(287, 30, 246, 54);
    context.stroke();
    context.closePath();
    
    context = canvas.getContext("2d");
    context.lineWidth = 8;
    context.lineJoin = "round";
    context.beginPath();
    context.moveTo(49, 222);
    context.lineTo(143, 260);
    context.lineTo(195, 180);
    context.lineTo(87, 141);
    context.lineTo(49, 223);
    context.moveTo(251, 146);
    context.lineTo(194, 181);
    context.moveTo(86, 142);
    context.lineTo(164, 100);
    context.fillStyle = "yellow";
    context.strokeStyle = "cyan";
    context.fill();
    context.stroke();
    context.closePath();
    const logoOfApp = canvas.toDataURL("png");
    let imgData = context.getImageData(0, 90, 300, 210);
    context.clearRect(0, 0, width, height);
    canvas.width = 300;
    canvas.height = 210;
    context.putImageData(imgData, 0, 0);
    const icon = canvas.toDataURL("png");
    return {
        logoOfApp,
        icon
    }
}
