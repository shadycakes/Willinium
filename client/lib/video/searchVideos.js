/**
 * Created by Trevor on 4/5/2015.
 */

Template.tmpSearchVideo.helpers({
    getUserVideos: function () {
        return userVideos.find({}, {sort: {createdAt: -1}});
    }
});

Template.tmpSearchVideo.rendered = function () {
    $(this.firstNode).hide().fadeIn(500);
};