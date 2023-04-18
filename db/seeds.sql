

INSERT INTO department (dept_name)
VALUES
('Sales'),
('Engineering'),
('Finance'),
('Legal');

INSERT INTO job (title, salary, department_id)
VALUES
('Sales Lead', 100000, 1),
('Salesperson', 80000, 1),
('Lead Engineer', 150000, 2),
('Software Engineer', 120000, 2),
('Account Manager', 160000, 3),
('Accountant', 125000, 3),
('Legal Team Lead', 250000, 4),
('Lawyer', 190000, 4);

INSERT INTO employee (id, first_name, last_name, job_id, manager_id)
VALUES
(1, 'John', 'Doe', 1, NULL),
(2, 'Mike', 'Chan', 2, NULL),
(4, 'Ashley', 'Rodriguez', 3, NULL),
(5, 'Kevin', 'Tupik', 4, NULL),
(6, 'Kunal', 'Singh', 5, NULL),
(7, 'Malia', 'Brown', 6, NULL),
(8, 'Sarah', 'Lourd', 7, NULL),
(9, 'Tom', 'Allen', 8, NULL);