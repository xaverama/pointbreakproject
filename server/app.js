const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const dbService = require('./dbService');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));

//create
app.post('insert', (request, response) => {

});


//read
app.get('/getAll', (request, response) => {
    const db = dbService.getDbServiceInstance();

    const result = db.getAllData(); // this returns a promise
    // so we need to use .then to wait for the promise
    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err));
    
});


//update



//delete


app.listen(process.env.PORT, () => console.log('app is running'));