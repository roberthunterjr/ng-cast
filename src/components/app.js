angular.module('video-player')
.service('youTube', function ($scope, testLog) {

})
.component('app', {
  bindings: {
    name: '@'
  },
  controller : function () {
    this.videos = window.exampleVideoData;
    this.current = window.exampleVideoData[0];
    this.query = '';
    this.testLog = function (response) {
      console.log(response);
    };
  },
  templateUrl : 'src/templates/app.html'
});
