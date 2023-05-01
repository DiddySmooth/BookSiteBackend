const express = require('express')
var cors = require('cors')
const app = express()
const fs = require('fs');


let DataGrayson


function getNewData(){
    let rawDataGrayson = fs.readFileSync("graysonTierList.json")
    DataGrayson = JSON.parse(rawDataGrayson)
}
app.use(cors())

getNewData()

var bookList = {
        title: "The Name of the Wind",
        author: "Patrick Rothfuss",
        index: 1
}

const PORT = process.env.PORT || 8080

app.get('/',  function (req, res) {
  res.send('Hello World')
})

app.get('/grayson', function (req, res) {
    
    console.log(DataGrayson)
    res.send(DataGrayson)
})
app.post('/grayson/add', function (req, res) {
    DataGrayson.push(bookList)
    let data = JSON.stringify(DataGrayson)
    fs.writeFileSync('graysonTierList.json', data)
    getNewData()
    res.send(DataGrayson)
})
app.listen(PORT)