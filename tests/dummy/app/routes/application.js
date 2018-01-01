import Ember from 'ember';

export default Ember.Route.extend({
  title(tokens) {
    return tokens
      .reverse()
      .map(function (token) {
        return Ember.String.htmlSafe(token.toString());
      })
      .join(' - ');
  },
  titleToken() {
    return 'ember-helper-locale-date';
  }
});
