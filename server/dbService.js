const mysql = require('mysql');
const dotenv = require('dotenv');
let instance = null;
dotenv.config();


//Parameters for connection to the database
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT
});

connection.connect((err) => {
    if (err) {
        console.log(err.message);
        
    }
    console.log(connection.state)
});

//creates a class with methods to query data from the database
class DbService {
    static getDbServiceInstance() {
        // checks for an instance, if there is none then it will create a new one of DbService
        return instance ?  instance : new DbService();
    }
// fetches all data from the table names from our database
    async getAllData(){
        try {
            const response = await new Promise((resolve, reject) => 
            {
                const query = "SELECT * FROM names;";

                connection.query(query, (err, results) => {
                    if(err) reject(new Error(err.message));
                    resolve(results);
                })

            });
            //console.log(response);
            return response;

        } catch (error) {
            console.log(error);
            
        }
    }
}

module.exports = DbService;