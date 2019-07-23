import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('helper:date-format-l', function(hooks) {
  setupRenderingTest(hooks);

  test('when date is missing', async function(assert) {
    await render(hbs`{{date-format-l}}`);

    assert.equal(find('*').textContent.trim(), '');
  });

  test('when date is undefined', async function(assert) {
    this.set('date', undefined);

    await render(hbs`{{date-format-l date}}`);

    assert.equal(find('*').textContent.trim(), '');
  });

  test('when date is a string', async function(assert) {
    this.set('date', 'abc');

    await render(hbs`{{date-format-l date}}`);

    assert.equal(find('*').textContent.trim(), '');
  });

  test('when date is a number', async function(assert) {
    this.set('date', 123);

    await render(hbs`{{date-format-l date}}`);

    assert.equal(find('*').textContent.trim(), '');
  });

  test('when default formatted', async function(assert) {
    this.set('date', new Date(Date.UTC(2001, 8, 11, 12, 46, 40)));  // September 11, 2001 8:46:40 EDT

    await render(hbs`{{date-format-l date}}`);

    assert.equal(find('*').textContent.trim(),
      new Date(Date.UTC(2001, 8, 11, 12, 46, 40)).toLocaleString(undefined, {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      }));
  });

  test('when custom formatted', async function(assert) {
    this.set('date', new Date(Date.UTC(2001, 8, 11, 12, 46, 40)));  // September 11, 2001 8:46:40 EDT

    await render(hbs`{{date-format-l date timeZoneName="short"}}`);

    assert.equal(find('*').textContent.trim(),
      new Date(Date.UTC(2001, 8, 11, 12, 46, 40)).toLocaleString(undefined, {
        day: '2-digit',
        month: '2-digit',
        timeZoneName: 'short',
        year: 'numeric'
      }));
  });
});
