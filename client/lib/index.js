/**
 * Created by Trevor on 4/7/2015.
 */

Template.templatePostVideo.events({
    'click .btn-primary': function (event) {
        // SUBMIT
        event.preventDefault();

        var tmpCreateVideo = $('.create-video-form');

        if (!tmpCreateVideo) {
            return false;
        }

        // TODO: Validation
        var validate = true;

        if (!validate) {
            // TODO: Inform user of mistakes
            return false;
        }

        var newVideoId = userVideos.insert({
            owner: Meteor.userId(),
            creator: Meteor.user().username,
            title: tmpCreateVideo.find('input[name="title"]').val(),
            logline: tmpCreateVideo.find('input[name="logline"]').val(),
            synopsis: tmpCreateVideo.find('textarea[name="synopsis"]').val(),
            vimeolink: tmpCreateVideo.find('input[name="vimeolink"]').val(),
            createdAt: new Date()
        });

        if (!newVideoId) {
            // TODO: Inform user there was an issue
            console.log("Error submitting video");
            return false;
        }

        Router.go('watchVideo', {'_id': newVideoId});
    }
});

Template.templateVideoSmall.onRendered(function () {
    var thumb = this.$('.imgVimeoThumbnail');
    var uri = this.data.vimeolink;
    var video_id = uri.substr(uri.lastIndexOf('/') + 1);

    $.ajax({
        type:'GET',
        url: 'http://vimeo.com/api/v2/video/' + video_id + '.json',
        jsonp: 'callback',
        dataType: 'jsonp',
        success: function(data){
            var thumbnail_src = data[0].thumbnail_large;
            thumb.attr('src', thumbnail_src);
        }
    });
});

Template.templateWatchVideo.onRendered(function () {
    $(this.firstNode).hide().fadeIn(500);
    $(this.firstNode).fitVids();
});