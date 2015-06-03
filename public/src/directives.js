(function() { 
  var app = angular.module('MyDirectives', []);

  app.directive('landingPage', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/landing-page.html'
    };
  });

  app.directive('navBar', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/nav-bar.html'
    };
  });

  app.directive('backImg', function(){
    return function(scope, element, attrs){
        attrs.$observe('backImg', function(value) {
            element.css({
                'background-image': 'url(' + value +')',
                'background-size' : 'cover'
            });
        });
    };
  });

  app.directive('articlesPage', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/articles-page.html'
    };
  });

  app.directive('articlesAll', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/articles-all.html'
    };
  });

  app.directive('articlesShow', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/articles-show.html'
    };
  });

  app.directive('footerBar', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/footer-bar.html'
    };
  });

})();