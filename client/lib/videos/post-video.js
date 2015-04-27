/**
 * Created by Trevor on 4/26/2015.
 */

function clearForm() {
    $('.video-link-expand input').val('');
    $('.video-link-expand').hide();
    return true;
}

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
        return match[2];
    } else {
        //error
        console.log('Failed to get video id from ' + uri);
        return null;
    }
}

function getYoutubeInfo(video_id) {
    var apiKey = 'AIzaSyDPqU1HnuUowHEb0FMpAjI4O3T2nt6dCvI';
    var url = 'https://www.googleapis.com/youtube/v3/videos?id=' + video_id + '&key=' + apiKey + '&part=snippet,contentDetails';

    var jqxhr = $.get(url, function(data) {
        try {
            $('input[name="videoTitle"]').val(data.items[0].snippet.title);
            $('textarea[name="videoSynopsis"]').val(data.items[0].snippet.description);

            //PT1H30M1S
            var regExp = /^PT(\d+)?[H]?(\d+)?[M]?(\d+)?[S]?$/;
            var match = data.items[0].contentDetails.duration;

            console.log(match);

            var duration = match[1] ? match[1] + ':' : '';
            duration += match[2] ? match[2] + ':' : '';
            duration += match[3] ? match[3] : '00';

            $('input[name="videoLength"]').val(duration);

            Session.set('videoData', data);

            console.log(Session.get('videoData'));
        } catch (ex) {
            console.log(ex);
        }
    })
        .done(function (data) {
            $('.video-link-expand').show();
        })
        .fail(function (data) {
            console.log(data);
        })
        .always(function (data) {

        });
}

function getVimeoInfo(video_id) {

}

Template.templatePostVideo.onRendered(function () {
    // Register event handler to monitor the video link input field
    $('input[name="videoLink"]').on('input', function(event) {
        // Hide the info form items until we verify the link
        clearForm();

        // Validate the URL
        if (!isValidURL($(this).val())) {
            return false;
        }

        switch(getVideoHost($(this).val())) {
            case 'youtube':
                var video_id = getYoutubeVideoId($(this).val());

                if (video_id) {
                    getYoutubeInfo(video_id);
                }

                break;
            case 'vimeo':
                var video_id = getVimeoVideoId($(this).val());

                if (video_id) {
                    getVimeoInfo(video_id);
                }
                break;
            default:
                // Error
                return false;
        }
    });
});

Template.templatePostVideo.events({
    'click #videoSubmit': function (event) {
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