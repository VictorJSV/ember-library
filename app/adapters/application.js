/*
import Ember from 'ember';
import FirebaseAdapter from 'emberfire/adapters/firebase';

const { inject } = Ember;

export default FirebaseAdapter.extend({
  firebase: inject.service(),
});
*/
/*
export default DS.JSONAPIAdapter.extend({
 // Reload behavior
 shouldReloadRecord: function() { return true; },
 shouldReloadAll: function() { return true; },
 shouldBackgroundReloadRecord: function() { return true; },
 shouldBackgroundReloadAll: function() { return true; }
});
*/
import config from '../config/environment';
import Firebase from 'firebase';
import FirebaseAdapter from 'emberfire/adapters/firebase';

export default FirebaseAdapter.extend({
  firebase: new Firebase(config.firebase),
	shouldReloadRecord: function() { return true; },
	shouldReloadAll: function() { return true; },
	shouldBackgroundReloadRecord: function() { return true; },
	shouldBackgroundReloadAll: function() { return true; }
});