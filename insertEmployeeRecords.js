/**
 * insertEmployeeRecords.js
 * --------------------------
 * Populates 'employee_records' collection with 
 * documents from 'employee' collection.
 * 
 * Contracts are defined as follows:
 * 'part-time' -> a single shift period in a given day.
 * 'full-time' -> two shift period in a given day.
 *
 * Date: 13/12/2017
 * Author: ISLAM, Sameen
 * Version: 1.0
 */
var marta = db.employees.find({first_name: 'Marta'})
var martaId = marta.next()._id
// -- 
var vivian = db.employees.find({first_name: 'Vivian'})
var vivianId = vivian.next()._id
// -- 
var john = db.employees.find({first_name: 'Jonathan'})
var johnId = john.next()._id
// -- 
var izzy = db.employees.find({first_name: 'Isabella'})
var izzyId = izzy.next()._id
// --
db.employee_records.insertMany(
	[
		{
	  	  employee_id: martaId, 
	    	  start_date: new Date("2015-02-01"),
		  role: "driver",
	  	  contract: "part-time",
	  	  salary: "21000"
		},
		{
		  employee_id: vivianId, 
		  start_date: new Date("2016-06-09"),
		  role: "operator",
		  contract: "full-time",
		  salary: "26000"
		},
		{
		  employee_id: johnId,
		  start_date: new Date("2012-01-05"),
		  role: "driver",
		  contract: "full-time",
		},
		{
		  employee_id: izzyId,
		  start_date: new Date("2017-11-05"),
		  role: "operator",
		  contract: "full-time",
		}
	]
)
