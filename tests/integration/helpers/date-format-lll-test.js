import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('date-format-lll', 'helper:date-format-lll', {
  integration: true
});

test('when date is missing', function (assert) {
  this.render(hbs`{{date-format-lll}}`);

  assert.equal(this.$().text().trim(), '');
});

test('when date is undefined', function (assert) {
  this.set('date', undefined);

  this.render(hbs`{{date-format-lll date}}`);

  assert.equal(this.$().text().trim(), '');
});

test('when date is a string', function (assert) {
  this.set('date', 'abc');

  this.render(hbs`{{date-format-lll date}}`);

  assert.equal(this.$().text().trim(), '');
});

test('when date is a number', function (assert) {
  this.set('date', 123);

  this.render(hbs`{{date-format-lll date}}`);

  assert.equal(this.$().text().trim(), '');
});

test('when default formatted', function (assert) {
  this.set('date', new Date(Date.UTC(2001, 8, 11, 12, 46, 40)));  // September 11, 2001 8:46:40 EDT

  this.render(hbs`{{date-format-lll date}}`);

  assert.equal(this.$().text().trim(),
    new Date(Date.UTC(2001, 8, 11, 12, 46, 40)).toLocaleString(undefined, {
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      month: 'long',
      year: 'numeric'
    }));
});

test('when custom formatted', function (assert) {
  this.set('date', new Date(Date.UTC(2001, 8, 11, 12, 46, 40)));  // September 11, 2001 8:46:40 EDT

  this.render(hbs`{{date-format-lll date timeZoneName="short"}}`);

  assert.equal(this.$().text().trim(),
    new Date(Date.UTC(2001, 8, 11, 12, 46, 40)).toLocaleString(undefined, {
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      month: 'long',
      timeZoneName: 'short',
      year: 'numeric'
    }));
});
