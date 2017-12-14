/**
 * insertPayments.js
 * --------------------------
 * Inserts dummy payment information for 
 * populating 'payment' collection. 
 * 
 * A payment is used for recording a booking.
 *
 * Date: 14/12/2017
 * Author: ISLAM, Sameen
 * Version: 1.0
 */
db.bookings.find({})
var cursor =  db.bookings.find({_id: ObjectId("5a31c48e4e1913fadac82594")})
var bId = cursor.next()._id
db.payments.insert(
 	{
 		booking_id: bId,
 		amount: NumberDecimal(23.56),
 		type: "Visa",
 		cardholder_name: "ALLISON BARNES",
 		card_no: NumberInt(4539366751998961),
 		cvv: NumberInt(418),
 		exp: "03/18"
 	}
 )
 