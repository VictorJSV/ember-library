import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
    //'book' es el modelo
    return this.store.findRecord('book', params.book_id);
  },
	/*setupController: function(controller, model) {
    controller.set('bookE', model);
  },*/
  actions : {
    editBook : function(book){
      //book -> this.get('book')
      var self = this;

      // book.save() -> this.get('book').save();
      book.save().then(function(book) {
        //Aqui se redirige al router books
        self.transitionTo('books.book', book);
        //self.transitionTo('about');
      })
    }
  }
});
