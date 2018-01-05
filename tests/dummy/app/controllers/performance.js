import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    changeHowMany(howManyInput) {
      this.set('howMany', howManyInput);
      return true;
    }
  },

  howMany: 500,

  howManyInput: Ember.computed.oneWay('howMany')
});
