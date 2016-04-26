import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		//'book' es el modelo
		return this.store.findRecord('book', params.book_id);
  },
  actions : {
    deleteBook : function(book){
      //book -> this.get('book')
      var self = this;

			book.destroyRecord();
			self.transitionTo('books');
    }
  }
});
