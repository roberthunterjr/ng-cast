angular.module('video-player')

.component('videoPlayer', {
  bindings: {
    video : "<"
  },
  controller : function () {
    this.workFn = function () {
      var url = "https://www.youtube.com/embed/";
      url = url + ((!this.video) ? "OPxeCiy0RdY" : this.video.id.videoId);
      // console.log('url',url);
      return url;
    };
  },
  templateUrl: '/src/templates/videoPlayer.html'
});
