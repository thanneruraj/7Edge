let mongoose = require('mongoose')

let schema = mongoose.Schema;

let employeeSchema = new schema({
name : String,
employeeId : String,
dob : Date,
createdTimestamp : Date,
updatedTimestamp : Date,
reportingEmployee: String
})

module.exports = mongoose.model("employee", employeeSchema)