var angular = require('angular');
require('angular-router-browserify')(angular)

var app = angular.module('ArticleApp', ['ngRoute']);

app.constant('VERSION', require('../package.json').version);

app.controller('ArticleController',require('./controllers/ArticleController.js'));
app.directive("article", require('./directives/article.js'));
// require('./services/ArticleFetcher');



// app.config(function ($routeProvider) { 
//   $routeProvider 
//     .when('/', { 
//       controller: 'ArticleController', 
//       templateUrl: '/articles.html' 
//     })
//     .otherwise({ 
//       redirectTo: '/' 
//     }); 
// });


