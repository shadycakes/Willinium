/**
 * Created by Trevor on 3/17/2015.
 */
if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}

Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
});