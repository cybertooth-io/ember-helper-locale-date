import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('helper:date-short-llll', function(hooks) {
  setupRenderingTest(hooks);

  test('when date is missing', async function(assert) {
    await render(hbs`{{date-short-llll}}`);

    assert.equal(this.$().text().trim(), '');
  });

  test('when date is undefined', async function(assert) {
    this.set('date', undefined);

    await render(hbs`{{date-short-llll date}}`);

    assert.equal(this.$().text().trim(), '');
  });

  test('when date is a string', async function(assert) {
    this.set('date', 'abc');

    await render(hbs`{{date-short-llll date}}`);

    assert.equal(this.$().text().trim(), '');
  });

  test('when date is a number', async function(assert) {
    this.set('date', 123);

    await render(hbs`{{date-short-llll date}}`);

    assert.equal(this.$().text().trim(), '');
  });

  test('when default formatted', async function(assert) {
    this.set('date', new Date(Date.UTC(2001, 8, 11, 12, 46, 40)));  // September 11, 2001 8:46:40 EDT

    await render(hbs`{{date-short-llll date}}`);

    assert.equal(this.$().text().trim(),
      new Date(Date.UTC(2001, 8, 11, 12, 46, 40)).toLocaleString(undefined, {
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        month: 'short',
        weekday: 'short',
        year: 'numeric'
      }));
  });

  test('when custom formatted', async function(assert) {
    this.set('date', new Date(Date.UTC(2001, 8, 11, 12, 46, 40)));  // September 11, 2001 8:46:40 EDT

    await render(hbs`{{date-short-llll date timeZoneName="short"}}`);

    assert.equal(this.$().text().trim(),
      new Date(Date.UTC(2001, 8, 11, 12, 46, 40)).toLocaleString(undefined, {
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        month: 'short',
        timeZoneName: 'short',
        weekday: 'short',
        year: 'numeric'
      }));
  });
});
