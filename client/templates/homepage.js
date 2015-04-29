if (Meteor.isClient) {
  Meteor.subscribe("goals");

  Template.homepage.helpers({
    goals: function () {
      return Goals.find({});
    },
    
    profile: function() {
      return Meteor.user().profile;
    }
  });

  

  Template.register.events({
    'submit form': function(event, template){
      event.preventDefault();
      var emailVar = template.find('#register-email').value;
      var passwordVar = template.find('#register-password').value;
      var nameVar = template.find('#register-name').value;

      Accounts.createUser({
        email: emailVar,
        password: passwordVar,
        profile:{
          name:nameVar
        }
      });
      
    }

  });

  Template.signin.events({
    'submit form': function(event, template){
      event.preventDefault();
      var emailVar = template.find('#login-email').value;
      var passwordVar = template.find('#login-password').value;
      console.log("Form submitted.");
      Meteor.loginWithPassword(emailVar, passwordVar);
    },

    'click #signup': function(event){
      event.preventDefault();
      
      // RE-RENDERS TEMPLATE  
      replace = $('#welcome');
      replace.children().remove();
      UI.render(Template.register,replace[0]);
    
    }

  });

  Template.register.events({
    'click #signin': function(event){
      event.preventDefault();
      
      // RE-RENDERS TEMPLATE  
      replace = $('#welcome');
      replace.children().remove();
      UI.render(Template.signin,replace[0]);
    
    }
  });

  Template.homepage.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
    }
  });
}
