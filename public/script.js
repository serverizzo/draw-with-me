
// make connection 
const socket = io()

socket.on('welcome', (data) => {
    console.log("You have connected to the server")
})