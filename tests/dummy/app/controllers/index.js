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
    const self = this;
    Ember.run.later(() => {
      Ember.trySet(self, '_millis', new Date().getTime());
    }, 250);
  })
});
