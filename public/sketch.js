function setup() {


    // get height
    var element = document.getElementById('chat-container'),
        style = window.getComputedStyle(element),
        height = style.getPropertyValue('height');


    let myCanvas = createCanvas(600, parseInt(height));
    myCanvas.parent('canvas-container');
    background(220);

}


function draw() {

}

function mouseClicked() {
    socket.emit('clicked',
        {
            mouseX: mouseX,
            mouseY: mouseY,
            size: 20
        })
    // circle(mouseX, mouseY, 20);
    console.log('Sending Clicked')

}
