/**
 * Created by Trevor on 4/7/2015.
 */

Template.templateVideoSmall.onRendered(function () {
    var thumb = this.$('.imgVimeoThumbnail');
    var uri = this.data.vimeolink;
    var video_id = uri.substr(uri.lastIndexOf('/') + 1);

    $.ajax({
        type:'GET',
        url: 'http://vimeo.com/api/v2/video/' + video_id + '.json',
        jsonp: 'callback',
        dataType: 'jsonp',
        success: function(data){
            var thumbnail_src = data[0].thumbnail_large;
            thumb.attr('src', thumbnail_src);
        }
    });
});

Template.templateWatchVideo.onRendered(function () {
    //$(this.firstNode).hide().fadeIn(500);
    //$(this.firstNode).fitVids();
    $('.video-player').on('load', function () {
        $(this).show();
        $('.video-placeholder').hide();
    })
});