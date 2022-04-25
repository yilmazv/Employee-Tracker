INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Nancie', 'Harrington', 1, 1),
       ('Judith', 'Krueger', 2, 2),
       ('Cayson', 'Lim', 3, 3),
       ('Aliza', 'Cottrell', 4, 4),
       ('Beatrix', 'Olsen', 5, 5),
       ('Mark', 'Jones', 6, 6),

INSERT INTO role (title, salary, dept_id)
VALUES ('Project Manager', 60000, 1),
       ('Project Coordinator', 66000, 3),
       ('Front End Dev', 70000, 2),
       ('Back End Dev', 80000, 2),
       ('Full Stack Dev', 100000, 2),
       ('Lawyer', 200000, 4),

INSERT INTO department (dept_name)
VALUES ('Human Resources'),
       ('Softwaree'),
       ('Marketing'),
       ('Legal'),