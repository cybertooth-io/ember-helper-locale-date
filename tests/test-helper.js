import Application from '../app';
import config from '../config/environment'; // eslint-disable-line import/no-relative-parent-imports
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
