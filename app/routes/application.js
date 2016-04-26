import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    //return ['About', 'Contact Me', 'Books']
    return [
      {url: "about", title: "About"},
      {url: "contact", title: "Contact Me"},
      {url: "books", title: "Books"}
    ]
  }
});
