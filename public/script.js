const message = document.getElementById("message")
const handel = document.getElementById("handle")
const sendbtn = document.getElementById("send")
const output = document.getElementById("output")

// make connection 
const socket = io()

socket.on('welcome', (data) => {
    console.log("You have connected to the server")
})

socket.on('chat', (data) => {
    output.innerHTML += `<p><strong> ${data.handel}: </strong> ${data.message} </p>`
})


sendbtn.addEventListener('click', () => {
    socket.emit('chat', {
        message: message.value,
        handel: handel.value
    })
})


