import { HomeController } from './home/home.controller.es6';
import { DiscoverController } from './discover/discover.controller.es6';
import { AreaController } from './area/area.controller.es6';
import { ActivitiesController } from './activities/activities.controller.es6';
import { GalleryModalController } from './activities/gallery-modal.controller.es6';
import { WeddingController } from './wedding/wedding.controller.es6';
import { ContactController } from './contact-us/contact.controller.es6';
import { GalleryService } from './_core/services/gallery-lookup.service.es6';

let app = angular.module('marriageApp', ['firebase', 'ui.router','ui.bootstrap', 'ngMessages', 'ngAnimate'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		  $urlRouterProvider.otherwise("/");
		  //
		  // Now set up the states
		  $stateProvider
		    .state('home', {
				url: '/',
				views: {
					'': {
						templateUrl: 'app/home/home.tmpl.html',
						controller: 'HomeController',
						controllerAs: 'homeCtrl'
					}
				}
			})
			.state('discover', {
				url: '/discover-lake-como',
				views: {
					'': {
						templateUrl: 'app/discover/discover.tmpl.html',
						controller: 'DiscoverController',
						controllerAs: 'discoverCtrl'
					}
				}
			})
			.state('activities', {
				url: '/activities',
				views: {
					'': {
						templateUrl: 'app/activities/activities.tmpl.html',
						controller: 'ActivitiesController',
						controllerAs: 'activitiesCtrl'
					}
				}
			})
			.state('area', {
				url: '/reach-the-area',
				views: {
					'': {
						templateUrl: 'app/area/area.tmpl.html',
						controller: 'AreaController',
						controllerAs: 'areaCtrl'
					}
				}
			})
			.state('wedding', {
				url: '/wedding-day',
				views: {
					'': {
						templateUrl: 'app/wedding/wedding.tmpl.html',
						controller: 'WeddingController',
						controllerAs: 'weddingCtrl'
					}
				}
			})
			.state('contact', {
				url: '/contact-us',
				views: {
					'': {
						templateUrl: 'app/contact-us/contact-us.tmpl.html',
						controller: 'ContactController',
						controllerAs: 'contactCtrl'
					}
				}
			}) 
	}])
    .controller('HomeController', HomeController)
    .controller('AreaController', AreaController)
    .controller('DiscoverController', DiscoverController)
    .controller('ActivitiesController', ActivitiesController)
    .controller('GalleryModalController', GalleryModalController)
    .controller('ContactController', ContactController)
    .controller('WeddingController', WeddingController)
    .factory('GalleryService', GalleryService);

// initialize app
angular.bootstrap(document, ['marriageApp']);
