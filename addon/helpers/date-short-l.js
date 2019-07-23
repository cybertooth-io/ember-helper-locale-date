import { helper as buildHelper } from '@ember/component/helper';
import formatUtil from '../utils/format-util';


/**
 * The formatting options for the default Locale.
 * @type {{hour: string, minute: string}}
 */
const defaultOptions = {
  day: 'numeric',
  month: 'numeric',
  year: 'numeric'
};

/**
 * Instantiate a basic NumberFormat in the browser's locale that will be used for basic formatting.
 * @type {Intl.NumberFormat}
 */
const formatter = new Intl.DateTimeFormat(undefined, defaultOptions);

export function dateShortL([date], options) {
  return formatUtil(formatter, defaultOptions, date, options);
}

export default buildHelper(dateShortL);
