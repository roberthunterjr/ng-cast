angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    current: '='
  },
  controller : function () {
    // this.videos = videos;
    this.onClick = function (newCurrent) {
      console.log("Our new current is",newCurrent);
      this.current = newCurrent;
    };
  },
  //property: window.exampleVideoData
  //templateUrl : 'src/templates/videoList.html'
  templateUrl: 'src/templates/videoList.html'
});

// videoList  controller will iterate through each video in videos
//$scope will update videoListEntry sub properties based on video
// in videoListEntry, bind div to videolist controller
// replace areas in videoListEntry with {{}} data

//ng-repeat= "video in videos track by $index"
