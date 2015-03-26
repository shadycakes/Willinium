/**
 * Created by Trevor on 3/17/2015.
 */

/*Template.hello.greeting = function () {
    return "Welcome to hello.";
};

Template.hello.events({
    'click input': function () {
        // template data, if any, is available in 'this'
        if (typeof console !== 'undefined')
            console.log("You pressed the button");
    }
});*/


Template.tmpContent.helpers({
    selectContent: function () {
        console.log(Meteor.user());

        if (Meteor.user() == null) {
            return 'tmpContent_Login';
        }

        return 'tmpContent_User';
   }
});

Template.tmpUser.helpers({
    getUserName: function () {
        return Meteor.user().name;
    }
});

// Meteor Startup - replaced $(document).ready
Meteor.startup(function () {

});