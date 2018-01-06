<section markdown="1" class="container js-has-badges">

# Documentation 

![stability-stable](https://img.shields.io/badge/stability-stable-green.svg) [![npm version](http://badge.fury.io/js/ember-helper-locale-date.svg)](http://badge.fury.io/js/ember-helper-locale-date){:target="_blank"} ![downloads](https://img.shields.io/npm/dy/ember-helper-locale-date.svg) [![CircleCI](http://circleci.com/gh/cybertoothca/ember-helper-locale-date.svg?style=shield)](http://circleci.com/gh/cybertoothca/ember-helper-locale-date){:target="_blank"} [![Code Climate](http://codeclimate.com/github/cybertoothca/ember-helper-locale-date/badges/gpa.svg)](http://codeclimate.com/github/cybertoothca/ember-helper-locale-date){:target="_blank"} ![Dependencies](http://david-dm.org/cybertoothca/ember-helper-locale-date.svg) [![ember-observer-badge](http://emberobserver.com/badges/ember-helper-locale-date.svg)](http://emberobserver.com/addons/ember-helper-locale-date){:target="_blank"} ![Ember-1.13.0+](https://embadge.io/v1/badge.svg?start=1.13.0) [![License](http://img.shields.io/npm/l/ember-helper-locale-date.svg)](https://github.com/cybertoothca/ember-helper-locale-date/blob/master/LICENSE.md){:target="_blank"}

</section>

----

<section markdown="1" class="container"> 

## Purpose

These helpers are optimized to natively format dates according to the website visitor's locale.  Singleton 
`Intl.DateTimeFormat` instances are used for basic formatting.  Once you pass options into
the helper all optimization is tossed as the date instance's `toLocaleString()` method is invoked 
rather than the more desirable `Intl.DateTimeFormat` instance's `format()` method.

### Why So Many Different Helpers?

Under the hood, each helper owns a Singleton `Intl.DateTimeFormat` instance that is solely 
responsible for formatting a date to a specific style.  Because of this, the helper re-uses
the `Intl.DateTimeFormat` over and over again.  This is what makes it the optimal native 
formatter.

This technique for optimal formatting is part of 
**[the MDN documentation related to the `toLocaleString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString#Performance){:target="_blank"}** 
function.


#### [Performance](http://demo.ember-helper-locale-date.cybertooth.io/performance)

[http://demo.ember-helper-locale-date.cybertooth.io/performance](http://demo.ember-helper-locale-date.cybertooth.io/performance)

</section>

----

<section markdown="1" class="container"> 

## Requirements

* **Ember >= 1.13.0**
* **A modern browser** - Any modern browser that support the 
[`Intl.DateTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat){:target="_blank"}
object.  Check out the browser compatibility chart at the bottom of 
**[this MDN page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat#Browser_compatibility){:target="_blank"}**
for more information.

### Dependencies

_None_.

</section>

----

<section markdown="1" class="container"> 

## Installation

```bash
ember install ember-helper-locale-date
```

### Upgrading

When working through the Ember upgrade process, I recommend completely re-installing this
add-on in order to retrieve the latest version.

```bash
ember install ember-helper-locale-date
```

</section>

----

<section markdown="1" class="container"> 

## Usage

Use the `date-format-lt`, `date-format-lts`, `date-format-l`, etc... helpers that accept a
date argument and any number of key=value options. Options are described below.  It is frowned upon
to use options as all optimizations are thrown out the window the moment an option is passed.

### Demo

[http://demo.ember-helper-locale-date.cybertooth.io](http://demo.ember-helper-locale-date.cybertooth.io)

### HBS
 
Here are a few examples; **see the
[demo website](http://demo.ember-helper-locale-date.cybertooth.io) 
for the full set of helpers with live examples:**

```handlebars {% raw %}
{{date-format-lt date}}     {{!-- "11:13 PM" --}}

{{date-format-ltsz date}}   {{!-- "11:13:50 PM MST" --}}

{{date-format-ll date}}     {{!-- "January 3, 2018" --}}

{{date-short-lll date}}     {{!-- "Jan 3, 2018, 11:16 PM" --}}
``` {% endraw %}

#### Empty Strings Returned For Non-Dates

Regardless of the helper, non-date arguments will return empty string.

```handlebars {% raw %}
{{date-format-lt}}          {{!-- "" --}}

{{date-short-l "abc"}}      {{!-- "" --}}

{{date-format-llll 123}}    {{!-- "" --}}
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
```

```javascript
// using the dateFormatL helper
import { dateFormatL } from 'ember-helper-locale-date/helpers/date-format-l';
// ... somewhere in your js:
dateFormatL(new Date(Date.UTC(2001, 8, 11, 12, 46, 40))); // "09/11/2001"
```

```javascript
// using the dateShortLL helper
import { dateShortLL } from 'ember-helper-locale-date/helpers/date-short-ll';
// ... somewhere in your js:
dateShortLL(new Date(Date.UTC(2001, 8, 11, 12, 46, 40))); // "Sep 11, 2001"
```

</section>

----

<section markdown="1" class="container"> 

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

<div class="well" markdown="1">
[The aforementioned options are a copy-paste from the MDN docs concerning the `Intl.DateTimeFormat` object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat){:target="_blank"}.

I suggest checking back to the original docs periodically for potential updates to these options.
</div>

</section>

----

<section markdown="1" class="container"> 

## Tested Against

[![ember-lts-1.13.0](https://img.shields.io/badge/ember--try-ember--lts--1.13.0-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-helper-locale-date)
[![ember-lts-2.4](https://img.shields.io/badge/ember--try-ember--lts--2.4-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-helper-locale-date)
[![ember-lts-2.8](https://img.shields.io/badge/ember--try-ember--lts--2.8-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-helper-locale-date)
[![ember-lts-2.12](https://img.shields.io/badge/ember--try-ember--lts--2.12-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-helper-locale-date)

[![ember-release](https://img.shields.io/badge/ember--try-ember--release-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-helper-locale-date)
[![ember-beta](https://img.shields.io/badge/ember--try-ember--beta-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-helper-locale-date)
[![ember-canary](https://img.shields.io/badge/ember--try-ember--canary-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-helper-locale-date)

</section>
