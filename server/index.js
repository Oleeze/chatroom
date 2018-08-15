const express = require('express');
const parser = require('body-parser');
const path = require('path');
const app = express();

const port = 8080;

app.use(parser.json());
app.use(parser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'../dist/')))

// app.get('/', (req, res) => {
//   res.send(`Hello your server is running on: ${port}`)
// })

app.listen(port, () => console.log(`Listening on port: ${port}`));