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

  app.directive('comicsPage', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/comics-page.html'
    };
  });

  app.directive('comicsAll', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/comics-all.html'
    };
  });

  app.directive('comicsShow', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/comics-show.html'
    };
  });

  app.directive('footerBar', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/footer-bar.html'
    };
  });

})();