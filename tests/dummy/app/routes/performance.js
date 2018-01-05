import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    const dates = Ember.A();

    const end = new Date();
    const howMany = Ember.get(params, 'howMany');
    const start = new Date(2001, 8, 11);

    for (let i = 0; i < howMany; i++) {
      dates.pushObject(new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())));
    }

    return Ember.RSVP.hash({
      dates: dates
    });
  },

  queryParams: {
    howMany: {refreshModel: true}
  }
});
