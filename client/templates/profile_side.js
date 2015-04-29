
Template.profile_side.helpers({
	profile: function() {
		return Meteor.user().profile;
	},
	goalCount: function() {
      return Goals.find().count();
    }
});
