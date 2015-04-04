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

var enumContent = {
    SEARCH : 'search',
    CREATE : 'create',
    EDIT: 'edit'
};

Template.tmpContent.helpers({
    selectContent: function () {
        if (Meteor.user() == null) {
            return 'tmpContent_Login';
        }

        switch (Session.get('contentMode')) {
            case enumContent.SEARCH:
                return 'tmpSearchVideo';
                break;
            case enumContent.CREATE:
                return 'tmpCreateVideo';
                break;
            case enumContent.EDIT:
                return 'tmpEditVideo';
                break;
            default:
                return 'tmpSearchVideo';
                break;
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
    Session.setDefault('contentMode', enumContent.SEARCH);
});