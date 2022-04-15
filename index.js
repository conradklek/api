require('dotenv').config()

const express = require('express')
const cors = require('cors')
const server = express()

server.use(express.json())
server.use(cors())

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3000

const passwords = ['password1', 'password2']

server.get('/api/users', (req, res) => {
    res.send([
        {
            id: 1,
            username: 'johndoe',
            password: 'password1'
        },
        {
            id: 2,
            username: 'janedoe',
            password: 'password1'
        }])
})

server.post('/api/register', (req, res) => {
    const { username } = req.body
    res.send({
        message: `Welcome ${username}!`
    })
})

server.post('/api/login', (req, res) => {
    const { username, password } = req.body
    if (!passwords.includes(password)) {
        res.status(400).send('Invalid password')
    } else {
        res.send({
            message: `Welcome ${username}!`
        })
    }
})

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})