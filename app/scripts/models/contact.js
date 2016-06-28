var Backbone = require('backbone');

var Contact = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    name: 'name',
    email: 'somebody@email.com',
    phone: '123-456-7890'
  },
});

var ContactCollection = Backbone.Collection.extend({
  model: Contact,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/D9contacts',
});

module.exports = {
  'Contact': Contact,
  'ContactCollection': ContactCollection,
}
