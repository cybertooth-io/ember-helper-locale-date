import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    didTransition() {
      this.set('controller.didTransitionMillis', Date.now());
    }
  },

  setupController: function (controller, model) {
    this._super(controller, model);
    Ember.run.schedule('afterRender', this, function () {
      controller.set('afterRenderMillis', Date.now());
    });
  }
});
