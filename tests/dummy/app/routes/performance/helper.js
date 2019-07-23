import { schedule } from '@ember/runloop';
import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    didTransition() {
      this.set('controller.didTransitionMillis', Date.now());
    }
  },

  setupController: function (controller, model) {
    this._super(controller, model);
    schedule('afterRender', this, function () {
      controller.set('afterRenderMillis', Date.now());
    });
  }
});
