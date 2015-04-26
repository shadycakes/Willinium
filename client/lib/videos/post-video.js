/**
 * Created by Trevor on 4/26/2015.
 */

function isValidURL(str) {
    var pattern = new RegExp('^(https?:\/\/)?'+ // protocol
    '((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|'+ // domain name
    '((\d{1,3}\.){3}\d{1,3}))'+ // OR ip (v4) address
    '(\:\d+)?(\/[-a-z\d%_.~+]*)*'+ // port and path
    '(\?[;&a-z\d%_.~+=-]*)?'+ // query string
    '(\#[-a-z\d_]*)?$','i'); // fragment locater
    if(!pattern.test(str)) {
        return false;
    } else {
        return true;
    }
}

function getVideoHost(uri) {
    if (uri.indexOf('youtu') >= 0) {
        return 'youtube';
    }

    if (uri.indexOf('vimeo') >= 0) {
        return 'vimeo';
    }

    return false;
}

function getYoutubeVideoId(uri) {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = uri.match(regExp);
    if (match && match[2].length == 11) {
        console.log(match);
        return match[2];
    } else {
        //error
        console.log('Failed to get video id from ' + uri);
        return null;
    }
}

function getVimeoVideoId(uri) {
    //https://vimeo.com/*
    //https://vimeo.com/channels/*/*
    //https://vimeo.com/groups/*/videos/*

    var regExp = /^.*vimeo\.com\/(channels\/.*\/|groups\/.*\/videos\/)([^#\&\?]*).*/;
    var match = uri.match(regExp);
    if (match && match[2].length > 0) {
        console.log(match);
        return match[2];
    } else {
        //error
        console.log('Failed to get video id from ' + uri);
        return null;
    }
}

Template.templatePostVideo.onRendered(function () {
    // Register event handler to monitor the video link input field
    $('input[name="videoLink"]').on('input paste', function() {
        // Hide the info form items until we verify the link
        $('.video-link-expand').hide();

        // Validate the URL
        if (!isValidURL($(this).val())) {
            return false;
        }

        switch(getVideoHost($(this).val())) {
            case 'youtube':
                console.log(getYoutubeVideoId($(this).val()));
                break;
            case 'vimeo':
                console.log(getVimeoVideoId($(this).val()));
                break;
            default:
                // Error
                console.log('Fail');
                return false;
        }

        $('.video-link-expand').show();

    });
});

Template.templatePostVideo.events({
    'click .btn-primary': function (event) {
        // SUBMIT
        event.preventDefault();

        /*var tmpCreateVideo = $('.create-video-form');

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
            videolink: tmpCreateVideo.find('input[name="videolink"]').val(),
            createdAt: new Date()
        });

        if (!newVideoId) {
            // TODO: Inform user there was an issue
            console.log("Error submitting video");
            return false;
        }

        Router.go('watchVideo', {'_id': newVideoId});*/
    }
});