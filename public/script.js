
// make connection 
const socket = io()

socket.on('welcome', () => {
    console.log("You have connected to the server")
})