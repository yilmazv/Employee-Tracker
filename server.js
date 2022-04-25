const express = require("express");
const mysql = require("mysql2");
const fs = require("fs");
const inquirer = require("inquirer");

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  // MySQL username,
  user: "root",
  // MySQL password
  password: "password",
  database: "employee_db",
});

db.connect(function (err) {
  if (err) throw err;
  trackEmployee();
});

function trackEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choices",
        message: "What would you like to view?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
        ],
      },
    ])
    .then(function (res) {
      if (res.choices === "View all departments") {
      } else if (res.choices === "View all roles") {
      } else if (res.choices === "View all employees") {
      } else if (res.choices === "Add a department") {
      } else if (res.choices === "Add a role") {
      } else if (res.choices === "Add an employee") {
      } else if (res.choices === "Update an employee role") {
      }
    });
}
