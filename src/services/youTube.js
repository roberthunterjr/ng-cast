angular.module('video-player')
.service('youTube', function(params, callback){
  $http({
    method : 'GET',
    url : 'https://www.googleapis.com/youtube/v3/search',
    data : {
      q : 'query',
      maxResults : 5,
      part : 'snippet',
      key : window.YOUTUBE_API_KEY,
      embeddable : true,
      type : 'video'
    },
  }).then(function successCallback(response){
    /// do stuff
    callback(reponse);
  },function errorCallback() {
    //do error stuff
  });
});
// https://www.googleapis.com/youtube/v3/search
