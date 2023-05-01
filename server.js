const express = require('express')
const app = express()

const PORT = process.env.PORT || 8080

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/grayson', function (req, res) {
    var bookList = [
        {
            title: "The Name of the Wind",
            author: "Patrick Rothfuss",
            index: 1
        }
    ]
})

app.listen(PORT)