'use strict';

var express = require('express');
var multer = require('multer');
var upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 30000000 } });
// require and use "multer"...

var app = express();

app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  res.json({ filename: req.file.originalname, size: req.file.size });
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
