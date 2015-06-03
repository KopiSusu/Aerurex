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

  app.controller('ArticleController', ['$http', function($http) {
    this.currentarticle = 0;
    this.show = 0;
    this.search = false;

    // .toDataURL() 
    // store images as string in local csv file, then use canvas to redraw it?gb

    var content = this; 
    content.allarticles = [];
    content.articles = [];

    $http.get('src/data.json').success(function(data) {
      content.articles = data;
      content.allarticles = data;
    });

    this.selectArticle = function(setArticle) {
      this.currentarticle = setArticle;
      this.show = setArticle - 1;
      this.hide = true;
    };
 
    this.isSelected = function(checkArticle) {
      return this.currentarticle === checkArticle;
    };

    this.forward = function() {
      if(this.show > this.articles.length - 2) {
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