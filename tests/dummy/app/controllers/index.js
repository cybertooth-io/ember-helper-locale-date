import { later } from '@ember/runloop';
import { on } from '@ember/object/evented';
import { computed, observer, trySet } from '@ember/object';
import Controller from '@ember/controller';

export default Controller.extend({
  // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
  locale: window.navigator.userLanguage || window.navigator.language,
  date: computed('_millis', function () {
    return new Date(this.get('_millis'));
  }),
  utc: computed('date', function () {
    return this.get('date').toUTCString();
  }),
  /**
   * Initialize millis to the current millis.
   */
  _initializeMillis: on('init', function () {
    this.set('_millis', new Date().getTime());
  }),
  /**
   * Every second update the `now` date.
   */
  _observeMillis: observer('_millis', function () {
    later(() => {
      trySet(this, '_millis', new Date().getTime());
    }, 250);
  })
});
