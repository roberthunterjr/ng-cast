angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<'
  },
  controller : function () {
    // this.videos = videos;
    this.onClick = function () {
      console.log("Clicked");
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
