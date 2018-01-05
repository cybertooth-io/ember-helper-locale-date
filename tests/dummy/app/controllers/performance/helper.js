import Ember from 'ember';

export default Ember.Controller.extend({
  afterRenderMillis: 0,

  didTransitionMillis: 0,

  result: Ember.computed('afterRenderMillis', 'didTransitionMillis', function () {
    return this.get('afterRenderMillis') - this.get('didTransitionMillis');
  })
});
