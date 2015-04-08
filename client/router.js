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
    this.route('home', {
        path: '/',
        template: 'templateHome'
    });
    this.route('searchVideo', {
        path: '/video/search/:searchterms?',
        template: 'templateSearchVideo',
        data: {
            listVideos: function () {
                return userVideos.find({}, {sort: {createdAt: -1}});
            }
        }
    });
    this.route('postVideo', {
        path: '/video/post',
        template: 'templatePostVideo'
    });
    this.route('editVideo', {
        path: '/video/edit/:_id',
        template: 'templateEditVideo',
        data: function () {
            return userVideos.findOne({_id: this.params._id});
        }
    });
    this.route('watchVideo', {
        path: '/video/watch/:_id',
        template: 'templateWatchVideo',
        data: function () {
            return userVideos.findOne({_id: this.params._id});
        }
    });
});
