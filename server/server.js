// Published Items

Meteor.publish("goals", function () {
    return Goals.find({owner: this.userId});
  });