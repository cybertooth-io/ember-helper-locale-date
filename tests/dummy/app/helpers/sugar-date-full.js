import Ember from 'ember';
import Sugar from 'ember-sugar-date';

export function sugarDateFull([date]) {
  return Sugar.Date.full(date);
}

export default Ember.Helper.helper(sugarDateFull);
