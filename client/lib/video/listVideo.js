/**
 * Created by Trevor on 4/5/2015.
 */

Template.tmpListVideo.onRendered(function () {
    console.log(this);
    var thumb = this.$('.imgVimeoThumbnail');
    console.log(thumb);
    console.log(thumb.parent());
    var uri = this.data.vimeolink;
    console.log(uri);
    var video_id = uri.substr(uri.lastIndexOf('/') + 1);
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

Template.tmpListVideo.helpers({
    isOwner: function () {
        return this.owner == Meteor.userId();
    }
});

Template.tmpListVideo.rendered = function () {
    $(this.firstNode).hide().fadeIn(500);
};

Template.tmpListVideo.events({
    'click .showVideo': function (e) {
        Session.set('showVideoId', this._id);
        Session.set('contentMode', enumContent.SHOW);
    },
    'click .editVideo': function (e) {
        Session.set('editVideoId', this._id);
        Session.set('contentMode', enumContent.EDIT);
    }
});