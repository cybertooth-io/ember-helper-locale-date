import { htmlSafe } from '@ember/template';
import Route from '@ember/routing/route';

export default Route.extend({
  title(tokens) {
    return tokens
      .reverse()
      .map(function (token) {
        return htmlSafe(token.toString());
      })
      .join(' - ');
  },
  titleToken() {
    return 'ember-helper-locale-date';
  }
});
