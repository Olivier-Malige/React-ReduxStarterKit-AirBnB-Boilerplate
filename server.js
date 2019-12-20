// This file is here to redirect the user to the built application
const path = require('path')
const express = require('express')

const app = express()

// Set the static path to the built directory
const staticPath = path.join(__dirname, './build')
app.use(express.static(staticPath))
app.all('*', (req, res) => res.sendFile(path.join(staticPath, 'index.html')))

// Allows you to set port in the projet properties.
app.set('port', 3004)
const port = app.get('port')

app.listen(port)
console.log('Application listening on port : ', port)
