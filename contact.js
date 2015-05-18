var Contact = {};

Contact.parseName = function(str) { 
	return str.split(',')[0].trim();
	//return name[0];
}

Contact.parseNumber = function(str) {
return str.split(',')[1].trim();

}

Contact.createContact = function(str) {
	var contact = { 
		name: this.parseName(str),
	 	number: this.parseNumber(str)
	 }
	 return contact;
}
//task-8
Contact.loadContacts = function(done){
	var jsonfile = require('jsonfile')
	var util = require('./util')
	var jsonPath = util.getDataPath()
	jsonfile.readFile(jsonPath, done)
}
//task-9
Contact.saveContacts = function(contacts, done) {
  var jf = require('jsonfile')
  var util = require('./util')
  var jsonPath = util.getDataPath()
  jf.writeFile(jsonPath, contacts, done)
}
//task-10
Contact.saveContact = function(contact, done) {
	var _this = this;
	this.loadContacts(function(err, contacts) {
	if (err) { return done(err) }
	contacts.push(contact)
	_this.saveContacts(contacts, done)
	})
}
//When the callback of the loadContacts function 
//is invoked a new this object of its own is created.
//This is why we need to keep a reference to this from 
//saveContact if we want to use it inside the callback of 
//loadContacts.

//task-11 find a contact by name
Contact.findContacts = function(name, done) {
	this.loadContacts(function(err, contacts) {
	if (err) { return done(err) }		
	var foundContacts = contacts.filter(function(contact) {
		return contact.name == name
	})
	done(null, foundContacts)
	})
}

module.exports = Contact;