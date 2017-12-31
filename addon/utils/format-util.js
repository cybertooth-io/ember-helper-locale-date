import Ember from 'ember';

export default function formatUtil(formatter, defaultOptions, date, options) {
  if (Ember.isEmpty(date) || Ember.typeOf(date) !== 'date') {
    return '';
  }
  if (Ember.$.isEmptyObject(options)) {
    return formatter.format(date);
  } else {
    return date.toLocaleString(undefined, Ember.$.extend(defaultOptions, options));
  }
}
