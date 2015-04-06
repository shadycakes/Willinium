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

       if (!tmpCreateVideo) {
           console.log(tmpCreateVideo);
           return false;
       }

       // TODO: Validation
       var validate = true;

       if (!validate) {
           // TODO: Inform user of mistakes
           return false;
       }

       var newUserVideo = {
           creator: Meteor.user().id,
           title: tmpCreateVideo.find('input[name="title"]').val(),
           logline: tmpCreateVideo.find('input[name="logline"]').val(),
           synopsis: tmpCreateVideo.find('input[name="synopsis"]').val(),
           vimeolink: tmpCreateVideo.find('input[name="vimeolink"]').val()
       };

       console.log(newUserVideo);

       /*userVideos.insert({

       });*/
   }
});