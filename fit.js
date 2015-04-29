// FIT.JS is the MAIN FILE where all routing occurs
// ROUTING

Router.route('/', function () {
  this.render('homepage');
});

// DB
Goals = new Mongo.Collection("goals");
UserProfiles = new Mongo.Collection("userProfiles");

// if (Meteor.isClient) {
//   Template.body.helpers({
//     goals: function () {
//       return Goals.find({}, {sort: {createdAt: -1}});
//     }
//   });

//   // Template.body.events({
//   //   "submit .new-goal": function (event) {
//   //     // This function is called when the new goal form is submitted

//   //     console.log(event.target);
//   //     // var objective = event.target.objective.value;
//   //     // var money = event.target.money.value;
//   //     console.log(text);
//   //     Goals.insert({
//   //       // objective: objective,
//   //       // goaltime: goaltime,
//   //       // money: money,
//   //       // text: text,
//   //       createdAt: new Date() // current time
//   //     });

//   //     // Clear form
//   //     event.target.text.value = "";
//   //     // event.target.objective.value = "";

//   //     // Prevent default form submit
//   //     return false;
//   //   }
//   // });
// }

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
