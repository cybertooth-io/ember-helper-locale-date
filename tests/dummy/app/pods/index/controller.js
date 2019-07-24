import { computed } from '@ember/object';
import Controller from '@ember/controller';

export default Controller.extend({
  now: computed(function() {
    return new Date();
  })
});
