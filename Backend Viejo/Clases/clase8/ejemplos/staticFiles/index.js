const express = require('express');

const app = express();

app.use('/static',express.static(__dirname + '/public'))
/* app.use(express.static('files')) */

app.listen(8080)