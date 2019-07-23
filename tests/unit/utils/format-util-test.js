import formatUtil from 'dummy/utils/format-util';
import { module, test } from 'qunit';

module('Unit | Utility | format util');

const formatter = new Intl.DateTimeFormat(undefined);
const testDate = new Date(Date.UTC(2001, 8, 11, 12, 46, 40));

test('it works', function (assert) {
  let result = formatUtil();
  assert.equal(result, '');
});

test('when date is undefined', function (assert) {
  assert.equal(formatUtil(new Intl.DateTimeFormat(undefined), {}, undefined, {}), '');
});

test('when date is a string', function (assert) {
  assert.equal(formatUtil(new Intl.DateTimeFormat(undefined), {}, 'abc', {}), '');
});

test('when date is a number', function (assert) {
  assert.equal(formatUtil(new Intl.DateTimeFormat(undefined), {}, 123, {}), '');
});

test('when date is Sept 11', function (assert) {
  assert.equal(formatUtil(formatter, {}, testDate, {}), formatter.format(testDate));
});

test('when default options is null and custom format requested', function (assert) {
  assert.equal(formatUtil(formatter, null, testDate, {timeZoneName: 'short'}),
    testDate.toLocaleString(undefined, {timeZoneName: 'short'}));
});

test('when options is null supplied formatter is invoked', function (assert) {
  assert.equal(formatUtil(formatter, {}, testDate, null), formatter.format(testDate));
});
