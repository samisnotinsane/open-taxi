/**
 * insertShifts.js
 * --------------------------
 * Populates the four (4) shifts for a single day by 
 * four different drivers (using their _Id from 'employees'
 * collection).
 *
 * Shift periods are defined as follows (time in 24hr format):
 * 0600 - 1159 -> morning
 * 1200 - 1800 -> afternoon
 * 1801 - 0000 -> evening
 * 0001 - 0559 -> night
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
db.shifts.insertMany(
	[
		{
			date : new Date("2017-12-13"),
			period : "morning",
			on_duty : [
				{
					employee_id: martaId
				}
			]
		},
		{
			date : new Date("2017-12-13"),
			period: "afternoon",
			on_duty: [
				{
					employee_id: vivianId
				}
			]
		}, 
		{
			date : new Date("2017-12-13"),
			period : "evening",
			on_duty : [
				{
					employee_id: johnId
				}
			]
		},
		{
			date : new Date("2017-12-13"),
			period : "night",
			on_duty : [
				{
					employee_id: izzyId
				}
			]
		}
	]
)
