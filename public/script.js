const message = document.getElementById("message")
const handel = document.getElementById("handle")
const sendbtn = document.getElementById("send")
const output = document.getElementById("output")
const isTyping = document.getElementById("isTyping")

let counter = 0;

// make connection 
const socket = io()

socket.on('welcome', (data) => {
    console.log("You have connected to the server")
})

socket.on('chat', (data) => {
    output.innerHTML += `<p><strong> ${data.handel}: </strong> ${data.message} </p>`
    // if (isTypingNode.innerHTML === "") {
    // }
})

// recieve typing detection
socket.on('isTyping', function (data) {
    console.log(`${data.handel} is typing`)
    // if (isTyping.value ===""){
    // }

    isTyping.innerHTML = `<em> ${data.handel} is typing </em>`
})


// emit on typing detection
message.addEventListener('input', () => {
    console.log(`message input has changed: ${message.value}`)

    // While a user did not press send or is still working on a message

    socket.emit('isTyping', { handel: handel.value })
})

sendbtn.addEventListener('click', () => {
    socket.emit('chat', {
        message: message.value,
        handel: handel.value
    })
    message.value = ""
    isTyping.innerHTML = ""
})


