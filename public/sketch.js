const colorpicker = document.getElementById('colorpicker')


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
    socket.emit('clicked', {
        mouseX: mouseX,
        mouseY: mouseY,
        color: colorpicker.value
    })
    // console.log(colorpicker.value)

    // circle(mouseX, mouseY, 20);
    // console.log('Sending Clicked')
}

function mouseDragged() {
    // console.log("the mouse is being dragged")
    socket.emit('clicked', {
        mouseX: mouseX,
        mouseY: mouseY,
        color: colorpicker.value
    })
}
