
var mysql      = require('mysql');
var config = require('./config');
let connection=mysql.createConnection(config);

// let sql = `INSERT INTO employee (employee_name,employee_salary,employee_age)
//             VALUES ('Pranil',50000,24)`;
    
    // let sql=`UPDATE employee SET employee_name="William",employee_salary=500,employee_age=32 where employee_name="pranil"`;
   

connection.query(`SELECT * FROM employee`,function(error,results,fields){
    if (error) throw error;
    console.log('The response is: ',results);
});

connection.end();

    