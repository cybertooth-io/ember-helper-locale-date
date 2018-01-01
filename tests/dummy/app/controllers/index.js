import Ember from 'ember';

export default Ember.Controller.extend({
  locale: window.navigator.userLanguage || window.navigator.language,
  date: Ember.computed('_millis', function () {
    return new Date(this.get('_millis'));
  }),
  utc: Ember.computed('date', function () {
    return this.get('date').toUTCString();
  }),
  /**
   * Initialize millis to the current millis.
   */
  _initializeMillis: Ember.on('init', function () {
    this.set('_millis', new Date().getTime());
  }),
  /**
   * Every second update the `now` date.
   */
  _observeMillis: Ember.observer('_millis', function () {
    Ember.run.later(() => {
      Ember.trySet(this, '_millis', new Date().getTime());
    }, 250);
  })
});
