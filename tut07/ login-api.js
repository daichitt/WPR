const express = require('express');
const fs = require('fs').promises;
const user = require('./users.json');
const multer = require('multer');

// for application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); // built-in middleware
app.use(multer().none()); // for multipart/form-data (required with FormData)
const app = express()
app.use(express.json());
app.use(express.static('public'));

function readUderData() {
    const data = fs.readFileSync('./users.json', 'utf-8');
    return JSON.parse(data);
}

const PORT = 3000;
app.post('/login', function (req, res) {
    console.log(readUderData());
    const {user, password} = req.body;
    const foundUser = readUderData.find(u => u.username === user && u.password === password);
    if(foundUser) {
        res.status(200).json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Login failed' });
    }
})

app.listen(PORT, () => {
    console.log(`App is listening to port: http://localhost:${PORT}`);
});