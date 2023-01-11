const express = require("express")
const app = express()
const PORT = 3000;
const path = require("path")

app.get('/', function (req, res) {
    console.log(req.query) // to jest obiekt z danymi pobranymi z paska adresu    
    console.log(req.query.p1) // to jest jedno pole (właściwość) tego obiektu   
    res.send(req.query) // odesłanie obiektu z danymi z powrotem do przeglądarki   
});