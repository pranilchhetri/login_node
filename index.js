
var mysql      = require('mysql');
var config = require('./config');
let connection=mysql.createConnection(config);

let sql = `INSERT INTO employee (employee_name,employee_salary,employee_age)
            VALUES ('Pranil',50000,24)`;
    connection.query(sql);

    connection.end();

    