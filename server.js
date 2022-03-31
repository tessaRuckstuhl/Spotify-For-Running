const express = require('express'); //Line 1
const authorization = require('./src/backend/routes/authorization');
const cookieParser = require('cookie-parser');
const cors = require('cors')
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// create a GET route
app.get('/express_backend', (req, res) => {
  //Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
}); //Li

app.use(cors()).use(cookieParser());
app.use('/auth', authorization);
