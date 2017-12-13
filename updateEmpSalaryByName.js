/**
 * updateEmpSalaryByName.js
 * --------------------------
 * Updates 'salary' field of 
 * 
 *
 * Date: 13/12/2017
 * Author: ISLAM, Sameen
 * Version: 1.0
 */
 
// Provide name of employee to update salary.
var first_name = 'Jonathan'
var last_name = 'Rodriguez'

// Provide new salary.
var salarySetValueTo = 29000 

// ----
var emp = db.employees.find(
	{
	  first_name: first_name,
	  last_name: last_name
	},
	{
	  first_name: 1,
	  last_name: 1
	}
)
var empId = emp.next()._id
db.employee_records.find({employee_id: empId}, {employee_id: 1, salary: 1})
db.employee_records.update({employee_id: empId}, {$set: {salary: salarySetValueTo }})
