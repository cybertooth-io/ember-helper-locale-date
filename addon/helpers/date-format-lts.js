/** @documenter yuidoc */

import { helper as buildHelper } from '@ember/component/helper';
import formatUtil from 'ember-helper-locale-date/utils/format-util';

/**
 * The formatting options for the default Locale.
 * @type {{hour: string, minute: string}}
 */
const defaultOptions = {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
};

/**
 * Instantiate a `Intl.DateTimeFormat` in the browser's locale that will be used for basic formatting.
 * @type {Intl.NumberFormat}
 */
const formatter = new Intl.DateTimeFormat(window.navigator.language, defaultOptions);

export function dateFormatLts([date], options) {
  return formatUtil(formatter, defaultOptions, date, options);
}

export default buildHelper(dateFormatLts);
