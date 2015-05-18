var Command = {};

Command.getOperation = function () {
// return the value from the list of command line arguments
// representing the operation to be performed (add or find)
	return process.argv[2]

}

Command.getOperationData = function () {
// return the value from the list of command line arguments
// representing the data to be used for the operation
 	return process.argv[3]

}
//task-13 my solution
// Command.add = function(done) {
// 	var contact = require('./contact');
// 	var contactStr = this.getOperationData()
// 	contact.createContact(contactStr, done)
// 	//if (err) { return done(err) }

// }
// task-13 their solution
Command.add = function(done) {
  var Contact = require('./contact')
    , data = this.getOperationData()
    , contact = Contact.createContact(data)

  Contact.saveContact(contact, done)
}

//task-14 implement find 
Command.find = function(done) {
	var Contact = require('./contact')
	var contactName = this.getOperationData()
	Contact.findContacts(contactName, function(err, foundContacts) {
    if (err) {
      return done(err)
    }
    foundContacts.forEach(function(contact) {
      console.log(contact.name, contact.number)
    })
    done(null, foundContacts)
  })
}


module.exports = Command