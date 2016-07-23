angular.module('App', ['ui.router'])
  .config(function($logProvider) {
    $logProvider.debugEnabled(true);
  })
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('');
    $stateProvider
      .state('welcome',
        {
          url: '',
          templateUrl: 'partials/welcome.html'
        })
      .state('blog',
        {
          url: '/blog',
          templateUrl: 'partials/blog.html'
        })
      .state('contact',
        {
          url: '/contact',
          templateUrl: 'partials/contact_info.html'
        })
      .state('projects',
        {
          url: '/projects',
          template: '<div ui-view></div>'
        })
      .state('projects.list',
        {
          url: '/list',
          templateUrl: 'partials/projects/projects.html'
        })
      .state('projects.fantasy_coop_game',
        {
          url: '/fantasy_coop_game',
          templateUrl: 'partials/projects/fantasy_coop_game.html'
        })
      .state('projects.mutespeak',
        {
          url: '/mutespeak',
          templateUrl: 'partials/projects/mutespeak.html'
        })
      .state('projects.website_info',
        {
          url: '/website_info',
          templateUrl: 'partials/projects/website_info.html'
        })
      .state('projects.offclass_finder',
        {
          url: '/offclass_finder',
          templateUrl: 'partials/projects/offclass_finder.html'
        })
      .state('projects.ufc',
        {
          url: '/ufc',
          templateUrl: 'partials/projects/ufc.html'
        })
      .state('projects.swf',
        {
          url: '/swf',
          template: '<p>An Android application for a semester-long course</p>'
        })
      .state('projects.travelling_saleshot',
        {
          url: '/travelling_saleshot',
          template: '<p>Programming a robot using an FPGA and assembly.</p>'
        })
      .state('projects.weird_nums',
        {
          url: '/weird_nums',
          template: '<p>Finding pairs of numbers which satisfy an interesting property</p>'
        })
			.state('hobbies',
			  {
				  url: '/hobbies',
					templateUrl: 'partials/hobbies.html'
				});


  })
.run(function($rootScope, $log) {
    $rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams) {
      $log.error(event, unfoundState);
    });
    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
      $log.error(event, toState.name, error);
    });
  });
  

$(document).ready(function() {
  console.log("document loaded");
});
