angular.module('video-player')

.component('app', {
  bindings: {
    name: '@'
  },
  controller : function () {
    this.videos = window.exampleVideoData;
    this.current = window.exampleVideoData[0];
  },
  templateUrl : 'src/templates/app.html'
});
