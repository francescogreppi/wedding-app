export class ActivitiesController {
	constructor($state, $uibModal) {
		this.$state = $state;
		this.$uibModal = $uibModal;
	}

	showGalleryModal(gallery) {
		let gallerySel = gallery;
		let modalInstance = this.$uibModal.open({
			templateUrl: 'app/activities/gallery-modal.tmpl.html',
			controller: 'GalleryModalController',
			controllerAs: 'galleryModalCtrl',
			resolve: {
                gallery: ['$q', ($q) => {
                    return $q.when(gallerySel);
                }]
            }
		});
	}
}

ActivitiesController.$inject = ['$state', '$uibModal'];