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
       console.log('synopsis: ' + tmpCreateVideo.find('textarea[name="synopsis"]').text());
       console.log('vimeolink: ' + tmpCreateVideo.find('input[name="vimeolink"]').val());

       var newUserVideo = {
           owner: Meteor.userId(),
           creator: Meteor.user().username,
           title: tmpCreateVideo.find('input[name="title"]').val(),
           logline: tmpCreateVideo.find('input[name="logline"]').val(),
           synopsis: tmpCreateVideo.find('input[name="synopsis"]').text(),
           vimeolink: tmpCreateVideo.find('input[name="vimeolink"]').val()
       };

       console.log(newUserVideo);

       /*userVideos.insert({

       });*/
   }
});