angular.module('video-player')

.component('search', {
  bindings : {
    query : "="
  },
  controller : function () {
    // this.query = 'Hello World';
  },
  templateUrl : 'src/templates/search.html'
});
