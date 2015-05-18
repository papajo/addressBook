// var Contact = require('./contact');
// var Command = require('./command');
// var Util = require('./util');

// var name = Contact.parseName("John Smith,604-123-9090");
// var number = Contact.parseNumber("John Smith,604-123-9090");
// var contact = Contact.createContact("John Smith,604-123-9090");

// var contacts = [ { name: "John Smith", number: "604-123-9090" } ]

// Contact.loadContacts(function(err, data) {
// 	console.log(data)
// })

// Contact.saveContacts(contacts, function(err, data) {
// 	console.log('success')
// })

// var contact = { name: "John Smith", number: "604-123-9090" }

// Contact.saveContact(Contact, function(err) {
// 	console.log('success')
// })

// Command.add(function(err){
// 	console.log('Contact added!')
// })

// Command.find(function(err, results) {
// 	console.log('Find complete!')
// })

// console.log(Command.getOperation())
// console.log(Command.getOperationData())

// console.log(Util.getHomeDirectory())

// var path = Util.getDataPath() 
// 	console.log(path)


// console.log(name);
// console.log(number);
// console.log(contact);

var Util = require('./util')
var path = Util.getDataPath()
console.log(path)