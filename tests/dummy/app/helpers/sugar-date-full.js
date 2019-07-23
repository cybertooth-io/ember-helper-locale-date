import { helper as buildHelper } from '@ember/component/helper';
import Sugar from 'ember-sugar-date';

export function sugarDateFull([date]) {
  return Sugar.Date.full(date);
}

export default buildHelper(sugarDateFull);
