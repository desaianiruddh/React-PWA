const express = require('express');
const app = express();
const port = 5000;
//run project from dist
app.use(express.static('build'));
//get request
app.listen(port, () => console.log(`Task Running on port ${port}`));
