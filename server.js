require('dotenv').config();
const Grid = require('gridfs-stream');
const mongoose = require('mongoose');
const connection = require('./db');
const express = require('express');
const app = express();
const upload = require('./middleware/upload.js');

let gfs;
connection();

const conn = mongoose.connection;
conn.once('open', function () {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('photos');
});

app.use('/file', upload);

//media routes
app.get('/file/:filename', async (req, res) => {
  try {
    const file = await gfs.files.findOne({ filename: req.params.filename });
    const readStream = gfs.createReadStream(file.filename);
    readStream.pipe(res);
  } catch (error) {
    res.send('not found');
  }
});

app.delete('/file/:filename', async (req, res) => {
  try {
    await gfs.files.deleteOne({ filename: req.params.filename });
    res.send('success');
  } catch (error) {
    console.log(error);
    res.send('And error has occured');
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, console.log(`Listening on port ${PORT}...`));
