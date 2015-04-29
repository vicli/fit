Template.goal_form.events({
    "submit form": function(event, template) {

        if (! Meteor.userId()) {
          throw new Meteor.Error("not-authorized");
        }
        event.preventDefault();
        Goals.insert({
            objective: template.find(".objective").value,
            money: template.find(".money").value,
            goaltime: template.find(".goaltime").value,
            createdAt: new Date(),
            owner: Meteor.userId()
        });
        Meteor.call('submitGoal',objective, money, goaltime, owner);
  
        console.log("inserted");
        template.find(".objective").value = "";
        template.find(".money").value = "";
        template.find(".goaltime").value = "";
    }
});