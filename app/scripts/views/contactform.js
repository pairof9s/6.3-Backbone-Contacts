var $ = require('jquery');
var Backbone = require('backbone');
var contactListTemplate = require('../templates/contact-entry.hbs');
var contactFormTemplate = require('../templates/contact-form.hbs');

var ContactInstructionView = Backbone.View.extend({
  tagName: 'p',
  className: 'well col-md-4 infobox',

  render: function(){
    this.$el.html('Please enter information to create a new contact. |>');
    return this;
  }
});

var ContactFormView = Backbone.View.extend({
  tagName: 'form',
  template: contactFormTemplate,
  events: {
    'submit': 'contactForm'
  },
  render: function(){
    var renderedHTML = this.template();
    this.$el.html(renderedHTML);
    return this;
  },

  contactForm: function(event){
    event.preventDefault();
    this.collection.create({
      name: $('#name').val(),
      email: $('#email').val(),
      phone: $('#phone').val(),
      twitter: $('#twitter').val(),
    });
    $('#name').val('');
    $('#email').val('');
    $('#phone').val('');
    $('#twitter').val('');
  },
});

var ContactItemView = Backbone.View.extend({
  tagName: 'li',
  template: contactListTemplate,

  render: function(){
    var context = this.model.toJSON();
    this.$el.html(this.template(context));
    return this;
  },
});

var ContactListView = Backbone.View.extend({
  tagName: 'ul',
  className: 'list-unstyled col-md-3',

  initialize: function(){
    this.listenTo(this.collection, 'add', this.renderItem);
  },
  render: function(){
    return this;
  },
  renderItem: function(contact){
    var contactItem = new ContactItemView({model: contact});
    this.$el.append(contactItem.render().el);
  },
});

module.exports = {
  'ContactInstructionView': ContactInstructionView,
  'ContactFormView': ContactFormView,
  'ContactListView': ContactListView,
  'ContactItemView': ContactItemView,
};
