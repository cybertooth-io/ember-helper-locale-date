# ember-helper-locale-date

![stability-stable](https://img.shields.io/badge/stability-stable-green.svg) [![npm version](http://badge.fury.io/js/ember-helper-locale-date.svg)](http://badge.fury.io/js/ember-helper-locale-date) ![downloads](https://img.shields.io/npm/dy/ember-helper-locale-date.svg) [![CircleCI](http://circleci.com/gh/cybertoothca/ember-helper-locale-date.svg?style=shield)](http://circleci.com/gh/cybertoothca/ember-helper-locale-date) [![Code Climate](http://codeclimate.com/github/cybertoothca/ember-helper-locale-date/badges/gpa.svg)](http://codeclimate.com/github/cybertoothca/ember-helper-locale-date) ![Dependencies](http://david-dm.org/cybertoothca/ember-helper-locale-date.svg) [![ember-observer-badge](http://emberobserver.com/badges/ember-helper-locale-date.svg)](http://emberobserver.com/addons/ember-helper-locale-date) [![License](http://img.shields.io/npm/l/ember-helper-locale-date.svg)](LICENSE.md)

## [DOCS](http://docs.ember-helper-locale-date.cybertooth.io)

## [DEMO](http://ember-helper-locale-date.cybertooth.io)

### Tested Against

[![ember-lts-2.4](https://img.shields.io/badge/ember--try-ember--lts--2.4-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-helper-locale-date)
[![ember-lts-2.8](https://img.shields.io/badge/ember--try-ember--lts--2.8-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-helper-locale-date)
[![ember-lts-2.12](https://img.shields.io/badge/ember--try-ember--lts--2.12-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-helper-locale-date)

[![ember-release](https://img.shields.io/badge/ember--try-ember--release-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-helper-locale-date)
[![ember-beta](https://img.shields.io/badge/ember--try-ember--beta-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-helper-locale-date)
[![ember-canary](https://img.shields.io/badge/ember--try-ember--canary-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-helper-locale-date)

# Collaboration Information

This README outlines the details of collaborating on this Ember add-on.

## Installation

* `git clone git@github.com:cybertoothca/ember-helper-locale-date.git`
* `cd ember-helper-locale-date`


### With NPM

```
npm install
```

### With Yarn

```
yarn
```

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your add-on against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com](https://ember-cli.com).

# Linking This Add-on For Local Testing

## Linking

1. From the command line at the root of __this__ project run the
`npm link` command to _link_ this add-on within your local
node repository.
1. From the _other_ Ember project that you wish to test this add-on
in, execute the following command:
`npm link ember-helper-locale-date`.
1. Now in that same _other_ Ember project, you should go into the
`package.json` and add the ember add-on with the version _*_.  It will
look something like this: `"ember-helper-locale-date": "*"`.  Now
when/if you execute `npm install` on this _other_ project it
will know to look for the linked add-on rather than fetch it from
the central repository.

## Unlinking

1. Remove the add-on from your local node repository with the following
command (that can be run anywhere):
`npm uninstall -g ember-helper-locale-date`
1. Remove the reference to the `ember-helper-locale-date`
in your _other_ project's `package.json`.
1. Run an `npm prune` and `bower prune` from the root of your _other_ project's command line.
