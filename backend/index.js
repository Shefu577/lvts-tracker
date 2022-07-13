
const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors')


connectToMongo();
const app = express()
const port = 5000

app.use(express.json())
app.use(cors())

// passing CORS headers
app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");

  next();
});

//available routes
app.use('/api/auth', require('./routes/auth'))
app.use('/leaveapi', require('./routes/leaveapi'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})