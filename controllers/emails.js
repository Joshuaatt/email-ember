Email.EmailsController = Ember.Controller.extend({
  isBodyShowing: false,
  actions: {
    showBody: function() {
      this.set('isBodyShowing', true);
    },
    hideBody: function() {
      this.set('isBodyShowing', false);
    }
  }

});
