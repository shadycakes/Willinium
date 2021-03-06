Router.configure({
    layoutTemplate: 'templateLayout',
    loadingTemplate: 'templateLoading',
    notFoundTemplate: 'templateNotFound'
});

// TODO: Implement https://atmospherejs.com/manuelschoebel/ms-seo

AdminController = RouteController.extend({
    onBeforeAction: function () {
        // TODO: Implement admin functionality
        this.next();
    }
});

ContentCreatorController = RouteController.extend({
    onBeforeAction: function () {
        // TODO: Implement
        this.next();
    }
});

Router.map(function () {
    this.route('Home', {
        path: '/',
        template: 'templateHome'
    });
    this.route('About Us', {
        path: '/about',
        template: 'templateAboutUs'
    });
    this.route('Login', {
        path: '/login',
        template: 'templateLogin'
    });
    this.route('Search Videos', {
        path: '/video/search/:searchterms?',
        template: 'templateSearchVideo',
        data: {
            listVideos: function () {
                return userVideos.find({}, {sort: {createdAt: -1}});
            }
        }
    });
    this.route('Submit Video', {
        path: '/video/post',
        template: 'templatePostVideo'
    });
    this.route('Edit Video', {
        path: '/video/edit/:_id',
        template: 'templateEditVideo',
        data: function () {
            return userVideos.findOne({_id: this.params._id});
        }
    });
    this.route('Watch Video', {
        path: '/video/watch/:_id',
        template: 'templateWatchVideo',
        data: function () {
            return userVideos.findOne({_id: this.params._id});
        }
    });
});

////////// HOOKS //////////

var beforeHooks = {
    isLoggedIn: function(pause) {
        if (!(Meteor.loggingIn() || Meteor.user())) {
            //Notify.setError(__('Please login.'));
            this.render('templateLogin');
            pause();
        }

        this.next();
    },
    scrollToTop: function() {
        $('body,html').scrollTop(0);

        this.next();
    }
};

var afterHooks = {
    setTitle: function() {
        document.title = 'DOCUcation - ' + this.route.getName();
    }
}

// (Global) Before hooks for any route
//Router.onBeforeAction(beforeHooks.isLoggedIn);
Router.onBeforeAction(beforeHooks.scrollToTop);

Router.onAfterAction(afterHooks.setTitle);

// Before hooks for specific routes
// Must be equal to the route names of the Iron Router route map
Router.before(beforeHooks.isLoggedIn, {only: ['searchVideo', 'postVideo', 'editVideo', 'watchVideo']});