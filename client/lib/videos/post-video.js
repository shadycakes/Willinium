/**
 * Created by Trevor on 4/26/2015.
 */

function isValidURL(str) {
    /*var pattern = new RegExp('^(http[s]?:\/\/)?'+ // protocol
    '((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|'+ // domain name
    '((\d{1,3}\.){3}\d{1,3}))'+ // OR ip (v4) address
    '(\:\d+)?(\/[-a-z\d%_.~+]*)*'+ // port and path
    '(\?[;&a-z\d%_.~+=-]*)?'+ // query string
    '(\#[-a-z\d_]*)?$','i'); // fragment locater
    if(!pattern.test(str)) {
        return false;
    } else {
        return true;
    }*/
    return true;
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

function getYoutubeInfo(video_id) {
    //https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=YOUR_API_KEY&part=snippet,contentDetails
    /*var jqxhr = $.get( "example.php", function() {
        alert( "success" );
    })
    .done(function() {
        alert( "second success" );
    })
    .fail(function() {
        alert( "error" );
    })
    .always(function() {
        alert( "finished" );
    });*/
    var apiKey = 'AIzaSyDPqU1HnuUowHEb0FMpAjI4O3T2nt6dCvI';
    var url = 'https://www.googleapis.com/youtube/v3/videos?id=' + video_id + '&key=' + apiKey + '&part=snippet,contentDetails';

    var jqxhr = $.get(url, function(data) {
        console.log(data);
        try {
            $('input[name="videoTitle"]').val(data.videos[0].snippet.title);
            $('textarea[name="videoSynopsis"]').val(data.videos[0].snippet.description);
        } catch (ex) {
            console.log(ex);
        }
    })
        .done(function (data) {
            $('.video-link-expand').show();
        })
        .fail(function (data) {

        })
        .always(function (data) {

        });
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

        var video_id = '';

        switch(getVideoHost($(this).val())) {
            case 'youtube':
                video_id = getYoutubeVideoId($(this).val());
                break;
            case 'vimeo':
                video_id = getVimeoVideoId($(this).val());
                break;
            default:
                // Error
                console.log('Fail');
                return false;
        }

        /*if (video_id && video_id.length > 0) {
            $('.video-link-expand').show();
        }*/
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