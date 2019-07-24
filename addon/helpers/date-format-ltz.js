/** @documenter yuidoc */

import { helper as buildHelper } from '@ember/component/helper';
import formatUtil from '../utils/format-util';

/**
 * The formatting options for the default Locale.
 * @type {{hour: string, minute: string}}
 */
const defaultOptions = {
  hour: 'numeric',
  minute: 'numeric',
  timeZoneName: 'short'
};

/**
 * Instantiate a `Intl.DateTimeFormat` in the browser's locale that will be used for basic formatting.
 * @type {Intl.NumberFormat}
 */
const formatter = new Intl.DateTimeFormat(window.navigator.language, defaultOptions);

export function dateFormatLtz([date], options) {
  return formatUtil(formatter, defaultOptions, date, options);
}

export default buildHelper(dateFormatLtz);
