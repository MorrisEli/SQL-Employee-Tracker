require('dotenv').config();

const express = require('express');
//mysql2 to connect to database
const mysql = require('mysql2');
//inquirer to interact
const inquirer = require('inquirer');
//cTable tp print rows
const cTable = require('console.table');

const db = mysql.createConnection(
    {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: process.env.PASSWORD,
        database: 'company_db'
    });

console.log('Welcome to the Employee Tracking System');




function startMenu() {
    startMenu();
    inquirer.createPromptModule({
        message: 'What would you like to do? (Use arrow keys.)',
        name: 'menu',
        type: 'list',
        choices: [
            'View all Employees',
            'Add Employee',
            'Update Employee Role',
            'View All Roles',
            'Add a Role',
            'View All Departments',
            'Add Department',
            'Exit'
        ],
    })

        //response case,.
        .then(response => {
            switch (response.menu) {
                case 'View all Employees':
                    viewDepartment();
                    break;
                case 'Add Employee':
                    viuewJobs();
                    break;
                case 'Update Employee':
                    viewEmployees();
                    break;
                case 'View All Roles':
                    addDepartment;
                    break;
                case 'Add a Role':
                    addJob();
                    break;
                case 'View All Departments':
                    addEmployee();
                    break;
                case 'Add Department':
                    addDepartment;
                    break;
                case "Exit":
                    connection.end(); //exit
                    break;
                default:
                    connection.end;
            }
        });
}


//choice variables

const viewEmployees = () => {
    connection.queruy('SELECT * FROM department', function (err, res) {
        if(err) throw err;
        console.table(res);
        startMenu;
    });
};
//adding employee
const addEmployee = () => {
    inquirer.createPromptModule([
        {
        name: 'nameFirst',
        type: 'input',
        message: "What is the employees first name?"
        },
        {
            name: 'nameLast',
            type: 'input',
            message: "What is the employees last name?"
        },
        {
            name: 'jobId',
            type: 'input',
            message: "What is the emplyees job id?"
        },
        {
         name: 'managerId',
         type: 'input',
         message: "What is the manager ID?"
        },
    ])
    .then(answer => {
        connect.query(
            'INSERT INTO employee (first_name, last_name, job_id, manager_id) VALUES (?, ?, ?, ?)',
            [answer.nameFirst, answer.nameLast, answer.jobId, answer.managerId],
            function (err, res) {
                if (err) throw err;
                console.log('Employee Added');
                startMenu();
            }
         );
    });
};

const updateEmployee = () => {
    inquirer.prompt([
        {
            name: 'id',
            type: 'input',
            message: "Enter employee id",
        },
        {
            name: 'jobId',
            type: 'input',
            message: "Enter new job id",
        },
    ])
    .then(answer => {
        connection.query(
            'UPDATE employee SET job_id=? WHERE id=?',
            [answer.jobId, answer.id],
            function (err, res) {
                if (err) throw err;
                console.log('Employee Updated');
                startMenu;
            }
        );
    });
};

const viewRoles = () => {
    connection.query('SELECT * FROM job', function (err, res) {
        if(err) throw err;
        console.table(res);
        startMenu;
    });
};

const addRole = () => {
    inquirer.prompt([
        {
            name: 'roleTitle',
            type: 'input',
            message: 'What is the role title?'
        },
        {
            name: 'salary',
            type: 'input',
            message: 'What is the salary for this role?'
        },
        {
            name: 'deptId',
            type: 'input',
            message: 'What is the department id?'
        },
    ])
    .then(answer => {
        connection.query(
            'INSERT INTO job (title, salary, department_id) VALUES (?, ?, ?)',
            [answer.jobTitle, answer.salary, answer.deptId],
            function (err, res) {
                if (err) throw err;
                console.log('Role Added');
                startMenu;
            }
        );
    });
};

const viewDepartment = () => {
    connection.query('SELECT * FROM department', function (err, res) {
        if (err) throw err;
        console.table(res);
        startMenu;
    });
};

const addDepartment = () => {
    inquirer.prompt([
    {
        name: 'department',
        type: 'input',
        message: 'What is the department name?'
      },
    ])
    .then(answer => {
      connection.query(
        'INSERT INTO department (dept_name) VALUES (?)',
        [answer.department],
        function (err, res) {
          if (err) throw err;
          console.log('Department added!');
          startMenu();
        }
      );
    });
};



//view department

// view jobs

//view employees

//

//make menu

//create list

//make choices



