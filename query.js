/**
 * Run various queries on collections for 
 * reporting purposes.
 * 
 * Date: 14/12/17
 * Author: ISLAM, Sameen
 */

 // Find employees in postcode area 'E1'.
db.employees.find( { postcode: /^E1/ } );

// Find employees born after 1990.
db.employees.find( { dob: { $gt: new Date("1990") } } );

// Female employees born after 1989 sorted by dob.
db.employees.find( { $and: [ { dob: { $gt: new Date("1990") } }, { sex: { $eq: "F" } } ] }, { first_name: 1, last_name: 1, email: 1, phone: 1 } ).sort( { dob: 1 } );

// Female employees born after 1989, with their age rounded down and contact details shown, sorted by ascending age.
db.employees.aggregate( [ { $match: { $and: [ { dob: { $gt: new Date("1990") } }, { sex: { $eq: "F" } } ] } }, { $sort: { "dob": -1 } }, { $project: { _id: 0, first_name: 1, last_name: 1, "age": { $floor : { $divide: [ { $subtract: [ new Date(), "$dob" ] }, (1000 * 86400 * 365 ) ] } }, email: 1, phone: 1 }  } ] );

// No. of drivers working for each shift period in a given month.
db.shifts.aggregate( [ { $unwind: "$on_duty" }, { $lookup: { from: "drivers" , localField: "on_duty.employee_id", foreignField: "employee_id", as: "driver_docs"} }, { $project: { date: 1, period: 1, on_duty: 1, "driver_docs": { $filter: {  input: "$driver_docs", as: "driver_doc", cond: { $eq: [ "$$driver_doc.employee_id", "on_duty.employee_id" ] } } } } } ] );

db.shifts.aggregate( [ { $unwind: "$on_duty" }, { $lookup: { from: "drivers" , localField: "on_duty.employee_id", foreignField: "employee_id", as: "driver_docs"} }, { $project: { date: 1, period: 1, on_duty: 1, "driver_docs": { $filter: {  input: "$driver_docs", as: "driver_doc", cond: { $eq: [ "$$driver_doc.employee_id", "on_duty.employee_id" ] } } } } } ] );

// Compute total of all overhead costs for a given document. 
db.overheadCosts.aggregate( [ { $project: { total: { $sum: [ "$lighting", "$heating", "$fuel"] } } } ] )
