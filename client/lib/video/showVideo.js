/**
 * Created by Trevor on 4/5/2015.
 */

Template.tmpShowVideo.helpers({
    getVideoInfo: function () {
        // Karel.putBeeper();
        if (typeof Session.get('contentMode') == 'undefined') {
            Session.set('contentMode', enumContent.SEARCH);
            return null;
        }

        return userVideos.findOne({_id: Session.get('showVideoId')});
    }
});

Template.tmpShowVideo.rendered = function () {
    $(this.firstNode).hide().fadeIn(500);
};