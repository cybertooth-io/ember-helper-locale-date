import Ember from 'ember';

/**
 * The formatting options for the default Locale.
 * @type {{hour: string, minute: string}}
 */
const defaultOptions = {
  // weekday: 'long',
  // year: 'numeric',
  // month: 'long',
  // day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  // second: 'numeric',
  // timeZone: 'America/New_York',
  // timeZoneName: 'short'
};

/**
 * Instantiate a basic NumberFormat in the browser's locale that will be used for basic formatting.
 * @type {Intl.NumberFormat}
 */
const formatter = new Intl.DateTimeFormat(undefined, defaultOptions);

export function dateFormatLT([date], options) {
  if (Ember.isEmpty(date) || Ember.typeOf(date) !== 'date') {
    return '';
  }
  if (Ember.$.isEmptyObject(options)) {
    return formatter.format(date);
  } else {
    return date.toLocaleString(undefined, Ember.$.extend(defaultOptions, options));
  }
}

export default Ember.Helper.helper(dateFormatLT);
