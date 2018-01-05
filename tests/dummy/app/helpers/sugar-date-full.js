/* global Sugar */
import Ember from 'ember';

export function sugarDateFull([date]) {
  return Sugar.Date.full(date);
}

export default Ember.Helper.helper(sugarDateFull);
