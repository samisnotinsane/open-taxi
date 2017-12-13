/**
 * populateOperators.js
 * --------------------------
 * Uses the 'employee_records' collection to query a
 * set of documents whose 'role' field is set to 'driver' and
 * creates a new record in 'operators' collection with employee id
 * used to link to company employee. 
 * 
 * Date: 13/12/2017
 * Author: ISLAM, Sameen
 * Version: 1.0
 */
var cursor = db.employee_records.find({role: "driver"}, {employee_id: 1})
while(cursor.hasNext()) {
	db.operators.insert({employee_id: cursor.next().employee_id})
}
