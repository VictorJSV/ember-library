import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
  	//'book' es el modelo
    return this.store.findAll('book');
  }
});
