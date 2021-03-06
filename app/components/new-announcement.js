import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnnouncement: false,
  actions: {
    announcementFormShow() {
      this.set('addNewAnnouncement', true);
    },

    saveAnnouncement1() {
      var params = {
        messsage: this.get('announcement'),
      };
      this.set("addNewAnnouncement", false);
      this.sendAction('saveAnnouncement2', params);
    }
  }
});
