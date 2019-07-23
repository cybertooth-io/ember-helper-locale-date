import { hash } from 'rsvp';
import { get } from '@ember/object';
import { A } from '@ember/array';
import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    const dates = A();

    const end = new Date();
    const howMany = get(params, 'howMany');
    const start = new Date(2001, 8, 11);

    for (let i = 0; i < howMany; i++) {
      dates.pushObject(new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())));
    }

    return hash({
      dates: dates
    });
  },

  queryParams: {
    howMany: {refreshModel: true}
  }
});
