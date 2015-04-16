/**
 * Created by Trevor on 4/15/2015.
 */

Template.templateLogin.events({
    'click .btn-google': function (event) {
        // SUBMIT
        event.preventDefault();

        Meteor.loginWithGoogle(
            { requestPermissions: ['email'] },
            function(error) {
                if (error) {
                    console.log(error.reason);
                }
            }
        );
    },
    'click .btn-primary': function (event) {
        // SUBMIT
        event.preventDefault();

        // TODO: Validate
    }
});