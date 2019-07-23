import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('helper:date-format-llllz', function(hooks) {
  setupRenderingTest(hooks);

  test('when date is missing', async function(assert) {
    await render(hbs`{{date-format-llllz}}`);

    assert.dom('*').hasText('');
  });

  test('when date is undefined', async function(assert) {
    this.set('date', undefined);

    await render(hbs`{{date-format-llllz date}}`);

    assert.dom('*').hasText('');
  });

  test('when date is a string', async function(assert) {
    this.set('date', 'abc');

    await render(hbs`{{date-format-llllz date}}`);

    assert.dom('*').hasText('');
  });

  test('when date is a number', async function(assert) {
    this.set('date', 123);

    await render(hbs`{{date-format-llllz date}}`);

    assert.dom('*').hasText('');
  });

  test('when default formatted', async function(assert) {
    this.set('date', new Date(Date.UTC(2001, 8, 11, 12, 46, 40)));  // September 11, 2001 8:46:40 EDT

    await render(hbs`{{date-format-llllz date}}`);

    assert.dom('*').hasText(new Date(Date.UTC(2001, 8, 11, 12, 46, 40)).toLocaleString(undefined, {
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      month: 'long',
      timeZoneName: 'short',
      weekday: 'long',
      year: 'numeric'
    }));
  });

  test('when custom formatted', async function(assert) {
    this.set('date', new Date(Date.UTC(2001, 8, 11, 12, 46, 40)));  // September 11, 2001 8:46:40 EDT

    await render(hbs`{{date-format-llllz date year="2-digit"}}`);

    assert.dom('*').hasText(new Date(Date.UTC(2001, 8, 11, 12, 46, 40)).toLocaleString(undefined, {
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      month: 'long',
      timeZoneName: 'short',
      weekday: 'long',
      year: '2-digit'
    }));
  });
});
