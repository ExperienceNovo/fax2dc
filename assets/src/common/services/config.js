angular.module( 'services.config', ['lodash'])

.service('config',['lodash', function(lodash) {
	return {
		siteName: 'Fax2DC',
		siteUrl: '/',
		apiUrl: '/api',
		currentUser: false
	};
}]);