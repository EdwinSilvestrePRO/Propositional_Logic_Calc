export function getImagesOfApp () {
    const canvas = document.createElement('canvas');
    canvas.width = 200;
    canvas.height = 150;
    const {width, height} = canvas;
    
    let context = canvas.getContext("2d");
    let content = "(~)";
    context.fillStyle = "balck";
    context.fillRect(0, 0, width, height);
    context.font = "120px normal bolder";
    let measure = context.measureText(content);
    context.fillStyle = "yellow";
    context.fillText(content, (width-measure.width)/2, height/2+25);

    const logoOfApp = canvas.toDataURL("png");
    const icon = logoOfApp;
    return {
        logoOfApp,
        icon
    }
}