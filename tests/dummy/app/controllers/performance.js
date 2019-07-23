import { oneWay } from '@ember/object/computed';
import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    changeHowMany(howManyInput) {
      this.set('howMany', howManyInput);
      return false;
    }
  },

  howMany: 500,

  howManyInput: oneWay('howMany')
});
