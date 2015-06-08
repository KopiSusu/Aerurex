(function() {
  var app = angular.module('MysiteApp', ['ngRoute', 'MyDirectives', 'ngAnimate']);

  app.controller('MainController', function() {
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };
    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  })

  app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/comics', {
        templateUrl: 'views/comics-page.html',
        controller: 'ComicController'
      }).
      when('/comics/:Id', {
        templateUrl: 'views/comics-show.html',
        controller: 'ComicController'
      }).
      when('/', {
        templateUrl: 'views/landing-page.html',
        controller: 'ComicController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);

  app.controller('ComicController', ['$http', '$routeParams', function($http, $routeParams) {
    this.currentcomic = 0;
    this.show = 0;
    this.search = false;
    this.show = $routeParams.Id;

    var content = this; 
    content.comics = [];

    $http.get('src/data.json').success(function(data) {
      content.comics = data;
      content.featured = data.slice(0, 3);
    });

    this.selectComic = function(setComic) {
      this.currentcomic = setComic;
      this.show = setComic - 1;
      this.hide = true;
    };
 
    this.isSelected = function(checkComic) {
      return this.currentcomic === checkComic;
    };

    this.forward = function() {
      if(this.show > this.comics.length - 2) {
        this.show = 0;
      } else {
        this.show++;
      }
    };

    this.toggle = function() {
      if (this.search === false) {
        this.search = true;
      } else {
        this.search = false;
      }
    };
 
  } ]);

  app.controller('ScrollController', ['$scope', '$location', '$anchorScroll',
  function ($scope, $location, $anchorScroll) {
    $scope.gotoPortfolio = function() {
      var old = $location.hash();
      page = 2;
      setTimeout(function(){
        $location.hash('portfolio');
        $anchorScroll();
        $location.hash(old);
      }, 50);
    };
    $scope.gotoAbout = function() {
      var old = $location.hash();
      page = 1;
      setTimeout(function(){
        $location.hash('about');
        $anchorScroll();
        $location.hash(old);
      }, 50);
    };
    $scope.gotoSkills = function() {
      var old = $location.hash();
      $location.hash('skills');
      $anchorScroll();
      $location.hash(old);
    };
  }]);

})();