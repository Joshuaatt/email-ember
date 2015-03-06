Email.EmailsController = Ember.ObjectController.extend({
  isBodyShowing: false,
  actions: {
    showBody: function() {
      this.set('isBodyShowing', true);
      this.get('model');
    },
    hideBody: function() {
      this.set('isBodyShowing', false);
    }
  }

});
