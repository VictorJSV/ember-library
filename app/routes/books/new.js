import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    //'book' es el modelo
    return this.store.createRecord('book');
  },
  setupController: function(controller, model) {
    controller.set('bookC', model);
  },
  actions : {
    createBook : function(book){
      //book -> this.get('book')
      var self = this;
      //var book = self.store.createRecord("book", book)

      // book.save() -> this.get('book').save();
      book.save().then(function(book) {
        //Aqui se redirige al router books
        self.transitionTo('books.book', book);
        //self.transitionTo('about');
      })
    }
  }
});
