/**
 * insertBookings.js
 * --------------------------
 * Inserts dummy booking information for 
 * populating 'bookings' collection.
 *
 * Date: 14/12/2017
 * Author: ISLAM, Sameen
 * Version: 1.0
 */
var ts = new Timestamp()
var csr = db.operators.find({ employee_id: ObjectId("5a317acdcbf7aee91dbc50d2") })
var op = csr.next()._id
db.bookings.insert(
	{
		timestamp: ts,
		pickup: {
			datetime: new Date("2017-12-14T08:55:00"),
			address: {
				address: "23 Bishopsgate",
				city: "London",
				postcode: "WC3 0LP"
			}
		},
		destination: {
			address: "1 Kingly Close",
			city: "Surrey",
			postcode: "SL1 5BP"
		},
		passenger: NumberInt(2),
		operator_id: op
	}
)