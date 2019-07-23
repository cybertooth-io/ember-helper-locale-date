import $ from 'jquery';
import { isEmpty, typeOf } from '@ember/utils';

export default function formatUtil(formatter, defaultOptions, date, options) {
  if (isEmpty(date) || typeOf(date) !== 'date') {
    return '';
  }
  if ($.isEmptyObject(options)) {
    return formatter.format(date);
  } else {
    return date.toLocaleString(undefined, $.extend(defaultOptions, options));
  }
}
