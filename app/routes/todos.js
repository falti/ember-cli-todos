import Ember from 'ember';
import DS from 'ember-data';

DS.RESTAdapter.reopen({
  namespace: 'api'
});

export default Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
  }
});
