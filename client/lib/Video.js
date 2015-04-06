/**
 * Created by Trevor on 3/23/2015.
 */

Template.tmpCreateVideo.helpers({

});

Template.tmpCreateVideo.events({
   'click .btn-primary': function () {
       // SUBMIT
       console.log('tmpCreateVideo - Submit');

       var tmpCreateVideo = $('.tmpCreateVideo');
       console.log(tmpCreateVideo);

       if (!tmpCreateVideo) {
           return false;
       }

       // TODO: Validation
       var validate = true;

       if (!validate) {
           // TODO: Inform user of mistakes
           return false;
       }

       console.log('creator: ' + Meteor.user().username);
       console.log('title: ' + tmpCreateVideo.find('input[name="title"]').val());
       console.log('logline: ' + tmpCreateVideo.find('input[name="logline"]').val());
       console.log('synopsis: ' + tmpCreateVideo.find('textarea[name="synopsis"]').val());
       console.log('vimeolink: ' + tmpCreateVideo.find('input[name="vimeolink"]').val());

       var newUserVideo = {
           owner: Meteor.userId(),
           creator: Meteor.user().username,
           title: tmpCreateVideo.find('input[name="title"]').val(),
           logline: tmpCreateVideo.find('input[name="logline"]').val(),
           synopsis: tmpCreateVideo.find('textarea[name="synopsis"]').val(),
           vimeolink: tmpCreateVideo.find('input[name="vimeolink"]').val()
       };

       console.log(newUserVideo);

       userVideos.insert({
           owner: Meteor.userId(),
           creator: Meteor.user().username,
           title: tmpCreateVideo.find('input[name="title"]').val(),
           logline: tmpCreateVideo.find('input[name="logline"]').val(),
           synopsis: tmpCreateVideo.find('textarea[name="synopsis"]').val(),
           vimeolink: tmpCreateVideo.find('input[name="vimeolink"]').val()
       });
   }
});

Template.tmpSearchVideo.helpers({
    getUserVideos: function () {
        return userVideos.find({});
    }
});

Template.tmpListVideo.onRendered(function () {
   console.log($(this));
    var thumb = $(this).find('.imgVimeoThumbnail');
    console.log(thumb);
    console.log(thumb.parent());
    var uri = $(this).data.vimeolink;
    console.log(uri);
    var video_id = uri.substr(uri.lastIndexOf('/'));
    console.log(video_id);

    $.ajax({
        type:'GET',
        url: 'http://vimeo.com/api/v2/video/' + video_id + '.json',
        jsonp: 'callback',
        dataType: 'jsonp',
        success: function(data){
            var thumbnail_src = data[0].thumbnail_large;
            console.log(thumbnail_src);
            thumb.attr('src', thumbnail_src);
        }
    });
});

Meteor.startup(function () {
    $('.imgVimeoThumbnail').each(function (i, el) {
        var thumb = $(this);
        console.log(thumb);
        console.log(thumb.parent());
        var uri = thumb.parent().find('input[name="vimeolink"]').val();
        console.log(uri);
        var video_id = uri.substr(uri.lastIndexOf('/'));
        console.log(video_id);

        $.ajax({
            type:'GET',
            url: 'http://vimeo.com/api/v2/video/' + video_id + '.json',
            jsonp: 'callback',
            dataType: 'jsonp',
            success: function(data){
                var thumbnail_src = data[0].thumbnail_large;
                console.log(thumbnail_src);
                thumb.attr('src', thumbnail_src);
            }
        });
    });
});

/*
$('.imgVimeoThumbnail').load(function () {
    var uri = $(this).parent().find('input[name="vimeolink"]').val();
    var video_id = uri.substr(uri.lastIndexOf('/'));

    console.log(uri);
    console.log(video_id);

    $.ajax({
        type:'GET',
        url: 'http://vimeo.com/api/v2/video/' + video_id + '.json',
        jsonp: 'callback',
        dataType: 'jsonp',
        success: function(data){
            console.log($(this));
            var thumbnail_src = data[0].thumbnail_large;
            console.log(thumbnail_src);
            $(this).attr('src', thumbnail_src);
        }
    });
});*/
