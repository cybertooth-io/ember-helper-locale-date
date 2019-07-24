import { assign } from '@ember/polyfills';
import { isEmpty, isNone, typeOf } from '@ember/utils';

export default function formatUtil(formatter, defaultOptions, date, options = {}) {
  if (isEmpty(date) || typeOf(date) !== 'date') {
    return '';
  }

  if (isNone(options) || (Object.entries(options).length === 0 && options.constructor === Object)) {
    return formatter.format(date);
  } else {
    return date.toLocaleString(undefined, assign(assign({}, defaultOptions), options));
  }
}
