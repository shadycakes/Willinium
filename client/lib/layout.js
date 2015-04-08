/**
 * Created by Trevor on 4/7/2015.
 */

Template.templateSearchVideo.rendered = function () {
    console.log(this);
};

Template.templateSearchVideo.helpers({
    listVideos: function () {
        try {
            console.log(this.data);
            console.log(this.currentData());
            console.log(Template.currentData());
            return this.data.collection;
        }
        catch(ex) {
            console.log(ex);
        }
    }
});