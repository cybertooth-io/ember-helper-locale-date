import { computed } from '@ember/object';
import Controller from '@ember/controller';

export default Controller.extend({
  afterRenderMillis: 0,

  didTransitionMillis: 0,

  result: computed('afterRenderMillis', 'didTransitionMillis', function () {
    return this.get('afterRenderMillis') - this.get('didTransitionMillis');
  })
});
