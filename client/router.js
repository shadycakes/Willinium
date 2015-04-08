Router.configure({
    layoutTemplate: 'template-layout',
    loadingTemplate: 'template-loading',
    notFoundTemplate: 'template-not-found',
    load: function () {
        $('html, body').animate({ scrollTop: 0 }, 400);
        $('.main-content').hide().fadeIn(1000);
    }
});

Router.map(function () {
    this.route('home', {
        path: '/',
        template: 'templateHome',
        onBeforeAction: function () {
            // TODO: Implement https://atmospherejs.com/manuelschoebel/ms-seo
            document.title = "Diane Edulizer - Education for the Future";
            this.next();
        }
    });
    this.route('searchVideo', {
        path: '/video/search/:searchterms?',
        template: 'templateSearchVideo',
        data: function () {
            return userVideos.find({}, {sort: {createdAt: -1}});
        },
        onBeforeAction: function () {
            // TODO: Implement https://atmospherejs.com/manuelschoebel/ms-seo
            document.title = "Diane Edulizer - Searching videos";
            console.log(this.data());
            this.next();
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
