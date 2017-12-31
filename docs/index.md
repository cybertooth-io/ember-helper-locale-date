# ember-helper-locale-date

[![npm version](http://badge.fury.io/js/ember-helper-locale-date.svg)](http://badge.fury.io/js/ember-helper-locale-date) ![downloads](https://img.shields.io/npm/dy/ember-helper-locale-date.svg) [![CircleCI](http://circleci.com/gh/cybertoothca/ember-helper-locale-date.svg?style=shield)](http://circleci.com/gh/cybertoothca/ember-helper-locale-date) [![Code Climate](http://codeclimate.com/github/cybertoothca/ember-helper-locale-date/badges/gpa.svg)](http://codeclimate.com/github/cybertoothca/ember-helper-locale-date) ![Dependencies](http://david-dm.org/cybertoothca/ember-helper-locale-date.svg) [![ember-observer-badge](http://emberobserver.com/badges/ember-helper-locale-date.svg)](http://emberobserver.com/addons/ember-helper-locale-date) [![License](http://img.shields.io/npm/l/ember-helper-locale-date.svg)](https://github.com/cybertoothca/ember-helper-locale-date/blob/master/LICENSE.md)

These helpers are optimized to format numbers according to the website visitor's locale.  A 
singleton `Intl.NumberFormat` is used for all basic formatting.  Once a customized 
formatting option (e.g. `useGrouping=false`) is passed to the helper, the number 
instance's `toLocaleString()` method is invoked instead of the singleton `Intl.NumberFormat`.
`toLocaleString()` is less performant.

## Requirements

* Ember >= 1.13.0
* A modern browser

### Dependencies

All modern browsers support the [`Intl.NumberFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat)
object and this add-on
depends on that module and object.  Check out the [browser compatibility](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat) 
chart at the bottom of this page for more information.

## Installation

```bash
ember install ember-helper-locale-date
```

## Upgrading

When working through the Ember upgrade process, I recommend completely re-installing this
add-on in order to retrieve the latest version.

```bash
ember install ember-helper-locale-date
```

## Usage

Use the `currency-format`, `decimal-format`, or `percent-format` helpers that accept a
number argument and any number of key=value options; the options are described below.

### HBS
 
Here are some examples of using the helper in your hbs files: 

```handlebars {% raw %}
{{currency-format}}  {{!-- "" --}}
{{currency-format "abc"}}  {{!-- "" --}}
{{currency-format 123}}  {{!-- "$123.00" --}}
{{currency-format 123456}}  {{!-- "$123,456.00" --}}
{{currency-format 123.45678}}  {{!-- "$123.46" --}}
{{currency-format 1234 minimumFractionDigits=3}}  {{!-- "$1,234.000" --}}
``` {% endraw %}


```handlebars {% raw %}
{{decimal-format}}  {{!-- "" --}}
{{decimal-format "abc"}}  {{!-- "" --}}
{{decimal-format 123}}  {{!-- "123" --}}
{{decimal-format 123456}}  {{!-- "123,456" --}}
{{decimal-format 123.45678}}  {{!-- "123.457" --}}
{{decimal-format 1234 minimumFractionDigits=3}}  {{!-- "1,234.000" --}}
``` {% endraw %}

```handlebars {% raw %}
{{percent-format}}  {{!-- "" --}}
{{percent-format "abc"}}  {{!-- "" --}}
{{percent-format 0.123}}  {{!-- "12%" --}}
{{percent-format 123.456}}  {{!-- "12346%" --}}
{{percent-format 0.4567 minimumFractionDigits=1}}  {{!-- "45.7%" --}}
``` {% endraw %}

### JS

In some cases you may want to format numbers in your javascript.  Super easy, to reuse these
helpers there:

```javascript
// using the currencyFormat helper
import { currencyFormat } from 'ember-helper-locale-date/helpers/currency-format';
// ... somewhere in your js:
currencyFormat(123.456); // "$123.46"
currencyFormat(123.456, { currency: 'EUR'}); // "€123.46"

// using the decimalFormat helper
import { decimalFormat } from 'ember-helper-locale-date/helpers/decimal-format';
// ... somewhere in your js:
decimalFormat(123456); // "123,456"
decimalFormat(123456, { useGrouping: false }); // "123456"
decimalFormat(123.456789); // "123.457"

// using the percentFormat helper
import { percentFormat } from 'ember-helper-locale-date/helpers/percent-format';
// ... somewhere in your js:
percentFormat(0.123); // "12%"
```

## Options

**`currency`**
The currency to use in currency formatting. Possible values are the ISO 4217 currency codes, such as "USD" for the US dollar, "EUR" for the euro, or "CNY" for the Chinese RMB — see the Current currency & funds code list. There is no default value; if the style is "currency", the currency property must be provided.

**`currencyDisplay`**
How to display the currency in currency formatting. Possible values are "symbol" to use a localized currency symbol such as €, "code" to use the ISO currency code, "name" to use a localized currency name such as "dollar"; the default is "symbol".

**`useGrouping`**
Whether to use grouping separators, such as thousands separators or thousand/lakh/crore separators. Possible values are true and false; the default is true.
The following properties fall into two groups: minimumIntegerDigits, minimumFractionDigits, and maximumFractionDigits in one group, minimumSignificantDigits and maximumSignificantDigits in the other. If at least one property from the second group is defined, then the first group is ignored.

**`minimumIntegerDigits`**
The minimum number of integer digits to use. Possible values are from 1 to 21; the default is 1.

**`minimumFractionDigits`**
The minimum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number and percent formatting is 0; the default for currency formatting is the number of minor unit digits provided by the ISO 4217 currency code list (2 if the list doesn't provide that information).

**`maximumFractionDigits`**
The maximum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number formatting is the larger of minimumFractionDigits and 3; the default for currency formatting is the larger of minimumFractionDigits and the number of minor unit digits provided by the ISO 4217 currency code list (2 if the list doesn't provide that information); the default for percent formatting is the larger of minimumFractionDigits and 0.

**`minimumSignificantDigits`**
The minimum number of significant digits to use. Possible values are from 1 to 21; the default is 1.

**`maximumSignificantDigits`**
The maximum number of significant digits to use. Possible values are from 1 to 21; the default is minimumSignificantDigits.

<small>_The aforementioned options are derived from 
[`Intl.NumberFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat)._</small>

# Tested Against

[![ember-lts-2.4](https://img.shields.io/badge/ember--try-ember--lts--2.4-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-helper-locale-date)
[![ember-lts-2.8](https://img.shields.io/badge/ember--try-ember--lts--2.8-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-helper-locale-date)
[![ember-lts-2.12](https://img.shields.io/badge/ember--try-ember--lts--2.12-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-helper-locale-date)

[![ember-release](https://img.shields.io/badge/ember--try-ember--release-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-helper-locale-date)
[![ember-beta](https://img.shields.io/badge/ember--try-ember--beta-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-helper-locale-date)
[![ember-canary](https://img.shields.io/badge/ember--try-ember--canary-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-helper-locale-date)
