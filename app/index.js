const express = require("express")
const path = require('path')
const pug = require('pug')
const pdf = require('html-pdf')
const PORT = 3000
const app = express()

app.get('/', (req, res) => {
  res.send('Hola!, este es ejemplo de pug, express, html-pdf con Docker compose');
})

app.get('/pdf', (req, res) => {
  var compiler = pug.compileFile(path.join(__dirname, '/templates/simple_pdf.pug'))
  var html = compiler({
    tituloHead: 'titulo de head',
    tituloBody: 'titulo de body'
  });

  const pdfOptions = {
    format: 'Letter',
    phantomPath: process.env.PHANTOMJS_BIN
  };

  pdf.create(html, pdfOptions).toBuffer((err, response) => {
    if (err) return console.log(err);
    res.attachment('filename.pdf')
    res.send(response)
  })
})

app.listen(PORT)
console.log('Puerto' + PORT)
