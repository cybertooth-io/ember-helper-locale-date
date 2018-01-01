import {moduleForComponent, test} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('date-short-ll', 'helper:date-short-ll', {
  integration: true
});

test('when date is missing', function (assert) {
  this.render(hbs`{{date-short-ll}}`);

  assert.equal(this.$().text().trim(), '');
});

test('when date is undefined', function (assert) {
  this.set('date', undefined);

  this.render(hbs`{{date-short-ll date}}`);

  assert.equal(this.$().text().trim(), '');
});

test('when date is a string', function (assert) {
  this.set('date', 'abc');

  this.render(hbs`{{date-short-ll date}}`);

  assert.equal(this.$().text().trim(), '');
});

test('when date is a number', function (assert) {
  this.set('date', 123);

  this.render(hbs`{{date-short-ll date}}`);

  assert.equal(this.$().text().trim(), '');
});

test('when default formatted', function (assert) {
  this.set('date', new Date(Date.UTC(2001, 8, 11, 12, 46, 40)));  // September 11, 2001 8:46:40 EDT

  this.render(hbs`{{date-short-ll date}}`);

  assert.equal(this.$().text().trim(),
    new Date(Date.UTC(2001, 8, 11, 12, 46, 40)).toLocaleString(undefined, {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }));
});

test('when custom formatted', function (assert) {
  this.set('date', new Date(Date.UTC(2001, 8, 11, 12, 46, 40)));  // September 11, 2001 8:46:40 EDT

  this.render(hbs`{{date-short-ll date timeZoneName="short"}}`);

  assert.equal(this.$().text().trim(),
    new Date(Date.UTC(2001, 8, 11, 12, 46, 40)).toLocaleString(undefined, {
      day: 'numeric',
      month: 'short',
      timeZoneName: 'short',
      year: 'numeric'
    }));
});
