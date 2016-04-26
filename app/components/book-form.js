import Ember from 'ember';
import EmberValidations from 'ember-validations';

//export default Ember.Component.extend(EmberValidations, {
export default Ember.Component.extend({
	typeTextButton: function(){
  	return (this.get('book').id) ? 'Update Book' : 'Add Book';
  }.property(),

	actions : {
    submit: function() {
      //console.log("book.title->> ",this.get('book.title'))
      /*if (this.validate()) {
        this.sendAction('action', this.get('book'));
      }*/
      this.sendAction('action', this.get('book'));
    }
  }
});
