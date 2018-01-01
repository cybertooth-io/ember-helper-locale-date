# ember-helper-locale-date

[![npm version](http://badge.fury.io/js/ember-helper-locale-date.svg)](http://badge.fury.io/js/ember-helper-locale-date){:target="_blank"} ![downloads](https://img.shields.io/npm/dy/ember-helper-locale-date.svg) [![CircleCI](http://circleci.com/gh/cybertoothca/ember-helper-locale-date.svg?style=shield)](http://circleci.com/gh/cybertoothca/ember-helper-locale-date){:target="_blank"} [![Code Climate](http://codeclimate.com/github/cybertoothca/ember-helper-locale-date/badges/gpa.svg)](http://codeclimate.com/github/cybertoothca/ember-helper-locale-date){:target="_blank"} ![Dependencies](http://david-dm.org/cybertoothca/ember-helper-locale-date.svg) [![ember-observer-badge](http://emberobserver.com/badges/ember-helper-locale-date.svg)](http://emberobserver.com/addons/ember-helper-locale-date){:target="_blank"} [![License](http://img.shields.io/npm/l/ember-helper-locale-date.svg)](https://github.com/cybertoothca/ember-helper-locale-date/blob/master/LICENSE.md){:target="_blank"}

These helpers are optimized to natively format dates according to the website visitor's locale.  Singleton 
`Intl.DateTimeFormat` instances are used for all basic formatting.  Once you pass options into
the helper all optimization is tossed as the date 
instance's `toLocaleString()` method is invoked instead of the singleton `Intl.DateTimeFormat`.
`toLocaleString()`.

## Requirements

* Ember >= 1.13.0
* A modern browser

### Dependencies

Any modern browser that support the 
[`Intl.DateTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat){:target="_blank"}
object.  Check out the browser compatibility chart at the bottom of 
[this page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat){:target="_blank"}
for more information.

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

Use the `date-format-lt`, `date-format-lts`, `date-format-l`, etc... helpers that accept a
date argument and any number of key=value options. Options are described below.  It is frowned upon
to use options as all optimizations are thrown out the window the moment an option is passed.

### HBS
 
Here are some examples of using the helper in your hbs files: 

#### Empty Strings Returned For Non-Dates

Regardless of the helper, non-date arguments will return empty string.

```handlebars {% raw %}
{{date-format-lt}}  {{!-- "" --}}
{{date-format-l "abc"}}  {{!-- "" --}}
{{date-format-llll 123}}  {{!-- "" --}}
``` {% endraw %}

#### Standard Formatters

The long-hand formatting based on the website vistor's locale and timezone.  Assume for these examples
that the website vistor's locale is "en_US" and their timezone is "America/New_York".

You may recognize that these helpers are akin to MomentJs' localized format names (e.g. LT, LTS, LL, etc.).

```handlebars {% raw %}
{{!-- !!!For these examples!!! --}}
{{!-- Assume the date argument is September 11, 2001 12:46:40 UTC (`new Date(Date.UTC(2001, 8, 11, 12, 46, 40))`) --}}
{{!-- Assume your locale is "en_US" --}}
{{!-- Assume your system timezone is "America/New_York" --}}

{{date-format-lt date}}  {{!-- "8:46 AM" --}}

{{date-format-ltz date}}  {{!-- "8:46 AM EDT" --}}

{{date-format-lts date}}  {{!-- "8:46:40 AM" --}}

{{date-format-ltsz date}}  {{!-- "8:46:40 AM EDT" --}}

{{date-format-l date}}  {{!-- "09/11/2001" --}}

{{date-format-ll date}}  {{!-- "September 11, 2001" --}}

{{date-format-lll date}}  {{!-- "September 11, 2001 8:46 AM" --}}

{{date-format-lllz date}}  {{!-- "September 11, 2001 8:46 AM EDT" --}}

{{date-format-llll date}}  {{!-- "Thursday, September 11, 2001 8:46 AM" --}}

{{date-format-llllz date}}  {{!-- "Thursday, September 11, 2001 8:46 AM EDT" --}}
``` {% endraw %}

### JS

In some cases you may want to format dates in your javascript; it is trival to use
these helpers there.  Assume for the following examples that the website 
vistor's locale is "en_US" and their timezone is "America/New_York".

```javascript
// using the dateFormatLt helper
import { dateFormatLt } from 'ember-helper-locale-date/helpers/date-format-lt';
// ... somewhere in your js:
dateFormatLt(new Date(Date.UTC(2001, 8, 11, 12, 46, 40))); // "8:46 AM"

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

**`localeMatcher`**

The locale matching algorithm to use. Possible values are "lookup" and "best fit"; the default is "best fit". For information about this option, see the Intl page.

**`timeZone`**

The time zone to use. The only value implementations must recognize is "UTC"; the default is the runtime's default time zone. Implementations may also recognize the time zone names of the IANA time zone database, such as "Asia/Shanghai", "Asia/Kolkata", "America/New_York".

**`hour12`**

Whether to use 12-hour time (as opposed to 24-hour time). Possible values are true and false; the default is locale dependent. This option overrides the hc language tag and/or the hourCycle option in case both are present.

**`hourCycle`**

The hour cycle to use. Possible values are "h11", "h12", "h23", or "h24". This option overrides the hc language tag, if both are present, and the hour12 option takes precedence in case both options have been specified.

**`formatMatcher`**

The format matching algorithm to use. Possible values are "basic" and "best fit"; the default is "best fit". See the following paragraphs for information about the use of this property.

The following properties describe the date-time components to use in formatted output, and their desired representations. Implementations are required to support at least the following subsets:

* weekday, year, month, day, hour, minute, second
* weekday, year, month, day
* year, month, day
* year, month
* month, day
* hour, minute, second
* hour, minute

Implementations may support other subsets, and requests will be negotiated against all available subset-representation combinations to find the best match. Two algorithms are available for this negotiation and selected by the formatMatcher property: A fully specified "basic" algorithm and an implementation dependent "best fit" algorithm.

**`weekday`**

The representation of the weekday. Possible values are "narrow", "short", "long".

**`era`**

The representation of the era. Possible values are "narrow", "short", "long".

**`year`**

The representation of the year. Possible values are "numeric", "2-digit".

**`month`**

The representation of the month. Possible values are "numeric", "2-digit", "narrow", "short", "long".

**`day`**

The representation of the day. Possible values are "numeric", "2-digit".

**`hour`**

The representation of the hour. Possible values are "numeric", "2-digit".

**`minute`**

The representation of the minute. Possible values are "numeric", "2-digit".

**`second`**

The representation of the second. Possible values are "numeric", "2-digit".

**`timeZoneName`**

The representation of the time zone name. Possible values are "short", "long".

The default value for each date-time component property is undefined, but if all component properties are undefined, then year, month, and day are assumed to be "numeric".

<small>_The aforementioned options are derived from 
[`Intl.DateTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat)._</small>

# Tested Against

[![ember-lts-2.4](https://img.shields.io/badge/ember--try-ember--lts--2.4-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-helper-locale-date)
[![ember-lts-2.8](https://img.shields.io/badge/ember--try-ember--lts--2.8-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-helper-locale-date)
[![ember-lts-2.12](https://img.shields.io/badge/ember--try-ember--lts--2.12-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-helper-locale-date)

[![ember-release](https://img.shields.io/badge/ember--try-ember--release-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-helper-locale-date)
[![ember-beta](https://img.shields.io/badge/ember--try-ember--beta-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-helper-locale-date)
[![ember-canary](https://img.shields.io/badge/ember--try-ember--canary-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-helper-locale-date)
