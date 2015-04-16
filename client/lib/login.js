/**
 * Created by Trevor on 4/15/2015.
 */

Template.templateLogin.events({
    'click .btn-google': function (event) {
        // SUBMIT
        event.preventDefault();

        /*Meteor.loginWithGoogle(
            { requestPermissions: ['email'] },
            function(error) {
                if (error) {
                    console.log(error.reason);
                }
            }
        );*/

        return false;
    },
    'click .btn-primary': function (event) {
        // SUBMIT
        event.preventDefault();

        // TODO: Validate

        var username = $('#username').val();
        var password = $('#password').val();

        Meteor.loginWithPassword(username, password, function (error) {
            if (error) {
                console.log(error);
                $('.invalid-login').show();
            } else {
                Router.go('home');
            }
        });

        return false;
    }
});