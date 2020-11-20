const sendbtn = document.getElementById('send-btn')
const username = document.getElementById('user-name')
const message = document.getElementById('message')
const output = document.getElementById('output')



// make connection 
const socket = io()

socket.on('welcome', (data) => {
    console.log("You have connected to the server")
})

socket.on('chat', (data) => {
    output.innerHTML += `<p><strong>${data.username}:</strong> ${data.message}</p>`
})



// recieve typing detection
socket.on('isTyping', function (data) {
    // console.log(`${data.handel} is typing`)
    // // if (isTyping.value ===""){
    // // }

    // isTyping.innerHTML = `<em> ${data.handel} is typing </em>`
})


// emit on typing detection
// message.addEventListener('input', () => {
//     console.log(`message input has changed: ${message.value}`)

//     // While a user did not press send or is still working on a message

//     socket.emit('isTyping', { handel: handel.value })
// })

sendbtn.addEventListener('click', () => {
    socket.emit('chat', {
        message: message.value,
        username: username.value
    })
    message.value = ""
})



// p5 recieved emits
socket.on('clicked', (data) => {
    // console.log('Recieved clicked')
    // console.log(data)
    fill(data.color)
    circle(data.mouseX, data.mouseY, 100)
})

