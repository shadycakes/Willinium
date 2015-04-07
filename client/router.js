Router.configure({
    layoutTemplate: 'template-layout',
    loadingTemplate: 'template-loading',
    notFoundTemplate: 'template-not-found',
    load: function () {
        $('html, body').animate({ scrollTop: 0 }, 400)
        $('.main-content').hide().fadeIn(1000)
    }
});

Router.map(function () {
    this.route('home', {
        path: '/',
        template: 'home',
        onBeforeAction: function () {
            // TODO: Implement https://atmospherejs.com/manuelschoebel/ms-seo
            return document.title = "Diane Edulizer - Education for the Future";
        }
    });
    this.route('searchVideo', {
        path: '/video/search/:searchterms?',
        template: 'template-search-video',
        onBeforeAction: function () {
            // TODO: Implement https://atmospherejs.com/manuelschoebel/ms-seo
            return document.title = "Diane Edulizer - Searching videos";
        }
    });
    this.route('postVideo', {
        path: '/video/post',
        template: 'template-post-video',
        onBeforeAction: function () {
            // TODO: Implement https://atmospherejs.com/manuelschoebel/ms-seo
            return document.title = "Diane Edulizer - Post a video";
        }
    });
    this.route('editVideo', {
        path: '/video/edit/:_id',
        template: 'template-edit-video',
        data: function () {
            return userVideos.findOne({_id: this.params._id});
        },
        onBeforeAction: function () {
            // TODO: Implement https://atmospherejs.com/manuelschoebel/ms-seo
            var videoTitle = this.data().title;
            return document.title = "Diane Edulizer - Editing '" + videoTitle + "'";
        }
    });
    this.route('watchVideo', {
        path: '/video/watch/:_id',
        template: 'template-watch-video',
        data: function () {
            return userVideos.findOne({_id: this.params._id});
        },
        onBeforeAction: function () {
            // TODO: Implement https://atmospherejs.com/manuelschoebel/ms-seo
            var videoTitle = this.data().title;
            return document.title = "Diane Edulizer - " + videoTitle;
        }
    });
});
