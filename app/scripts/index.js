var $ = require('jquery');
var views = require('./views/contactform');
var ContactCollection = require('./models/contact').ContactCollection;


var contacts = new ContactCollection();

var instructions = new views.ContactInstructionView();
$('.app').append(instructions.render().el);

var contactForm = new views.ContactFormView({collection: contacts});
$('.app').append(contactForm.render().el);

var contactList = new views.ContactListView({collection: contacts});
$('.app').append(contactList.render().el);
//
// var contactItem = new views.ContactItemView({collection: contacts});
// $('.app').append(contactItem.render().el);

contacts.fetch();
