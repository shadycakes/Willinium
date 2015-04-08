Router.configure({
    layoutTemplate: 'template-layout',
    loadingTemplate: 'template-loading',
    notFoundTemplate: 'template-not-found'
});

Router.map(function () {
    this.route('home', {
        path: '/',
        template: 'templateHome',
        onBeforeAction: function () {
            // TODO: Implement https://atmospherejs.com/manuelschoebel/ms-seo
            return document.title = "Diane Edulizer - Education for the Future";
        }
    });
    this.route('searchVideo', {
        path: '/video/search/:searchterms?',
        template: 'templateSearchVideo',
        data: {
            listVideos: function () {
                return userVideos.find({}, {sort: {createdAt: -1}});
            }
        },
        onBeforeAction: function () {
            // TODO: Implement https://atmospherejs.com/manuelschoebel/ms-seo
            document.title = "Diane Edulizer - Searching videos";
        }
    });
    this.route('postVideo', {
        path: '/video/post',
        template: 'templatePostVideo',
        onBeforeAction: function () {
            // TODO: Implement https://atmospherejs.com/manuelschoebel/ms-seo
            document.title = "Diane Edulizer - Post a video";
            this.next();
        }
    });
    this.route('editVideo', {
        path: '/video/edit/:_id',
        template: 'templateEditVideo',
        data: function () {
            return userVideos.findOne({_id: this.params._id});
        },
        onBeforeAction: function () {
            // TODO: Implement https://atmospherejs.com/manuelschoebel/ms-seo
            var videoTitle = this.data().title;
            document.title = "Diane Edulizer - Editing '" + videoTitle + "'";
            this.next();
        }
    });
    this.route('watchVideo', {
        path: '/video/watch/:_id',
        template: 'templateWatchVideo',
        data: function () {
            return userVideos.findOne({_id: this.params._id});
        },
        onBeforeAction: function () {
            // TODO: Implement https://atmospherejs.com/manuelschoebel/ms-seo
            var videoTitle = this.data().title;
            document.title = "Diane Edulizer - " + videoTitle;
            this.next();
        }
    });
});
