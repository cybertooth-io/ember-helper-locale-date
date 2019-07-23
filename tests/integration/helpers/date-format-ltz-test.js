import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('helper:date-format-ltz', function(hooks) {
  setupRenderingTest(hooks);

  test('when date is missing', async function(assert) {
    await render(hbs`{{date-format-ltz}}`);

    assert.equal(find('*').textContent.trim(), '');
  });

  test('when date is undefined', async function(assert) {
    this.set('date', undefined);

    await render(hbs`{{date-format-ltz date}}`);

    assert.equal(find('*').textContent.trim(), '');
  });

  test('when date is a string', async function(assert) {
    this.set('date', 'abc');

    await render(hbs`{{date-format-ltz date}}`);

    assert.equal(find('*').textContent.trim(), '');
  });

  test('when date is a number', async function(assert) {
    this.set('date', 123);

    await render(hbs`{{date-format-ltz date}}`);

    assert.equal(find('*').textContent.trim(), '');
  });

  test('when default formatted', async function(assert) {
    this.set('date', new Date(Date.UTC(2001, 8, 11, 12, 46, 40)));  // September 11, 2001 8:46:40 EDT

    await render(hbs`{{date-format-ltz date}}`);

    assert.equal(find('*').textContent.trim(),
      new Date(Date.UTC(2001, 8, 11, 12, 46, 40)).toLocaleString(undefined, {
        hour: 'numeric',
        minute: 'numeric',
        timeZoneName: 'short'
      }));
  });

  test('when custom formatted', async function(assert) {
    this.set('date', new Date(Date.UTC(2001, 8, 11, 12, 46, 40)));  // September 11, 2001 8:46:40 EDT

    await render(hbs`{{date-format-ltz date timeZone="Pacific/Honolulu"}}`);

    assert.equal(find('*').textContent.trim(),
      new Date(Date.UTC(2001, 8, 11, 12, 46, 40)).toLocaleString(undefined, {
        hour: 'numeric',
        minute: 'numeric',
        timeZone: 'Pacific/Honolulu',
        timeZoneName: 'short'
      }));
  });
});
