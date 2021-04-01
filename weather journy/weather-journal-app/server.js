// Setup empty JS object to act as endpoint for all routes
projectData = [];

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
//dependencies
const bodyParser = require('body-parser');


/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;
const server = app.listen(port, listening);

/*CallBAck */
function listening() {
    console.log('server running');
    console.log(`running on localhost: ${port}`);
}

app.get('/all', sendData);

function sendData(req, res) {
    res.send(projectData);
    projectData = [];
}
//post route

app.post('/add', addData);

function addData(req, res) {
    console.log(req, res);
    newEntry = {
        data: req.body.data,
        temp: req.body.temp,
        content: req.body.content
    }
    projectData.push(newEntry);
}