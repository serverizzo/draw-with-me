const express = require('express');
const socket = require('socket.io')

const app = express();
const port = 3000
const server = app.listen(port, () => console.log(`running on ${port}`))

app.use(express.static('public'))


const io = socket(server)


// param socket is the 'one particular socket' that is passed on connection to the server
io.on('connection', (socket) => {
    console.log('connection made')
    socket.emit('welcome')

    socket.on('chat', function (data) {
        io.emit('chat', data)
    })

    socket.on('isTyping', function (data) {
        io.emit('isTyping', data)
    })

    socket.on('disconnect', () => {
        console.log("user disconnected")
    })
})