//mysql2 to connect to database
const mysql = require(mysql2);
//inquirer to interact
const inquirer = require('inquirer');
//cTable tp print rows
const cTable = require('console.table');

const connection = mysql.createConnection({
    //host: 'localhost',
    //port: 3306,
    //user: 'root',
    //password: 'password123',
    //database: 'db',
});

connection.connect(err => {
    if(err) throw err;
    console.log("Welcome to Employee Tracker");
    startMenu();
});

const startMenu = () => {
    inquirer.createPromptModule({
        //message: 
        //name:
        //type:
        //choices:
    })
}

//make menu

//create list

//make choices



